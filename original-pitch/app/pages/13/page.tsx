'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { Mail, Globe, Github, FileCode, Beaker, Zap, Settings, Leaf, Briefcase, Wrench } from 'lucide-react'

function Slide13Content() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const total = parseInt(searchParams?.get('total') ?? '13', 10)
  const current = 13

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
          Get In Touch
        </h1>
        <p className="font-source-sans text-3xl text-[#7ED957]">
          Invest. Partner. Join Us.
        </p>
        <div className="w-full h-0.5 bg-[#7ED957] mt-4" />
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 px-20 grid grid-cols-2 gap-12">
        {/* Left Column - Contact */}
        <div className="flex flex-col gap-8">
          {/* CTA Headline */}
          <div className="flex-none">
            <h2 className="font-rokkitt text-5xl font-bold text-[#D4E8D0]">
              Ready to turn waste into wealth?
            </h2>
          </div>

          {/* Contact Details */}
          <div className="flex-none flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Mail className="w-10 h-10 text-[#7ED957] flex-none" />
              <a href="mailto:investors@rowow.net" className="font-source-sans text-3xl text-[#D4E8D0] hover:text-[#7ED957] transition-colors">
                investors@rowow.net
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Globe className="w-10 h-10 text-[#7ED957] flex-none" />
              <a href="https://rowow.net" target="_blank" rel="noopener noreferrer" className="font-source-sans text-3xl text-[#D4E8D0] hover:text-[#7ED957] transition-colors">
                rowow.net
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Github className="w-10 h-10 text-[#7ED957] flex-none" />
              <a href="https://github.com/Rowow1" target="_blank" rel="noopener noreferrer" className="font-source-sans text-3xl text-[#D4E8D0] hover:text-[#7ED957] transition-colors">
                github.com/Rowow1
              </a>
            </div>
            <div className="flex items-start gap-4">
              <FileCode className="w-10 h-10 text-[#7ED957] flex-none" />
              <div>
                <p className="font-source-sans text-3xl text-[#D4E8D0]">
                  License: CC0-1.0 (Open Source)
                </p>
                <p className="font-source-sans text-3xl text-[#8FAF88] mt-1">
                  Transparency as a brand value
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="absolute left-1/2 top-[180px] bottom-[80px] w-0.5 bg-[#7ED957]" />

        {/* Right Column - Careers */}
        <div className="flex flex-col gap-6">
          {/* Careers Heading */}
          <div className="flex-none">
            <h2 className="font-rokkitt text-5xl font-bold text-[#D4E8D0] mb-2">
              Open Positions
            </h2>
            <p className="font-source-sans text-3xl text-[#8FAF88]">
              Building the founding team — apply at rowow.net
            </p>
          </div>

          {/* Position Cards Grid */}
          <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
            {/* Chief Metallurgist */}
            <div className="bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-6 flex items-center gap-4 hover:border-[#7ED957] transition-colors">
              <Beaker className="w-10 h-10 text-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0]">
                Chief Metallurgist
              </p>
            </div>

            {/* Electrochemical Engineer */}
            <div className="bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-6 flex items-center gap-4 hover:border-[#7ED957] transition-colors">
              <Zap className="w-10 h-10 text-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0]">
                Electrochemical Engineer
              </p>
            </div>

            {/* Process / Controls Engineer */}
            <div className="bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-6 flex items-center gap-4 hover:border-[#7ED957] transition-colors">
              <Settings className="w-10 h-10 text-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0]">
                Process / Controls Engineer
              </p>
            </div>

            {/* Environmental Compliance Lead */}
            <div className="bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-6 flex items-center gap-4 hover:border-[#7ED957] transition-colors">
              <Leaf className="w-10 h-10 text-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0]">
                Environmental Compliance Lead
              </p>
            </div>

            {/* Business Development Manager */}
            <div className="bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-6 flex items-center gap-4 hover:border-[#7ED957] transition-colors">
              <Briefcase className="w-10 h-10 text-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0]">
                Business Development Manager
              </p>
            </div>

            {/* Field Operations Technician */}
            <div className="bg-[#0F2811] border border-[#7ED957]/20 rounded-lg p-6 flex items-center gap-4 hover:border-[#7ED957] transition-colors">
              <Wrench className="w-10 h-10 text-[#7ED957] flex-none" />
              <p className="font-source-sans text-3xl text-[#D4E8D0]">
                Field Operations Technician
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
          investors@rowow.net | rowow.net
        </p>
        <p className="font-source-sans text-3xl text-[#5C7256]">
          CONFIDENTIAL — INVESTOR DECK
        </p>
      </div>
    </div>
  )
}

export default function Slide13() {
  return (
    <Suspense fallback={<div className="w-[1920px] h-[1080px] bg-[#0B1D0E]" />}>
      <Slide13Content />
    </Suspense>
  )
}
