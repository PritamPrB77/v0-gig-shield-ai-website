'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLiveFeed } from '@/hooks/useLiveFeed';
import { useDisruptionSimulator } from '@/hooks/useDisruptionSimulator';
import { Zap, Activity, Users, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LiveControlRoom() {
  const { events } = useLiveFeed();
  const { isRunning, stages, result, simulateEvent } = useDisruptionSimulator();
  const [eventCount, setEventCount] = useState(0);

  useEffect(() => {
    setEventCount(Math.floor(Math.random() * 50) + 20);
  }, []);

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatBox title="Events Today" value={eventCount} icon={Zap} delay="0.1s" />
          <StatBox title="Workers Protected" value="3,970" icon={Users} delay="0.2s" />
          <StatBox title="Total Payout" value="₹2.1L" icon={TrendingUp} delay="0.3s" />
          <StatBox title="Avg Payout Time" value="8.2 min" icon={Activity} delay="0.4s" />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Map Section */}
          <div className="lg:col-span-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <Card className="bg-card border-border h-96 p-6 flex items-center justify-center">
              <IndiaMiniMap />
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Demo Trigger */}
            <Card className="bg-card border-primary/30 p-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <h3 className="font-bold mb-4">Demo Control</h3>
              <p className="text-sm text-foreground/70 mb-4">
                Trigger a rain event in Bengaluru to see the full pipeline.
              </p>
              <Button
                onClick={simulateEvent}
                disabled={isRunning}
                className="w-full bg-primary hover:bg-primary/90 text-white"
              >
                {isRunning ? 'Simulating...' : 'Trigger Rain Event'}
              </Button>
            </Card>

            {/* Latest Events */}
            <Card className="bg-card border-border p-6 animate-slide-up" style={{ animationDelay: '0.7s' }}>
              <h3 className="font-bold mb-4">Latest Events</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {events.length === 0 ? (
                  <p className="text-sm text-foreground/60">No events yet. Trigger a demo to see events.</p>
                ) : (
                  events.map((event, idx) => (
                    <div key={event.id} className="flex gap-3 p-2 rounded hover:bg-background-secondary/30 animate-slide-in-right" style={{ animationDelay: `${idx * 0.1}s` }}>
                      <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5 animate-pulse-glow" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate">
                          {event.eventType} in {event.city}
                        </p>
                        <p className="text-xs text-foreground/60">{event.timestamp}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </Card>
          </div>
        </div>

        {/* Terminal Output */}
        {(isRunning || stages.length > 0) && (
          <Card className="bg-background/50 border-border p-6 animate-slide-up font-mono text-sm mb-8">
            <h3 className="font-bold mb-4 text-primary">Processing Pipeline</h3>
            <div className="space-y-2 h-64 overflow-y-auto">
              {stages.map((stage, idx) => (
                <div key={idx} className="flex gap-2 animate-fade-in">
                  <span className="text-foreground/50">{'>'}</span>
                  <span
                    className={
                      stage.success ? 'text-accent' : 'text-destructive'
                    }
                  >
                    {stage.message}
                  </span>
                </div>
              ))}
              {isRunning && (
                <div className="flex gap-2 animate-pulse">
                  <span className="text-foreground/50">{'>'}</span>
                  <span className="text-foreground/60">Processing...</span>
                </div>
              )}
              {result && (
                <div className="mt-4 p-3 rounded bg-accent/10 border border-accent/30">
                  <p className="text-accent font-bold">✓ Pipeline Complete</p>
                  <p className="text-sm text-foreground/70 mt-2">
                    {result.workersAffected} workers covered • ₹{result.totalPayout.toLocaleString()} payout • {result.payoutTime}m processing
                  </p>
                </div>
              )}
            </div>
          </Card>
        )}

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border p-6 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <h3 className="font-bold mb-3">Disruption Detection</h3>
            <p className="text-sm text-foreground/70">
              Our AI monitors weather APIs, traffic patterns, and news feeds for disruptions in real-time.
            </p>
          </Card>
          <Card className="bg-card border-border p-6 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <h3 className="font-bold mb-3">Automatic Claims</h3>
            <p className="text-sm text-foreground/70">
              When a disruption is detected, eligible workers are automatically submitted for claims.
            </p>
          </Card>
          <Card className="bg-card border-border p-6 animate-slide-up" style={{ animationDelay: '1s' }}>
            <h3 className="font-bold mb-3">Instant Payouts</h3>
            <p className="text-sm text-foreground/70">
              Approved claims are transferred to UPI accounts in 5-15 minutes, no paperwork required.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

function StatBox({ title, value, icon: Icon, delay }: any) {
  return (
    <Card className="bg-card border-border p-4 animate-slide-up" style={{ animationDelay: delay }}>
      <p className="text-foreground/60 text-xs font-medium mb-2">{title}</p>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold">{value}</p>
        <Icon className="text-primary opacity-50" size={20} />
      </div>
    </Card>
  );
}

function IndiaMiniMap() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 400 500" className="w-full h-full max-w-xs">
        {/* Simplified India map outline */}
        <g fill="none" stroke="rgba(255, 87, 34, 0.2)" strokeWidth="1">
          {/* Very simplified India outline */}
          <path d="M 200 50 L 250 100 L 280 150 L 300 200 L 280 250 L 250 280 L 200 300 L 150 280 L 120 250 L 100 200 L 120 150 L 150 100 Z" />
        </g>

        {/* City dots - animated */}
        {[
          { name: 'Delhi', x: 180, y: 120 },
          { name: 'Mumbai', x: 120, y: 220 },
          { name: 'Bengaluru', x: 220, y: 320 },
          { name: 'Chennai', x: 260, y: 350 },
          { name: 'Hyderabad', x: 240, y: 280 },
          { name: 'Kolkata', x: 300, y: 200 },
        ].map((city, idx) => (
          <g key={city.name}>
            {/* Glow ring */}
            <circle cx={city.x} cy={city.y} r="12" fill="rgba(255, 87, 34, 0.1)" className="animate-pulse-glow" />
            {/* City dot */}
            <circle cx={city.x} cy={city.y} r="5" fill="#FF5722" className="animate-pulse" />
            {/* City label */}
            <text x={city.x} y={city.y - 12} fontSize="10" fill="rgba(255, 255, 255, 0.7)" textAnchor="middle">
              {city.name}
            </text>
          </g>
        ))}

        {/* Legend */}
        <text x="20" y="480" fontSize="12" fill="rgba(255, 255, 255, 0.6)">
          🔴 Active City • India's Gig Coverage
        </text>
      </svg>
    </div>
  );
}
