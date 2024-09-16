"use client"

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

interface SessionValueProps {
  children: ReactNode;
}

export default function SessionValue({ children }: SessionValueProps) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}
