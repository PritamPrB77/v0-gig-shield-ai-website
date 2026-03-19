'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Zap, Activity, Users, TrendingUp, AlertCircle } from 'lucide-react';
import { useState } from 'react';

export default function LiveControlRoom() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [stages, setStages] = useState<string[]>([]);

  const handleSimulate = async () => {
    setIsSimulating(true);
    setStages([]);

    const stageMessages = [
      'TRIGGER: Heavy rain detected in Bengaluru',
      'DETECTION: 75 workers detected in disruption zone',
      'ANALYSIS: Calculating payouts based on earnings profile...',
      'FRAUD CHECK: AI analysis complete. Risk score: 8/100',
      'PAYOUT: ₹35,250 approved. Processing in 8 minutes...',
    ];

    for (const msg of stageMessages) {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStages((prev) => [...prev, msg]);
    }

    setIsSimulating(false);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 animate-slide-up">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold">Command Center</h1>
              <div className="flex items-center gap-2 px-3 py-1 bg-destructive/20 text-destructive rounded-full animate-blink">
                <Activity size={16} />
                <span className="text-sm font-bold">LIVE</span>
              </div>
            </div>
            <p className="text-foreground/60">Real-time disruption monitoring across India</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { title: 'Events Today', value: '27', icon: Zap, delay: '0.1s' },
            { title: 'Workers Protected', value: '3,970', icon: Users, delay: '0.2s' },
            { title: 'Total Payout', value: '₹2.1L', icon: TrendingUp, delay: '0.3s' },
            { title: 'Avg Payout Time', value: '8 mins', icon: AlertCircle, delay: '0.4s' },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="bg-card border-border p-4" style={{ animationDelay: stat.delay }}>
                <div className="flex flex-col gap-2">
                  <Icon className="text-primary" size={20} />
                  <p className="text-xs sm:text-sm text-foreground/60">{stat.title}</p>
                  <p className="text-lg sm:text-2xl font-bold">{stat.value}</p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-card border-border p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">Live Event Feed</h2>
              <Button
                onClick={handleSimulate}
                disabled={isSimulating}
                className={`bg-primary hover:bg-primary/90 text-white ${isSimulating ? 'opacity-50' : ''}`}
              >
                {isSimulating ? 'Simulating...' : 'Simulate Event'}
              </Button>
            </div>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {stages.length === 0 ? (
                <div className="text-foreground/50 text-sm py-8 text-center">
                  Click "Simulate Event" to see the disruption pipeline
                </div>
              ) : (
                stages.map((stage, i) => (
                  <div
                    key={i}
                    className="p-3 bg-background/50 rounded border border-primary/20 text-sm font-mono text-secondary"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {`[${new Date().toLocaleTimeString()}] ${stage}`}
                  </div>
                ))
              )}
            </div>
          </Card>

          <Card className="bg-card border-border p-8">
            <h2 className="text-xl font-bold mb-6">Real-Time Events</h2>
            <div className="space-y-3">
              {[
                { time: '14:32', city: 'Bengaluru', type: 'Heavy Rain', workers: 45, payout: '₹18,900' },
                { time: '14:28', city: 'Mumbai', type: 'Traffic Jam', workers: 32, payout: '₹12,800' },
                { time: '14:15', city: 'Delhi', type: 'Bandh', workers: 58, payout: '₹24,340' },
                { time: '14:02', city: 'Pune', type: 'Flooding', workers: 28, payout: '₹11,200' },
              ].map((event, i) => (
                <div key={i} className="p-4 bg-background/50 rounded-lg border border-border hover:border-primary/50 transition">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-sm">{event.city} - {event.type}</p>
                      <p className="text-xs text-foreground/60">{event.time}</p>
                    </div>
                    <span className="text-accent font-bold text-sm">{event.payout}</span>
                  </div>
                  <p className="text-xs text-foreground/60">{event.workers} workers affected</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
