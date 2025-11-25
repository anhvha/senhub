'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'
import { Button, Container } from '@/components/ui'

export function CTASection() {
  const { cta } = siteConfig
  const [email, setEmail] = useState('')

  return (
    <section className="relative w-full max-w-[1074px] mx-auto z-20 mb-[-150px]">
      <div className="bg-[#7781EF] rounded-xl p-[32px] md:p-[60px_100px] relative overflow-hidden text-center">
        {/* Decorative Circles */}
        <div className="absolute -top-[62px] -left-[66px] w-[121px] h-[121px] rounded-full bg-white/10 pointer-events-none" />
        <div className="absolute bottom-[-33px] -right-[23px] w-[206px] h-[206px] rounded-full bg-white/10 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-[32px] md:text-[42px] font-medium leading-[1.3] tracking-[-0.02em] text-white mb-3">
            {cta.title}
          </h2>

          <p className="text-[16px] leading-[1.6] tracking-[-0.02em] text-[#DDDDDD] mb-10">
            {cta.description}
          </p>

          <div className="w-full max-w-[476px] relative">
            <div className="bg-[#FDFDFD] border border-[#8A8A8A] rounded-[8px] p-1.5 pl-3 flex items-center">
              <input
                type="email"
                placeholder={cta.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-[13px] text-[#101010] placeholder:text-[#616161]"
              />
              <Button
                className="bg-[#7781EF] hover:bg-[#6C70DD] text-white rounded-[6px] px-6 py-2.5 text-[16px] font-normal h-auto"
              >
                {cta.buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
