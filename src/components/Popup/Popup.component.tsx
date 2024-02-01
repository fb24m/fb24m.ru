'use client'

import { useState, createContext, type ReactNode } from 'react'
import type { PopupProps } from './Popup.props'

import styles from './Popup.module.scss'
import { classList } from '@/functions/classList'

export interface IPopupContext {
	togglePopupOpened?: () => void
}

export const PopupContext = createContext<IPopupContext>({})

const Popup = ({ className, children, trigger, ...props }: PopupProps): ReactNode => {
	const [classNames, setClassNames] = useState('')

	const togglePopupOpened = (): void => { classNames === '' ? setClassNames(styles.opened) : setClassNames('') }

	return (
		<PopupContext.Provider value={{ togglePopupOpened }}>
			<div onClick={() => { togglePopupOpened() }}>{trigger}</div>
			<div {...props} {...classList(classNames, className, styles.popup)}>
				<div className={styles.window}>
					{children}
				</div>
			</div>
		</PopupContext.Provider>
	)
}

export default Popup
