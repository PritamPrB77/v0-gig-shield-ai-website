'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, AlertCircle, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, <span className="gradient-text">Raju Kumar</span>
          </h1>
          <div className="flex items-center gap-2 text-foreground/60">
            <Shield size={16} className="text-accent" />
            <span>Shield Plus • ₹89/month</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-card border-border p-8 animate-slide-up">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <p className="text-foreground/60 text-sm mb-2">Earnings Shield Score</p>
                  <h2 className="text-4xl font-bold gradient-text">72</h2>
                  <p className="text-sm text-foreground/60 mt-1">Based on your 12-week pattern</p>
                </div>
                <div className="w-32 h-32 rounded-full border-8 border-primary/30 flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary">72%</span>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-8">
              <h3 className="text-xl font-bold mb-6">Recent Claims</h3>
              <div className="space-y-4">
                {[
                  { date: 'Mar 15', event: 'Rain', amount: '₹850', status: 'Paid' },
                  { date: 'Feb 25', event: 'Bandh', amount: '₹1050', status: 'Paid' },
                ].map((claim, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                    <div>
                      <p className="font-semibold">{claim.event} - {claim.date}</p>
                      <p className="text-sm text-foreground/60">{claim.amount}</p>
                    </div>
                    <span className="text-accent text-sm font-semibold">{claim.status}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-4">
            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <TrendingUp className="text-secondary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">This Month</p>
                  <p className="text-2xl font-bold">₹8,240</p>
                </div>
              </div>
            </Card>

            <Card className="bg-card border-border p-6">
              <div className="flex items-start gap-4">
                <AlertCircle className="text-destructive flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-sm text-foreground/60 mb-1">Coverage</p>
                  <p className="text-2xl font-bold">Shield Plus</p>
                </div>
              </div>
            </Card>

            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Upgrade Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
