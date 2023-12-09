'use client'

import { useState, type ReactNode } from 'react'
import styles from './Menu.module.scss'
import type { MenuProps } from './Menu.props'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/ui/components/Button'))
const Icon = dynamic(() => import('@/ui/components/Icon'))

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
				<li className={`observe ${styles.item}`}>
					<Button as='a' appearance='Link' href="/blog">Блог</Button>
				</li>
				<li className={`observe ${styles.item}`}>
					<Button as='a' appearance='Link' href="/pet">Пет-проекты</Button>
				</li>
			</ul>
		</div>
	)
}

export default Menu
