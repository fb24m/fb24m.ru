import Link from 'next/link'

import styles from './Logo.module.scss'
import { Wordpress } from '@/services/Wordpress'
import Image from 'next/image'
import type { ReactElement } from 'react'
import { exists } from '@/functions/exists'

const Logo = async (): Promise<ReactElement> => {
	const settings = await Wordpress.getSettings()

	return (
		<div className={`${styles.logoBlock} logoBlock observe`}>
			<Link href="/">
				<Image width={35} height={35} src={exists(settings?.site_icon_url)} alt="" className={`${styles.logo} headerLogo`} />
				{settings?.name}
			</Link>
		</div>
	)
}

export default Logo
