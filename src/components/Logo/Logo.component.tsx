
import Link from 'next/link'
import React from 'react'

import styles from './Logo.module.scss'
import { Wordpress } from '@/services/Wordpress'
import Image from 'next/image'

export const Logo = async () => {
	const settings = await Wordpress.getSettings()

	return (
		<div className={`${styles.logoBlock} logoBlock observe`}>
			<Link href="/">
				<Image width={35} height={35} src={settings.site_icon_url} alt="" className={`${styles.logo} headerLogo`} />
				{settings.name}
			</Link>
		</div>
	)
}