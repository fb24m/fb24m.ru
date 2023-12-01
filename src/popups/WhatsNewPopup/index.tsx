// import styles from './index.module.scss';

import React from 'react';

import { Popup, PopupBody, PopupFooter, Button, Box, Icon, Alignment, Title3 } from '@/ui/components';
import { Wordpress } from '@/services/Wordpress';

export interface PopupProps {
	bind: string
	togglePopup: Function
};

export const WhatsNewPopup = async (props: PopupProps) => {
	const { data } = await Wordpress.getGlobalFileBySlug('changelog');
	const [changelog] = data;

	if (!changelog) return <>ошибка</>
	return (
		<Popup bind={props.bind}>
			<PopupBody>
				<Box justify={Alignment.center}>
					<Title3>Что нового</Title3>
				</Box>
				<Box className='eval' direction="column" dangerouslySetInnerHTML={{ __html: changelog.content.rendered }}></Box>
			</PopupBody>
			<PopupFooter>
				<Box justify={Alignment.end}>
					<Button onClick={() => props.togglePopup()} icon={<Icon name='cancel' />} appearance='Secondary'>Закрыть</Button>
				</Box>
			</PopupFooter>
		</Popup >
	);
};