<?php

namespace Database\Seeders;

use App\Models\Author;
use App\Models\Book;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $authors = [
            [
                'name' => 'J.R.R. Tolkien',
                'bio' => 'The creator of Middle-earth and author of The Lord of the Rings.',
                'books' => [
                    [
                        'title' => 'The Fellowship of the Ring',
                        'base_price' => 499.99,
                        'discounted_price' => 399.99,
                        'stock_status' => 'in_stock',
                        'isbn_number' => '9780261102354',
                        'short_description' => 'First book in The Lord of the Rings series.',
                    ],
                    [
                        'title' => 'The Two Towers',
                        'base_price' => 499.99,
                        'discounted_price' => 399.99,
                        'stock_status' => 'in_stock',
                        'isbn_number' => '9780261102361',
                        'short_description' => 'Second book in The Lord of the Rings series.',
                    ],
                    [
                        'title' => 'The Return of the King',
                        'base_price' => 499.99,
                        'discounted_price' => 399.99,
                        'stock_status' => 'out_of_stock',
                        'isbn_number' => '9780261102378',
                        'short_description' => 'Final book in The Lord of the Rings series.',
                    ],
                ],
            ],
            [
                'name' => 'George R.R. Martin',
                'bio' => 'The author of the epic fantasy series A Song of Ice and Fire.',
                'books' => [
                    [
                        'title' => 'A Game of Thrones',
                        'base_price' => 599.99,
                        'discounted_price' => 499.99,
                        'stock_status' => 'in_stock',
                        'isbn_number' => '9780553103540',
                        'short_description' => 'First book in A Song of Ice and Fire series.',
                    ],
                    [
                        'title' => 'A Clash of Kings',
                        'base_price' => 599.99,
                        'discounted_price' => 499.99,
                        'stock_status' => 'in_stock',
                        'isbn_number' => '9780553108033',
                        'short_description' => 'Second book in A Song of Ice and Fire series.',
                    ],
                    [
                        'title' => 'A Storm of Swords',
                        'base_price' => 599.99,
                        'discounted_price' => 499.99,
                        'stock_status' => 'out_of_stock',
                        'isbn_number' => '9780553106633',
                        'short_description' => 'Third book in A Song of Ice and Fire series.',
                    ],
                ],
            ],
            [
                'name' => 'J.K. Rowling',
                'bio' => 'The creator of the Harry Potter series.',
                'books' => [
                    [
                        'title' => 'Harry Potter and the Philosopher\'s Stone',
                        'base_price' => 399.99,
                        'discounted_price' => 349.99,
                        'stock_status' => 'in_stock',
                        'isbn_number' => '9780747532743',
                        'short_description' => 'First book in the Harry Potter series.',
                    ],
                    [
                        'title' => 'Harry Potter and the Chamber of Secrets',
                        'base_price' => 399.99,
                        'discounted_price' => 349.99,
                        'stock_status' => 'in_stock',
                        'isbn_number' => '9780747538493',
                        'short_description' => 'Second book in the Harry Potter series.',
                    ],
                ],
            ],
        ];

        foreach ($authors as $authorData) {
            $author = Author::create([
                'name' => $authorData['name'],
                'bio' => $authorData['bio'],
            ]);

            foreach ($authorData['books'] as $bookData) {
                $bookData['author_id'] = $author->id; // Link book to author
                Book::create($bookData);
            }
        }
    }
}
