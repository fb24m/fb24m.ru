import styles from './index.module.scss'

import { FigmaIcon } from '@/shared/ui/icons/Figma.component'
import { ReactIcon } from '@/shared/ui/icons/React.component'
import { NextIcon } from '@/shared/ui/icons/Next.component'
import { ViteIcon } from '@/shared/ui/icons/Vite.component'
import { WebPackIcon } from '@/shared/ui/icons/WebPack.component'
import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'
import Button from '@/shared/ui/components/Button'

const Title1 = dynamic(() => import('@/shared/ui/components/Title1'))
const Title2 = dynamic(() => import('@/shared/ui/components/Title2'))

const Icon = dynamic(() => import('@/shared/ui/components/Icon'))

const Welcome = (): ReactNode => {
	return (
		<article className={styles.block}>
			<div className="container">
				<div className={styles.columns}>
					<div className={clsx(styles.column, styles.wide)}>
						<Title1>Привет!</Title1>
						<Title2>Я frontend-разработчик</Title2>
						<ul className={styles.skills}>
							<li className={styles.skill}><FigmaIcon /> Figma</li>
							<li className={styles.skill}><ReactIcon /> React</li>
							<li className={styles.skill}><NextIcon /> Next.js</li>
							<li className={styles.skill}><ViteIcon /> Vite</li>
							<li className={styles.skill}><WebPackIcon /> WebPack</li>
						</ul>
						<div className={styles.contacts}>
							<li className={styles.contact}><Icon name="mail" />
								<Link href="mailto:hello@fb24m.ru">Email: hello@fb24m.ru</Link>
							</li>
							<li className={styles.contact}><Icon name="send" />
								<Link href="https://t.me/fb24m" target="_blank">Telegram: @fb24m</Link>
							</li>
							<li className={styles.contact}><Icon name="code" />
								<Link href="https://github.com/fb24m" target="_blank">GitHub</Link>
							</li>
						</div>
						<Link href="#contact">
							<Button icon="phone_enabled" appearance="Primary" className={styles.contactButton}>Связаться сейчас</Button>
						</Link>
					</div>
					<div className={clsx(styles.column, styles.cornerAligned)}>
						<Image className={styles.image} src="/img/home/code.png" alt="Код" width={384} height={384} />
					</div>
				</div>
				<ul className={styles.skillItems}>
					<li className={styles.skillItem}>HTML5</li>
					<li className={styles.skillItem}>Nunjucks</li>
					<li className={styles.skillItem}>CSS3</li>
					<li className={styles.skillItem}>SCSS</li>
					<li className={styles.skillItem}>WordPress</li>
					<li className={styles.skillItem}>Gulp</li>
					<li className={styles.skillItem}>JavaScript</li>
					<li className={styles.skillItem}>TypeScript</li>
					<li className={styles.skillItem}>ESLint</li>
					<li className={styles.skillItem}>WebPack</li>
					<li className={styles.skillItem}>BEM</li>
					<li className={styles.skillItem}>React</li>
					<li className={styles.skillItem}>React Query</li>
					<li className={styles.skillItem}>Axios</li>
					<li className={styles.skillItem}>Vite</li>
					<li className={styles.skillItem}>Next.js</li>
					<li className={styles.skillItem}>Git</li>
				</ul>
			</div>
		</article>
	)
}

export default Welcome
