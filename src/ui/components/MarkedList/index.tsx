import styles from './index.module.scss';
import React from 'react';

export const MarkedList = (props: { children?: React.ReactElement[] | string }): React.ReactElement => {
	return (
		<ul className={styles.markedList}>
			{props.children}
		</ul>
	);
};