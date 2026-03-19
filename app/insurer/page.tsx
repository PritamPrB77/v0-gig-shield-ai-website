'use client';

import { Card } from '@/components/ui/card';
import { AlertCircle, TrendingDown, TrendingUp, Users, Zap } from 'lucide-react';

export default function InsurerPortal() {
  const stats = [
    { title: 'Total Policies', value: '3,970', icon: Users, color: 'text-secondary' },
    { title: 'Monthly Premium', value: '₹2.8L', icon: TrendingUp, color: 'text-accent' },
    { title: 'Claims Paid', value: '₹1.2L', icon: Zap, color: 'text-primary' },
    { title: 'Loss Ratio', value: '42%', icon: TrendingDown, color: 'text-warning' },
  ];

  const zones = [
    { zone: 'South', policies: 1240, premium: 85, claims: 55, lossRatio: '65%' },
    { zone: 'West', policies: 950, premium: 72, claims: 43, lossRatio: '60%' },
    { zone: 'North', policies: 1100, premium: 78, claims: 48, lossRatio: '62%' },
    { zone: 'East', policies: 680, premium: 52, claims: 32, lossRatio: '63%' },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">Insurer Control Panel</h1>
          <p className="text-foreground/60">GigShield portfolio analytics and claims management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="bg-card border-border p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-foreground/60 mb-2">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <Icon className={`${stat.color} flex-shrink-0`} size={24} />
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-card border-border p-8">
            <h2 className="text-xl font-bold mb-6">Portfolio Performance</h2>
            <div className="space-y-4">
              {[
                { month: 'Jan', premium: 710, claims: 420 },
                { month: 'Feb', premium: 850, claims: 510 },
              ].map((item) => (
                <div key={item.month} className="flex justify-between items-center p-4 bg-background/50 rounded-lg">
                  <div>
                    <p className="font-semibold">{item.month} 2026</p>
                    <p className="text-sm text-foreground/60">Premium ₹{item.premium}K | Claims ₹{item.claims}K</p>
                  </div>
                  <span className="text-accent font-bold">{Math.round((item.claims / item.premium) * 100)}%</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-card border-border p-8">
            <h2 className="text-xl font-bold mb-6">Zone Analytics</h2>
            <div className="space-y-3">
              {zones.map((zone) => (
                <div key={zone.zone} className="p-4 bg-background/50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold">{zone.zone}</p>
                    <span className="text-primary font-bold">{zone.lossRatio}</span>
                  </div>
                  <p className="text-xs text-foreground/60">
                    {zone.policies} policies • ₹{zone.premium}K premium • ₹{zone.claims}K claims
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
