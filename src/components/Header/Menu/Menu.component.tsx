'use client'

import { useState, type ReactNode, lazy } from 'react'
import styles from './Menu.module.scss'
import type { MenuProps } from './Menu.props'
import { Icon } from '@/ui/components'

const Button = lazy(() => import('@/ui/components/Button'))

const Menu = (props: MenuProps): ReactNode => {
	const [className, setClassName] = useState('')

	const toggleClassName = (): void => { className !== '' ? setClassName('') : setClassName(styles.opened) }

	return (
		<div className={styles.menu}>
			<div className={styles.icon} onClick={() => { toggleClassName() }}>
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

export default Menu
