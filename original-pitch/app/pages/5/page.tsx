'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { User, HardHat, Zap, Leaf, TrendingUp } from 'lucide-react'

function Slide5Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 5

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
          Team &amp; Advisory
        </h1>
        <p className="font-source-sans text-3xl text-[#8FAF88]">
          Deep Tech Expertise + Industry Network
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-20 grid grid-cols-[1fr_3fr] gap-8">
        {/* Left Column - Founder */}
        <div className="flex flex-col justify-center items-center">
          <div className="bg-[#0F2811] border-2 border-[#7ED957] rounded-lg p-8 flex flex-col items-center gap-6">
            <div className="w-32 h-32 rounded-full bg-[#7ED957]/20 flex items-center justify-center">
              <User className="w-20 h-20 text-[#7ED957]" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="px-4 py-1 rounded-full bg-[#7ED957]/20 border border-[#7ED957]/40">
                <p className="font-source-sans text-3xl text-[#7ED957] font-bold">
                  Core Team
                </p>
              </div>
              <h2 className="font-rokkitt text-5xl font-bold text-[#D4E8D0] text-center">
                Robert Karas
              </h2>
              <p className="font-source-sans text-3xl text-[#8FAF88] text-center">
                Founder &amp; CTO
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  • Inventor of CETTS IEM technology
                </p>
              </div>
              <div className="flex items-start gap-2">
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  • Open-source electrochemical process (GitHub: Rowow1)
                </p>
              </div>
              <div className="flex items-start gap-2">
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  • Patent application filed: US 19/531,984
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="absolute left-[calc(20%+5rem)] top-[180px] bottom-[80px] w-0.5 bg-[#7ED957]" />

        {/* Right Column - Advisory Grid */}
        <div className="grid grid-cols-2 grid-rows-2 gap-8">
          {/* Mining Veteran */}
          <div className="bg-[#0F2811] border-2 border-dashed border-[#56CCF2]/40 rounded-lg p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <HardHat className="w-12 h-12 text-[#56CCF2]" />
              <div className="px-3 py-1 rounded-full bg-[#8FAF88]/20 border border-[#8FAF88]/40">
                <p className="font-source-sans text-3xl text-[#8FAF88]">
                  Recruiting
                </p>
              </div>
            </div>
            <h3 className="font-rokkitt text-4xl font-bold text-[#D4E8D0]">
              Mining Industry Veteran
            </h3>
            <p className="font-source-sans text-3xl text-[#8FAF88]">
              Operational expertise, industry relationships, TSF management
            </p>
          </div>

          {/* Electrochemistry Expert */}
          <div className="bg-[#0F2811] border-2 border-dashed border-[#56CCF2]/40 rounded-lg p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Zap className="w-12 h-12 text-[#56CCF2]" />
              <div className="px-3 py-1 rounded-full bg-[#8FAF88]/20 border border-[#8FAF88]/40">
                <p className="font-source-sans text-3xl text-[#8FAF88]">
                  Recruiting
                </p>
              </div>
            </div>
            <h3 className="font-rokkitt text-4xl font-bold text-[#D4E8D0]">
              Electrochemistry Expert
            </h3>
            <p className="font-source-sans text-3xl text-[#8FAF88]">
              IEM validation, electrolytic cell optimization, academic credibility
            </p>
          </div>

          {/* Environmental Specialist */}
          <div className="bg-[#0F2811] border-2 border-dashed border-[#56CCF2]/40 rounded-lg p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Leaf className="w-12 h-12 text-[#56CCF2]" />
              <div className="px-3 py-1 rounded-full bg-[#8FAF88]/20 border border-[#8FAF88]/40">
                <p className="font-source-sans text-3xl text-[#8FAF88]">
                  Recruiting
                </p>
              </div>
            </div>
            <h3 className="font-rokkitt text-4xl font-bold text-[#D4E8D0]">
              Environmental Specialist
            </h3>
            <p className="font-source-sans text-3xl text-[#8FAF88]">
              GISTM compliance, permitting, ESG positioning
            </p>
          </div>

          {/* Cleantech Investor */}
          <div className="bg-[#0F2811] border-2 border-dashed border-[#56CCF2]/40 rounded-lg p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <TrendingUp className="w-12 h-12 text-[#56CCF2]" />
              <div className="px-3 py-1 rounded-full bg-[#8FAF88]/20 border border-[#8FAF88]/40">
                <p className="font-source-sans text-3xl text-[#8FAF88]">
                  Recruiting
                </p>
              </div>
            </div>
            <h3 className="font-rokkitt text-4xl font-bold text-[#D4E8D0]">
              Cleantech Investor
            </h3>
            <p className="font-source-sans text-3xl text-[#8FAF88]">
              Series A bridge, investor network, valuation strategy
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
          Team &amp; Advisory
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide5() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide5Content />
    </Suspense>
  )
}
