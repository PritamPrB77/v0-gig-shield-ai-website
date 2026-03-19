'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Shield, TrendingUp, Zap, Clock, Users, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background opacity-50" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
                <Zap size={16} />
                AI-Powered Parametric Insurance
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Protect India's <span className="gradient-text">Gig Workers</span>
            </h1>

            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Instant claims, zero paperwork. GigShield uses AI to detect disruptions and pay out in minutes, not months.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                See How It Works
              </Button>
            </div>

            {/* Stats */}
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

      {/* Problem Section */}
      <section className="py-20 bg-background-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">The Problem</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <Clock className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Slow Claims</h3>
              <p className="text-foreground/60">Traditional insurance takes months to process</p>
            </Card>
            <Card className="p-6">
              <Users className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">450M+ Workers</h3>
              <p className="text-foreground/60">Most gig workers have zero insurance coverage</p>
            </Card>
            <Card className="p-6">
              <TrendingUp className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Weather Events</h3>
              <p className="text-foreground/60">Heavy rains, heat waves paralyze gig economy</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2">Real-Time Monitoring</h3>
              <p className="text-sm text-foreground/60">AI monitors weather, traffic & market data 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2">Instant Detection</h3>
              <p className="text-sm text-foreground/60">Disruptions detected within 30 seconds</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2">Auto-Claim</h3>
              <p className="text-sm text-foreground/60">Claims file automatically - no forms needed</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2">Instant Payout</h3>
              <p className="text-sm text-foreground/60">Payment to your account in 2 minutes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-background-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Plans</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-3xl font-bold text-primary mb-4">₹99/mo</p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">Weather Coverage</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">Max ₹5K Payout</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">Email Support</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </Card>
            <Card className="p-6 border-primary bg-primary/5">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <p className="text-3xl font-bold text-primary mb-4">₹299/mo</p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">Weather + Traffic</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">Max ₹15K Payout</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">24/7 Chat Support</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">WhatsApp Bot</span>
                </li>
              </ul>
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Get Started
              </Button>
            </Card>
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-2">Max</h3>
              <p className="text-3xl font-bold text-primary mb-4">₹499/mo</p>
              <ul className="space-y-2 mb-6">
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">All Coverage Types</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">Unlimited Payout</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">Dedicated Manager</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={16} className="text-accent flex-shrink-0" />
                  <span className="text-sm">Priority Claims</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Workers?</h2>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Join thousands of gig workers already protected by GigShield AI
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
