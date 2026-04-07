'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Database, Target, ShieldCheck } from 'lucide-react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LogarithmicScale } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, LogarithmicScale, BarElement, Title, Tooltip, Legend)

function Slide7Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 7

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
    labels: ['Processing Volume (TAM)', 'Mining Waste Mgmt (2033)', 'Tailings Mgmt (2035)'],
    datasets: [{
      label: 'Market Value (USD)',
      data: [3400, 360, 18.36],
      backgroundColor: ['#7ED957', '#56CCF2', '#5C7256'],
      borderColor: ['#7ED957', '#56CCF2', '#5C7256'],
      borderWidth: 2,
    }],
  }

  const chartOptions: any = {
    indexAxis: 'y' as const,
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
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
            const value = context?.parsed?.x ?? 0
            if (value >= 1000) {
              return `$${value}B ($${(value/1000).toFixed(1)}T)`
            }
            return `$${value}B`
          }
        }
      },
    },
    scales: {
      x: {
        type: 'logarithmic' as const,
        ticks: {
          color: '#8FAF88',
          font: { size: 16 },
          callback: function(value: any) {
            const val = parseFloat(value ?? '0')
            if (val >= 1000) return `$${(val/1000).toFixed(1)}T`
            if (val >= 1) return `$${val}B`
            return `$${val}B`
          }
        },
        grid: {
          color: '#7ED957',
          lineWidth: 0.5,
        },
        title: {
          display: true,
          text: 'Market Value (USD)',
          color: '#D4E8D0',
          font: { size: 18, weight: 'bold' as const },
        },
      },
      y: {
        ticks: {
          color: '#D4E8D0',
          font: { size: 18 },
        },
        grid: {
          display: false,
        },
      },
    },
  }

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-[#0B1D0E] flex flex-col font-source-sans">
      {/* Header */}
      <div className="flex-none px-20 pt-12 pb-8">
        <h1 className="font-rokkitt text-6xl font-bold text-[#D4E8D0] mb-2">
          Market Opportunity
        </h1>
        <p className="font-source-sans text-3xl text-[#8FAF88]">
          A Multi-Billion Dollar Market Growing at 4%+ Annually
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-20 grid grid-cols-2 gap-12">
        {/* Left Column - Chart */}
        <div className="flex flex-col justify-center items-center">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full" style={{ height: '500px' }}>
              <Bar data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Right Column - Stat Cards */}
        <div className="flex flex-col gap-8">
          {/* TAM Stat Card */}
          <div className="flex-1 min-h-0 bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <Database className="w-12 h-12 text-[#7ED957]" />
              <p className="font-source-sans text-3xl text-[#8FAF88] uppercase tracking-wide">
                Total Addressable Market
              </p>
            </div>
            <p className="font-rokkitt text-6xl font-bold text-[#D4E8D0] mb-2">
              282B tonnes
            </p>
            <p className="font-source-sans text-3xl text-[#8FAF88]">
              Existing tailings inventory + 14B tonnes added annually
            </p>
          </div>

          {/* SAM Stat Card */}
          <div className="flex-1 min-h-0 bg-[#0F2811] border border-[#56CCF2]/20 rounded-lg p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-12 h-12 text-[#56CCF2]" />
              <p className="font-source-sans text-3xl text-[#8FAF88] uppercase tracking-wide">
                Serviceable Addressable Market
              </p>
            </div>
            <p className="font-rokkitt text-6xl font-bold text-[#D4E8D0] mb-2">
              $360B
            </p>
            <p className="font-source-sans text-3xl text-[#8FAF88]">
              Mining waste management market by 2033
            </p>
          </div>

          {/* Market Driver Callout */}
          <div className="flex-1 min-h-0 bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-8 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4">
              <ShieldCheck className="w-12 h-12 text-[#7ED957]" />
              <p className="font-source-sans text-3xl text-[#8FAF88] uppercase tracking-wide">
                Key Market Driver
              </p>
            </div>
            <p className="font-rokkitt text-6xl font-bold text-[#7ED957] mb-2">
              GISTM
            </p>
            <p className="font-source-sans text-3xl text-[#8FAF88]">
              Global Industry Standard on Tailings Management — forcing operators to act
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
          Market Size
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide7() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide7Content />
    </Suspense>
  )
}
