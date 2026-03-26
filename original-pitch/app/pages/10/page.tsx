'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Package, FlaskConical, Zap, Droplets, Gem, RefreshCw, CheckCircle, ArrowRight } from 'lucide-react'

function Slide10Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 10

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
          Mass Balance
        </h1>
        <p className="font-source-sans text-3xl text-[#8FAF88]">
          Inputs → CMU Processing → Recoverable Outputs
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-20 flex flex-col gap-8">
        {/* Main Flow Row */}
        <div className="flex-1 min-h-0 flex items-center gap-6">
          {/* Inputs Block */}
          <div className="flex-none w-80 bg-[#0F2811] border-l-4 border-[#56CCF2] rounded-r-lg p-6">
            <p className="font-source-sans text-3xl text-[#56CCF2] uppercase tracking-wide font-bold mb-6">
              INPUTS
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Package className="w-8 h-8 text-[#56CCF2] flex-none" />
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  Mine tailings slurry
                </p>
              </div>
              <div className="flex items-start gap-3">
                <FlaskConical className="w-8 h-8 text-[#56CCF2] flex-none" />
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  HCl + NaClO₃ lixiviant
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="w-8 h-8 text-[#56CCF2] flex-none" />
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  Low-voltage DC power
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Droplets className="w-8 h-8 text-[#56CCF2] flex-none" />
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  Process water (recycled)
                </p>
              </div>
            </div>
          </div>

          {/* Arrow 1 */}
          <div className="flex-none flex flex-col items-center">
            <ArrowRight className="w-16 h-16 text-[#7ED957]" />
            <p className="font-source-sans text-3xl text-[#7ED957] mt-2">
              Leaching
            </p>
          </div>

          {/* CMU Process Block */}
          <div className="flex-1 min-w-0 bg-[#0F2811] border-2 border-[#7ED957] rounded-lg p-8 shadow-lg shadow-[#7ED957]/20">
            <div className="text-center mb-6">
              <h2 className="font-rokkitt text-6xl font-bold text-[#7ED957] mb-2">
                CMU
              </h2>
              <p className="font-source-sans text-3xl text-[#8FAF88]">
                Continuous Mining Unit
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <p className="font-source-sans text-3xl text-[#7ED957] font-bold flex-none">
                  1.
                </p>
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  Lixiviant dissolves metals
                </p>
              </div>
              <div className="flex items-start gap-3">
                <p className="font-source-sans text-3xl text-[#7ED957] font-bold flex-none">
                  2.
                </p>
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  Pregnant leach solution → electrolytic cell
                </p>
              </div>
              <div className="flex items-start gap-3">
                <p className="font-source-sans text-3xl text-[#7ED957] font-bold flex-none">
                  3.
                </p>
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  CETTS IEM separates ions
                </p>
              </div>
              <div className="flex items-start gap-3">
                <p className="font-source-sans text-3xl text-[#7ED957] font-bold flex-none">
                  4.
                </p>
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  Metal deposits on cathode
                </p>
              </div>
            </div>
          </div>

          {/* Arrow 2 */}
          <div className="flex-none flex flex-col items-center">
            <ArrowRight className="w-16 h-16 text-[#7ED957]" />
            <p className="font-source-sans text-3xl text-[#7ED957] mt-2">
              Electrowinning
            </p>
          </div>

          {/* Outputs Block */}
          <div className="flex-none w-80 bg-[#0F2811] border-l-4 border-[#7ED957] rounded-r-lg p-6">
            <p className="font-source-sans text-3xl text-[#7ED957] uppercase tracking-wide font-bold mb-6">
              OUTPUTS
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <Gem className="w-8 h-8 text-[#7ED957] flex-none" />
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  Pure metal powder (Au, Ag, Cu, Ni, Zn, REEs, PGMs)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="w-8 h-8 text-[#7ED957] flex-none" />
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  Regenerated lixiviant (recirculated)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Droplets className="w-8 h-8 text-[#7ED957] flex-none" />
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  Reclaimed process water
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-8 h-8 text-[#7ED957] flex-none" />
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  Treated, stabilized tailings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reagent Loop Banner */}
        <div className="flex-none bg-[#0F2811]/50 border-2 border-dashed border-[#7ED957] rounded-lg px-8 py-6">
          <div className="flex items-center gap-4">
            <RefreshCw className="w-12 h-12 text-[#7ED957] flex-none" />
            <p className="font-source-sans text-3xl text-[#8FAF88]">
              <span className="text-[#7ED957] font-bold">Closed Loop:</span> Regenerated reagents return to Step 01 — drastically reducing chemical consumption and waste output.
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
          Mass Balance
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide10() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide10Content />
    </Suspense>
  )
}
