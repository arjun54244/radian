"use client"

import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface BannerSliderProps {
  /**
   * Array of banner objects
   */
  banners: {
    id: number
    imageUrl: string
    title?: string
    description?: string
    ctaText?: string
    ctaUrl?: string
  }[]
  /**
   * Auto slide interval in milliseconds
   * @default 5000
   */
  interval?: number
  /**
   * Whether to pause auto sliding on hover
   * @default true
   */
  pauseOnHover?: boolean
}

export default function BannerSlider({
  banners = [
    {
      id: 1,
      imageUrl: "/placeholder.svg?height=500&width=1200",
    },
    {
      id: 2,
      imageUrl: "/placeholder.svg?height=500&width=1200",
    },
    {
      id: 3,
      imageUrl: "/placeholder.svg?height=500&width=1200",
    },
  ],
  interval = 5000,
  pauseOnHover = true,
}: BannerSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  useEffect(() => {
    if (isPaused) return

    const slideInterval = setInterval(() => {
      nextSlide()
    }, interval)

    return () => clearInterval(slideInterval)
  }, [isPaused, interval]) //Corrected dependencies

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="relative min-w-full">
            <img
              src={banner.imageUrl || "/placeholder.svg"}
              alt={banner.title}
              className="h-[300px] w-full object-cover sm:h-[400px] md:h-[500px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
              <div className="absolute bottom-0 left-0 w-full p-4 text-white sm:p-6 md:p-8 lg:p-10">
                <h2 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">{banner.title}</h2>
                <p className="mb-4 max-w-md text-sm sm:text-base md:text-lg">{banner.description}</p>
                {banner.ctaText && (
                  <a
                    href={banner.ctaUrl || "#"}
                    className="inline-block rounded-md bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-gray-200"
                  >
                    {banner.ctaText}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all",
              currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

