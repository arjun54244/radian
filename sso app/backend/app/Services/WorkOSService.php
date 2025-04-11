<?php

namespace App\Services;

use WorkOS\WorkOS;

class WorkOSService
{
    protected $sso;

    public function __construct()
    {
        WorkOS::setApiKey(config('services.workos.secret'));
        WorkOS::setClientId(config('services.workos.client_id'));

        $this->sso = new \WorkOS\SSO();
    }

    public function getAuthorizationUrl($state, $connectionId)
    {
        return $this->sso->getAuthorizationUrl([
            'redirectUri' => config('services.workos.redirect_uri'),
            'state' => $state,
            'connection' => $connectionId,
        ]);
    }

    public function getProfileAndToken($code)
    {
        return $this->sso->getProfileAndToken($code);
    }
}
