import { Card } from "@/components/ui/card"

const testimonials = [
  {
    rating: 5,
    text: "My choice is SenHub because it combines convenience, a wide range of products, and modern AI tools. It’s easy to integrate with Shopify, the design looks professional, and the AI support makes the workflow much simpler. I recommend it to everyone who wants to scale their Print on Demand business",
    author: "Το κατάστημά μου",
    role: "Shopify seller",
    company: "Greece",
  },
  {
    rating: 5,
    text: "Great app with AI assistance to help mock up your designs to get them out to the public easily and quickly so you can start selling from your online store. They have their own dedicated design team to bring your mock ups to life. But if you don't want to DIY it the app has plenty of design mock ups that you can choose and either keep as they are or redesign them. They do everything from design, fulfillment, to shipped out to the customer. One stop shop.",
    author: "Mebubber Tees",
    role: "Shopify seller",
    company: "United States",
  },
  {
    rating: 5,
    text: "Great app. Easy to use, designs are beautiful. Prices are good so you can profit with a reasonable selling price. Highly recommend.",
    author: "Blands boxing",
    role: "Shopify seller",
    company: "Canada",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="lg:pt-12 lg:pb-24 lg:px-32 p-8 bg-violet-100/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 md:mb-16 mb-4">
          <h2 className="text-4xl font-bold text-balance">Trusted by E-commerce Teams</h2>
          <p className="text-lg text-muted-foreground">
            AI-powered POD design and automated fulfillment for hundreds of Shopify stores
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground">{testimonial.text}</p>
                <div className="space-y-1">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
