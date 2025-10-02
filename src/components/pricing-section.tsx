import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check, X } from 'lucide-react'
import { QuestionTooltip } from './question-tooltip'

const plans = [
  {
    name: 'Free',
    price: 'Free',
    period: '',
    button: 'Get Started Free',
    description: null,
    features: [
      {
        name: 'AI Design',
        available: true,
        tooltip:
          'Generate print-ready designs from text prompts or reference images',
      },
      {
        name: '1-Click Prompt Optimization',
        available: true,
        tooltip: null,
      },
      {
        name: '2M+ Design Templates',
        available: true,
        tooltip: null,
      },
      {
        name: 'Apply Styles',
        available: true,
        tooltip: null,
      },
      {
        name: 'Reference Design Upload',
        available: true,
        tooltip: null,
      },
      {
        name: 'POD Layouts',
        available: true,
        tooltip: null,
      },
      {
        name: 'Auto Fulfillment',
        available: true,
        tooltip: null,
      },
      {
        name: 'Chat & Email Support',
        available: true,
        tooltip: null,
      },
      {
        name: '1 Store Only',
        available: true,
        tooltip: null,
      },
      {
        name: '20 Monthly Credits',
        available: true,
        tooltip: null,
      },
      {
        name: 'Discount on Extra Credits',
        available: false,
        tooltip: null,
      },
      {
        name: 'Video call',
        available: false,
        tooltip: null,
      },
    ],
    popular: false,
  },
  {
    name: 'Silver',
    price: '$25',
    period: '/month',
    button: 'Get Started',
    description: null,
    features: [
      {
        name: 'AI Design',
        available: true,
        tooltip:
          'Generate print-ready designs from text prompts or reference images',
      },
      {
        name: '1-Click Prompt Optimization',
        available: true,
        tooltip: null,
      },
      {
        name: '2M+ Design Templates',
        available: true,
        tooltip: null,
      },
      {
        name: 'Apply Styles',
        available: true,
        tooltip: null,
      },
      {
        name: 'Reference Design Upload',
        available: true,
        tooltip: null,
      },
      {
        name: 'POD Layouts',
        available: true,
        tooltip: null,
      },
      {
        name: 'Auto Fulfillment',
        available: true,
        tooltip: null,
      },
      {
        name: 'Chat & Email Support',
        available: true,
        tooltip: null,
      },
      {
        name: 'Up to 3 Stores',
        available: true,
        tooltip: null,
      },
      {
        name: '250 Monthly Credits',
        available: true,
        tooltip: null,
      },
      {
        name: '10% Discount on Extra Credits',
        available: true,
        tooltip: null,
      },
      {
        name: 'Video call',
        available: true,
        tooltip: null,
      },
    ],
    popular: true,
  },
  {
    name: 'Gold',
    price: '$50',
    period: '/month',
    button: 'Get Started',
    description: null,
    features: [
      {
        name: 'AI Design',
        available: true,
        tooltip:
          'Generate print-ready designs from text prompts or reference images',
      },
      {
        name: '1-Click Prompt Optimization',
        available: true,
        tooltip: null,
      },
      {
        name: '2M+ Design Templates',
        available: true,
        tooltip: null,
      },
      {
        name: 'Apply Styles',
        available: true,
        tooltip: null,
      },
      {
        name: 'Reference Design Upload',
        available: true,
        tooltip: null,
      },
      {
        name: 'POD Layouts',
        available: true,
        tooltip: null,
      },
      {
        name: 'Auto Fulfillment',
        available: true,
        tooltip: null,
      },
      {
        name: 'Chat & Email Support',
        available: true,
        tooltip: null,
      },
      {
        name: 'Unlimited Stores',
        available: true,
        tooltip:
          'Includes 5 stores for free. Each additional store costs $5/month',
      },
      {
        name: '500 Monthly Credits',
        available: true,
        tooltip: null,
      },
      {
        name: '15% Discount on Extra Credits',
        available: true,
        tooltip: null,
      },
      {
        name: 'Video call',
        available: true,
        tooltip: null,
      },
    ],
    popular: false,
  },
]

export function PricingSection() {
  return (
    <section id='pricing' className='lg:pt-12 lg:pb-24 lg:px-32 p-8'>
      <div className='container mx-auto px-4'>
        <div className='text-center space-y-4 md:mb-16 mb-4'>
          <h2 className='text-4xl font-bold text-balance'>Pricing</h2>
          <p className='text-lg text-muted-foreground'>
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-6 relative ${
                plan.popular
                  ? 'border-primary bg-card'
                  : 'bg-card/50 backdrop-blur-sm border-border/50'
              }`}
            >
              {plan.popular && (
                <div className='absolute -top-3 left-1/2 transform -translate-x-1/2'>
                  <span className='bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium'>
                    Most Popular
                  </span>
                </div>
              )}
              <div className='space-y-6'>
                <div className='space-y-2'>
                  <h3 className='text-xl font-semibold'>{plan.name}</h3>
                  <p className='text-sm text-muted-foreground'>
                    {plan.description}
                  </p>
                </div>
                <div className='space-y-1'>
                  <div className='flex items-baseline space-x-1'>
                    <span className='text-4xl font-bold'>{plan.price}</span>
                    <span className='text-muted-foreground'>{plan.period}</span>
                  </div>
                </div>
                <Button
                  variant={plan.popular ? 'default' : 'outline'}
                  className='w-full'
                >
                  {plan.button}
                </Button>
                <div className='space-y-3'>
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className='flex items-start space-x-2 items-center'
                    >
                      {feature.available ? (
                        <Check size={18} className='text-green-600' />
                      ) : (
                        <X size={18} className='text-red-600' />
                      )}
                      <span className='text-sm'>
                        {feature.name}
                        {feature.tooltip && (
                          <QuestionTooltip tooltip={feature.tooltip} />
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
