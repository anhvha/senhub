'use client'

import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { Button, Container } from '@/components/ui'

export function HeroSection() {
  return (
    <section className="relative min-h-[700px] flex items-center bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[750px] w-full">
        <Image
          src="/images/hero-pattern-v2.svg"
          alt=""
          fill
          className="object-cover object-top pointer-events-none"
          priority
        />
      </div>

      <Container className="relative z-10 py-20 mt-[-40px]">
        <div className="flex flex-col items-center text-center max-w-[800px] mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-2 py-2 bg-[#F5F6FE] border border-transparent rounded-full mb-[18px] relative">
            <div className="absolute inset-0 rounded-full border border-transparent" style={{ 
              background: 'linear-gradient(129deg, #7781EF 0%, #FB9A9D 100%) border-box',
              WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude'
            }} />
            <span className="w-2 h-2 rounded-full bg-gradient-to-b from-[#7781EF] to-[#F99A9E]" />
            <span className="text-[12px] leading-relaxed text-[#7781EF] font-normal px-1">
              {siteConfig.hero.badge}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[48px] leading-[1.2] font-semibold text-[#303030] max-w-[638px] mb-[18px]">
            {siteConfig.hero.title}
          </h1>

          {/* Description */}
          <p className="text-[16px] leading-[1.5] text-[#878787] max-w-[486px] mb-8">
            {siteConfig.hero.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-[#4C4DDC] hover:bg-[#3f40b8] text-white px-6 py-4 h-auto text-base font-medium rounded-[6px]"
                onClick={() => window.open(siteConfig.links.calendly, '_blank')}
              >
                {siteConfig.hero.ctaPrimary}
              </Button>

              <span className="text-[#878787] text-base font-normal">Or</span>

              <Button
                variant="outline"
                size="lg"
                className="bg-white text-[#303030] border-[#303030] hover:bg-neutral-50 px-6 py-4 h-auto text-base font-medium rounded-[6px]"
                onClick={() => window.open(siteConfig.links.installApp, '_blank')}
              >
                {siteConfig.hero.ctaSecondary}
              </Button>
            </div>
            
            <p className="text-[14px] font-light text-[#959595] max-w-[400px] mt-2">
              We'll walk you through the entire gifting workflow and show you real examples that fit your brand.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
