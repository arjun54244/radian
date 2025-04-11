<?php

namespace App\Imports;

use App\Models\Book;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class BooksImport implements ToModel, WithHeadingRow
{
    public function model(array $row)
    {
        return new Book([
            'title' => $row['title'],
            'author_id' => $row['author_id'] ?? null,
            'base_price' => $row['base_price'],
            'discounted_price' => $row['discounted_price'] ?? null,
            'stock_status' => $row['stock_status'],
            'bestseller' => $row['bestseller'] ?? false,
            'latest_release' => $row['latest_release'] ?? false,
            'most_purchased' => $row['most_purchased'] ?? false,
            'on_sale' => $row['on_sale'] ?? false,
            'cuet_exams' => $row['cuet_exams'] ?? false,
            'railway_exams' => $row['railway_exams'] ?? false,
            'defence' => $row['defence'] ?? false,
            'ssc_exams' => $row['ssc_exams'] ?? false,
            'books_for_all_competitions' => $row['books_for_all_competitions'] ?? false,
            'delhi' => $row['delhi'] ?? false,
            'mp' => $row['mp'] ?? false,
            'rajasthan' => $row['rajasthan'] ?? false,
            'bihar' => $row['bihar'] ?? false,
            'haryana' => $row['haryana'] ?? false,
            'up' => $row['up'] ?? false,
        ]);
    }
}
