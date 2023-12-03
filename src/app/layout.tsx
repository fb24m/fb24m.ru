import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'

import { Provider } from '@/components/Provider'
import { fira_code } from '@/fonts'

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
    <html className={`${fira_code.className}`} lang="en">
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
