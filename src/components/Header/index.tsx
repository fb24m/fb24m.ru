// 'use client'

import styles from './index.module.scss'
import './scroll.scss'
import React from 'react'

import { Button, Icon, Alignment, Box } from '@/ui/components'

import { Logo } from '../Logo/Logo.component'
import { WhatsNewPopup } from '../../popups/WhatsNew.popup'
import { Wordpress } from '@/services/Wordpress'
import { ContactPopup } from '@/popups/Contact.popup'

export const Header = async () => {
	const menu = await Wordpress.getMenu();

	return (
		<>
			<header className={`${styles.wrapper} header`}>
				<div className={`${styles.container} container`}>
					<button className={styles.menuClose}><Icon name='menu' /></button>
					<Logo />
					<ul className={styles.list}>
						{menu ? menu.items.map((item) =>
							<li key={item.ID} className={`observe ${styles.item}`}><Button as='a' appearance='Link' href={item.url}>{item.title}</Button></li>
						) : ''}
						<li className={`observe ${styles.item}`}><WhatsNewPopup trigger={<Button appearance='Link'>Что нового</Button>} /></li>
					</ul>
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


			{/* <ContactForm bind={contactPopup} as='popup' buttonsJustify={Alignment.end}
				buttons={<Button icon={<Icon name='cancel' />} appearance='Secondary' onClick={toggleContactPopup}>Закрыть</Button>} />
			<WhatsNewPopup togglePopup={toggleWhatsNewPopup} bind={whatsNewPopup} /> */}
		</>
	);
};