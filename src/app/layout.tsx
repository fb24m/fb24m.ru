import type { Metadata } from 'next'
import './globals.css'

import { firaCode } from '@/fonts'
import { Wordpress } from '@/services/Wordpress'
import { type ReactNode } from 'react'
import dynamic from 'next/dynamic'
import { SpeedInsights } from '@vercel/speed-insights/next'

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
        <Header />
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout
