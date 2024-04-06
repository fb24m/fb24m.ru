'use client'

import { useState, type FC } from 'react'
import styles from './LinksMenu.module.scss'
import { Container } from '@/shared/ui/components/Container'
import clsx from 'clsx'
import Title3 from '@/shared/ui/components/Title3'
import Link from 'next/link'
import { poiretOne } from '@/fonts'

export const LinksMenu: FC = () => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<div className={styles.menu}>
			<button className={clsx(styles.openButton, poiretOne.className)} onClick={() => { setIsOpened(!isOpened) }}>МЕНЮ</button>
			<div className={clsx(styles.body, isOpened && styles.opened)}>
				<Container className={clsx(styles.columns, poiretOne.className)}>
					<div className={styles.column}>
						<Title3 className={styles.title}>Соцсети</Title3>
						<ul className={styles.list}>
							<li><Link href="https://tenchat.ru/fb24m" target="_blank">Tenchat</Link></li>
							<li><Link href="https://t.me/fb24m_dev" target="_blank">Telegram</Link></li>
						</ul>
						<Title3 className={styles.title}>Контакты</Title3>
						<ul className={styles.list}>
							<li><Link href="mailto:hello@fb24m.ru">hello@fb24m.ru</Link></li>
							<li><Link href="https://t.me/fb24m" target="_blank">Telegram: @fb24m</Link></li>
							<li><Link href="https://kwork.ru/fb24m" target="_blank">Kwork</Link></li>
						</ul>
						<Title3 className={styles.title}>Портфолио</Title3>
						<ul className={styles.list} onClick={() => { setIsOpened(false) }}>
							<li><Link href="/pet">Пет-проекты</Link></li>
							<li><Link href="/portfolio">Все портфолио</Link></li>
							<li><Link href="/blog">Блог</Link></li>
						</ul>
					</div>
				</Container>
			</div>
		</div>
	)
}
