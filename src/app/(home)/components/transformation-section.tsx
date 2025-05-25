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
  name: string
  age: number
  quote: string
}

const TransformationCard = ({ beforeImage, afterImage, name, age, quote }: TransformationData) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg shadow-foreground/20 border-2 border-foreground max-w-xs mx-auto">
      <Tabs defaultValue="before" className="w-full">
        <div className="relative">
          <TabsContent value="before" className="m-0">
            <div className="relative w-full h-full max-h-[50vh] aspect-[1/1.8] overflow-hidden">
              <Image 
                src={beforeImage}
                alt={`Vor der Transformation`}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </TabsContent>
          <TabsContent value="after" className="m-0">
            <div className="relative w-full h-full max-h-[50vh] aspect-[1/1.8] overflow-hidden">
              <Image 
                src={afterImage}
                alt={`Nach der Transformation`}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
          </TabsContent>
          
          {/* Text overlay with gradient at the bottom */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black">
            <div className='flex justify-center mb-3'>
              <TabsList className="bg-black/60 backdrop-blur-sm shadow-sm shadow-foreground/20 p-1.5 h-12">
                <TabsTrigger value="before" className='border border-transparent data-[state=active]:border-foreground/30 px-4 py-2 text-sm font-bold'>Vorher</TabsTrigger>
                <TabsTrigger value="after" className='border border-transparent data-[state=active]:border-foreground/30 px-4 py-2 text-sm font-bold'>Nachher</TabsTrigger>
              </TabsList>
            </div>
            <div className="font-bold text-white text-center">
              <p className="text-base mb-1">{name}, {age}</p>
              <p className="italic text-gray-300 text-sm">"{quote}"</p>
            </div>
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
      name: "Matthias",
      age: 35,
      quote: "Ich hätte nie gedacht, dass Sport sich so gut anfühlen kann."
    },
    {
      beforeImage: "/transformation/person-2-before.jpg",
      afterImage: "/transformation/person-2-after.jpg",
      name: "Kay",
      age: 39,
      quote: "Nicht nur fitter – auch mental viel stärker geworden."
    },
    {
      beforeImage: "/transformation/person-3-before.jpg",
      afterImage: "/transformation/person-3-after.jpg",
      name: "Kaan",
      age: 28,
      quote: "Du hast mir gezeigt, wie einfach dranzubleiben sein kann."
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
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-4 tracking-widest uppercase text-center">Erfolgsgeschichten</h2>

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