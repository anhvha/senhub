import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-primary">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
              </svg>
              <span className="text-sm font-medium">Collaboration</span>
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-balance">Faster iteration. More innovation.</h2>
              <p className="text-lg text-muted-foreground text-balance">
                The platform for rapid progress. Let your team focus on shipping features instead of managing
                infrastructure with automated CI/CD, built-in testing, and integrated collaboration.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">
                Make teamwork seamless.{" "}
                <span className="text-muted-foreground">
                  Tools for your team and stakeholders to share feedback and iterate faster.
                </span>
              </h3>
            </div>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm">Search...</span>
                  </div>
                  <Button variant="ghost" size="sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-primary">monitoring-query-variant</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
                      <span className="text-xs text-primary">Q</span>
                    </div>
                    <span>Query (&quot;queryEngine&quot;)</span>
                    <Button variant="ghost" size="sm">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">enable-dashboard-recents</div>
                  <div className="text-sm text-muted-foreground">Select an override...</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
