import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header';

import { Provider } from '@/components/Provider';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'fb24m',
  description: 'Блог о веб-разработке и фронтенде',
  openGraph: {
    title: 'fb24m',
    description: 'Блог о веб-разработке и фронтенде',
    images: ['https://fb24m.ru/.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script>


        </Script>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
