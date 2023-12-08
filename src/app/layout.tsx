import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'

import { fira_code } from '@/fonts'
import { Wordpress } from '@/services/Wordpress'

export const generateMetadata = async (): Promise<Metadata> => {
  const settings = await Wordpress.getSettings()

  return {
    title: settings?.name,
    description: settings?.description,
    openGraph: {
      title: settings?.name,
      description: settings?.description,
      images: [`${settings?.site_icon_url}`]
    }
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${fira_code.className}`} lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
