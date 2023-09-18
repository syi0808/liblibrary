import { ReactNode } from 'react';
import NextUIProvider from './next-ui-provider';

export function GlobalProvider({ children }: { children: ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export * from './next-ui-provider';
