'use client'

import { type ReactNode, useContext } from 'react'
import type { PopupFooterProps } from './PopupFooter.props'

import styles from './PopupFooter.module.scss'
import { PopupContext } from '../Popup/Popup.component'
import { Alignment } from '@/shared/ui/components'
import { exists } from '@/functions/exists'
import dynamic from 'next/dynamic'
import { classList } from '@/functions/classList'

import Button from '@/shared/ui/components/Button'
const Box = dynamic(() => import('@/shared/ui/components/Box'))

const PopupFooter = ({ className, children, ...props }: PopupFooterProps): ReactNode => {
	const popup = useContext(PopupContext)

	return (
		<div {...props} {...classList(className, styles.popupFooter)}>
			<Box justify={Alignment.end}>
				<div onClick={() => { exists<() => void>(popup.togglePopupOpened)() }}>
					<Button appearance="Secondary">Закрыть</Button>
				</div> {children}
			</Box>
		</div>
	)
}

export default PopupFooter
