'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

function Slide9Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 9

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
          Competitive Landscape
        </h1>
        <p className="font-source-sans text-3xl text-[#8FAF88]">
          CETTS vs. Conventional Tailings Treatment
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body - Comparison Table */}
      <div className="flex-1 min-h-0 px-20 flex flex-col">
        <div className="flex-1 min-h-0 overflow-visible">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#0F2811]">
                <th className="border border-[#7ED957]/20 px-4 py-4 text-left">
                  <p className="font-source-sans text-3xl text-[#D4E8D0] font-bold">
                    Criterion
                  </p>
                </th>
                <th className="border border-[#7ED957]/40 px-4 py-4 bg-[#7ED957]/10">
                  <p className="font-source-sans text-3xl text-[#7ED957] font-bold">
                    CETTS / Rowow
                  </p>
                </th>
                <th className="border border-[#7ED957]/20 px-4 py-4">
                  <p className="font-source-sans text-3xl text-[#D4E8D0] font-bold">
                    Cyanidation
                  </p>
                </th>
                <th className="border border-[#7ED957]/20 px-4 py-4">
                  <p className="font-source-sans text-3xl text-[#D4E8D0] font-bold">
                    Smelting / Pyrometallurgy
                  </p>
                </th>
                <th className="border border-[#7ED957]/20 px-4 py-4">
                  <p className="font-source-sans text-3xl text-[#D4E8D0] font-bold">
                    Cemented Paste Backfill
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Metal Recovery */}
              <tr className="bg-[#0B1D0E]">
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    Metal Recovery
                  </p>
                </td>
                <td className="border border-[#7ED957]/40 px-4 py-3 bg-[#7ED957]/5">
                  <p className="font-source-sans text-3xl text-[#7ED957]">
                    ✓ Au, Ag, Cu, Ni, Zn, REEs, PGMs, Rh
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    ✓ Au, Ag only
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    ✓ Base metals (high grade)
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#E05C5C]">
                    ✗ None — metals buried
                  </p>
                </td>
              </tr>

              {/* Operating Temp */}
              <tr className="bg-[#0F2811]/30">
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    Operating Temp
                  </p>
                </td>
                <td className="border border-[#7ED957]/40 px-4 py-3 bg-[#7ED957]/5">
                  <p className="font-source-sans text-3xl text-[#7ED957]">
                    ✓ Room temperature
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    ✓ Ambient
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#E05C5C]">
                    ✗ 1200°C+
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    ✓ Ambient
                  </p>
                </td>
              </tr>

              {/* Reagent Reuse */}
              <tr className="bg-[#0B1D0E]">
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    Reagent Reuse
                  </p>
                </td>
                <td className="border border-[#7ED957]/40 px-4 py-3 bg-[#7ED957]/5">
                  <p className="font-source-sans text-3xl text-[#7ED957]">
                    ✓ Closed-loop regeneration
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#E05C5C]">
                    ✗ Fresh cyanide required
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#E05C5C]">
                    ✗ Flux consumed
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#E05C5C]">
                    ✗ Cement consumed
                  </p>
                </td>
              </tr>

              {/* Toxic Waste Output */}
              <tr className="bg-[#0F2811]/30">
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    Toxic Waste Output
                  </p>
                </td>
                <td className="border border-[#7ED957]/40 px-4 py-3 bg-[#7ED957]/5">
                  <p className="font-source-sans text-3xl text-[#7ED957]">
                    ✓ Near zero
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#E05C5C]">
                    ✗ Cyanide tailings require treatment
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#E05C5C]">
                    ✗ Slag and gas emissions
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    ~ Backfill leaching risk
                  </p>
                </td>
              </tr>

              {/* IEM / Key Input Cost */}
              <tr className="bg-[#0B1D0E]">
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    IEM / Key Input Cost
                  </p>
                </td>
                <td className="border border-[#7ED957]/40 px-4 py-3 bg-[#7ED957]/5">
                  <p className="font-source-sans text-3xl text-[#7ED957]">
                    ✓ &lt;$1/sq. yd.
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    N/A
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    N/A
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    N/A
                  </p>
                </td>
              </tr>

              {/* Regulatory Trend */}
              <tr className="bg-[#0F2811]/30">
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    Regulatory Trend
                  </p>
                </td>
                <td className="border border-[#7ED957]/40 px-4 py-3 bg-[#7ED957]/5">
                  <p className="font-source-sans text-3xl text-[#7ED957]">
                    ✓ Aligned with GISTM
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#E05C5C]">
                    ✗ Increasing restrictions
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#E05C5C]">
                    ✗ High carbon scrutiny
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    ~ Accepted but not preferred
                  </p>
                </td>
              </tr>

              {/* Revenue Generation */}
              <tr className="bg-[#0B1D0E]">
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    Revenue Generation
                  </p>
                </td>
                <td className="border border-[#7ED957]/40 px-4 py-3 bg-[#7ED957]/5">
                  <p className="font-source-sans text-3xl text-[#7ED957]">
                    ✓ Turns cost center to profit
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    ~ Partial recovery
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#8FAF88]">
                    ~ Partial recovery
                  </p>
                </td>
                <td className="border border-[#7ED957]/20 px-4 py-3">
                  <p className="font-source-sans text-3xl text-[#E05C5C]">
                    ✗ No revenue
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer */}
      <div className="flex-none px-20 py-6 flex items-center justify-between">
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CETTS / Rowow
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          Competitive Landscape
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide9() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide9Content />
    </Suspense>
  )
}
