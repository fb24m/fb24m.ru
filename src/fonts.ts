import { Fira_Code } from 'next/font/google'
import localFont from 'next/font/local'

export const firaCode = Fira_Code({
	weight: ['400', '500', '700'],
	preload: false,
	display: 'swap'
})

export const materialIcons = localFont({
	src: './fonts/icons.woff2',
	display: 'swap',
	weight: '200',
	preload: true
})
