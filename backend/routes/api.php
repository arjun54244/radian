<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/books', fn() => \App\Models\Book::all());
Route::get('/books/{book}', fn(\App\Models\Book $book) => $book);
