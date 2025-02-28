<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booksq extends Model
{
    protected $fillable =['category', 'sequence_number'];

    protected $casts = [
        'sequence_number'=> 'array',
    ];
}
