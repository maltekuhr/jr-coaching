'use client'

import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, EffectCards } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'

interface TransformationData {
  beforeImage: string
  afterImage: string
  story: string
}

const TransformationCard = ({ beforeImage, afterImage, story }: TransformationData) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg shadow-foreground/20 border-2 border-foreground">
      <Tabs defaultValue="before" className="w-full">
        <div className="relative">
          <TabsContent value="before" className="m-0">
            <div className="relative w-full h-full max-h-[60vh] aspect-[1/2] overflow-hidden">
              <Image 
                src={beforeImage}
                alt={`Vor der Transformation`}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          </TabsContent>
          <TabsContent value="after" className="m-0">
            <div className="relative w-full h-full max-h-[60vh] aspect-[1/2] overflow-hidden">
              <Image 
                src={afterImage}
                alt={`Nach der Transformation`}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="(max-width: 768px) 100vw, 800px"
                priority
              />
            </div>
          </TabsContent>
          
          {/* Text overlay with gradient at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
            <div className='flex justify-center mb-4'>
              <TabsList className="bg-black/40 backdrop-blur-sm">
                <TabsTrigger value="before">Vorher</TabsTrigger>
                <TabsTrigger value="after">Nachher</TabsTrigger>
              </TabsList>
            </div>
            <p className="font-bold text-white">{story}</p>
          </div>
        </div>
      </Tabs>
    </div>
  )
}

import { useEffect } from 'react'

export const TransformationSection = () => {
  const transformations: TransformationData[] = [
    {
      beforeImage: "/transformation/person-1-before.jpg",
      afterImage: "/transformation/person-1-after.jpg",
      story: "Michael hat in 6 Monaten sein Ziel erreicht und 15kg Fett verloren, während er Muskelmasse aufgebaut hat."
    },
    {
      beforeImage: "/transformation/person-2-before.jpg",
      afterImage: "/transformation/person-2-after.jpg",
      story: "Sarah wollte sich fitter fühlen und hat in 4 Monaten ihre Ausdauer verbessert und ihren Körper gestrafft."
    },
    {
      beforeImage: "/transformation/person-3-before.jpg",
      afterImage: "/transformation/person-3-after.jpg",
      story: "Thomas hat in 8 Monaten seine Körperzusammensetzung komplett verändert und signifikant Muskulatur aufgebaut."
    }
  ]

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
    <section className="my-24">
      <h2 className="text-3xl font-bold mb-8">Erfolgsgeschichten</h2>
      <p className="text-lg mb-8">
        Echte Ergebnisse meiner Kunden, die mit Engagement und der richtigen Anleitung ihre Ziele erreicht haben.
      </p>

      <div className="max-w-lg mx-auto">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectCards, Pagination, Navigation]}
          className="mySwiper"
        >
          {transformations.map((person, index) => (
            <SwiperSlide key={index}>
              <TransformationCard {...person} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
} 