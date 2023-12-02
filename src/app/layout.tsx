import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header';

import { Provider } from '@/components/Provider';
import { montserrat } from '@/fonts';
import { DataSend } from '@/components/DataSend/DataSend.component';

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
  // if (typeof window !== 'undefined') {
  //   console.log(window.location);
  // }
  // console.log(window?.location);

  return (
    <html className={`${montserrat.className}`} lang="en">
      <body>
        <DataSend />
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
