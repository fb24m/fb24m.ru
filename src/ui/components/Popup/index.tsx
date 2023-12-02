'use client';

import styles from './index.module.scss';
import React, { useState } from 'react';
import { CardProps } from '../';

export const useModal = (): [string, () => void] => {
	const [popup, setPopup] = useState('');

	const toggle = () => {
		if (popup) setPopup('');
		else setPopup('_opened _lock-html');
	}

	return [popup, toggle];
}

export interface PopupProps extends CardProps {
	bind: string
}

export const Popup = ({ children, className, bind, ...props }: PopupProps): React.ReactElement => {
	return (
		<div className={`${styles.popup} ${bind.includes('_opened') ? `${styles.opened} _lock-html` : ''}`}>
			<div className={styles.wrapper} {...props}>
				{children}
			</div>
		</div>
	);
};