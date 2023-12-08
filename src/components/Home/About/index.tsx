import styles from './index.module.scss';

import { Title2, Label, Button, Icon, Box } from '@/ui/components';
import { AboutCard } from './AboutCard';
import Image from 'next/image';

const About = () => (
	<article className={styles.wrapper}>
		<div className={`${styles.container} container`}>
			<div className={styles.subblock}>
				<Label className={`observe ${styles.label}`}>обо мне</Label>
				<Title2 className={`observe ${styles.title}`}>Кто я такой?</Title2>
				<div className={styles.cards}>
					<AboutCard className={styles.card} title='3 года' description='в сфере Frontend-разработки, почти' />
					<AboutCard className={styles.card} title='Более 20' description='заказчиков за 2 месяца' />
					<AboutCard className={styles.card} title='Более 10' description='проектов за 2 месяца' />
					<AboutCard className={styles.card} title='Более 50' description='страниц за 2 месяца' />
				</div>
				<Box className={styles.buttons}>
					<Button className={`observe`} icon={<Icon name='phone_enabled' />} href='#contact' as='a' appearance='Primary'>Связаться</Button>
					<Button className={`observe`} icon={<Icon name='laptop' />} href='#portfolio' as='a' appearance='Secondary'>В портфолио</Button>
				</Box>
			</div>
			<div className={styles.subblock}>
				<Image className={styles.image} width={380} height={380} src="/img/home/about-image.png" alt="" />
			</div>
		</div>
	</article>
)

export default About