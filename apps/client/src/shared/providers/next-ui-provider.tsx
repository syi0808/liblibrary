'use client';

import { ReactNode } from 'react';

import { NextUIProvider as OriginNextUIProvider } from '@nextui-org/react';

export default function NextUIProvider({ children }: { children: ReactNode }) {
  return <OriginNextUIProvider>{children}</OriginNextUIProvider>;
}
