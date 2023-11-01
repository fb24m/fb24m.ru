import styles from './index.module.scss';
import React from 'react';

import { Body1, Title3 } from '@/ui/components';

interface AboutCardProps {
	title: string,
	description: string
	className?: string
}

export const AboutCard = (props: AboutCardProps): React.ReactElement => {
	return (
		<div className={`${props.className}`}>
			<Title3 className={`observe ${styles.title}`}>{props.title}</Title3>
			<Body1 className={`observe`}>{props.description}</Body1>
		</div>
	);
};