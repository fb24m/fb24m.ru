'use client'

import { useState, createContext, type ReactNode } from 'react'
import type { PopupProps } from './Popup.props'

import styles from './Popup.module.scss'
import { exists } from '@/functions/exists'

export interface IPopupContext {
	togglePopupOpened?: () => void
}

export const PopupContext = createContext<IPopupContext>({})

const Popup = ({ className, children, trigger, ...props }: PopupProps): ReactNode => {
	const [classList, setClassList] = useState('')

	const togglePopupOpened = (): void => { classList === '' ? setClassList(styles.opened) : setClassList('') }

	return (
		<PopupContext.Provider value={{ togglePopupOpened }}>
			<div onClick={() => { togglePopupOpened() }}>{trigger}</div>
			<div {...props} className={`${classList} ${exists(className)} ${styles.popup}`}>
				<div className={styles.window}>
					{children}
				</div>
			</div>
		</PopupContext.Provider>
	)
}

export default Popup
