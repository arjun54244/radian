"use client"; // Ensure this runs on the client side

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Star } from "lucide-react";

export default function BookDetail() {
    interface Product {
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
    const { slug } = useParams();
    const [book, setBook] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => setQuantity((prev) => prev + 1);
    const decreaseQuantity = () => setQuantity((prev) => (prev > 0 ? prev - 1 : 0));

    const [activeTab, setActiveTab] = useState("description");

    const tabs = [
        { id: "description", label: "Description" },
        { id: "addinfo", label: "Additional Information" },
        { id: "review", label: "Review" },
    ];

    useEffect(() => {
        async function fetchBook() {
            try {
                const res = await fetch(`http://127.0.0.1:8000/api/books/${slug}`);
                if (!res.ok) throw new Error("Book not found");
                const data = await res.json();
                setBook(data.book);
            } catch (error) {
                console.error("Error fetching book:", error);
            } finally {
                setLoading(false);
            }
        }

        if (slug) fetchBook();
    }, [slug]);

    if (loading) return <p>Loading...</p>;
    if (!book) return <p>Book not found</p>;

    return (<>
        <section className="relative table w-full py-20 lg:py-24 md:pt-28 bg-gray-50 dark:bg-slate-800">
            <div className="container relative">
                <div className="grid grid-cols-1 mt-14">
                    <h3 className="text-3xl leading-normal font-semibold">{book.title}</h3>
                </div>

                <div className="relative mt-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><a href="index.html">Cartzio</a></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-orange-500"><a href="shop-grid.html">Store</a></li>
                        <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                        <li className="inline-block uppercase text-[13px] font-bold text-orange-500" aria-current="page">Mens Brown Jecket</li>
                    </ul>
                </div>
            </div>
        </section>

        <section className="relative md:py-24 py-16">
            <div className="container relative">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-6 items-center">
                    <div className="">
                        <ul className="product-imgs flex list-none items-center">
                            <li>
                                <ul className="img-select list-none">
                                    {book.images.map((imgage) => (
                                        <li key={imgage} className="p-px">
                                            <a href="#" data-id="1">
                                                <Image src={imgage} className="shadow-sm dark:shadow-gray-800" alt="" width={1000} height={1000} />
                                            </a>
                                        </li>))}
                                </ul>
                            </li>

                            <li className="overflow-hidden shadow-sm dark:shadow-gray-800 m-px">
                                <div className="img-showcase flex w-full duration-500">
                                    {book.images.map((imgage) => (
                                        <img key={imgage} src={imgage} className="min-w-full" alt="shoe image" />
                                    ))}
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="">
                        <h5 className="text-2xl font-semibold">{book.title}</h5>
                        <div className="mt-2">
                            <span className="text-slate-400 font-semibold me-1">{book.base_price} <del className="text-red-600">{book.discounted_price}</del></span>

                            <ul className="list-none inline-block text-orange-400">
                                <li className="inline"><Star className="text-lg" /></li>
                                <li className="inline text-slate-400 font-semibold">4.8 (45)</li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <h5 className="text-lg font-semibold">Overview :</h5>
                            <p className="text-slate-400 mt-2">{book.description}</p>

                            <ul className="list-none text-slate-400 mt-4">
                                <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-orange-500 text-xl me-2"></i> Digital Marketing Solutions for Tomorrow</li>
                                <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-orange-500 text-xl me-2"></i> Our Talented & Experienced Marketing Agency</li>
                                <li className="mb-1 flex"><i className="mdi mdi-check-circle-outline text-orange-500 text-xl me-2"></i> Create your own skin to match your brand</li>
                            </ul>
                        </div>

                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-4">
                            <div className="flex items-center">
                                <h5 className="text-lg font-semibold me-2">Quantity:</h5>
                                <div className="qty-icons ms-3 space-x-0.5">
                                    <button
                                        onClick={decreaseQuantity}
                                        className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white minus"
                                    >
                                        -
                                    </button>
                                    <input
                                        min="0"
                                        name="quantity"
                                        value={quantity}
                                        type="number"
                                        readOnly
                                        className="h-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white pointer-events-none w-16 ps-4 quantity"
                                    />
                                    <button
                                        onClick={increaseQuantity}
                                        className="size-9 inline-flex items-center justify-center tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white plus"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 space-x-1">
                            <a href="#" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center bg-orange-500 text-white rounded-md mt-2">Shop Now</a>
                            <a href="#" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-base text-center rounded-md bg-orange-500/5 hover:bg-orange-500 text-orange-500 hover:text-white mt-2">Add to Cart</a>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-12 grid-cols-1 mt-6 gap-6">
                    {/* Sidebar Tabs */}
                    <div className="lg:col-span-3 md:col-span-5">
                        <div className="sticky top-20">
                            <ul className="flex-column p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                                {tabs.map((tab) => (
                                    <li key={tab.id} role="presentation">
                                        <button
                                            className={`px-4 py-2 text-start text-base font-semibold rounded-md w-full duration-500 ${activeTab === tab.id ? "text-orange-500 bg-orange-100" : "hover:text-orange-500"
                                                }`}
                                            onClick={() => setActiveTab(tab.id)}
                                        >
                                            {tab.label}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="lg:col-span-9 md:col-span-7 p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-gray-800 rounded-md">
                        {activeTab === "description" && (
                            <div>
                                <p className="text-slate-400">
                                    Due to its widespread use as filler text for layouts, non-readability is of great importance...
                                </p>
                            </div>
                        )}

                        {activeTab === "addinfo" && (
                            <div>
                                <p className="text-slate-400">Additional product details and specifications go here...</p>
                            </div>
                        )}

                        {activeTab === "review" && (
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                                {/* Example Review */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center">
                                        <img src="/assets/images/client/01.jpg" className="h-11 w-11 rounded-full shadow" alt="User" />
                                        <div className="ms-3 flex-1">
                                            <p className="text-lg font-semibold">Calvin Carlo</p>
                                            <p className="text-sm text-slate-400">6th May 2022 at 01:25 pm</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-400 italic">
                                    &quot;There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...&quot;
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="container lg:mt-24 mt-16">
                <div className="grid grid-cols-1 mb-6 text-center">
                    <h3 className="font-semibold text-3xl leading-normal">New Books</h3>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pt-6">

                    <div className="group">
                        <div className="relative overflow-hidden shadow-sm dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                            <img src="assets/images/shop/sweater-t-shirt.jpg" className="group-hover:scale-110 duration-500" alt="" />

                            <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
                                <a href="shop-cart.html" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md">Add to Cart</a>
                            </div>

                            <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                                <li><a href="javascript:void(0)" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><i data-feather="heart" className="size-4"></i></a></li>
                                <li className="mt-1"><a href="shop-item-detail.html" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><i data-feather="eye" className="size-4"></i></a></li>
                                <li className="mt-1"><a href="javascript:void(0)" className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><i data-feather="bookmark" className="size-4"></i></a></li>
                            </ul>
                        </div>

                        <div className="mt-4">
                            <a href="product-detail-one.html" className="hover:text-orange-500 text-lg font-medium">Sweater T-Shirt</a>
                            <div className="flex justify-between items-center mt-1">
                                <p>$16.00 <del className="text-slate-400">$21.00</del></p>
                                <ul className="font-medium text-amber-400 list-none">
                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                    <li className="inline"><i className="mdi mdi-star"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
    );
}
