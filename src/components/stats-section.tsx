import { Card } from "@/components/ui/card"

const stats = [
  {
    value: "750+",
    label: "Stores Connected",
    description: "Using our platform",
  },
  {
    value: "3.000+",
    label: "AI Campaigns",
    description: "Generated and launched with SenHub AI"
  },
  {
    value: "1.700+",
    label: "Fulfillments Processed",
    description: "Bulk fulfillments completed",
  },
  {
    value: "90%",
    label: "Time Saved",
    description: "On both campaign creation and fulfillment",
  },
]

export function StatsSection() {
  return (
    <section className="lg:pt-12 lg:pb-24 lg:px-32 p-8 border-border/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-lg font-semibold">{stat.label}</div>
                </div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
