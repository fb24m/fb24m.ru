import type { Metadata } from 'next'
import './globals.css'

import { firaCode } from '@/fonts'
import { Wordpress } from '@/services/Wordpress'
import { type ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const Header = dynamic(() => import('@/components/Header'))

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

const RootLayout = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <html className={`${firaCode.className}`} lang="en">
      <body>
        <div className="wrapper">
          <Header />
          <main>
            {children}
          </main>
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  )
}

export default RootLayout
