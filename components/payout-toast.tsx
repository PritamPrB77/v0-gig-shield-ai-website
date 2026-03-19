'use client';

import { usePayoutToast } from '@/hooks/usePayoutToast';
import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';

export function PayoutToastProvider() {
  const { notifications } = usePayoutToast();
  const [, setRender] = useState(0);

  // Force re-render when notifications change
  useEffect(() => {
    setRender(prev => prev + 1);
  }, [notifications]);

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {notifications.map((notif) => (
        <div
          key={notif.id}
          className="bg-card border border-accent/30 rounded-lg p-4 shadow-lg animate-slide-in-right flex gap-3 items-start min-w-80"
        >
          <CheckCircle className="text-accent flex-shrink-0 mt-0.5" size={20} />
          <div className="flex-1">
            <p className="font-bold text-foreground">Payout Sent!</p>
            <p className="text-sm text-foreground/70">
              <span className="text-accent font-semibold">₹{notif.amount}</span> transferred to {notif.workerName}
            </p>
            <p className="text-xs text-foreground/50 mt-1">
              {notif.city} • {notif.timestamp}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
