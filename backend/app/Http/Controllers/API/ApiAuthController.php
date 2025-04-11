<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\WorkOS\WorkOS;
use WorkOS\UserManagement;
use App\Models\User;

class ApiAuthController extends Controller
{
    public function login(Request $request)
    {
        WorkOS::configure();

        $user = (new UserManagement)->authenticateWithCode(
            config('services.workos.client_id'),
            $request->query('code'),
        );

        [$user, $accessToken, $refreshToken] = [
            $user->user,
            $user->access_token,
            $user->refresh_token,
        ];

        $existingUser = User::where('workos_id', $user->id)->first();

        if (! $existingUser) {
            $existingUser = User::create([
                'name' => $user->firstName.' '.$user->lastName,
                'email' => $user->email,
                'email_verified_at' => now(),
                'workos_id' => $user->id,
                'avatar' => $user->profilePictureUrl ?? '',
            ]);
        }

        $token = $existingUser->createToken('API Token')->plainTextToken;

        return response()->json([
            'user' => $existingUser,
            'access_token' => $token,
        ], 200);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out'], 200);
    }

    public function user(Request $request)
    {
        return response()->json(['user' => $request->user()], 200);
    }
}
