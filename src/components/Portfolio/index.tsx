import styles from './index.module.scss';
import React from 'react';

import { Label, Title2 } from '@/ui/components';
import { Case } from './Case';

export const Portfolio = (): React.ReactElement => {
	return (
		<div className={`container ${styles.wrapper}`} id='portfolio'>
			<Label className='observe'>портфолио</Label>
			<Title2 className={`${styles.title} observe`}>Последние работы</Title2>
			<div className={styles.cards}>
				<Case image='home/case-1.png'
					title='Верстка лендинга тренинга школы' />
				<Case image='home/case-2.png'
					title='Верстка страницы сайта инвестиций' />
				<Case image='home/case-3.png'
					title='Лендинг китайских заводы под ключ' />
			</div>
		</div>
	);
};