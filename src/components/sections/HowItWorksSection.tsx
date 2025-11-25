'use client'

import { siteConfig } from '@/config/site'
import { Button, Container } from '@/components/ui'

export function HowItWorksSection() {
  const { howItWorks } = siteConfig

  return (
    <section className="py-20 lg:py-[120px] bg-white">
      <Container>
        <div className="text-center mb-[80px]">
          <span className="text-[24px] leading-[1.6] font-normal text-[#6C70DD] block mb-4">
            {howItWorks.badge}
          </span>

          <h2 className="text-[40px] md:text-[48px] font-medium leading-[1.3] tracking-[-0.02em] text-[#303030] mb-6">
            {howItWorks.title}
          </h2>

          <p className="text-[16px] leading-[1.6] tracking-[-0.02em] text-[#616161] max-w-[800px] mx-auto">
            {howItWorks.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {howItWorks.steps.map((step, index) => (
            <div key={index} className="relative pt-6">
              {/* Card */}
              <div className="h-full bg-white rounded-xl p-4 pt-10 pb-6 flex flex-col items-center text-center shadow-[0px_2px_19.7px_0px_rgba(0,0,0,0.10)]">
                <h3 className="text-[18px] font-semibold text-[#101010] mb-4">
                  {step.title}
                </h3>
                <p className="text-[16px] leading-[1.5] text-[#616161] text-left">
                  {step.description}
                </p>
              </div>

              {/* Number Badge */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[52px] h-[52px] rounded-full bg-[#7781EF] border-[2px] border-white shadow-[0px_2px_13.8px_0px_rgba(0,0,0,0.13)] flex items-center justify-center">
                <span className="text-[24px] font-semibold text-white">{step.number}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-[40px]">
          <Button
            size="lg"
            className="bg-[#7781EF] hover:bg-[#6C70DD] text-white px-8 py-4 h-auto text-base font-medium rounded-[6px]"
            onClick={() => window.open(siteConfig.links.calendly, '_blank')}
          >
            Book a video call
          </Button>
        </div>
      </Container>
    </section>
  )
}
