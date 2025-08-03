'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  console.log('🔮', typeof window === 'undefined');
  return <SessionProvider>{children}</SessionProvider>;
}