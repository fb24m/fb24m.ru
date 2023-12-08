import styles from './index.module.scss';
import React from 'react';

import { Title1, Body1, Title2 } from '@/ui/components';
import { FigmaIcon } from '@/ui/icons/Figma.component';
import { ReactIcon } from '@/ui/icons/React.component';
import { NextIcon } from '@/ui/icons/Next.component';
import { ViteIcon } from '@/ui/icons/Vite.component';
import { WebPackIcon } from '@/ui/icons/WebPack.component';
import { Icon } from '@/ui/components/Icon/index';

const Welcome = (): React.ReactElement => {
	return (
		<article className={styles.block}>
			<div className="container">
				<div className={styles.columns}>
					<div className={styles.column}>
						<Title1 className={`${styles.title} observe`}>
							Привет!
						</Title1>
						<Body1 className={`observe ${styles.body}`}>Почти уже 3 года я занимаюсь разработкой сайтов и веб-приложений на фрилансе. За это время я научился воплощать в жизнь макеты любой сложности с самыми интересными интерактивными элементами</Body1>
						<Body1 className={`observe ${styles.body}`}>В этом блоге я расскажу свои лайфхаки для разработки и фриланса, а также расскажу о сайтах и веб-приложениях. Здесь вы можете найти ответы на самые интересующие вас вопросы про сайты, а если не найдете - вы знаете что делать</Body1>
						<Title2 className="observe">Работаю с:</Title2>
						<ul className={styles.skills}>
							<li className={`${styles.skill} observe`}><FigmaIcon /> Figma</li>
							<li className={`${styles.skill} observe`}><ReactIcon /> React</li>
							<li className={`${styles.skill} observe`}><NextIcon /> Next.js</li>
							<li className={`${styles.skill} observe`}><ViteIcon /> Vite</li>
							<li className={`${styles.skill} observe`}><WebPackIcon /> WebPack</li>
						</ul>
						<Title2 className="observe">Контакты:</Title2>
						<ul className={styles.contacts}>
							<li className={`${styles.contact} observe`}><Icon name="mail" /> Email: hello@fb24m.ru</li>
							<li className={`${styles.contact} observe`}><Icon name="send" /> Telegram: @fb24m</li>
							<li className={`${styles.contact} observe`}><Icon name="forum" /> TenChat</li>
						</ul>
					</div>
					<div className={styles.column}>
						<Title2 className={`${styles.title} observe`}>
							Навыки
						</Title2>
						<ul className={styles.skillItems}>
							<li className={`${styles.skillItem} observe`}>HTML5</li>
							<li className={`${styles.skillItem} observe`}>Nunjucks</li>
							<li className={`${styles.skillItem} observe`}>CSS3</li>
							<li className={`${styles.skillItem} observe`}>SCSS</li>
							<li className={`${styles.skillItem} observe`}>WordPress</li>
							<li className={`${styles.skillItem} observe`}>Gulp</li>
							<li className={`${styles.skillItem} observe`}>JavaScript</li>
							<li className={`${styles.skillItem} observe`}>TypeScript</li>
							<li className={`${styles.skillItem} observe`}>ESLint</li>
							<li className={`${styles.skillItem} observe`}>WebPack</li>
							<li className={`${styles.skillItem} observe`}>BEM</li>
							<li className={`${styles.skillItem} observe`}>React</li>
							<li className={`${styles.skillItem} observe`}>React Query</li>
							<li className={`${styles.skillItem} observe`}>Axios</li>
							<li className={`${styles.skillItem} observe`}>Vite</li>
							<li className={`${styles.skillItem} observe`}>Next.js</li>
							<li className={`${styles.skillItem} observe`}>Git</li>
						</ul>
					</div>
				</div>
			</div>
		</article>
	)
}
export default Welcome