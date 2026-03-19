export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background opacity-50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Protect India's <span className="gradient-text">Gig Workers</span>
            </h1>

            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Instant claims, zero paperwork. GigShield uses AI to detect disruptions and pay out in minutes.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-12">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">450M+</p>
                <p className="text-sm text-foreground/60">Gig Workers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-secondary">₹15K</p>
                <p className="text-sm text-foreground/60">Avg Payout</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">2 mins</p>
                <p className="text-sm text-foreground/60">Claim Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Real-Time Monitoring</h3>
              <p className="text-sm text-foreground/60">AI monitors data 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Instant Detection</h3>
              <p className="text-sm text-foreground/60">Disruptions detected instantly</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Auto-Claim</h3>
              <p className="text-sm text-foreground/60">Claims file automatically</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Instant Payout</h3>
              <p className="text-sm text-foreground/60">Payment in 2 minutes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
