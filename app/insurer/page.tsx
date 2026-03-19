'use client';

import { Card } from '@/components/ui/card';
import { CLAIMS } from '@/lib/mockData';
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { AlertCircle, TrendingDown, TrendingUp, Users, Zap } from 'lucide-react';

const MONTHLY_DATA = [
  { month: 'Sep', premium: 450, claims: 280 },
  { month: 'Oct', premium: 520, claims: 310 },
  { month: 'Nov', premium: 580, claims: 340 },
  { month: 'Dec', premium: 620, claims: 380 },
  { month: 'Jan', premium: 710, claims: 420 },
  { month: 'Feb', premium: 850, claims: 510 },
];

const ZONE_DATA = [
  { zone: 'South', policies: 1240, premium: 85, claims: 55, lossRatio: '65%' },
  { zone: 'West', policies: 950, premium: 72, claims: 43, lossRatio: '60%' },
  { zone: 'North', policies: 1100, premium: 78, claims: 48, lossRatio: '62%' },
  { zone: 'East', policies: 680, premium: 52, claims: 32, lossRatio: '63%' },
];

export default function InsurerPortal() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 animate-slide-up">
          <h1 className="text-3xl font-bold mb-2">Insurer Control Panel</h1>
          <p className="text-foreground/60">GigShield portfolio analytics and claims management</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-border">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'claims', label: 'Claims' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-1 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-foreground/60 hover:text-foreground'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* KPI Cards */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              <KPICard title="Active Policies" value="3,970" icon={Users} delay="0s" />
              <KPICard title="Gross Premium" value="₹287L" icon={TrendingUp} delay="0.1s" />
              <KPICard title="Claims Paid" value="₹165L" icon={AlertCircle} delay="0.2s" />
              <KPICard title="Loss Ratio" value="57.5%" icon={TrendingDown} delay="0.3s" />
              <KPICard title="Avg Payout Time" value="8.2 min" icon={Zap} delay="0.4s" />
              <KPICard title="Fraud Rejection" value="4.2%" icon={AlertCircle} delay="0.5s" delay2="0.5s" />
            </div>

            {/* Charts */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Premium vs Claims */}
              <Card className="bg-card border-border p-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-xl font-bold mb-6">6-Month Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={MONTHLY_DATA}>
                    <defs>
                      <linearGradient id="colorPremium" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#FF5722" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#FF5722" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="colorClaims" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#00E5FF" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#00E5FF" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1A1A2E', border: '1px solid #2A2A3E' }}
                      formatter={(value) => `₹${value}L`}
                    />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="premium"
                      stroke="#FF5722"
                      fillOpacity={1}
                      fill="url(#colorPremium)"
                      name="Premium"
                    />
                    <Area
                      type="monotone"
                      dataKey="claims"
                      stroke="#00E5FF"
                      fillOpacity={1}
                      fill="url(#colorClaims)"
                      name="Claims"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Card>

              {/* Loss Ratio Trend */}
              <Card className="bg-card border-border p-8 animate-slide-up" style={{ animationDelay: '0.7s' }}>
                <h3 className="text-xl font-bold mb-6">Loss Ratio Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={MONTHLY_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                    <YAxis stroke="rgba(255,255,255,0.5)" />
                    <Tooltip contentStyle={{ backgroundColor: '#1A1A2E', border: '1px solid #2A2A3E' }} />
                    <Line
                      type="monotone"
                      dataKey={(data) => Math.round((data.claims / data.premium) * 100)}
                      stroke="#FFD600"
                      strokeWidth={2}
                      dot={{ fill: '#FFD600' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Zone Risk Table */}
            <Card className="bg-card border-border p-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-xl font-bold mb-6">Risk by Zone</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-border">
                    <tr>
                      <th className="text-left py-3 text-foreground/60 font-medium">Zone</th>
                      <th className="text-left py-3 text-foreground/60 font-medium">Policies</th>
                      <th className="text-left py-3 text-foreground/60 font-medium">Premium (₹L)</th>
                      <th className="text-left py-3 text-foreground/60 font-medium">Claims (₹L)</th>
                      <th className="text-left py-3 text-foreground/60 font-medium">Loss Ratio</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {ZONE_DATA.map((zone, idx) => (
                      <tr key={idx} className="hover:bg-background-secondary/30 transition">
                        <td className="py-3 font-semibold">{zone.zone}</td>
                        <td className="py-3">{zone.policies}</td>
                        <td className="py-3">₹{zone.premium}L</td>
                        <td className="py-3">₹{zone.claims}L</td>
                        <td className="py-3">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning/20 text-warning">
                            {zone.lossRatio}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        )}

        {/* Claims Tab */}
        {activeTab === 'claims' && (
          <Card className="bg-card border-border p-8 animate-slide-up">
            <h3 className="text-xl font-bold mb-6">Claims Log</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="border-b border-border">
                  <tr>
                    <th className="text-left py-3 text-foreground/60 font-medium">Claim ID</th>
                    <th className="text-left py-3 text-foreground/60 font-medium">Worker</th>
                    <th className="text-left py-3 text-foreground/60 font-medium">Zone</th>
                    <th className="text-left py-3 text-foreground/60 font-medium">Event</th>
                    <th className="text-left py-3 text-foreground/60 font-medium">Amount</th>
                    <th className="text-left py-3 text-foreground/60 font-medium">Fraud Score</th>
                    <th className="text-left py-3 text-foreground/60 font-medium">Status</th>
                    <th className="text-left py-3 text-foreground/60 font-medium">Payout Time</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {CLAIMS.map((claim) => (
                    <tr key={claim.id} className="hover:bg-background-secondary/30 transition">
                      <td className="py-3 font-mono text-xs">{claim.id}</td>
                      <td className="py-3">{claim.workerName}</td>
                      <td className="py-3">{claim.zone}</td>
                      <td className="py-3">{claim.eventType}</td>
                      <td className="py-3 font-semibold">₹{claim.amount}</td>
                      <td className="py-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            claim.fraudScore > 10
                              ? 'bg-destructive/20 text-destructive'
                              : 'bg-accent/20 text-accent'
                          }`}
                        >
                          {claim.fraudScore}/100
                        </span>
                      </td>
                      <td className="py-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/20 text-accent">
                          {claim.status}
                        </span>
                      </td>
                      <td className="py-3">{claim.payoutTime}m</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}

function KPICard({ title, value, icon: Icon, delay, delay2 }: any) {
  return (
    <Card className="bg-card border-border p-4 animate-slide-up" style={{ animationDelay: delay || delay2 }}>
      <div className="flex justify-between items-start mb-2">
        <p className="text-foreground/60 text-xs font-medium">{title}</p>
        <Icon className="text-primary" size={16} />
      </div>
      <p className="text-lg font-bold">{value}</p>
    </Card>
  );
}
