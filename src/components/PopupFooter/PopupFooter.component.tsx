'use client'

import { type ReactNode, useContext } from 'react'
import type { PopupFooterProps } from './PopupFooter.props'

import styles from './PopupFooter.module.scss'
import { PopupContext } from '../Popup/Popup.component'
import { Alignment } from '@/ui/components'
import { exists } from '@/functions/exists'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/ui/components/Button'))
const Box = dynamic(() => import('@/ui/components/Box'))

const PopupFooter = ({ className, children, ...props }: PopupFooterProps): ReactNode => {
	const popup = useContext(PopupContext)

	return (
		<div {...props} className={`${className} ${styles.popupFooter}`}>
			<Box justify={Alignment.end}>
				<div onClick={() => { exists<() => void>(popup.togglePopupOpened)() }}>
					<Button appearance="Secondary">Закрыть</Button>
				</div> {children}
			</Box>
		</div>
	)
}

export default PopupFooter
