import { Product } from "@/types/books";
import { Bookmark, Eye, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";



interface BookProps {
    product: Product;
}

export default function Book({ product }: BookProps) {
   
    const discountPercentage = ((parseFloat(product.base_price) - parseFloat(product.discounted_price))/parseFloat(product.base_price)*100).toFixed(0);
    return (
        <div className="group">
            <div className="relative overflow-hidden shadow-sm dark:shadow-gray-800 group-hover:shadow-lg group-hover:dark:shadow-gray-800 rounded-md duration-500">
                <Link href={`/books/${product.id}`} >

                    <Image
                        src={product.images[0]}
                        className="group-hover:scale-110 duration-500"
                        alt={product.title}
                        layout="responsive"
                        width={500}
                        height={650}
                    />
                </Link>

                <ul className="list-none absolute top-[10px] end-4 opacity-0 group-hover:opacity-100 duration-500 space-y-1">
                    <li><button className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><Heart className="size-4" /></button></li>
                    <li className="mt-1"><Link href={`/books/${product.id}`} className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><Eye className="size-4" /></Link></li>
                    <li className="mt-1"><button className="size-10 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-center rounded-full bg-white text-slate-900 hover:bg-slate-900 hover:text-white shadow"><Bookmark className="size-4" /></button></li>
                </ul>

                <ul className="list-none absolute top-[10px] start-4">
                    <li><span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded h-5">-{discountPercentage}% Off</span></li>
                </ul>

            </div>

            <div className="mt-4">
                <div className="-bottom-20">
                    <AddToCartButton product={product}/>
                </div>
                <Link href={`/books/${product.id}`} className="hover:text-orange-500 text-lg font-medium">{product.title}</Link>
                <p className="text-sm text-gray-500">By {product.author}</p>
                <div className="flex justify-between items-center mt-1">
                    <p>${product.discounted_price} <del className="text-slate-400">${product.base_price}</del></p>
                    <ul className="flex font-medium text-amber-400 list-none">
                        {[...Array(5)].map((_, index) => (
                            <li key={index}><Star size={15} fill={index < product.rating ? "currentColor" : "none"} /></li>
                        ))}
                    </ul>
                </div>
                <p className="text-xs text-gray-400">{product.binding} | {product.pages} pages | {product.weight} | {product.dimensions}</p>
            </div>
        </div>
    );
}
