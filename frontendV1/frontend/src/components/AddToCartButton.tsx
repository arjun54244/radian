"use client";
import toast from "react-hot-toast";
import { useCartStore } from "../../store/cartStore";
import { Product } from "@/types/books";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = async () => {
    if (!product || !product.id) {
      toast.error("Invalid product data!");
      return;
    }

    const cartItem: CartItem = {
      id: product.id,
      title: product.title,
      price: parseFloat(product.discounted_price),
      quantity: 1,
      image: product.images[0] || "",
    };

    await addToCart(cartItem);
  };
  
  return (
    <button className="py-2 px-5 cursor-pointer inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md"
    onClick={handleAddToCart}
      
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
