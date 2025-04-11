<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Cart;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class CartController extends Controller
{
    public function index()
    {
        $cart = Cart::where('user_id', Auth::id())->with('book')->get();
        return response()->json(['status' => 'success', 'cart' => $cart]);
    }

    public function addToCart(Request $request)
    {
        $request->validate([
            'book_id' => 'required|exists:books,id',
            'quantity' => 'required|integer|min:1'
        ]);

        $cartItem = Cart::where('user_id', Auth::id())->where('book_id', $request->book_id)->first();

        if ($cartItem) {
            $cartItem->update(['quantity' => $cartItem->quantity + $request->quantity]);
        } else {
            Cart::create([
                'user_id' => Auth::id(),
                'book_id' => $request->book_id,
                'quantity' => $request->quantity
            ]);
        }

        return response()->json(['status' => 'success', 'message' => 'Book added to cart']);
    }

    public function removeFromCart($id)
    {
        $cartItem = Cart::where('user_id', Auth::id())->where('id', $id)->first();
        if ($cartItem) {
            $cartItem->delete();
            return response()->json(['status' => 'success', 'message' => 'Book removed from cart']);
        }
        return response()->json(['status' => 'error', 'message' => 'Item not found'], 404);
    }

    public function clearCart()
    {
        Cart::where('user_id', Auth::id())->delete();
        return response()->json(['status' => 'success', 'message' => 'Cart cleared']);
    }
}
