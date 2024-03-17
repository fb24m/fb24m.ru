import styles from './index.module.scss'

import { Body1 } from '@/shared/ui/components'
import { FigmaIcon } from '@/shared/ui/icons/Figma.component'
import { ReactIcon } from '@/shared/ui/icons/React.component'
import { NextIcon } from '@/shared/ui/icons/Next.component'
import { ViteIcon } from '@/shared/ui/icons/Vite.component'
import { WebPackIcon } from '@/shared/ui/icons/WebPack.component'
import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const Title1 = dynamic(() => import('@/shared/ui/components/Title1'))
const Title2 = dynamic(() => import('@/shared/ui/components/Title2'))

const Icon = dynamic(() => import('@/shared/ui/components/Icon'))

const Welcome = (): ReactNode => {
	return (
		<article className={styles.block}>
			<div className="container">
				<div className={styles.columns}>
					<div className={styles.column}>
						<Title1>
							Привет!
						</Title1>
						<Body1>Почти уже 3 года я занимаюсь разработкой сайтов и веб-приложений на фрилансе. За это время я научился воплощать в жизнь макеты любой сложности с самыми интересными интерактивными элементами</Body1>
						<Body1>В этом блоге я расскажу свои лайфхаки для разработки и фриланса, а также расскажу о сайтах и веб-приложениях. Здесь вы можете найти ответы на самые интересующие вас вопросы про сайты, а если не найдете - вы знаете что делать</Body1>
						<Title2>Работаю с:</Title2>
						<ul className={styles.skills}>
							<li className={styles.skill}><FigmaIcon /> Figma</li>
							<li className={styles.skill}><ReactIcon /> React</li>
							<li className={styles.skill}><NextIcon /> Next.js</li>
							<li className={styles.skill}><ViteIcon /> Vite</li>
							<li className={styles.skill}><WebPackIcon /> WebPack</li>
						</ul>
					</div>
					<div className={styles.column}>
						<Title2 className={styles.title}>
							Навыки
						</Title2>
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
						<Title2>Контакты:</Title2>
						<ul className={styles.contacts}>
							<li className={styles.contact}><Icon name="mail" /> Email: hello@fb24m.ru</li>
							<li className={styles.contact}><Icon name="send" /> Telegram: @fb24m</li>
							<li className={styles.contact}><Icon name="forum" /> TenChat</li>
						</ul>
					</div>
				</div>
			</div>
		</article>
	)
}

export default Welcome
