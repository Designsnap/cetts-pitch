
'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Image from 'next/image'
import { Mail, Globe } from 'lucide-react'

function Slide1Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 1

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && current < total) {
        router.push(`/pages/${current + 1}?total=${total}`)
      } else if (e.key === 'ArrowLeft' && current > 1) {
        router.push(`/pages/${current - 1}?total=${total}`)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [current, total, router])

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#0B1D0E]">
      <div className="grid grid-cols-[1fr_1fr] w-full h-full">
        {/* Left Column */}
        <div className="flex flex-col justify-center items-start px-20 gap-8">
          {/* Eyebrow Label */}
          <div className="flex-none">
            <div className="inline-block px-6 py-2 rounded-full bg-[#7ED957]/10 border border-[#7ED957]/30">
              <p className="font-source-sans text-3xl uppercase tracking-widest text-[#7ED957] font-bold">
                SEED ROUND — 2026
              </p>
            </div>
          </div>

          {/* Company Title */}
          <div className="flex-none">
            <h1 className="font-rokkitt text-9xl font-bold text-[#D4E8D0] leading-tight">
              CETTS / Rowow
            </h1>
            <h2 className="font-rokkitt text-7xl font-bold text-[#D4E8D0] mt-2">
              SEM TECH
            </h2>
          </div>

          {/* Tagline */}
          <div className="flex-none max-w-2xl">
            <p className="font-source-sans text-4xl italic text-[#8FAF88]">
              Turning Mine Waste into Sustainable Metal.
            </p>
          </div>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Founder Info */}
          <div className="flex-none">
            <p className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-2">
              Robert Karas
            </p>
            <p className="font-source-sans text-3xl text-[#8FAF88] mb-4">
              Founder &amp; CTO
            </p>
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-6 h-6 text-[#7ED957]" />
              <p className="font-source-sans text-3xl text-[#8FAF88]">
                investors@rowow.net
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-[#7ED957]" />
              <p className="font-source-sans text-3xl text-[#8FAF88]">
                rowow.net
              </p>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-[#7ED957]" />

        {/* Right Column - Cover Image */}
        <div className="relative w-full h-full">
          <Image
            src="https://cdn.abacus.ai/images/4d1ceec8-c096-4efd-8696-4cfc3616b491.png"
            alt="Aerial view of industrial mine tailings pond at dusk"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default function Slide1() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide1Content />
    </Suspense>
  )
}