import styles from './index.module.scss';
import './scroll.scss';
import React from 'react';

import { Button, Icon, Alignment, Box } from '@/ui/components';

import { Logo } from '../Logo/Logo.component';
import { Popup } from '../Popup/Popup.component';
import { WhatsNewPopup } from '../../popups/WhatsNew.popup';
import { PopupBody } from '../PopupBody/PopupBody.component';
import { PopupFooter } from '../PopupFooter/PopupFooter.component';
import { Wordpress } from '@/services/Wordpress';

export const Header = async () => {
	const content = await Wordpress.getGlobalFileBySlug('changelog');
	return (
		<>
			<header className={`${styles.wrapper} header`}>
				<div className={`${styles.container} container`}>
					<button className={styles.menuClose}><Icon name='menu' /></button>
					<Logo />
					<ul className={styles.list}>
						<li className={`observe ${styles.item}`}><Button as='a' appearance='Link' href="/blog">Блог</Button></li>
						<li className={`observe ${styles.item}`}><Button as='a' appearance='Link' href="/portfolio">Портфолио</Button></li>
						<li className={`observe ${styles.item}`}><Button as='a' appearance='Link' href="/contact">Связаться</Button></li>
						<li className={`observe ${styles.item}`}><Button as='a' appearance='Link' href="/pet">Пет-проекты</Button></li>
						<li className={`observe ${styles.item}`}><WhatsNewPopup trigger={<Button appearance='Link'>Что нового</Button>} /></li>
					</ul>
					<Box align={Alignment.end} justify={Alignment.end}>
						<Button
							className={`observe icon-mobile ${styles.button} ${styles.iconMobile}`}
							icon={<Icon name='phone_enabled' />}
							as='button'
							appearance='Primary'>Связаться</Button>
					</Box>
				</div>
			</header>


			{/* <ContactForm bind={contactPopup} as='popup' buttonsJustify={Alignment.end}
				buttons={<Button icon={<Icon name='cancel' />} appearance='Secondary' onClick={toggleContactPopup}>Закрыть</Button>} />
			<WhatsNewPopup togglePopup={toggleWhatsNewPopup} bind={whatsNewPopup} /> */}
		</>
	);
};