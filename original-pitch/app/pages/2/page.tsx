'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { AlertTriangle, TrendingUp, DollarSign, Gem } from 'lucide-react'

function Slide2Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 2

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
          The Problem
        </h1>
        <p className="font-source-sans text-3xl text-[#8FAF88]">
          A Crisis — and a Multi-Trillion Dollar Opportunity
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-20 flex flex-col">
        {/* Central Headline */}
        <div className="flex-none py-8 flex justify-center">
          <div className="border-l-4 border-[#56CCF2] pl-6">
            <p className="font-rokkitt text-5xl text-[#D4E8D0] italic">
              223 billion tonnes of toxic waste — sitting on $3.4 trillion in metals.
            </p>
          </div>
        </div>

        {/* Stat Cards Grid */}
        <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-8">
          {/* TSF Count */}
          <div className="flex flex-col justify-center items-center bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-8">
            <AlertTriangle className="w-20 h-20 text-[#7ED957] mb-4" />
            <p className="font-rokkitt text-7xl font-bold text-[#D4E8D0] mb-2">
              35,000+
            </p>
            <p className="font-source-sans text-3xl text-[#8FAF88] text-center">
              Tailings storage facilities worldwide
            </p>
          </div>

          {/* Annual Generation */}
          <div className="flex flex-col justify-center items-center bg-[#0F2811] border border-[#56CCF2]/20 rounded-lg p-8">
            <TrendingUp className="w-20 h-20 text-[#56CCF2] mb-4" />
            <p className="font-rokkitt text-7xl font-bold text-[#D4E8D0] mb-2">
              8B tonnes
            </p>
            <p className="font-source-sans text-3xl text-[#8FAF88] text-center">
              New tailings generated every year
            </p>
          </div>

          {/* Public Liability */}
          <div className="flex flex-col justify-center items-center bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-8">
            <DollarSign className="w-20 h-20 text-[#7ED957] mb-4" />
            <p className="font-rokkitt text-7xl font-bold text-[#D4E8D0] mb-2">
              $7B+
            </p>
            <p className="font-source-sans text-3xl text-[#8FAF88] text-center">
              Unfunded public liability from failures (2010–2020)
            </p>
          </div>

          {/* Metal Value */}
          <div className="flex flex-col justify-center items-center bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-8">
            <Gem className="w-20 h-20 text-[#7ED957] mb-4" />
            <p className="font-rokkitt text-7xl font-bold text-[#7ED957] mb-2">
              $3.4T
            </p>
            <p className="font-source-sans text-3xl text-[#8FAF88] text-center">
              Estimated value of metals locked in active tailings
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none px-20 py-6 flex items-center justify-between">
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CETTS / Rowow
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          The Problem
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide2() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide2Content />
    </Suspense>
  )
}
