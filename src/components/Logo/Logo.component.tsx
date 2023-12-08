import Link from 'next/link'

import styles from './Logo.module.scss'
import { Wordpress } from '@/services/Wordpress'
import Image from 'next/image'

const exists = (str: string | undefined): string => {
	if (str) return str
	else return ''
}

const Logo = async () => {
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