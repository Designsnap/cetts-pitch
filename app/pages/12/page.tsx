'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { FlaskConical, Users, ShieldAlert, DollarSign, ArrowRight } from 'lucide-react'

function Slide12Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 12

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
          We Know What You're Thinking
        </h1>
        <p className="font-source-sans text-3xl text-[#8FAF88]">
          Risk Factors &amp; How We Mitigate Them
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-20 flex flex-col gap-6">
        {/* Grid of Risk Cards */}
        <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-8">
          {/* Technology Risk */}
          <div className="flex bg-[#0F2811] border border-[#7ED957]/20 rounded-lg overflow-hidden">
            {/* Risk Side */}
            <div className="flex-1 min-w-0 bg-[#E05C5C]/10 border-r-2 border-[#7ED957] p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical className="w-10 h-10 text-[#7ED957]" />
                <p className="font-source-sans text-3xl text-[#8FAF88] uppercase tracking-wide">
                  Risk
                </p>
              </div>
              <p className="font-source-sans text-3xl text-[#E05C5C] leading-relaxed">
                IEM durability at industrial scale unproven
              </p>
            </div>
            {/* Arrow */}
            <div className="flex-none flex items-center px-4 bg-[#0F2811]">
              <ArrowRight className="w-12 h-12 text-[#7ED957]" />
            </div>
            {/* Mitigation Side */}
            <div className="flex-1 min-w-0 bg-[#7ED957]/5 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <p className="font-source-sans text-3xl text-[#8FAF88] uppercase tracking-wide">
                  Mitigation
                </p>
              </div>
              <p className="font-source-sans text-3xl text-[#7ED957] leading-relaxed">
                Rigorous third-party pilot testing. R&amp;D into alternative polymers. Months of pH 0 field operation already logged.
              </p>
            </div>
          </div>

          {/* Market Adoption Risk */}
          <div className="flex bg-[#0F2811] border border-[#7ED957]/20 rounded-lg overflow-hidden">
            {/* Risk Side */}
            <div className="flex-1 min-w-0 bg-[#E05C5C]/10 border-r-2 border-[#7ED957] p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-10 h-10 text-[#7ED957]" />
                <p className="font-source-sans text-3xl text-[#8FAF88] uppercase tracking-wide">
                  Risk
                </p>
              </div>
              <p className="font-source-sans text-3xl text-[#E05C5C] leading-relaxed">
                Conservative mining industry resists new tech
              </p>
            </div>
            {/* Arrow */}
            <div className="flex-none flex items-center px-4 bg-[#0F2811]">
              <ArrowRight className="w-12 h-12 text-[#7ED957]" />
            </div>
            {/* Mitigation Side */}
            <div className="flex-1 min-w-0 bg-[#7ED957]/5 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <p className="font-source-sans text-3xl text-[#8FAF88] uppercase tracking-wide">
                  Mitigation
                </p>
              </div>
              <p className="font-source-sans text-3xl text-[#7ED957] leading-relaxed">
                Phased deployment starting with small modular pilots. Partner with established engineering firms for validation and credibility.
              </p>
            </div>
          </div>

          {/* Regulatory Risk */}
          <div className="flex bg-[#0F2811] border border-[#7ED957]/20 rounded-lg overflow-hidden">
            {/* Risk Side */}
            <div className="flex-1 min-w-0 bg-[#E05C5C]/10 border-r-2 border-[#7ED957] p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="w-10 h-10 text-[#7ED957]" />
                <p className="font-source-sans text-3xl text-[#8FAF88] uppercase tracking-wide">
                  Risk
                </p>
              </div>
              <p className="font-source-sans text-3xl text-[#E05C5C] leading-relaxed">
                Complex multi-jurisdiction permitting
              </p>
            </div>
            {/* Arrow */}
            <div className="flex-none flex items-center px-4 bg-[#0F2811]">
              <ArrowRight className="w-12 h-12 text-[#7ED957]" />
            </div>
            {/* Mitigation Side */}
            <div className="flex-1 min-w-0 bg-[#7ED957]/5 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <p className="font-source-sans text-3xl text-[#8FAF88] uppercase tracking-wide">
                  Mitigation
                </p>
              </div>
              <p className="font-source-sans text-3xl text-[#7ED957] leading-relaxed">
                Dedicated Environmental Compliance Lead. Operations aligned with GISTM from day one. Begin in favorable jurisdictions.
              </p>
            </div>
          </div>

          {/* Capital Risk */}
          <div className="flex bg-[#0F2811] border border-[#7ED957]/20 rounded-lg overflow-hidden">
            {/* Risk Side */}
            <div className="flex-1 min-w-0 bg-[#E05C5C]/10 border-r-2 border-[#7ED957] p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-10 h-10 text-[#7ED957]" />
                <p className="font-source-sans text-3xl text-[#8FAF88] uppercase tracking-wide">
                  Risk
                </p>
              </div>
              <p className="font-source-sans text-3xl text-[#E05C5C] leading-relaxed">
                Scaling to millions of tonnes requires significant capital
              </p>
            </div>
            {/* Arrow */}
            <div className="flex-none flex items-center px-4 bg-[#0F2811]">
              <ArrowRight className="w-12 h-12 text-[#7ED957]" />
            </div>
            {/* Mitigation Side */}
            <div className="flex-1 min-w-0 bg-[#7ED957]/5 p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <p className="font-source-sans text-3xl text-[#8FAF88] uppercase tracking-wide">
                  Mitigation
                </p>
              </div>
              <p className="font-source-sans text-3xl text-[#7ED957] leading-relaxed">
                Revenue-first strategy: generate early cash from per-ton fees before large capex. JV model shares investment burden with partners.
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
          Risk Mitigation
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide12() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide12Content />
    </Suspense>
  )
}
