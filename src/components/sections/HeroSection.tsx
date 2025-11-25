'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/config/site'
import { Button, Container } from '@/components/ui'

interface GridRunner {
  x: number
  y: number
  direction: 'horizontal' | 'vertical'
  speed: number
  length: number
  opacity: number
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const gridSize = 60
    const runners: GridRunner[] = []
    const maxRunners = 6

    const createRunner = (): GridRunner => {
      const isHorizontal = Math.random() > 0.5
      const canvasWidth = canvas.offsetWidth
      const canvasHeight = canvas.offsetHeight

      if (isHorizontal) {
        const gridY = Math.floor(Math.random() * (canvasHeight / gridSize)) * gridSize
        return {
          x: -50,
          y: gridY,
          direction: 'horizontal',
          speed: 1.5 + Math.random() * 2,
          length: 80 + Math.random() * 80,
          opacity: 0.4 + Math.random() * 0.4,
        }
      } else {
        const gridX = Math.floor(Math.random() * (canvasWidth / gridSize)) * gridSize
        return {
          x: gridX,
          y: -50,
          direction: 'vertical',
          speed: 1.5 + Math.random() * 2,
          length: 80 + Math.random() * 80,
          opacity: 0.4 + Math.random() * 0.4,
        }
      }
    }

    for (let i = 0; i < maxRunners; i++) {
      const runner = createRunner()
      if (runner.direction === 'horizontal') {
        runner.x = Math.random() * canvas.offsetWidth
      } else {
        runner.y = Math.random() * canvas.offsetHeight
      }
      runners.push(runner)
    }

    const drawGrid = () => {
      const canvasWidth = canvas.offsetWidth
      const canvasHeight = canvas.offsetHeight

      ctx.strokeStyle = 'rgba(119, 129, 239, 0.08)'
      ctx.lineWidth = 1

      for (let x = 0; x <= canvasWidth; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvasHeight)
        ctx.stroke()
      }

      for (let y = 0; y <= canvasHeight; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvasWidth, y)
        ctx.stroke()
      }
    }

    const drawRunner = (runner: GridRunner) => {
      const gradient = runner.direction === 'horizontal'
        ? ctx.createLinearGradient(runner.x - runner.length, runner.y, runner.x, runner.y)
        : ctx.createLinearGradient(runner.x, runner.y - runner.length, runner.x, runner.y)

      gradient.addColorStop(0, 'rgba(119, 129, 239, 0)')
      gradient.addColorStop(0.5, `rgba(119, 129, 239, ${runner.opacity * 0.5})`)
      gradient.addColorStop(1, `rgba(119, 129, 239, ${runner.opacity})`)

      ctx.strokeStyle = gradient
      ctx.lineWidth = 2
      ctx.lineCap = 'round'

      ctx.beginPath()
      if (runner.direction === 'horizontal') {
        ctx.moveTo(runner.x - runner.length, runner.y)
        ctx.lineTo(runner.x, runner.y)
      } else {
        ctx.moveTo(runner.x, runner.y - runner.length)
        ctx.lineTo(runner.x, runner.y)
      }
      ctx.stroke()
    }

    const animate = () => {
      const canvasWidth = canvas.offsetWidth
      const canvasHeight = canvas.offsetHeight

      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      drawGrid()

      runners.forEach((runner, index) => {
        if (runner.direction === 'horizontal') {
          runner.x += runner.speed
          if (runner.x > canvasWidth + runner.length) {
            runners[index] = createRunner()
          }
        } else {
          runner.y += runner.speed
          if (runner.y > canvasHeight + runner.length) {
            runners[index] = createRunner()
          }
        }
        drawRunner(runner)
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="relative min-h-[700px] flex items-center bg-white overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 right-0 h-[750px] w-full pointer-events-none"
      />

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
              We&apos;ll walk you through the entire gifting workflow and show you real examples that fit your brand.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
