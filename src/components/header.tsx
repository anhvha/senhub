'use client'

import { Button } from '@/components/ui/button'
import { APP_NAME, SHOPIFY_APP_URL } from '@/consts'
import { openInNewTab } from '@/lib/utils'
import Image from 'next/image'

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    const headerOffset = 64 // px, bằng height của header
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }
}

export function Header() {
  return (
    <header className='border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50'>
      <div className='container mx-auto px-4 h-16 flex items-center justify-between'>
        <div className='flex items-center space-x-8'>
          <div className='flex items-center space-x-2'>
            <div className='w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden'>
              <Image src='/logo.png' alt='Logo' width={32} height={32} />
            </div>
            <span className='font-semibold text-lg'>{APP_NAME}</span>
          </div>
          <nav className='hidden md:flex items-center space-x-6'>
            {/* <button 
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button> */}
            <button
              onClick={() => scrollToSection('testimonials')}
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className='text-muted-foreground hover:text-foreground transition-colors'
            >
              FAQ
            </button>
          </nav>
        </div>
        <div className='flex items-center space-x-4'>
          <Button onClick={() => openInNewTab(SHOPIFY_APP_URL)}>
            Claim deal
          </Button>
        </div>
      </div>
    </header>
  )
}
