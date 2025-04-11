<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'author_id', 'is_ebook', 'stock_status', 'bestseller', 'latest_release', 'most_purchased', 'on_sale',
        'cuet_exams', 'railway_exams', 'defence', 'ssc_exams', 'books_for_all_competitions', 'jnv_sainik_rms', 'published_at',
        'delhi', 'mp', 'rajasthan', 'bihar', 'haryana', 'up', 'category', 'exam_category', 'location',
        'sku_number', 'isbn_number', 'rating', 'sequence_number', 'slug', 'title', 'base_price',
        'discounted_price', 'short_description', 'images', 'image_alt_tag', 'description', 'pages', 'weight',
        'dimensions', 'binding', 'author', 'meta_title', 'meta_description', 'canonical_tag', 'tags', 'status'
    ];

    protected $casts = [
        'is_ebook' => 'boolean',
        'bestseller' => 'boolean',
        'status' => 'boolean',
        'latest_release' => 'boolean',
        'most_purchased' => 'boolean',
        'on_sale' => 'boolean',
        'cuet_exams' => 'boolean',
        'railway_exams' => 'boolean',
        'defence' => 'boolean',
        'ssc_exams' => 'boolean',
        'books_for_all_competitions' => 'boolean',
        'jnv_sainik_rms' => 'boolean',
        'delhi' => 'boolean',
        'mp' => 'boolean',
        'rajasthan' => 'boolean',
        'bihar' => 'boolean',
        'haryana' => 'boolean',
        'up' => 'boolean',
        'images' => 'array',
        'base_price' => 'decimal:2',
        'discounted_price' => 'decimal:2',
        'weight' => 'decimal:2',
        'tags' => 'array',
    ];

    // Relationships
    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function carts()
    {
        return $this->hasMany(Cart::class);
    }
}
