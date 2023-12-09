import type { Metadata } from 'next'
import './globals.css'

import { firaCode } from '@/fonts'
import { Wordpress } from '@/services/Wordpress'
import { type ReactNode } from 'react'
import dynamic from 'next/dynamic'

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
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,200,0,0&display=swap"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
