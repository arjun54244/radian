"use client";

import { useCartStore } from "../../../store/cartStore";

interface Book {
  id: number;
  title: string;
  discounted_price: number;
  images: string[];
}

interface Props {
  book: Book;
}

const AddToCartButton: React.FC<Props> = ({ book }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      id: book.id,
      title: book.title,
      price: book.discounted_price,
      image: book.images[0],
      quantity: 1,
    });
    alert("Book added to cart!");
  };

  return (
    <button onClick={handleAddToCart} className="py-2 px-5 cursor-pointer inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
