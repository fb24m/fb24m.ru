import styles from './index.module.scss';
import React from 'react';
import { Title2, Card } from '@/ui/components';

interface PostProps {
	slug: string
	title: string
	excerpt: string
	image: string
}

export const PostCard = (props: PostProps): React.ReactElement => {
	return (
		<Card className={styles.card}>
			<a href={`/blog/${props.slug}`} className={styles.link}><>
				<Title2>{props.title}</Title2>
				<div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
			</></a>
		</Card>
	);
};