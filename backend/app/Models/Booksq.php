<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Booksq extends Model
{ use HasFactory;

    protected $fillable = ['category', 'sequence_number'];

    protected $casts = [
        'sequence_number' => 'array',
    ];
}
