import Link from 'next/link'

import styles from './Logo.module.scss'
import { Wordpress } from '@/services/Wordpress'
import type { ReactElement } from 'react'
import clsx from 'clsx'
import { poiretOne } from '@/fonts'

const Logo = async (): Promise<ReactElement> => {
	const settings = await Wordpress.getSettings()

	return (
		<div className={clsx(styles.logoBlock, poiretOne.className)}>
			<Link href="/">
				<svg width="41" height="36" viewBox="0 0 41 36" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_1_2)">
						<path d="M14.9742 8.35559H25.9583L31.4506 17.8682L25.9583 27.3807H14.9742L9.48191 17.8682L14.9742 8.35559Z" stroke="url(#paint0_linear_1_2)" strokeWidth="3.34871" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M25.9803 8.35855L31.4677 17.8626L25.9803 27.3666H23.8233V33.7615C25.7719 33.76 27.7209 33.7582 29.6694 33.7563L38.8457 17.8629L29.6694 1.96883C27.7209 1.9666 25.7719 1.96511 23.8233 1.96362C23.3832 4.0975 22.9426 6.23137 22.5024 8.36525C23.6618 8.36301 24.8212 8.36078 25.9806 8.35855H25.9803Z" stroke="url(#paint1_linear_1_2)" strokeWidth="3.34871" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M2.19437 17.8674L11.3706 33.7608C13.3192 33.7623 15.2681 33.7645 17.2167 33.766C17.6639 31.6366 18.1112 29.5075 18.5584 27.3781C17.3741 27.374 16.1901 27.3699 15.0058 27.3662L9.51837 17.8622L15.0058 8.35819H17.2167V1.96848C15.2681 1.96996 13.3192 1.97182 11.3706 1.97331L2.19437 17.8674Z" stroke="url(#paint2_linear_1_2)" strokeWidth="3.34871" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M14.9771 8.33139H25.9721L31.4696 17.8533L25.9721 27.3751H14.9771L9.47968 17.8533L14.9771 8.33139Z" stroke="url(#paint3_linear_1_2)" strokeWidth="3.42313" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M23.8233 1.96362C21.621 12.563 19.419 23.1621 17.2167 33.7615Z" fill="url(#paint4_linear_1_2)" />
						<path d="M23.8233 1.96362C21.621 12.563 19.419 23.1621 17.2167 33.7615" stroke="#3C3BD3" strokeWidth="3.34871" strokeLinecap="round" strokeLinejoin="round" />
					</g>
					<defs>
						<linearGradient id="paint0_linear_1_2" x1="29.1526" y1="26.5544" x2="11.7802" y2="9.18161" gradientUnits="userSpaceOnUse">
							<stop stopColor="#21BAD7" />
							<stop offset="0.21" stopColor="#279BD8" />
							<stop offset="0.75" stopColor="#3652DC" />
							<stop offset="1" stopColor="#3C35DE" />
						</linearGradient>
						<linearGradient id="paint1_linear_1_2" x1="37.3372" y1="28.456" x2="16.1503" y2="7.2691" gradientUnits="userSpaceOnUse">
							<stop stopColor="#2E9ED7" />
							<stop offset="0.01" stopColor="#2E9CD6" />
							<stop offset="0.69" stopColor="#3852D4" />
							<stop offset="1" stopColor="#3D36D3" />
						</linearGradient>
						<linearGradient id="paint2_linear_1_2" x1="24.8901" y1="28.4609" x2="3.70278" y2="7.27358" gradientUnits="userSpaceOnUse">
							<stop stopColor="#3D36D3" />
							<stop offset="0.31" stopColor="#3852D4" />
							<stop offset="0.99" stopColor="#2E9CD6" />
							<stop offset="1" stopColor="#2E9ED7" />
						</linearGradient>
						<linearGradient id="paint3_linear_1_2" x1="32.7491" y1="20.239" x2="8.19972" y2="15.4671" gradientUnits="userSpaceOnUse">
							<stop stopColor="#3083D7" />
							<stop offset="0.23" stopColor="#317CD7" />
							<stop offset="0.35" stopColor="#307AD5" />
							<stop offset="0.39" stopColor="#2E73D1" />
							<stop offset="0.42" stopColor="#2B67C9" />
							<stop offset="0.44" stopColor="#2656BD" />
							<stop offset="0.46" stopColor="#2040AE" />
							<stop offset="0.48" stopColor="#1A2A9F" />
							<stop offset="0.5" stopColor="#1E3AA9" />
							<stop offset="0.55" stopColor="#2656BD" />
							<stop offset="0.6" stopColor="#2C6ACA" />
							<stop offset="0.65" stopColor="#2F76D3" />
							<stop offset="0.7" stopColor="#317BD6" />
							<stop offset="0.85" stopColor="#317CD7" />
							<stop offset="1" stopColor="#3085D7" />
						</linearGradient>
						<linearGradient id="paint4_linear_1_2" x1="17.3134" y1="17.3056" x2="23.8226" y2="18.4363" gradientUnits="userSpaceOnUse">
							<stop stopColor="#345DDC" />
							<stop offset="0.28" stopColor="#345BDB" />
							<stop offset="0.38" stopColor="#3554DA" />
							<stop offset="0.45" stopColor="#3848D7" />
							<stop offset="0.51" stopColor="#3D36D4" />
							<stop offset="0.52" stopColor="#3C37D4" />
							<stop offset="0.57" stopColor="#3848D7" />
							<stop offset="0.64" stopColor="#3554DA" />
							<stop offset="0.73" stopColor="#345BDB" />
							<stop offset="1" stopColor="#345DDC" />
						</linearGradient>
						<clipPath id="clip0_1_2">
							<rect width="40" height="35.1514" fill="white" transform="translate(0.520012 0.289276)" />
						</clipPath>
					</defs>
				</svg>

				{settings?.name}
			</Link>
		</div>
	)
}

export default Logo
