'use client'

import { useContext } from 'react'
import { PopupFooterProps } from './PopupFooter.props'

import styles from './PopupFooter.module.scss'
import { PopupContext } from '../Popup/Popup.component'
import { Alignment, Box, Button } from '@/ui/components'

export const PopupFooter = ({ className, children, ...props }: PopupFooterProps) => {
	const popup = useContext(PopupContext);

	return (
		<div {...props} className={`${className} ${styles.popupFooter}`}>
			<Box justify={Alignment.end}>
				<div onClick={() => popup.togglePopupOpened()}>
					<Button appearance="Secondary">Закрыть</Button>
				</div> {children}
			</Box>
		</div>
	);
}