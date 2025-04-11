import BannerSlider from '@/components/banner-slider'
import ShopByCategory from '@/components/shop-by-category'
import React from 'react'
import { categoriesShopByCategories, categoriesShopByState, categoryBooksShopByCategories, categoryBooksShopByState, testimonials } from './homedata'
import YouTubeTestimonialsGrid from '@/components/Testimonials'
import TestimonialsCards from '@/components/testimonials-with-cards'
export default function Home() {
  const banners = [
    {
      id: 1,
      imageUrl: "https://radianbooks.in/img/slider/s1.webp",
    },
    {
      id: 2,
      imageUrl: "https://radianbooks.in/img/slider/s2.webp",
    },
    {
      id: 3,
      imageUrl: "https://radianbooks.in/img/slider/s3.webp",
    },
  ]

  return (
    <>
      <h1 className="mb-6 text-center text-3xl font-bold">Banner Auto Slider</h1>
      <section className="mx-auto mt-10 sm:mt-16 md:mt-24 lg:mt-24">
        <BannerSlider banners={banners} interval={5000} pauseOnHover={true} />
      </section>



      <ShopByCategory categories={categoriesShopByCategories} categoryBooks={categoryBooksShopByCategories} header='Shop By Categorys' />
      <YouTubeTestimonialsGrid testimonials={testimonials} />
      <ShopByCategory categories={categoriesShopByState} categoryBooks={categoryBooksShopByState} header='Shop By State' />

      <TestimonialsCards />
     

      <section className="relative md:py-24 py-16">

        <div className="container-fluid relative md:mt-24 mt-16">
          <div className="grid grid-cols-1">
            <div className="relative overflow-hidden py-24 px-4 md:px-10 bg-orange-600 bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('/assets\images\hero\bg3.png')" }}
            >
              <div className="absolute inset-0  bg-center bg-no-repeat bg-cover"></div>
              <div className="grid grid-cols-1 justify-center text-center relative z-1">
                <h3 className="text-4xl leading-normal tracking-wide font-bold text-white">End of Season Clearance <br /> Sale upto 30%</h3>
                <div id="countdown" className="mt-6">
                  <ul className="count-down list-none inline-block space-x-1">
                    <li id="days" className="text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow-sm shadow-gray-100 inline-block text-center text-white"></li>
                    <li id="hours" className="text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow-sm shadow-gray-100 inline-block text-center text-white"></li>
                    <li id="mins" className="text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow-sm shadow-gray-100 inline-block text-center text-white"></li>
                    <li id="secs" className="text-[28px] leading-[72px] h-[80px] w-[80px] font-medium rounded-md shadow-sm shadow-gray-100 inline-block text-center text-white"></li>
                    <li id="end" className="h1"></li>
                  </ul>
                </div>
                <div className="mt-4">
                  <a href="sale.html" className="py-2 px-5 inline-block font-semibold tracking-wide align-middle text-center bg-white text-orange-500 rounded-md"><i className="mdi mdi-cart-outline"></i> Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
