<?php

use App\Http\Controllers\AuthorController;
use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\WorkOS\Http\Middleware\ValidateSessionWithWorkOS;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware([
    'auth',
    ValidateSessionWithWorkOS::class,
])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/authors', [AuthorController::class, 'index'])->name('authors.index');
Route::get('/books', [BookController::class, 'all'])->name('books.all');
Route::get('/books/{author}', [BookController::class, 'index'])->name('books.index');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
