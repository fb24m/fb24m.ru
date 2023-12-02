'use client'

import React, { useState, createContext } from 'react'
import { PopupProps } from './Popup.props'

import styles from './Popup.module.scss'

export interface PopupContext {
	togglePopupOpened: Function
}

export const PopupContext = createContext<PopupContext>({} as PopupContext)

export const Popup = ({ className, children, trigger, ...props }: PopupProps) => {
	const [classList, setClassList] = useState('');

	const togglePopupOpened = () => classList === '' ? setClassList(styles.opened) : setClassList('');

	return (
		<PopupContext.Provider value={{ togglePopupOpened: togglePopupOpened }}>
			<div onClick={() => togglePopupOpened()}>{trigger}</div>
			<div {...props} className={`${classList} ${className ? className : ''} ${styles.popup}`}>
				<div className={styles.window}>
					{children}
				</div>
			</div>
		</PopupContext.Provider>
	);
}