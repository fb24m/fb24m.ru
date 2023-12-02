import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header';

import { Provider } from '@/components/Provider';
import { montserrat } from '@/fonts';
import { DataSend } from '@/components/DataSend/DataSend.component';
import { Telegram } from '@/services/Telegram';

export const metadata: Metadata = {
  title: 'fb24m',
  description: 'Блог о веб-разработке и фронтенде',
  openGraph: {
    title: 'fb24m',
    description: 'Блог о веб-разработке и фронтенде',
    images: ['https://fb24m.ru/.png']
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const sendMessage = async (message: string) => {
    'use server'
    await Telegram.sendMessage(message)
  }

  return (
    <html className={`${montserrat.className}`} lang="en">
      <body>
        {/* <DataSend send={sendMessage} /> */}
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
