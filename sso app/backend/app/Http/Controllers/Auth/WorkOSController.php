<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Laravel\WorkOS\WorkOS;
use Illuminate\Support\Facades\Auth;
use WorkOS\UserManagement;
use Illuminate\Support\Str;
use Laravel\WorkOS\User;
use App\Models\User as AppUser;
use Illuminate\Auth\Events\Registered;

class WorkOSController extends Controller
{
    // Redirect to WorkOS authorization URL
    public function redirectToProvider(Request $request)
    {
        WorkOS::configure();

        $state = Str::random(20);

        // Save state in session
        $request->session()->put('state', $state);

        $authorizationUrl = (new UserManagement)->getAuthorizationUrl(
            config('services.workos_sso.redirect_url'),
            ['state' => $state],
            'authkit'
        );

        return redirect($authorizationUrl);
    }

    // Handle WorkOS callback
    public function handleProviderCallback(Request $request)
    {
        WorkOS::configure();

        $this->ensureStateIsValid($request);

        $authResponse = (new UserManagement)->authenticateWithCode(
            config('services.workos.client_id'),
            $request->query('code')
        );

        $user = $authResponse->user;

        $userData = new User(
            id: $user->id,
            firstName: $user->firstName,
            lastName: $user->lastName,
            email: $user->email,
            avatar: $user->profilePictureUrl
        );

        $existingUser = $this->findUsing($userData->id);

        if (! $existingUser) {
            $existingUser = $this->createUsing($userData);
            event(new Registered($existingUser));
        } else {
            $existingUser = $this->updateUsing($existingUser, $userData);
        }

        Auth::guard('web')->login($existingUser);

        $token = $existingUser->createToken('workos_sso')->plainTextToken;

        return redirect(config('app.frontend_url') . '/auth/callback?token=' . $token);
    }

    protected function findUsing(string $id): ?AppUser
    {
        return AppUser::where('workos_id', $id)->first();
    }

    protected function createUsing(User $user): AppUser
    {
        return AppUser::create([
            'name' => $user->firstName . ' ' . $user->lastName,
            'email' => $user->email,
            'email_verified_at' => now(),
            'workos_id' => $user->id,
            'avatar' => $user->avatar ?? '',
        ]);
    }

    protected function updateUsing(AppUser $existingUser, User $user): AppUser
    {
        return tap($existingUser)->update([
            'name' => $user->firstName . ' ' . $user->lastName,
            'avatar' => $user->avatar ?? '',
        ]);
    }

    protected function ensureStateIsValid(Request $request): void
    {
        $state = json_decode($request->query('state'), true)['state'] ?? false;

        if ($state !== $request->session()->get('state')) {
            abort(403, 'Invalid state parameter');
        }

        $request->session()->forget('state');
    }
}
