'use client'

import { useRef } from 'react'

const BANNER_ITEMS = [
  'MUSKELAUFBAU',
  'ATHLETIC TRAINING',
  'AUSDAUERTRAINING', 
  'ABNEHMEN',
]

export function ScrollingBanner() {
  // Double the items to create seamless loop
  const items = [...BANNER_ITEMS, ...BANNER_ITEMS, ...BANNER_ITEMS] // Triple for smoother loop

  return (
    <div className="relative w-full h-40 overflow-hidden lg:hidden">
      {/* First banner - Yellow */}
      <div className="absolute w-full bg-primary border-y border-white transform -rotate-6 scale-125 top-1/2 -translate-y-1/2">
        <div
          className="flex whitespace-nowrap py-2 animate-scroll-left"
          style={{ width: 'max-content' }}
        >
          {items.map((item, index) => (
            <div key={`banner1-${index}`} className="flex items-center">
              <span className="text-black font-bold px-4">{item}</span>
              <span className="text-black">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Second banner - Black */}
      <div className="absolute w-full bg-black border-y border-white transform rotate-6 scale-125 top-1/2 -translate-y-1/2">
        <div
          className="flex whitespace-nowrap py-2 animate-scroll-right"
          style={{ width: 'max-content' }}
        >
          {items.map((item, index) => (
            <div key={`banner2-${index}`} className="flex items-center">
              <span className="text-white font-bold px-4">{item}</span>
              <span className="text-white">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 