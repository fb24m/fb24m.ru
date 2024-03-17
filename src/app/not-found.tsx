'use client'

import { Container } from '@/shared/ui/components/Container'
import type { ReactNode } from 'react'
import styles from './not-found.module.scss'
import Image from 'next/image'
import Button from '@/shared/ui/components/Button'
import Link from 'next/link'
import clsx from 'clsx'

const NotFound = (): ReactNode => {
	return (
		<Container className={styles.container}>
			<div className={styles.block}>
				<h1 className={clsx(styles.error, styles.small)}>404</h1>
				<Image src="/img/error/keyboard.png" alt="Сломанная клавиатура" width={650} height={650} />
			</div>
			<div className={styles.block}>
				<h1 className={clsx(styles.error, styles.desktop)}>404</h1>
				<p className={styles.description}>
					Вам отправили нерабочую ссылку или вы просто ошиблись при наборе. Напишите мне в телеграм, чтобы связаться напрямую. Или вернитесь на главную и поищите нужную страницу оттуда
				</p>
				<div className={styles.buttons}>
					<Button icon="home" appearance="Primary">На главную</Button>
					<Link href="https://t.me/@fb24m" target="_blank">
						<Button icon="send" appearance="Secondary">@fb24m</Button>
					</Link>
				</div>
			</div>
		</Container>
	)
}

export default NotFound
