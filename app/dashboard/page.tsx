'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { RAJU_PROFILE, CLAIMS } from '@/lib/mockData';
import { useRiskForecast } from '@/hooks/useRiskForecast';
import { TrendingUp, Shield, AlertCircle, Clock } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Dashboard() {
  const forecast = useRiskForecast();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, <span className="gradient-text">{RAJU_PROFILE.name}</span>
          </h1>
          <div className="flex items-center gap-2 text-foreground/60">
            <Shield size={16} className="text-accent" />
            <span>{RAJU_PROFILE.coverage} • ₹{RAJU_PROFILE.monthlyPremium}/month</span>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* ESS Score */}
            <Card className="bg-card border-border p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-foreground/60 text-sm mb-2">Earnings Shield Score</p>
                  <h2 className="text-4xl font-bold gradient-text">72</h2>
                  <p className="text-sm text-foreground/60 mt-1">Based on your 12-week earning pattern</p>
                </div>
                <div className="w-32 h-32 rounded-full border-8 border-primary/30 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">72%</span>
                </div>
              </div>
              <p className="text-sm text-foreground/70">
                Your earnings are consistent with low volatility. This means higher payout eligibility and faster processing.
              </p>
            </Card>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <StatCard
                title="Weekly Coverage"
                value="₹8,500"
                desc="This week's eligible earnings"
                icon={TrendingUp}
                delay="0.2s"
              />
              <StatCard
                title="Monthly Premium"
                value="₹89"
                desc="Shield Plus coverage"
                icon={Shield}
                delay="0.3s"
              />
              <StatCard
                title="Claims Received"
                value="2"
                desc="In the last 30 days"
                icon={AlertCircle}
                delay="0.4s"
              />
              <StatCard
                title="Net Benefit"
                value="₹1,761"
                desc="Payouts minus premiums"
                icon={Clock}
                delay="0.5s"
              />
            </div>

            {/* Claims History */}
            <Card className="bg-card border-border p-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xl font-bold mb-4">Recent Claims</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="text-left py-3 text-foreground/60 font-medium">Date</th>
                      <th className="text-left py-3 text-foreground/60 font-medium">Event</th>
                      <th className="text-left py-3 text-foreground/60 font-medium">Amount</th>
                      <th className="text-left py-3 text-foreground/60 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {RAJU_PROFILE.claimsHistory.map((claim, idx) => (
                      <tr key={idx} className="hover:bg-background-secondary/30 transition">
                        <td className="py-3">{claim.date}</td>
                        <td className="py-3">{claim.event}</td>
                        <td className="py-3 font-semibold">₹{claim.amount}</td>
                        <td className="py-3">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/20 text-accent">
                            {claim.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Risk Forecast */}
            <Card className="bg-card border-border p-8 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <h3 className="text-xl font-bold mb-6">7-Day Disruption Forecast</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={forecast}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
                  <YAxis stroke="rgba(255,255,255,0.5)" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1A1A2E', border: '1px solid #2A2A3E' }}
                    formatter={(value) => `${value}%`}
                  />
                  <Bar dataKey="probability" fill="#FF5722" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upgrade Nudge */}
            <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 p-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-bold mb-2">Unlock More Coverage</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Upgrade to Shield Max for unlimited coverage and priority support.
              </p>
              <Button size="sm" className="w-full bg-primary hover:bg-primary/90 text-white">
                Upgrade Now
              </Button>
            </Card>

            {/* WhatsApp Bot */}
            <Card className="bg-card border-border p-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <h3 className="font-bold mb-4">WhatsApp Assistant</h3>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0" />
                  <div className="bg-background-secondary/50 rounded-lg p-2">
                    <p className="text-xs text-foreground/60">Your claim was approved! ₹850 sent.</p>
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-primary/20 rounded-lg p-2 max-w-xs">
                    <p className="text-xs">Thank you! Can I check my balance?</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0" />
                  <div className="bg-background-secondary/50 rounded-lg p-2">
                    <p className="text-xs text-foreground/60">Your balance is ₹8,500. You have ₹0 pending claims.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-card border-border p-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-bold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  View All Claims
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Download Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Update Profile
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, desc, icon: Icon, delay }: any) {
  return (
    <Card className="bg-card border-border p-6 animate-slide-up" style={{ animationDelay: delay }}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-foreground/60 text-sm mb-2">{title}</p>
          <p className="text-2xl font-bold mb-1">{value}</p>
          <p className="text-xs text-foreground/60">{desc}</p>
        </div>
        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
          <Icon className="text-primary" size={20} />
        </div>
      </div>
    </Card>
  );
}
