import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header';

import { Provider } from '@/components/Provider';

export const metadata: Metadata = {
  title: 'fb24m',
  description: 'Блог о веб-разработке и фронтенде',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
