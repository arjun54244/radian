import { createJSONStorage, devtools, persist } from "zustand/middleware";
import axios from "axios";
import { create } from "zustand";

import { CartItem } from "@/types/books";
import toast from "react-hot-toast";


interface CartState {
  cart: CartItem[];
  fetchCart: () => Promise<void>;
  addToCart: (item: CartItem) => Promise<void>;
  removeFromCart: (id: number) => Promise<void>;
  clearCart: () => Promise<void>;
  increaseQuantity: (id: number) => Promise<void>;
  decreaseQuantity: (id: number) => Promise<void>;
  setQuantity: (id: number, quantity: number) => Promise<void>;
}

export const useCartStore = create<CartState>()(
  devtools(
    persist((set, get) => ({
      cart: [],

      fetchCart: async () => {
        try {
          const response = await axios.get(`${process.env.WEB_URL}/cart`, {
            withCredentials: true,
          });
          set({ cart: response.data.cart });
        } catch (error) {
          console.error("Failed to fetch cart:", error);
        }
      },

      addToCart: async (item) => {
        try {
          const existingItem = get().cart.find((i) => i.id === item.id);
          if (existingItem) {
            toast.error(`${item.title} is already in the cart!`);
            return;
          }
      
          // await axios.post(
          //   `${process.env.WEB_URL}/cart`,
          //   { id: item.id, quantity: 1 },
          //   { withCredentials: true }
          // );
      
          set((state) => ({
            cart: [...state.cart, { ...item, quantity: 1 }],
          }));
      
          toast.success(`${item.title} added to cart!`);
        } catch (error) {
          toast.error("Failed to add item to cart:"+ error);
        }
      },
      

      removeFromCart: async (id) => {
        try {
          // await axios.delete(`${process.env.WEB_URL}/cart/${id}`, {
          //   withCredentials: true,
          // });
          set((state) => ({
            cart: state.cart.filter((item) => item.id !== id),
          }));
        } catch (error) {
          console.error("Failed to remove item:", error);
        }
      },

      clearCart: async () => {
        try {
          // await axios.delete(`${process.env.WEB_URL}/cart`, {
          //   withCredentials: true,
          // });
          set({ cart: [] });
        } catch (error) {
          console.error("Failed to clear cart:", error);
        }
      },

      increaseQuantity: async (id) => {
        try {
          // await axios.put(`${process.env.WEB_URL}/cart/${id}`, {
          //   quantity: (get().cart.find((item) => item.id === id)?.quantity ?? 0) + 1,
          // });

          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          }));
        } catch (error) {
          console.error("Failed to increase quantity:", error);
        }
      },

      decreaseQuantity: async (id) => {
        try {
          const item = get().cart.find((item) => item.id === id);
          if (item && item.quantity > 1) {
            // await axios.put(`${process.env.WEB_URL}/cart/${id}`, {
            //   quantity: item.quantity - 1,
            // });

            set((state) => ({
              cart: state.cart.map((i) =>
                i.id === id ? { ...i, quantity: Math.max(i.quantity - 1, 1) } : i
              ),
            }));
          } 
          // else {
          //   await get().removeFromCart(id);
          // }
        } catch (error) {
          console.error("Failed to decrease quantity:", error);
        }
      },

      setQuantity: async (id, quantity) => {
        try {
          // await axios.put(`${process.env.WEB_URL}/cart/${id}`, { quantity });

          set((state) => ({
            cart: state.cart.map((i) =>
              i.id === id ? { ...i, quantity } : i
            ),
          }));
        } catch (error) {
          console.error("Failed to update quantity:", error);
        }
      },
    }), { name: "cart-store", storage: createJSONStorage(() => sessionStorage) })
  )
);
