<?php

namespace App\Http\Controllers;

use App\Models\Author;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function index(Author $author)
    {
        $books = $author->books;
        return response()->json($books);
    }
}
