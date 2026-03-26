'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { FlaskConical, Zap, RefreshCw, Layers } from 'lucide-react'

function Slide4Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 4

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
          How It Works
        </h1>
        <p className="font-source-sans text-3xl text-[#8FAF88]">
          The Continuous Mining Unit (CMU) — 3-Step Closed Loop
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-20 flex flex-col gap-8">
        {/* Process Steps Row */}
        <div className="flex-1 min-h-0 grid grid-cols-3 gap-8">
          {/* Step 1: Leaching */}
          <div className="flex flex-col bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-8">
            <div className="flex-none mb-4">
              <p className="font-rokkitt text-6xl font-bold text-[#7ED957] mb-2">
                01
              </p>
              <FlaskConical className="w-16 h-16 text-[#7ED957] mb-4" />
              <h2 className="font-rokkitt text-5xl font-bold text-[#D4E8D0] mb-4">
                Leaching
              </h2>
            </div>
            <div className="flex-1 min-h-0 flex flex-col gap-4">
              <p className="font-source-sans text-3xl text-[#8FAF88] leading-relaxed">
                HCl + NaClO₃ lixiviant dissolves target metals from tailings slurry at room temperature — including rhodium and noble metals.
              </p>
              <div className="flex-none mt-auto pt-4 border-t border-[#7ED957]/20">
                <p className="font-source-sans text-3xl text-[#5C7256] italic">
                  Input: Tailings slurry + lixiviant
                </p>
              </div>
            </div>
          </div>

          {/* Step 2: Electrowinning */}
          <div className="flex flex-col bg-[#0F2811] border border-[#56CCF2]/20 rounded-lg p-8">
            <div className="flex-none mb-4">
              <p className="font-rokkitt text-6xl font-bold text-[#7ED957] mb-2">
                02
              </p>
              <Zap className="w-16 h-16 text-[#56CCF2] mb-4" />
              <h2 className="font-rokkitt text-5xl font-bold text-[#D4E8D0] mb-4">
                Electrowinning
              </h2>
            </div>
            <div className="flex-1 min-h-0 flex flex-col gap-4">
              <p className="font-source-sans text-3xl text-[#8FAF88] leading-relaxed">
                Pregnant leach solution flows through the electrolytic cell. The CETTS IEM separates anode/cathode. Electric current deposits pure metal powder on cathode.
              </p>
              <div className="flex-none mt-auto pt-4 border-t border-[#56CCF2]/20">
                <p className="font-source-sans text-3xl text-[#5C7256] italic">
                  Output: Pure metal powder
                </p>
              </div>
            </div>
          </div>

          {/* Step 3: Reagent Regeneration */}
          <div className="flex flex-col bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-8">
            <div className="flex-none mb-4">
              <p className="font-rokkitt text-6xl font-bold text-[#7ED957] mb-2">
                03
              </p>
              <RefreshCw className="w-16 h-16 text-[#7ED957] mb-4" />
              <h2 className="font-rokkitt text-5xl font-bold text-[#D4E8D0] mb-4">
                Reagent Regeneration
              </h2>
            </div>
            <div className="flex-1 min-h-0 flex flex-col gap-4">
              <p className="font-source-sans text-3xl text-[#8FAF88] leading-relaxed">
                Depleted solution recirculates to the anode. Acid is electrochemically regenerated — ready to leach again. Zero discharge.
              </p>
              <div className="flex-none mt-auto pt-4 border-t border-[#7ED957]/20">
                <p className="font-source-sans text-3xl text-[#5C7256] italic">
                  Output: Regenerated lixiviant → back to Step 01
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* IEM Callout Banner */}
        <div className="flex-none bg-[#0F2811]/50 border-l-4 border-[#7ED957] rounded-r-lg px-8 py-6">
          <div className="flex items-center gap-4">
            <Layers className="w-12 h-12 text-[#7ED957] flex-none" />
            <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <p className="font-source-sans text-3xl text-[#D4E8D0] font-bold">
                Enabled by the CETTS IEM:
              </p>
              <p className="font-source-sans text-3xl text-[#8FAF88]">
                &lt;$1/sq. yd. manufacturing cost
              </p>
              <p className="font-source-sans text-3xl text-[#8FAF88]">
                100–200 mA/cm² current density
              </p>
              <p className="font-source-sans text-3xl text-[#8FAF88]">
                pH 0 stability, months of proven durability
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
          How It Works
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide4() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide4Content />
    </Suspense>
  )
}
