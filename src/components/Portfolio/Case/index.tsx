import styles from './index.module.scss';
import React from 'react';

import { Card, Image, Title4 } from '@/ui/components';

interface CaseProps {
	image: string
	title: string
}

export const Case = (props: CaseProps): React.ReactElement => {
	return (
		<Card>
			<Image className={styles.image} src={props.image} alt='' />
			<Title4 className='observe'>{props.title}</Title4>
		</Card>
	);
};