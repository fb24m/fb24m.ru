import styles from './index.module.scss'
import './scroll.scss'
import dynamic from 'next/dynamic'
import { Alignment } from '@/shared/ui/components'
import { Wordpress } from '@/services/Wordpress'
import type { ReactElement } from 'react'
import Button from '@/shared/ui/components/Button'
import { LinksMenu } from '@/features/LinksMenu/LinksMenu'
import { Container } from '@/shared/ui/components/Container'

const Menu = dynamic(() => import('./Menu/Menu.component'))
const Logo = dynamic(async () => await import('@/components/Logo/Logo.component'))

const ContactPopup = dynamic(async () => await import('@/popups/Contact.popup'), { ssr: false })

const Box = dynamic(() => import('@/shared/ui/components/Box'))

const Header = async (): Promise<ReactElement> => {
	const menu = await Wordpress.getMenu()

	return (
		<header className={styles.wrapper}>
			<Container className={styles.container}>
				<div className={styles.headerMain}>
					<Logo />
					<Menu items={menu?.items} breakpoint="(min-width: 768px)" />
					<Box align={Alignment.end} justify={Alignment.end}>
						<ContactPopup trigger={
							<Button
								className={styles.button}
								icon="phone_enabled"
								as='button'
								appearance='Primary'>Связаться</Button>} />
					</Box>
				</div>
				<LinksMenu />
			</Container>
		</header>
	)
}

export default Header
