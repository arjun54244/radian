import React from 'react'
import Link from "next/link";
import { Dribbble, Linkedin, Facebook, Instagram, Twitter, Mail, Truck, Package, DollarSign, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer bg-slate-900 dark:bg-slate-800 relative text-gray-200 dark:text-gray-200">
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="py-[60px] px-0">
                            <div className="grid md:grid-cols-12 grid-cols-1 gap-6">
                                <div className="lg:col-span-3 md:col-span-12">
                                    <a href="#" className="text-[22px] focus:outline-none">
                                        <img src="assets/images/logo-light.png" alt="" />
                                    </a>
                                    <p className="mt-6 text-gray-300">Upgrade your style with our curated sets. Choose confidence, embrace your unique look.</p>
                                    <ul className="list-none mt-6 flex gap-2">
                                        <li>
                                            <Link
                                                href="https://dribbble.com/shreethemes"
                                                target="_blank"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <Dribbble className="h-4 w-4" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="http://linkedin.com/company/shreethemes"
                                                target="_blank"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <Linkedin className="h-4 w-4" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="https://www.facebook.com/shreethemes"
                                                target="_blank"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <Facebook className="h-4 w-4"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="https://www.instagram.com/shreethemes/"
                                                target="_blank"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <Instagram className="h-4 w-4" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="https://twitter.com/shreethemes"
                                                target="_blank"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <Twitter className="h-4 w-4"/>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                href="mailto:support@shreethemes.in"
                                                className="size-8 inline-flex items-center justify-center tracking-wide align-middle text-base border border-gray-800 dark:border-slate-800 rounded-md hover:text-orange-500 dark:hover:text-orange-500 text-slate-300"
                                            >
                                                <Mail className="h-4 w-4"/>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="lg:col-span-6 md:col-span-12">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Shopping & Clothes</h5>

                                    <div className="grid md:grid-cols-12 grid-cols-1">
                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                <li><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Men</a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Jackets & Coats </a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Jeans </a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i>  Loungewear </a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Polo shirts </a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Shirts</a></li>
                                            </ul>
                                        </div>

                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                <li><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Shorts </a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Suits Swimwear </a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> T-shirts </a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Tracksuits </a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Trousers</a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Shirts</a></li>
                                            </ul>
                                        </div>

                                        <div className="md:col-span-4">
                                            <ul className="list-none footer-list mt-6">
                                                <li><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> My account </a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Order History </a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Wish List </a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Newsletter</a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Affiliate</a></li>
                                                <li className="mt-[10px]"><a href="#" className="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i className="mdi mdi-chevron-right"></i> Returns</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-3 md:col-span-4">
                                    <h5 className="tracking-[1px] text-gray-100 font-semibold">Newsletter</h5>
                                    <p className="mt-6">Sign up and receive the latest tips via email.</p>
                                    <form>
                                        <div className="grid grid-cols-1">
                                            <div className="my-3">
                                                <label className="form-label">Write your email <span className="text-red-600">*</span></label>
                                                <div className="form-icon relative mt-2">
                                                    <i data-feather="mail" className="size-4 absolute top-3 start-4"></i>
                                                    <input type="email" className="ps-12 rounded w-full py-2 px-3 h-10 bg-gray-800 border-0 text-gray-100 focus:shadow-none focus:ring-0 placeholder:text-gray-200 outline-none" placeholder="Email" name="email" required />
                                                </div>
                                            </div>

                                            <button type="submit" id="submitsubscribe" name="send" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-orange-500 text-white rounded-md">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <div className="py-[30px] px-0 border-t border-slate-800 dark:border-slate-700">
                        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                            <div className="flex items-center lg:justify-center">
                                <Truck className="h-5 w-5 me-2" />
                                <h6 className="mb-0 font-medium">Free delivery</h6>
                            </div>

                            <div className="flex items-center lg:justify-center">
                                <Package className="h-5 w-5 me-2" />
                                <h6 className="mb-0 font-medium">Non-contact shipping</h6>
                            </div>

                            <div className="flex items-center lg:justify-center">
                                <DollarSign className="h-5 w-5 me-2" />
                                <h6 className="mb-0 font-medium">Money-back guarantee</h6>
                            </div>

                            <div className="flex items-center lg:justify-center">
                                <ShieldCheck className="h-5 w-5 me-2" />
                                <h6 className="mb-0 font-medium">Secure payments</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-[30px] px-0 border-t border-slate-800 dark:border-slate-700">
                <div className="container relative text-center">
                    <div className="grid md:grid-cols-2 items-center">
                        {/* Copyright Section */}
                        <div className="md:text-start text-center">
                            <p className="mb-0">
                                © {new Date().getFullYear()} Cartzio. Designed with{" "}
                                <Heart className="inline h-4 w-4 text-red-600" /> by{" "}
                                <a
                                    href="https://shreethemes.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-reset font-medium hover:text-orange-500"
                                >
                                    Shreethemes
                                </a>
                                .
                            </p>
                        </div>

                        {/* Payment Methods */}
                        <ul className="list-none md:text-end text-center mt-6 md:mt-0">
                            <li className="inline"><a href="#"><img src="assets/images/payments/american-express.jpg" className="max-h-6 rounded inline" title="American Express" alt=""/></a></li>
                            <li className="inline"><a href="#"><img src="assets/images/payments/discover.jpg" className="max-h-6 rounded inline" title="Discover" alt=""/></a></li>
                            <li className="inline"><a href="#"><img src="assets/images/payments/mastercard.jpg" className="max-h-6 rounded inline" title="Master Card" alt=""/></a></li>
                            <li className="inline"><a href="#"><img src="assets/images/payments/paypal.jpg" className="max-h-6 rounded inline" title="Paypal" alt=""/></a></li>
                            <li className="inline"><a href="#"><img src="assets/images/payments/visa.jpg" className="max-h-6 rounded inline" title="Visa" alt=""/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}
