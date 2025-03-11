<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'is_ebook', 
        'stock_status',
        'category', 
        'bestseller', 
        'latest_release', 
        'most_purchased', 
        'on_sale', 
        'exam_category', 
        'location',
        'sku_number', 
        'isbn_number', 
        'sequence_number', 
        'book_url', 
        'title', 
        'base_price', 
        'discounted_price', 
        'short_description', 
        'images', 
        'image_alt_tag', 
        'description', 
        'pages', 
        'weight', 
        'dimensions', 
        'binding', 
        'author', 
        'meta_title', 
        'meta_description', 
        'canonical_tag'
    ];
    protected $casts = [
        'images' => 'array',
    ];
    public function author()
    {
        return $this->belongsTo(Author::class);
    }
}
