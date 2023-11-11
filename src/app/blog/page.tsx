import styles from './index.module.scss';
import React from 'react';

import { WordpressService } from '../../services/Wordpress';

import { PostCard } from '@/components/PostCard';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const { data: settings } = await WordpressService.getSettings();

	return {
		title: `Блог - ${settings.name}`
	}
}

export default async function Blog() {
	// деструктуризация объекта с ссылками с ссылками на объекты
	const { data: posts } = await WordpressService.getPosts();

	if (!posts) return <>Что-то все совсем плохо... срочно пишите в хелп по сайту! help@fb24m.ru</>

	return (
		<div className={`container container-grid ${styles.container}`}>
			<div className="main">
				{/* использование ссылки с ссылкой в компоненте */}
				{posts.map((item) =>
					<PostCard key={item.id}
						title={item.title.rendered}
						excerpt={item.excerpt.rendered}
						image={''}
						slug={item.slug}
					/>
				)}
			</div>
			<div className={styles.sidebar}>
				{/* <Sidebar /> */}
			</div>
		</div>
	);
};