import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'

import { firaCode } from '@/fonts'
import { Wordpress } from '@/services/Wordpress'
import { type ReactNode, Suspense } from 'react'
import { Spinner } from '@/ui/components/Spinner/Spinner.component'

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
        <Suspense fallback={<Spinner />}>
          <Header />
          {children}
        </Suspense>
      </body>
    </html>
  )
}

export default RootLayout
