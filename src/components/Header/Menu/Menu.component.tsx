'use client'

import { useState, type ReactNode } from 'react'
import styles from './Menu.module.scss'
import type { MenuProps } from './Menu.props'
import dynamic from 'next/dynamic'
import { useMedia } from '@/hooks/useMedia'

import Button from '@/shared/ui/components/Button'
const Icon = dynamic(() => import('@/shared/ui/components/Icon'))

const Menu = (props: MenuProps): ReactNode => {
	const [className, setClassName] = useState('')
	const matchesMaxWidth = useMedia(props.breakpoint)

	const toggleClassName = (): void => { className !== '' ? setClassName('') : setClassName(styles.opened) }

	if (matchesMaxWidth) {
		return (
			<div className={styles.menu}>
				<button className={styles.button} onClick={() => { toggleClassName() }}><Icon name="menu" /></button>
				<ul className={`${styles.list} ${className}`} onClick={() => { setClassName('') }}>
					{props.items?.map((item) =>
						<li key={item.ID} className={styles.item}>
							<Button as='a' appearance='Link' href={item.url}>{item.title}</Button>
						</li>
					)}
					<li>
						<Button as='a' appearance='Link' href="/blog">Блог</Button>
					</li>
					<li>
						<Button as='a' appearance='Link' href="/pet">Пет-проекты</Button>
					</li>
				</ul>
			</div>
		)
	}
	return <></>
}

export default Menu
