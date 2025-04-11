"use client";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import { useCartStore } from "../../../../store/cartStore";
import { X } from "lucide-react";

const CartPage = () => {
    const [subtotal, setSubtotal] = useState<number>(0);
    const [tax, setTax] = useState<number>(0);
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCartStore();
    useEffect(() => {
        const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
        setSubtotal(total);
        setTax(total * 0.05);
    },[cart])
    return (
        <>
            <section className="relative md:py-24 py-16">
                <div className="container relative">
                    <div className="grid lg:grid-cols-1">
                        <div className="relative overflow-x-auto shadow-sm dark:shadow-gray-800 rounded-md">
                            <table className="w-full text-start">
                                <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                                    <tr>
                                        <th scope="col" className="p-4 w-4"></th>
                                        <th scope="col" className="text-start p-4 min-w-[220px]">Product</th>
                                        <th scope="col" className="p-4 w-24 min-w-[100px]">Price</th>
                                        <th scope="col" className="p-4 w-56 min-w-[220px]">Qty</th>
                                        <th scope="col" className="p-4 w-24 min-w-[100px]">Total(₹)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart?.map((item, index) => (
                                        <tr key={index} className="bg-white dark:bg-slate-900">
                                            <td className="p-4"><button onClick={() => removeFromCart(item.id)}><X className="mdi mdi-window-close text-red-600" /> </button></td>
                                            <td className="p-4">
                                                <span className="flex items-center">
                                                    <img src={item.image} className="rounded shadow-sm dark:shadow-gray-800 w-12" alt={item.title} />
                                                    <span className="ms-3">
                                                        <span className="block font-semibold">{item.title}</span>
                                                    </span>
                                                </span>
                                            </td>
                                            <td className="p-4 text-center">₹ {item.price}</td>
                                            <td className="p-4 text-center">
                                                <div className="qty-icons">
                                                    <button onClick={() => decreaseQuantity(item.id)} className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white minus">-</button>
                                                    <input min="0"
                                                        name="quantity"
                                                        value={item.quantity}
                                                        type="number"
                                                        readOnly className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white pointer-events-none w-16 ps-4 quantity" />
                                                    <button className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white plus" onClick={() => increaseQuantity(item.id)} >+</button>
                                                </div>
                                            </td>
                                            <td className="p-4  text-end">₹ {(item.price * item.quantity).toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                            <div className="lg:col-span-9 md:order-1 order-3">
                                <div className="space-x-1">
                                    <a href="#" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-orange-500 text-white rounded-md mt-2">Shop Now</a>
                                    <a href="#" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white mt-2">Add to Cart</a>
                                </div>
                            </div>

                            <div className="lg:col-span-3 md:order-2 order-1">
                                <ul className="list-none shadow-sm dark:shadow-gray-800 rounded-md">
                                    <li className="flex justify-between p-4">
                                        <span className="font-semibold text-lg">Subtotal :</span>
                                        <span className="text-slate-400">₹ {subtotal.toFixed(2)}</span>
                                    </li>
                                    <li className="flex justify-between p-4 border-t border-gray-100 dark:border-gray-800">
                                        <span className="font-semibold text-lg">Taxes :</span>
                                        <span className="text-slate-400">₹ {tax.toFixed(2)}</span>
                                    </li>
                                    <li className="flex justify-between font-semibold p-4 border-t border-gray-200 dark:border-gray-600">
                                        <span className="font-semibold text-lg">Total :</span>
                                        <span className="font-semibold">₹ {(subtotal + tax).toFixed(2)}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

};

export default CartPage;

