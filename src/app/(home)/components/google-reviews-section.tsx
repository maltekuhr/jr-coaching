'use client'

import { Star } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Sehr professionelles Training! John geht individuell auf meine Bedürfnisse ein und motiviert mich immer wieder aufs Neue.",
    date: "vor 2 Wochen"
  },
  {
    name: "Michael K.", 
    rating: 5,
    text: "Endlich ein Trainer, der mir geholfen hat, meine Ziele zu erreichen. Das Online-Coaching ist perfekt für meinen Alltag.",
    date: "vor 1 Monat"
  },
  {
    name: "Lisa B.",
    rating: 5, 
    text: "Kompetent, motivierend und sehr sympathisch. Kann John jedem empfehlen, der ernsthafte Fortschritte machen möchte.",
    date: "vor 3 Wochen"
  }
]

export const GoogleReviewsSection = () => {
  useEffect(() => {
    // Add custom CSS for white Swiper theme
    const style = document.createElement('style')
    style.innerHTML = `
      :root {
        --swiper-theme-color: #ffffff;
        --swiper-navigation-color: #ffffff;
        --swiper-pagination-color: #ffffff;
      }
      .swiper-button-next, .swiper-button-prev {
        color: white !important;
      }
      .swiper-pagination-bullet {
        background: white !important;
      }
    `
    document.head.appendChild(style)
    
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <section className="py-12">
      
      <h2 className="text-xl font-bold  uppercase text-center">Kundenbewertungen</h2>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-bold text-lg">4.9</span>
            <span className="text-muted-foreground">• 47 Bewertungen</span>
          </div>
        </div>
        
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="bg-background rounded-lg p-4 border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{review.name}</span>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-2">"{review.text}"</p>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  )
} 