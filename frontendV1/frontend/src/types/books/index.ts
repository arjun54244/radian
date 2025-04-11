export interface CategoryBooks {
  id: number;
  author_id: number;
  is_ebook: number;
  stock_status: "in_stock" | "out_of_stock";
  category: string;
  bestseller: number;
  latest_release: number;
  most_purchased: number;
  on_sale: number;
  exam_category: string;
  location: string;
  sku_number: string;
  isbn_number: string;
  sequence_number: number;
  book_url: string;
  title: string;
  base_price: string;
  discounted_price: string;
  short_description: string;
  images: string[];
  image_alt_tag: string;
  description: string;
  pages: number;
  weight: string;
  dimensions: string;
  binding: string;
  author: string;
  meta_title: string;
  meta_description: string;
  canonical_tag: string;
  created_at: string;
  rating: number;
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}


export interface Product {
  id: number;
  author_id: number;
  is_ebook: number;
  stock_status: "in_stock" | "out_of_stock";
  category: string;
  bestseller: number;
  latest_release: number;
  most_purchased: number;
  on_sale: number;
  exam_category: string;
  location: string;
  sku_number: string;
  isbn_number: string;
  sequence_number: number;
  book_url: string;
  title: string;
  base_price: string;
  discounted_price: string;
  short_description: string;
  images: string[];
  image_alt_tag: string;
  description: string;
  pages: number;
  weight: string;
  dimensions: string;
  binding: string;
  author: string;
  meta_title: string;
  meta_description: string;
  canonical_tag: string;
  created_at: string;
  rating: number;
}