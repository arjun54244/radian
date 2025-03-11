<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    public function all (){
        return response()->json([
            'status' => 'success',
            'books' => Book::all()
        ]);
    }
    public function index(Author $author)
    {
        $books = $author->books;
        return response()->json($books);
    }
}
