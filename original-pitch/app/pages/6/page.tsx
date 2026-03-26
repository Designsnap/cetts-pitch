'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Image from 'next/image'
import { Cpu, Wifi, BarChart2 } from 'lucide-react'

function Slide6Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 6

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
          AI-Augmented Operations
        </h1>
        <p className="font-source-sans text-3xl text-[#8FAF88]">
          Autonomous, Remotely Monitored, Continuously Optimized
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-20 grid grid-cols-[3fr_2fr] gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {/* Central Tagline */}
          <div className="flex-none">
            <div className="border-b-4 border-[#7ED957] pb-4">
              <h2 className="font-rokkitt text-6xl font-bold text-[#D4E8D0]">
                One operator. Multiple sites. Zero downtime.
              </h2>
            </div>
          </div>

          {/* Capability Cards */}
          <div className="flex-1 min-h-0 flex flex-col gap-6">
            {/* Automated Process Control */}
            <div className="flex-1 min-h-0 flex items-start gap-6 pb-6 border-b border-[#7ED957]/20">
              <div className="flex-none">
                <div className="w-16 h-16 rounded-lg bg-[#7ED957]/20 flex items-center justify-center">
                  <Cpu className="w-10 h-10 text-[#7ED957]" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-2">
                  Automated Process Control
                </h3>
                <p className="font-source-sans text-3xl text-[#8FAF88] leading-relaxed">
                  DCS/PLC systems regulate leach chemistry, flow rates, and electrowinning parameters in real time.
                </p>
              </div>
            </div>

            {/* Remote Monitoring */}
            <div className="flex-1 min-h-0 flex items-start gap-6 pb-6 border-b border-[#7ED957]/20">
              <div className="flex-none">
                <div className="w-16 h-16 rounded-lg bg-[#7ED957]/20 flex items-center justify-center">
                  <Wifi className="w-10 h-10 text-[#7ED957]" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-2">
                  Remote Monitoring
                </h3>
                <p className="font-source-sans text-3xl text-[#8FAF88] leading-relaxed">
                  Sensor telemetry streams to a central dashboard — enabling multi-site oversight from a single control room.
                </p>
              </div>
            </div>

            {/* Continuous Optimization */}
            <div className="flex-1 min-h-0 flex items-start gap-6">
              <div className="flex-none">
                <div className="w-16 h-16 rounded-lg bg-[#7ED957]/20 flex items-center justify-center">
                  <BarChart2 className="w-10 h-10 text-[#7ED957]" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-2">
                  Continuous Optimization
                </h3>
                <p className="font-source-sans text-3xl text-[#8FAF88] leading-relaxed">
                  AI-driven analytics flag anomalies, predict membrane wear, and optimize recovery rates automatically.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative w-full h-full">
          <Image
            src="https://cdn.abacus.ai/images/92e87c5d-7e0e-4bf5-b0c7-e628e9d2e4e9.png"
            alt="Futuristic industrial remote operations control room with data dashboards"
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
          AI-Augmented Operations
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide6() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide6Content />
    </Suspense>
  )
}
