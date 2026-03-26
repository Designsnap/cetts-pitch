'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Image from 'next/image'
import { RefreshCw, Thermometer, Layers, DollarSign, Globe } from 'lucide-react'

function Slide3Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 3

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
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#0B1D0E] flex flex-col font-source-sans">
      {/* Header */}
      <div className="flex-none px-20 pt-12 pb-8">
        <h1 className="font-rokkitt text-6xl font-bold text-[#D4E8D0] mb-2">
          The Solution
        </h1>
        <p className="font-source-sans text-3xl text-[#8FAF88]">
          CETTS Closed-Loop Metal Recovery
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-20 grid grid-cols-[2fr_3fr] gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {/* Solution Summary */}
          <div className="flex-none">
            <p className="font-source-sans text-3xl text-[#8FAF88] leading-relaxed">
              A continuous, room-temperature electrochemical process that dissolves and recovers metals from tailings — then regenerates its own reagents.
            </p>
          </div>

          {/* Key Benefits List */}
          <div className="flex-1 min-h-0 flex flex-col gap-6 border-l-4 border-[#7ED957] pl-6">
            <div className="flex items-start gap-4">
              <RefreshCw className="w-10 h-10 text-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0]">
                Closed-loop — reagents regenerated on-site
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Thermometer className="w-10 h-10 text-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0]">
                Room temperature — no smelting energy costs
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Layers className="w-10 h-10 text-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0]">
                Recovers gold, silver, copper, REEs, PGMs
              </p>
            </div>
            <div className="flex items-start gap-4">
              <DollarSign className="w-10 h-10 text-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0]">
                IEM membrane costs less than $1 per sq. yard
              </p>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-10 h-10 text-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0]">
                Aligned with GISTM &amp; circular economy standards
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full h-full">
          <Image
            src="https://cdn.abacus.ai/images/fe69bcc6-f05c-4fb4-9e7d-69db87489191.jpg"
            alt="3D render of modular industrial electrochemical processing unit"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none px-20 py-6 flex items-center justify-between">
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CETTS / Rowow
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          Solution Overview
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide3() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide3Content />
    </Suspense>
  )
}
