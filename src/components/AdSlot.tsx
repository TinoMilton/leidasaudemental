import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { adsenseClient } from '@/lib/adsense';

interface AdSlotProps {
  slot?: string;
  format?: 'auto' | 'fluid';
  layout?: 'in-article';
  className?: string;
}

export function AdSlot({ slot, format = 'auto', layout, className }: AdSlotProps) {
  const pushed = useRef(false);
  const enabled = Boolean(adsenseClient && slot);

  useEffect(() => {
    if (!enabled || pushed.current) return;
    pushed.current = true;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.warn('[AdSlot] adsbygoogle.push failed', error);
    }
  }, [enabled]);

  if (!enabled) return null;

  return (
    <aside aria-label="Publicidade" className={cn('not-prose my-10 text-center', className)}>
      <span aria-hidden="true" className="block text-xs uppercase tracking-wider text-[#6B7280] mb-2">
        Publicidade
      </span>
      <ins
        className={cn('adsbygoogle', format === 'fluid' ? 'min-h-[200px]' : 'min-h-[280px]')}
        style={{ display: 'block' }}
        data-ad-client={adsenseClient}
        data-ad-slot={slot}
        data-ad-format={format}
        data-ad-layout={layout}
        data-full-width-responsive={format === 'auto' ? 'true' : undefined}
      />
    </aside>
  );
}
