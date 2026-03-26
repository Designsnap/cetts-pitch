'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { FileText, Scale, Handshake, Users } from 'lucide-react'

function Slide8Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 8

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
          Business Model
        </h1>
        <p className="font-source-sans text-3xl text-[#8FAF88]">
          Three Flexible Revenue Streams for Maximum Market Penetration
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-20 flex flex-col gap-8">
        {/* Revenue Stream Cards */}
        <div className="flex-1 min-h-0 grid grid-cols-3 gap-8">
          {/* Stream 1: Technology Licensing */}
          <div className="flex flex-col bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-8">
            <div className="flex-none mb-4">
              <p className="font-rokkitt text-6xl font-bold text-[#7ED957] mb-4">
                01
              </p>
              <FileText className="w-16 h-16 text-[#7ED957] mb-6" />
              <h2 className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-4">
                Technology Licensing
              </h2>
            </div>
            <div className="flex-1 min-h-0 flex flex-col">
              <p className="font-source-sans text-3xl text-[#8FAF88] leading-relaxed mb-auto">
                License process IP to mining operators. Ongoing royalty as % of Net Smelter Return (NSR).
              </p>
              <div className="flex-none mt-6 pt-4 border-t border-[#7ED957]/20">
                <div className="px-4 py-2 rounded-full bg-[#7ED957]/20 border border-[#7ED957]/40 inline-block">
                  <p className="font-source-sans text-3xl text-[#7ED957] font-bold">
                    Recurring Revenue
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stream 2: Per-Ton Processing Fees */}
          <div className="flex flex-col bg-[#0F2811] border border-[#56CCF2]/20 rounded-lg p-8">
            <div className="flex-none mb-4">
              <p className="font-rokkitt text-6xl font-bold text-[#7ED957] mb-4">
                02
              </p>
              <Scale className="w-16 h-16 text-[#56CCF2] mb-6" />
              <h2 className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-4">
                Per-Ton Processing Fees
              </h2>
            </div>
            <div className="flex-1 min-h-0 flex flex-col">
              <p className="font-source-sans text-3xl text-[#8FAF88] leading-relaxed mb-auto">
                Operate CMU on-site and charge per tonne of tailings processed. Ideal for smaller operators and pilots.
              </p>
              <div className="flex-none mt-6 pt-4 border-t border-[#56CCF2]/20">
                <div className="px-4 py-2 rounded-full bg-[#56CCF2]/20 border border-[#56CCF2]/40 inline-block">
                  <p className="font-source-sans text-3xl text-[#56CCF2] font-bold">
                    Volume-Based
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stream 3: Joint Ventures */}
          <div className="flex flex-col bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-8">
            <div className="flex-none mb-4">
              <p className="font-rokkitt text-6xl font-bold text-[#7ED957] mb-4">
                03
              </p>
              <Handshake className="w-16 h-16 text-[#7ED957] mb-6" />
              <h2 className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-4">
                Joint Ventures
              </h2>
            </div>
            <div className="flex-1 min-h-0 flex flex-col">
              <p className="font-source-sans text-3xl text-[#8FAF88] leading-relaxed mb-auto">
                Partner directly with mine owners on large reprocessing projects. Share capital and profits.
              </p>
              <div className="flex-none mt-6 pt-4 border-t border-[#7ED957]/20">
                <div className="px-4 py-2 rounded-full bg-[#7ED957]/20 border border-[#7ED957]/40 inline-block">
                  <p className="font-source-sans text-3xl text-[#7ED957] font-bold">
                    High Upside
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Target Clientele Banner */}
        <div className="flex-none bg-[#0F2811]/50 border-l-4 border-[#7ED957] rounded-r-lg px-8 py-6">
          <div className="flex items-center gap-6">
            <Users className="w-12 h-12 text-[#7ED957] flex-none" />
            <p className="font-source-sans text-3xl text-[#D4E8D0] font-bold">
              Target Clients:
            </p>
            <div className="flex items-center gap-6 flex-wrap">
              <p className="font-source-sans text-3xl text-[#8FAF88]">
                Legacy TSF owners
              </p>
              <p className="font-source-sans text-3xl text-[#5C7256]">
                •
              </p>
              <p className="font-source-sans text-3xl text-[#8FAF88]">
                ESG-focused operators
              </p>
              <p className="font-source-sans text-3xl text-[#5C7256]">
                •
              </p>
              <p className="font-source-sans text-3xl text-[#8FAF88]">
                Critical mineral producers
              </p>
              <p className="font-source-sans text-3xl text-[#5C7256]">
                •
              </p>
              <p className="font-source-sans text-3xl text-[#8FAF88]">
                Junior miners
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none px-20 py-6 flex items-center justify-between">
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CETTS / Rowow
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          Business Model
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide8() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide8Content />
    </Suspense>
  )
}
