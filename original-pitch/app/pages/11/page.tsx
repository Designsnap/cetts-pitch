'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

function Slide11Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 11

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

  const chartData = {
    labels: ['Pilot Build', 'Team Hiring', 'Testing & Certification', 'Ops & Legal'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ['#7ED957', '#56CCF2', '#8FAF88', '#5C7256'],
      borderColor: ['#7ED957', '#56CCF2', '#8FAF88', '#5C7256'],
      borderWidth: 2,
    }],
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: '#0F2811',
        titleColor: '#D4E8D0',
        bodyColor: '#8FAF88',
        borderColor: '#7ED957',
        borderWidth: 1,
        callbacks: {
          label: function(context: any) {
            return `${context?.label ?? ''}: ${context?.parsed ?? 0}%`
          }
        }
      },
    },
  }

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#0B1D0E] flex flex-col font-source-sans">
      {/* Header */}
      <div className="flex-none px-20 pt-12 pb-8">
        <h1 className="font-rokkitt text-6xl font-bold text-[#D4E8D0] mb-2">
          The Ask
        </h1>
        <p className="font-source-sans text-3xl text-[#7ED957] font-bold">
          $1.5M–$2M Seed Round
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-20 grid grid-cols-2 gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {/* Funding Ask Hero */}
          <div className="flex-none">
            <p className="font-rokkitt text-8xl font-bold text-[#7ED957] mb-2">
              $1.5M – $2M
            </p>
            <p className="font-source-sans text-4xl text-[#D4E8D0] mb-1">
              Seed Funding Round
            </p>
            <p className="font-source-sans text-3xl text-[#8FAF88]">
              Use of funds breakdown →
            </p>
          </div>

          {/* Donut Chart */}
          <div className="flex-1 min-h-0 flex items-center justify-center">
            <div className="w-full" style={{ height: '450px' }}>
              <Doughnut data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          {/* Use of Funds Legend */}
          <div className="flex-none flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0] flex-1">
                Pilot Build
              </p>
              <p className="font-source-sans text-3xl text-[#7ED957] font-bold">
                40%
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#56CCF2] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0] flex-1">
                Team Hiring
              </p>
              <p className="font-source-sans text-3xl text-[#56CCF2] font-bold">
                25%
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#8FAF88] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0] flex-1">
                Testing &amp; Certification
              </p>
              <p className="font-source-sans text-3xl text-[#8FAF88] font-bold">
                20%
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-[#5C7256] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0] flex-1">
                Ops &amp; Legal
              </p>
              <p className="font-source-sans text-3xl text-[#5C7256] font-bold">
                15%
              </p>
            </div>
          </div>

          {/* Milestone Roadmap */}
          <div className="flex-1 min-h-0 flex flex-col gap-6">
            <p className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-2">
              Key Milestones
            </p>

            {/* M1 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-16 h-16 rounded-full bg-[#7ED957]/20 border-2 border-[#7ED957] flex items-center justify-center">
                <p className="font-rokkitt text-3xl font-bold text-[#7ED957]">
                  M1
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-1">
                  Working Pilot Built
                </p>
                <p className="font-source-sans text-3xl text-[#8FAF88]">
                  CMU operational at lab/field scale
                </p>
              </div>
            </div>

            {/* M2 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-16 h-16 rounded-full bg-[#7ED957]/20 border-2 border-[#7ED957] flex items-center justify-center">
                <p className="font-rokkitt text-3xl font-bold text-[#7ED957]">
                  M2
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-1">
                  Lab Validation
                </p>
                <p className="font-source-sans text-3xl text-[#8FAF88]">
                  Third-party metal recovery rates confirmed
                </p>
              </div>
            </div>

            {/* M3 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-16 h-16 rounded-full bg-[#7ED957]/20 border-2 border-[#7ED957] flex items-center justify-center">
                <p className="font-rokkitt text-3xl font-bold text-[#7ED957]">
                  M3
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-1">
                  First Mining Partner LOI
                </p>
                <p className="font-source-sans text-3xl text-[#8FAF88]">
                  Letter of Intent signed with target operator
                </p>
              </div>
            </div>

            {/* M4 */}
            <div className="flex items-start gap-4">
              <div className="flex-none w-16 h-16 rounded-full bg-[#7ED957]/20 border-2 border-[#7ED957] flex items-center justify-center">
                <p className="font-rokkitt text-3xl font-bold text-[#7ED957]">
                  M4
                </p>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-rokkitt text-4xl font-bold text-[#D4E8D0] mb-1">
                  Series A Readiness
                </p>
                <p className="font-source-sans text-3xl text-[#8FAF88]">
                  Revenue-generating pilot, scalable model proven
                </p>
              </div>
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
          The Ask
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide11() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide11Content />
    </Suspense>
  )
}
