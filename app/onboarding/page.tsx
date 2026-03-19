'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle, Smartphone, Zap } from 'lucide-react';

interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'status';
  delay: number;
}

export default function Onboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [terminalLines, setTerminalLines] = useState<TerminalLine[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Generate terminal lines for step 2
  useEffect(() => {
    if (currentStep === 2) {
      setIsTyping(true);
      const lines: TerminalLine[] = [
        { text: '$ gigshield profile analyze', type: 'input', delay: 0 },
        { text: 'Loading earnings history...', type: 'status', delay: 500 },
        { text: 'Processing delivery zones...', type: 'status', delay: 1500 },
        { text: 'Analyzing platform patterns...', type: 'status', delay: 2500 },
        { text: 'ESS Score: 72/100 ✓', type: 'output', delay: 3500 },
        { text: 'Risk Profile: LOW ✓', type: 'output', delay: 4000 },
        { text: 'Ready for enrollment', type: 'output', delay: 4500 },
      ];

      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= lines.length) {
          setTerminalLines(lines.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsTyping(false);
        }
      }, 600);

      return () => clearInterval(interval);
    }
  }, [currentStep]);

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-12 animate-slide-up">
          <div className="flex justify-between items-center mb-4">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    step <= currentStep
                      ? 'bg-primary text-white'
                      : 'bg-border text-foreground/60'
                  }`}
                >
                  {step < currentStep ? '✓' : step}
                </div>
                <p className="text-xs text-foreground/60 mt-2">
                  {step === 1 ? 'Login' : step === 2 ? 'Profile' : 'Select Plan'}
                </p>
              </div>
            ))}
          </div>
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${(currentStep / 3) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Login */}
        {currentStep === 1 && <Step1 onNext={() => setCurrentStep(2)} />}

        {/* Step 2: AI Profiling */}
        {currentStep === 2 && (
          <Step2 onNext={() => setCurrentStep(3)} terminalLines={terminalLines} isTyping={isTyping} />
        )}

        {/* Step 3: Plan Selection */}
        {currentStep === 3 && <Step3 />}
      </div>
    </div>
  );
}

function Step1({ onNext }: { onNext: () => void }) {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');

  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-3xl font-bold mb-2">Choose Your Platform</h2>
        <p className="text-foreground/60">Your work, your protection. Integrated with your delivery app.</p>
      </div>

      <div className="grid gap-4">
        {[
          { id: 'swiggy', name: 'Swiggy', icon: '🍜' },
          { id: 'zomato', name: 'Zomato', icon: '🚴' },
          { id: 'uber', name: 'Uber / Uber Eats', icon: '🚗' },
          { id: 'amazon', name: 'Amazon Flex', icon: '📦' },
        ].map((platform) => (
          <Card
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className={`p-6 cursor-pointer transition-all border-2 ${
              selectedPlatform === platform.id
                ? 'border-primary bg-primary/10'
                : 'border-border hover:border-primary/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <span className="text-3xl">{platform.icon}</span>
              <div className="flex-1">
                <h3 className="font-bold text-lg">{platform.name}</h3>
              </div>
              {selectedPlatform === platform.id && (
                <CheckCircle className="text-primary" size={24} />
              )}
            </div>
          </Card>
        ))}
      </div>

      <div className="flex gap-4">
        <Button
          variant="outline"
          className="flex-1"
          disabled
        >
          Back
        </Button>
        <Button
          className="flex-1 bg-primary hover:bg-primary/90 text-white"
          onClick={onNext}
          disabled={!selectedPlatform}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

function Step2({
  onNext,
  terminalLines,
  isTyping,
}: {
  onNext: () => void;
  terminalLines: TerminalLine[];
  isTyping: boolean;
}) {
  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-3xl font-bold mb-2">AI Profile Analysis</h2>
        <p className="text-foreground/60">We're analyzing your earnings pattern to calculate your ESS score.</p>
      </div>

      <Card className="bg-background/50 border-border p-6 font-mono text-sm">
        <div className="space-y-2 h-64 overflow-y-auto">
          {terminalLines.map((line, idx) => (
            <div key={idx} className="flex gap-2">
              <span className="text-foreground/50">{'>'}</span>
              <span
                className={
                  line.type === 'input'
                    ? 'text-secondary'
                    : line.type === 'output'
                      ? 'text-accent'
                      : 'text-foreground/60'
                }
              >
                {line.text}
              </span>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-2 animate-pulse">
              <span className="text-foreground/50">{'>'}</span>
              <span className="text-foreground/60">Analyzing...</span>
            </div>
          )}
        </div>
      </Card>

      <Card className="bg-accent/10 border-accent/30 p-6">
        <div className="flex gap-3 items-start">
          <Zap className="text-accent flex-shrink-0 mt-0.5" size={20} />
          <div>
            <p className="font-bold text-accent mb-1">Your ESS Score: 72/100</p>
            <p className="text-sm text-foreground/70">
              Based on your 12-week earnings history and delivery zone patterns, you qualify for instant claim approval.
            </p>
          </div>
        </div>
      </Card>

      <div className="flex gap-4">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => window.history.back()}
        >
          Back
        </Button>
        <Button
          className="flex-1 bg-primary hover:bg-primary/90 text-white"
          onClick={onNext}
          disabled={isTyping}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

function Step3() {
  const [selectedPlan, setSelectedPlan] = useState<string>('plus');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStart = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Redirect to dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-3xl font-bold mb-2">Select Your Coverage</h2>
        <p className="text-foreground/60">Choose the protection level that fits your lifestyle.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { id: 'basic', name: 'Basic', price: '₹49', coverage: 'Up to ₹500' },
          { id: 'plus', name: 'Plus', price: '₹89', coverage: 'Up to ₹1,200', featured: true },
          { id: 'max', name: 'Max', price: '₹149', coverage: 'Unlimited' },
        ].map((plan) => (
          <Card
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`p-6 cursor-pointer transition-all border-2 ${
              selectedPlan === plan.id
                ? 'border-primary bg-primary/10 md:scale-105'
                : 'border-border hover:border-primary/50'
            } ${plan.featured ? 'md:col-span-1' : ''}`}
          >
            {plan.featured && (
              <div className="inline-block px-2 py-1 bg-primary/20 text-primary text-xs font-bold rounded mb-3">
                RECOMMENDED
              </div>
            )}
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-foreground/60 text-sm mb-4">{plan.coverage}</p>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <p className="text-xs text-foreground/60">/month</p>
          </Card>
        ))}
      </div>

      {/* UPI Payment Mock */}
      <Card className="bg-card border-border p-6">
        <h3 className="font-bold mb-4">Payment Method</h3>
        <div className="bg-background/50 p-4 rounded mb-4">
          <p className="text-sm text-foreground/70">
            <Smartphone className="inline mr-2" size={16} />
            UPI: gigshield@upi
          </p>
        </div>
        <p className="text-xs text-foreground/60">
          Your first month is free. You'll be charged monthly on your payment method.
        </p>
      </Card>

      <div className="flex gap-4">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => window.history.back()}
          disabled={isProcessing}
        >
          Back
        </Button>
        <Button
          className="flex-1 bg-primary hover:bg-primary/90 text-white"
          onClick={handleStart}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Start Protection'}
        </Button>
      </div>

      <p className="text-center text-xs text-foreground/60">
        By continuing, you agree to our{' '}
        <a href="#" className="text-primary hover:underline">
          Terms
        </a>{' '}
        and{' '}
        <a href="#" className="text-primary hover:underline">
          Privacy Policy
        </a>
      </p>
    </div>
  );
}
