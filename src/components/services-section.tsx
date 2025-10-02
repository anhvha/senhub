import { Card } from '@/components/ui/card'
import { Zap, Printer, Truck, Package, Warehouse } from 'lucide-react'

const services = [
  {
    title: 'AI Design & Prompt Optimization',
    description:
      'Generate print-ready designs from text prompts or reference images, with AI optimizing your prompts for better results.',
    icon: Zap,
  },
  {
    title: 'Auto Mockups',
    description:
      'Create realistic product mockups instantly, tailored to each design and product.',
    icon: Printer,
  },
  {
    title: 'Fast Campaigns',
    description:
      'Launch complete POD campaigns in minutes, with AI creating designs and mockups in as little as 45 seconds each.',
    icon: Zap,
  },
  {
    title: 'Smart Fulfillment',
    description:
      'All-in-one fulfillment with 5+ years of experience. Print and ship even with basic designs or without original files.',
    icon: Truck,
  },
  {
    title: 'Design Library',
    description:
      'Access 2M+ ready-to-use designs that have already generated sales.',
    icon: Package,
  },
  {
    title: 'Unlimited Stores',
    description:
      'Manage multiple stores in one platform. Includes 5 free stores; additional stores cost $5 each.',
    icon: Warehouse,
  },
]

export function ServicesSection() {
  return (
    <section
      id='features'
      className='lg:pt-12 lg:pb-24 lg:px-32 p-8 bg-violet-100/30'
    >
      <div className='container mx-auto px-4'>
        <div className='text-center space-y-4 md:mb-16 mb-4'>
          <h2 className='text-4xl font-bold text-balance'>
            AI-Powered POD Tools
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto text-balance'>
            Create designs, generate mockups, launch campaigns, and manage 
            fulfillment effortlessly—all in one platform.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className='p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-colors'
              >
                <div className='space-y-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                    <IconComponent className='w-6 h-6 text-primary' />
                  </div>
                  <div className='space-y-2'>
                    <h3 className='text-lg font-semibold'>{service.title}</h3>
                    <p className='text-sm text-muted-foreground'>
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
