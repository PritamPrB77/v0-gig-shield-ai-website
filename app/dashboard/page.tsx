export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Welcome back, Raju Kumar</h1>
        <p className="text-foreground/60 mb-8">Shield Plus • ₹89/month</p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-foreground/60 text-sm mb-2">Earnings Shield Score</p>
            <p className="text-4xl font-bold text-primary">72</p>
            <p className="text-sm text-foreground/60 mt-1">Your risk score</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-foreground/60 text-sm mb-2">This Month</p>
            <p className="text-4xl font-bold text-secondary">₹8,240</p>
            <p className="text-sm text-foreground/60 mt-1">Total earnings</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <p className="text-foreground/60 text-sm mb-2">Coverage</p>
            <p className="text-4xl font-bold text-accent">₹15K</p>
            <p className="text-sm text-foreground/60 mt-1">Max payout</p>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-xl font-bold mb-4">Recent Claims</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-background/50 rounded">
              <div>
                <p className="font-semibold">Heavy Rain - Delhi</p>
                <p className="text-sm text-foreground/60">₹850 claimed</p>
              </div>
              <span className="text-accent">Paid</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-background/50 rounded">
              <div>
                <p className="font-semibold">Traffic Disruption</p>
                <p className="text-sm text-foreground/60">₹1,050 claimed</p>
              </div>
              <span className="text-accent">Paid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
