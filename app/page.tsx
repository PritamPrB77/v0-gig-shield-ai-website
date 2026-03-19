'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { Shield, TrendingUp, Zap, Clock, Users, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* The Problem Section */}
      <ProblemSection />

      {/* How It Works */}
      <HowItWorksSection />

      {/* Live Disruption Feed */}
      <LiveFeedSection />

      {/* Plans Section */}
      <PlansSection />

      {/* Trust & Technology */}
      <TrustSection />

      {/* Raju's Story */}
      <RajuStorySection />

      {/* Platform Partners */}
      <PartnersSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 animate-slide-up">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
              <Zap size={16} />
              AI-Powered Parametric Insurance
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Protect India's <span className="gradient-text">Gig Workers</span>
          </h1>

          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-balance">
            Instant claims, zero paperwork. GigShield uses AI to detect disruptions and pay out in minutes, not months. 
            Protecting 450M+ workers from India's unpredictable weather.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/dashboard">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                Start Free Trial
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                See How It Works
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">450M+</p>
              <p className="text-sm text-foreground/60">Gig Workers</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">{`<`}3%</p>
              <p className="text-sm text-foreground/60">Coverage Rate</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">₹1.2L Cr</p>
              <p className="text-sm text-foreground/60">Annual Losses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemSection() {
  const { count: workers, elementRef: workersRef } = useCounterAnimation(450, 2500);
  const { count: coverage, elementRef: coverageRef } = useCounterAnimation(3, 2500);
  const { count: losses, elementRef: lossesRef } = useCounterAnimation(120, 2500);

  return (
    <section id="features" className="py-20 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Problem</h2>
          <p className="text-lg text-foreground/60">India's gig workers face constant disruptions</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card border-primary/20 hover:border-primary/50 transition p-8 animate-slide-up" style={{ animationDelay: '0s' }}>
            <div className="text-4xl font-bold mb-2">
              <span ref={workersRef}>{workers}</span>M+
            </div>
            <h3 className="text-xl font-semibold mb-2">Gig Workers</h3>
            <p className="text-foreground/60">
              Swiggy, Zomato, Uber, and Amazon Flex workers in India's cities
            </p>
          </Card>

          <Card className="bg-card border-primary/20 hover:border-primary/50 transition p-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold mb-2">
              {'{<'}<span ref={coverageRef}>{coverage}</span>%{'}'}
            </div>
            <h3 className="text-xl font-semibold mb-2">Have Insurance</h3>
            <p className="text-foreground/60">
              Less than 3% of gig workers have any income protection coverage
            </p>
          </Card>

          <Card className="bg-card border-primary/20 hover:border-primary/50 transition p-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold mb-2">
              ₹<span ref={lossesRef}>{losses}</span>L Cr
            </div>
            <h3 className="text-xl font-semibold mb-2">Annual Losses</h3>
            <p className="text-foreground/60">
              Uninsured income losses from disruptions (rain, pollution, bandhs)
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { icon: Shield, title: 'Download', desc: 'Install GigShield on your phone via Swiggy, Zomato, or Uber' },
    { icon: Zap, title: 'AI Profiling', desc: 'Our AI learns your earnings pattern and delivery zones' },
    { icon: TrendingUp, title: 'Auto-Enroll', desc: 'Select your coverage level (Basic, Plus, Max)' },
    { icon: Clock, title: 'Disruption Detected', desc: 'When rain/pollution/bandh hits your zone' },
    { icon: CheckCircle, title: 'Instant Claim', desc: 'GigShield automatically submits your claim' },
    { icon: Users, title: 'Money in Minutes', desc: 'Payout lands in your UPI account in ₹7-15 min' },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-foreground/60">Raju's journey from signup to payout</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <Card
                key={idx}
                className="bg-card border-border hover:border-primary/50 transition p-6 animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-foreground/60 text-sm">{step.desc}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function LiveFeedSection() {
  return (
    <section className="py-20 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Live Disruptions</h2>
          <p className="text-lg text-foreground/60">Real-time events across India</p>
        </div>

        <Card className="bg-card border-primary/20 p-8 h-96 flex items-center justify-center">
          <div className="text-center">
            <p className="text-foreground/60 mb-4">Live feed will be displayed here</p>
            <Link href="/live">
              <Button className="bg-primary hover:bg-primary/90 text-white">
                View Live Control Room
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
}

function PlansSection() {
  const plans = [
    {
      name: 'Shield Basic',
      price: '₹49',
      desc: 'Essential coverage for daily riders',
      features: [
        'Coverage up to ₹500 per disruption',
        'Rain & pollution events',
        'Payout in 7-15 minutes',
        'WhatsApp support',
      ],
    },
    {
      name: 'Shield Plus',
      price: '₹89',
      desc: 'Popular choice for full-time workers',
      features: [
        'Coverage up to ₹1,200 per disruption',
        'All event types',
        'Payout in 5-10 minutes',
        'Priority WhatsApp support',
        'Earnings report monthly',
      ],
      featured: true,
    },
    {
      name: 'Shield Max',
      price: '₹149',
      desc: 'Complete protection for high-earners',
      features: [
        'Unlimited coverage',
        'All event types',
        'Payout in 3-8 minutes',
        '24/7 dedicated support',
        'Weekly earnings report',
        'Free health check-ups',
      ],
    },
  ];

  return (
    <section id="plans" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-foreground/60">Flexible plans that grow with your earnings</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`border transition animate-slide-up ${
                plan.featured
                  ? 'bg-card border-primary md:scale-105 shadow-xl'
                  : 'bg-card border-border hover:border-primary/50'
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="p-8">
                {plan.featured && (
                  <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-full mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{plan.desc}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-foreground/60 ml-2">/month</span>
                </div>

                <Button
                  className="w-full mb-6 bg-primary hover:bg-primary/90 text-white"
                  asChild
                >
                  <Link href="/onboarding">Get Started</Link>
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, fidx) => (
                    <div key={fidx} className="flex gap-3 items-start">
                      <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="py-20 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Built with Trust</h2>
          <p className="text-lg text-foreground/60">Secure, transparent, and regulated</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card border-border p-8">
            <h3 className="text-xl font-bold mb-4">AI Fraud Detection</h3>
            <p className="text-foreground/60">
              Every claim is analyzed by our AI model to detect fraud patterns. Only 8-12 out of 100 claims are flagged for manual review.
            </p>
          </Card>

          <Card className="bg-card border-border p-8">
            <h3 className="text-xl font-bold mb-4">IRDAI Compliance</h3>
            <p className="text-foreground/60">
              Operating under IRDAI's regulatory sandbox. All claims are backed by reinsurance from Guidewire policies.
            </p>
          </Card>

          <Card className="bg-card border-border p-8">
            <h3 className="text-xl font-bold mb-4">Parametric Payouts</h3>
            <p className="text-foreground/60">
              No claims adjusters. Payouts are triggered automatically when weather exceeds thresholds in your zone.
            </p>
          </Card>

          <Card className="bg-card border-border p-8">
            <h3 className="text-xl font-bold mb-4">Zero Middlemen</h3>
            <p className="text-foreground/60">
              Direct UPI transfers. No hidden fees. What you see is what you get.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function RajuStorySection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Raju's Story</h2>
          <p className="text-lg text-foreground/60">From disruption to protection in 3 steps</p>
        </div>

        <div className="space-y-8">
          <Card className="bg-card border-border p-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Raju loses ₹1,200 due to monsoon</h3>
                <p className="text-foreground/60">
                  Raju Kumar, a Swiggy rider in Bengaluru, couldn't work during heavy rains. His weekly earnings dropped from ₹8,500 to ₹6,200.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border p-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">He enrolls in GigShield Plus (₹89/month)</h3>
                <p className="text-foreground/60">
                  Raju downloads the app, completes his profile in 2 minutes. His AI-powered ESS (Earnings Shield Score) is 72/100. He's covered.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border p-8">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-background font-bold flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Next rain → ₹850 lands in his account</h3>
                <p className="text-foreground/60">
                  Two weeks later, heavy rain hits Bengaluru again. GigShield instantly detects it, runs fraud checks (score: 8/100 = clear), and transfers ₹850 to his UPI in 7 minutes.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section id="partners" className="py-20 bg-background-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Platforms</h2>
          <p className="text-lg text-foreground/60">Coming to all major gig platforms in 2026</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Swiggy', 'Zomato', 'Uber', 'Amazon Flex'].map((platform) => (
            <Card key={platform} className="bg-card border-border p-8 flex items-center justify-center">
              <p className="font-bold text-lg text-foreground/60">{platform}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
