'use client';

import { Card } from '@/components/ui/card';
import { Code, Brain, Palette, BarChart3 } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Built in 72 Hours</h1>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            GigShield AI was created during Guidewire DEVTrails 2026 by a team of engineers, data scientists, designers, and insurance experts.
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="bg-card border-primary/20 p-10 mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-foreground/70 mb-4">
            India's gig economy is booming, but gig workers face constant disruptions—sudden rain, pollution spikes, protests, and extreme weather. 
            Most have zero income protection.
          </p>
          <p className="text-lg text-foreground/70 mb-4">
            We built GigShield to make parametric insurance instant, transparent, and accessible to every rider and delivery worker in India. 
            No claims forms. No waiting months. Just protection that actually works.
          </p>
          <p className="text-lg text-foreground/70">
            This is not just a prototype. This is a movement to give India's 450M+ gig workers the safety net they deserve.
          </p>
        </Card>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">The Team</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Full Stack Engineer',
                desc: 'Built the entire platform, API, and deployment pipeline',
                icon: Code,
              },
              {
                name: 'ML Engineer & Actuary',
                desc: 'Designed fraud detection AI and parametric payout formulas',
                icon: Brain,
              },
              {
                name: 'Product Designer',
                desc: 'Created the beautiful, intuitive UI that workers love',
                icon: Palette,
              },
              {
                name: 'Insurance Specialist',
                desc: 'Structured the parametric insurance model and IRDAI compliance',
                icon: BarChart3,
              },
            ].map((member, idx) => {
              const Icon = member.icon;
              return (
                <Card
                  key={idx}
                  className="bg-card border-border p-6 animate-slide-up"
                  style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
                >
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                      <p className="text-foreground/60 text-sm">{member.desc}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <Card className="bg-card border-border p-10 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Frontend</h3>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• Next.js 16 (React Server Components)</li>
                <li>• TypeScript & Tailwind CSS</li>
                <li>• Three.js for 3D visualizations</li>
                <li>• GSAP for scroll animations</li>
                <li>• Recharts for data visualization</li>
                <li>• Framer Motion for page transitions</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-3">Backend & Infrastructure</h3>
              <ul className="space-y-2 text-foreground/70 text-sm">
                <li>• Node.js API endpoints</li>
                <li>• Vercel Edge Functions</li>
                <li>• Mock data system (no database)</li>
                <li>• AI fraud detection (simulated)</li>
                <li>• Parametric payout engine</li>
                <li>• Deployed on Vercel</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Development Timeline</h2>
          <div className="space-y-6">
            {[
              { time: 'Hour 0-8', title: 'Design & Architecture', desc: 'Figma wireframes, tech stack, data schema' },
              { time: 'Hour 8-24', title: 'Core MVP', desc: 'Landing page, landing hero, basic dashboards' },
              { time: 'Hour 24-48', title: 'Features Sprint', desc: 'Three.js canvas, GSAP animations, charts' },
              { time: 'Hour 48-60', title: 'Polish & Testing', desc: 'Responsive design, edge cases, performance' },
              { time: 'Hour 60-72', title: 'Final Deployment', desc: 'Lighthouse audit, Vercel deployment, demo' },
            ].map((phase, idx) => (
              <Card
                key={idx}
                className="bg-card border-border p-6 animate-slide-up"
                style={{ animationDelay: `${0.7 + idx * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="text-primary font-bold text-sm whitespace-nowrap">{phase.time}</div>
                  <div>
                    <h3 className="font-bold mb-1">{phase.title}</h3>
                    <p className="text-foreground/60 text-sm">{phase.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-16 text-center text-foreground/60 text-sm">
          <p>
            © 2026 GigShield AI. Created at Guidewire DEVTrails 2026.
            <br />
            Licensed under IRDAI Sandbox. Powered by Vercel.
          </p>
        </div>
      </div>
    </div>
  );
}
