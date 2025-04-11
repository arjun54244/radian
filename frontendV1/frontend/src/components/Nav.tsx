"use client";
import Link from "next/link";
import { ShoppingCart, Search, Heart, User, HelpCircle, Settings, LogOut, DollarSign } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useCartStore } from "../../store/cartStore";
import { CartItem } from "@/types/books";
import AuthButton from "./AuthButton";



export default function Nav() {
    const [isSearchOpen, setSearchOpen] = useState(false);
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useState<CartItem[]>([]);
    const  carts: CartItem[] = useCartStore((state) => state.cart);

    useEffect(() => {
        setCart(carts);
    }, [carts]);

    const countItems = cart.reduce((total, item) => total + item.quantity, 0);


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    function windowScroll() {
        const navbar = document.getElementById("topnav");
        if (navbar != null) {
            if (
                document.body.scrollTop >= 50 ||
                document.documentElement.scrollTop >= 50
            ) {
                navbar.classList.add("nav-sticky");
            } else {
                navbar.classList.remove("nav-sticky");
            }
        }
    }

    const isClient = useRef(typeof window !== "undefined");

    useEffect(() => {
        if (!isClient.current) return;

        const handleScroll = () => {
            windowScroll();
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <div className="tagline bg-slate-900">
                <div className="container relative">
                    <div className="grid grid-cols-1">
                        <div className="text-center">
                            <h6 className="text-white font-medium">Refer a friend & get $50 in credits each 🎉</h6>
                        </div>
                    </div>
                </div>
            </div>
            <nav id="topnav" className="defaultscroll is-sticky tagline-height">
                <div className="container relative">
                    <Link className="logo" href="/">
                        <div>
                            <Image src="/assets/images/logo-dark.png" height={22} width={120} className="inline-block dark:hidden" alt="Logo Dark" />
                            <Image src="/assets/images/logo-white.png" height={22} width={120} className="hidden dark:inline-block" alt="Logo White" />
                        </div>
                    </Link>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <button className={`navbar-toggle ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                        </div>

                        {/* Navigation Menu */}
                        <nav
                            id="navigation"
                            className={`navigation ${isOpen ? "block" : "hidden"}`} // Tailwind classes for show/hide
                        >
                            {/* Menu Items Here */}
                        </nav>
                    </div>

                    <ul className="buy-button list-none mt-5 flex items-center gap-2">
                        {/* Search Button */}
                        <li className="dropdown inline-block relative pe-1">
                            <button onClick={() => setSearchOpen(!isSearchOpen)} className="inline-flex">
                                <Search className="w-5 h-5" />
                            </button>
                            {isSearchOpen && (
                                <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-slate-900 shadow-md p-2 rounded-md">
                                    <div className="relative">
                                        <Search className="absolute w-4 h-4 top-2 right-3" />
                                        <input type="text" className="w-full p-2 border rounded-md" placeholder="Search..." />
                                    </div>
                                </div>
                            )}
                        </li>

                        <li className="dropdown inline-block relative ps-0.5">
                            <button
                                onClick={() => setCartOpen(!isCartOpen)}
                                className="dropdown-toggle size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 border border-orange-500 text-white"
                            >
                                <ShoppingCart className="w-4 h-4" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                                    {countItems}
                                </span>
                            </button>

                            {/* Cart Dropdown */}
                            {isCartOpen && (
                                <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800">
                                    <ul className="py-3 text-start">
                                        {cart.length > 0 ? (
                                            cart.map((item, index) => (
                                                <li key={index} className="flex items-center justify-between py-1.5 px-4">
                                                    <span className="flex items-center">
                                                        <img src={item.image} className="w-9 rounded" alt={item.title} />
                                                        <span className="ml-3">
                                                            <span className="font-semibold">{item.title}</span>
                                                            <span className="block text-sm text-gray-400">${item.price} x {item.quantity}</span>
                                                        </span>
                                                    </span>
                                                    <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="py-1.5 px-4 text-center text-gray-500">Cart is empty</li>
                                        )}
                                        {cart.length > 0 && (
                                            <>
                                                <li className="flex items-center justify-between py-1.5 px-4">
                                                    <span>Total (₹):</span>
                                                    <span className="font-semibold">${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</span>
                                                </li>
                                                <li className="flex items-center justify-between gap-1 py-1.5 px-4">
                                                    <Link href={'/cart'} className="w-1/2 p-2 bg-orange-500 text-center text-white rounded-md cursor-pointer">View Cart</Link>
                                                    <Link href={'/cart'} className="w-1/2 p-2 bg-orange-500 text-center text-white rounded-md cursor-pointer">Checkout</Link>
                                                </li>
                                            </>
                                        )}
                                    </ul>
                                </div>
                            )}
                        </li>

                        {/* Wishlist Button */}
                        <li className="inline-block ps-0.5">
                            <button className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-orange-500 text-white">
                                <Heart className="w-4 h-4" />
                            </button>
                        </li>

                        {/* User Menu */}
                        <li className="dropdown inline-block relative ps-0.5">
                            <button onClick={() => setUserMenuOpen(!isUserMenuOpen)} className="dropdown-toggle items-center">
                                <span className="size-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full border border-orange-500 bg-orange-500 text-white">
                                    <img src="assets/images/client/16.jpg" className="w-8 h-8 rounded-full" alt="User" />
                                </span>
                            </button>
                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 shadow-md p-2 rounded-md">
                                    <ul>
                                        <li className="py-2 px-4">Welcome, Jesus!</li>
                                        <li className="py-2 px-4 flex items-center">
                                            <DollarSign className="w-4 h-4 mr-2" />
                                            Balance: <span className="text-orange-500 ml-2">$245.10</span>
                                        </li>
                                        <li className="py-2 px-4 flex items-center cursor-pointer hover:text-orange-500">
                                            <User className="w-4 h-4 mr-2" /> Account
                                        </li>
                                        <li className="py-2 px-4 flex items-center cursor-pointer hover:text-orange-500">
                                            <HelpCircle className="w-4 h-4 mr-2" /> Helpcenter
                                        </li>
                                        <li className="py-2 px-4 flex items-center cursor-pointer hover:text-orange-500">
                                            <Settings className="w-4 h-4 mr-2" /> Settings
                                        </li>
                                        <li className="border-t border-gray-100 my-2"></li>
                                        <li className="py-2 px-4 flex items-center cursor-pointer hover:text-orange-500">
                                            <LogOut className="w-4 h-4 mr-2" /> Logout
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </li>
                        <li className="inline-block ps-0.5">
                            <AuthButton/>
                        </li>
                    </ul>
                    <div id="navigation">
                        <ul className="navigation-menu">
                            <li><Link className="sub-menu-item" href="/">Home</Link></li>
                            <li className="has-submenu parent-menu-item">
                                <Link href="/about">About Us</Link>
                            </li>
                            <li className="sub-menu-item">
                                <Link href="/books">All Books</Link>
                            </li>

                            <li className="has-submenu parent-menu-item">
                                <Link href="/current-affairs">Current Affairs</Link>
                            </li>

                            <li className="has-submenu parent-menu-item">
                                <a href="#">Blogs</a>
                                <span className="menu-arrow"></span>
                                <ul className="submenu">
                                    <li><Link className="sub-menu-item" href="/shop-grid">Shop Grid</Link></li>
                                    <li><Link className="sub-menu-item" href="/shop-list">Shop List</Link></li>
                                    <li><Link className="sub-menu-item" href="/shop-cart">Shop Cart</Link></li>
                                </ul>
                            </li>
                            <li><Link className="sub-menu-item" href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}
