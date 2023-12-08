import { Pacifico, Montserrat, Roboto, Fira_Code } from 'next/font/google'

export const pacifico = Pacifico({
	weight: ['400'],
	subsets: ['cyrillic'],
	display: 'swap'
})
export const montserrat = Montserrat({
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['cyrillic'],
	display: 'swap'
})
export const roboto = Roboto({
	weight: ['300', '400', '500', '700', '900'],
	subsets: ['cyrillic'],
	display: 'swap'
})
export const fira_code = Fira_Code({
	weight: ['300', '400', '500', '700'],
	subsets: ['cyrillic'],
	display: 'swap'
})