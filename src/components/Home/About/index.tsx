import styles from './index.module.scss'

import { AboutCard } from './AboutCard'
import Image from 'next/image'
import type { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const Button = dynamic(() => import('@/shared/ui/components/Button'))
const Box = dynamic(() => import('@/shared/ui/components/Box'))

const Title2 = dynamic(() => import('@/shared/ui/components/Title2'))
const Label = dynamic(() => import('@/shared/ui/components/Label'))

const About = (): ReactNode => (
	<article className={styles.wrapper} id="about">
		<div className={`${styles.container} container`}>
			<div className={styles.subblock}>
				<Label>обо мне</Label>
				<Title2 className={styles.title}>Кто я такой?</Title2>
				<div className={styles.cards}>
					<AboutCard className={styles.card} title='3 года' description='в сфере Frontend-разработки, почти' />
					<AboutCard className={styles.card} title='Более 20' description='заказчиков за 2 месяца' />
					<AboutCard className={styles.card} title='Более 10' description='проектов за 2 месяца' />
					<AboutCard className={styles.card} title='Более 50' description='страниц за 2 месяца' />
				</div>
				<Box className={styles.buttons}>
					<Button icon="phone_enabled" href='#contact' as='a' appearance='Primary'>Связаться</Button>
					<Button icon="laptop" href='#portfolio' as='a' appearance='Secondary'>В портфолио</Button>
				</Box>
			</div>
			<div className={styles.subblock}>
				<Image className={styles.image} width={380} height={380} src="/img/home/about-image.png" alt="" />
			</div>
		</div>
	</article>
)

export default About
