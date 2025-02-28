<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('author_id')->nullable();
            $table->boolean('is_ebook')->default(false);
            $table->enum('stock_status', ['in_stock', 'out_of_stock'])->default('in_stock');
            $table->string('category')->nullable();
            $table->boolean('bestseller')->default(false);
            $table->boolean('latest_release')->default(false);
            $table->boolean('most_purchased')->default(false);
            $table->boolean('on_sale')->default(false);
            $table->string('exam_category')->nullable();
            $table->string('location')->nullable();
            $table->string('sku_number')->nullable();
            $table->string('isbn_number')->nullable();
            $table->integer('sequence_number')->nullable();
            $table->string('book_url')->nullable();
            $table->string('title');
            $table->decimal('base_price', 8, 2);
            $table->decimal('discounted_price', 8, 2)->nullable();
            $table->text('short_description')->nullable();
            $table->string('image')->nullable();
            $table->string('image_alt_tag')->nullable();
            $table->text('description')->nullable();
            $table->integer('pages')->nullable();
            $table->decimal('weight', 8, 2)->nullable();
            $table->string('dimensions')->nullable();
            $table->string('binding')->nullable();
            $table->string('author')->nullable();
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->string('canonical_tag')->nullable();
            $table->timestamps();
            $table->foreign('author_id')->references('id')->on('authors')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
