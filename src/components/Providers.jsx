'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ThemeProvider } from 'next-themes';
import { LanguageProvider } from '@/context/LanguageContext';
import Layout from '@/Layout';
import { usePathname } from 'next/navigation';

const PAGE_NAME_MAP = {
  '/': 'Home',
  '/Home': 'Home',
  '/WelshIcons': 'WelshIcons',
  '/IconDetail': 'IconDetail',
  '/Locations': 'Locations',
  '/QRCards': 'QRCards',
  '/Timeline': 'Timeline',
};

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 1,
      },
    },
  }));

  const pathname = usePathname();
  const currentPageName = PAGE_NAME_MAP[pathname] ?? '';

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <LanguageProvider>
        <QueryClientProvider client={queryClient}>
          <Layout currentPageName={currentPageName}>
            {children}
          </Layout>
        </QueryClientProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
