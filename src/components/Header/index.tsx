import styles from './index.module.scss'
import './scroll.scss'
import dynamic from 'next/dynamic'

import { Button, Icon, Alignment, Box } from '@/ui/components'

import { Wordpress } from '@/services/Wordpress'
import { Menu } from './Menu/Menu.component'

const Logo = dynamic(() => import('@/components/Logo/Logo.component'))
const ContactPopup = dynamic(() => import('@/popups/Contact.popup'))

export const Header = async () => {
	const menu = await Wordpress.getMenu()

	return (
		<>
			<header className={`${styles.wrapper} header`}>
				<div className={`${styles.container} container`}>
					<Logo />
					<Menu items={menu?.items} />
					<Box align={Alignment.end} justify={Alignment.end}>
						<ContactPopup trigger={
							<Button
								className={`observe icon-mobile ${styles.button} ${styles.iconMobile}`}
								icon={<Icon name='phone_enabled' />}
								as='button'
								appearance='Primary'>Связаться</Button>} />
					</Box>
				</div>
			</header>
		</>
	)
}