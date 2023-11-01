import styles from './index.module.scss';
import React from 'react';

import { Label, Title1, Body1, Button, Icon, Image } from '@/ui/components';
import { Advantage } from './Advantage';

export const Welcome = (): React.ReactElement => {
	const cards: React.ReactElement = <>
		<Advantage className={styles.mobile} icon="cycle" title="Оптимизация" description="Картинки сжимаются, шрифты уменьшаются - без потери качества. Это обеспечивает быструю загрузку сайтов на медленных устройствах" />
		<Advantage className={styles.mobile} icon="frame_source" title="Исходники" description="Исходники - SCSS и Nunjucks (или любые препроцессоры на ваш выбор). Дам их бесплатно, а если надо - объясню зачем они и куда их деть" />
	</>

	return (
		<div className={styles.block}>
			<div className="container">
				<div className={`${styles.columns}`}>
					<div className={`observe ${styles.column}`}>
						<Label className={`observe ${styles.label}`}>привет</Label>
						<Title1 className={`observe ${styles.title}`}>я fb24m</Title1>
						<Body1 className={`observe ${styles.description}`}>Более 3-ех лет опыта фронтенд-разработки, за это время разработал десятки сайтов, и сотни компонентов, многие из которых работают и приносят доход</Body1>
						<Button className={`observe ${styles.description}`}
							as='a' href='#portfolio'
							icon={<Icon name='laptop' />}
							appearance='Primary'>В портфолио</Button>
					</div>
					<div className={styles.column}>
						<Image src="home/welcome-image.png" alt="" className={`observe ${styles.image}`} />
					</div>
					<div className={styles.column} id='cards'>
						{cards}
					</div>
				</div>
				<div className={styles.advantages}>
					{cards}
					<Advantage icon='mitre'
						title='Библиотеки'
						description='Работаю с React, а также с его экосистемой - React Query, Redux, React Router и тп., а также с другими JavaScript библиотеками - Swiper, IMask и другие' />
					<Advantage icon='data_object'
						title='JavaScript'
						description='Мелкий функционал пишу сам - не подключаю огромную библиотеку ради маленького блока, чтобы сэкономить 10 минут жизни' />
					<Advantage icon='aod'
						title='Об устройствах'
						description='Сайты одинаково хорошо выглядят на всех размерах экранов - от 1920 до 360. А если адаптива в макете нет - сделаю его сам или по вашим пожеланиям' />
				</div>
			</div>
		</div>
	);
};