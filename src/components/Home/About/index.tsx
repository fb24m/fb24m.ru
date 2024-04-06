import styles from './index.module.scss'

import { AboutCard } from './AboutCard'
import Image from 'next/image'
import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'

import Button from '@/shared/ui/components/Button'
import { Body1 } from '@/shared/ui/components'
import { Container } from '@/shared/ui/components/Container'
const Box = dynamic(() => import('@/shared/ui/components/Box'))

const Title2 = dynamic(() => import('@/shared/ui/components/Title2'))
const Label = dynamic(() => import('@/shared/ui/components/Label'))

const About = (): ReactNode => (
	<article className={styles.wrapper} id="about">
		<Container className={styles.container}>
			<div className={styles.subblock}>
				<Label>обо мне</Label>
				<Title2 className={styles.title}>Кто я такой?</Title2>
				<Body1 className={styles.body}>Почти уже 3 года я занимаюсь разработкой сайтов и веб-приложений на фрилансе. За это время я научился воплощать в жизнь макеты любой сложности с самыми интересными интерактивными элементами</Body1>
				<Body1 className={styles.body}>В этом блоге я расскажу свои лайфхаки для разработки и фриланса, а также расскажу о сайтах и веб-приложениях. Здесь вы можете найти ответы на самые интересующие вас вопросы про сайты, а если не найдете - вы знаете что делать</Body1>
				<div className={styles.cards}>
					<AboutCard
						className={styles.card}
						cardTitle={<><span>3</span> года</>}
						description='в сфере Frontend-разработки, почти' />
					<AboutCard
						className={styles.card}
						cardTitle={<>Более <span>20</span></>}
						description='заказчиков за 2 месяца' />
					<AboutCard
						className={styles.card}
						cardTitle={<>Более <span>10</span></>}
						description='проектов за 2 месяца' />
					<AboutCard
						className={styles.card}
						cardTitle={<>Более <span>50</span></>}
						description='страниц за 2 месяца' />
				</div>
				<Box className={styles.buttons}>
					<Button icon="phone_enabled" href='#contact' as='a' appearance='Primary'>Связаться</Button>
					<Button icon="laptop" href='#portfolio' as='a' appearance='Secondary'>В портфолио</Button>
				</Box>
			</div>
			<div className={styles.subblock}>
				<Image className={styles.image} width={380} height={380} src="/img/home/about-image.png" alt="" />
			</div>
		</Container>
	</article>
)

export default About
