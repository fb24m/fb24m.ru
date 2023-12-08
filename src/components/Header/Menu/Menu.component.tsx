'use client'

import { useState } from 'react'
import styles from './Menu.module.scss'
import { MenuProps } from './Menu.props'
import { Button, Icon } from '@/ui/components'

export const Menu = (props: MenuProps) => {
	const [className, setClassName] = useState('');

	const toggleClassName = () => className !== '' ? setClassName('') : setClassName(styles.opened)

	return (
		<div className={styles.menu}>
			<div className={styles.icon} onClick={() => toggleClassName()}>
				<Button appearance="Primary"><Icon name="menu" /></Button>
			</div>
			<ul className={`${styles.list} ${className}`}>
				{props.items?.map((item) =>
					<li key={item.ID} className={`observe ${styles.item}`}>
						<Button as='a' appearance='Link' href={item.url}>{item.title}</Button>
					</li>
				)}
			</ul>
		</div>
	)
}