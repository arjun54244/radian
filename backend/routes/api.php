<?php

use App\Http\Controllers\API\ApiAuthController;
use App\Http\Controllers\API\BookController;
use App\Http\Controllers\API\CartController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Route::get('/books', fn() => \App\Models\);
Route::get('/books', [BookController::class,'index']);
Route::get('/books/{book}', [BookController::class,'show']);

// Route::middleware('auth:sanctum')->group(function () {
    Route::get('/cart', [CartController::class, 'index']);
    Route::post('/cart', [CartController::class, 'addToCart']);
    Route::delete('/cart/{id}', [CartController::class, 'removeFromCart']);
    Route::delete('/cart', [CartController::class, 'clearCart']);
// });

Route::middleware([
    EnsureFrontendRequestsAreStateful::class, // Apply Sanctum middleware
    'throttle:api',
])->group(function () {
    
    Route::post('/login', [ApiAuthController::class, 'login']);
    Route::middleware('auth:sanctum')->get('/user', [ApiAuthController::class, 'user']);
    Route::middleware('auth:sanctum')->post('/logout', [ApiAuthController::class, 'logout']);
});