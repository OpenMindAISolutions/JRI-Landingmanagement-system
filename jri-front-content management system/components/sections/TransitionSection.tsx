'use client'

import { useState, useEffect } from 'react'
import Image from "next/image"

const POSITIONS = [
  'top-1/4 left-1/4',
  'bottom-1/4 right-1/3',
  'top-1/3 right-1/4',
  'top-1/2 left-1/3',
  'bottom-1/3 left-1/2',
  'top-1/4 right-1/2',
  'bottom-1/4 left-1/4',
  'top-1/2 right-1/4',
  'bottom-1/3 right-1/3'
]

export function TransitionSection() {
  const [showOrganized, setShowOrganized] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowOrganized(prev => !prev)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="container py-16 text-center">
      <h2 className="text-3xl font-bold text-[#1a1a1a] mb-16">
        Transition from payroll data<br />
        chaos to organized<br />
        efficiency
      </h2>

      <div className="relative mx-auto max-w-4xl">
        <div className="flex justify-center gap-32 mb-8">
          <span className={`font-medium transition-colors duration-300 ${!showOrganized ? 'text-[#6633cc]' : 'text-gray-400'}`}>
            Without JRI.AI
          </span>
          <span className={`font-medium transition-colors duration-300 ${showOrganized ? 'text-[#6633cc]' : 'text-gray-400'}`}>
            JRI.AI
          </span>
        </div>

        <div className="relative h-[400px] bg-white rounded-lg shadow-sm">
          <Sidebar position="left" />
          <TransitionContent showOrganized={showOrganized} />
          <CountryFlags />
        </div>
      </div>
    </section>
  )
}

function Sidebar({ position }: { position: 'left' | 'right' }) {
  const items = position === 'left' 
    ? ['HRIS', 'HCM', 'ERP', 'Finance']
    : Array(12).fill('').map((_, i) => `Flag${i}`)

  return (
    <div className={`absolute ${position}-6 top-1/2 -translate-y-1/2 bg-[#f8f9fe] rounded-lg p-4 ${position === 'right' ? 'grid grid-cols-2 gap-2' : 'space-y-6'}`}>
      {items.map((item, index) => (
        <div key={index} className="text-sm text-gray-500">{item}</div>
      ))}
    </div>
  )
}

function TransitionContent({ showOrganized }: { showOrganized: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[500px] h-[300px]">
        <div className={`transition-opacity duration-300 ${showOrganized ? 'opacity-0' : 'opacity-100'}`}>
          {POSITIONS.map((position, i) => (
            <Image
              key={i}
              src="https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80"
              alt="Document Icon"
              width={30}
              height={30}
              className={`absolute ${position}`}
            />
          ))}
        </div>

        <div className={`absolute inset-0 transition-opacity duration-300 ${showOrganized ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#6633cc] rounded-lg" />
        </div>

        <Labels />
      </div>
    </div>
  )
}

function Labels() {
  return (
    <>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1 shadow-sm">
        Payroll Inputs →
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1 shadow-sm">
        ← Payroll Outputs
      </div>
    </>
  )
}

function CountryFlags() {
  const flagUrls = [
    'https://images.unsplash.com/photo-1551801841-ecad875a5142',
    'https://images.unsplash.com/photo-1551801841-ecad875a5143',
    'https://images.unsplash.com/photo-1551801841-ecad875a5144',
    'https://images.unsplash.com/photo-1551801841-ecad875a5145',
    'https://images.unsplash.com/photo-1551801841-ecad875a5146',
    'https://images.unsplash.com/photo-1551801841-ecad875a5147',
    'https://images.unsplash.com/photo-1551801841-ecad875a5148',
    'https://images.unsplash.com/photo-1551801841-ecad875a5149',
    'https://images.unsplash.com/photo-1551801841-ecad875a5150',
    'https://images.unsplash.com/photo-1551801841-ecad875a5151',
    'https://images.unsplash.com/photo-1551801841-ecad875a5152',
    'https://images.unsplash.com/photo-1551801841-ecad875a5153'
  ]

  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#f8f9fe] rounded-lg p-4 grid grid-cols-2 gap-2">
      {flagUrls.map((url, i) => (
        <Image
          key={i}
          src={`${url}?auto=format&fit=crop&q=80`}
          alt={`Country Flag ${i + 1}`}
          width={24}
          height={24}
          className="rounded-sm"
        />
      ))}
    </div>
  )
}