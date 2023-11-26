import styles from './index.module.scss';
import React from 'react';

import { API, WordpressService } from '../../services/Wordpress';

import { PostCard } from '@/components/PostCard';
import { Metadata } from 'next';
import { IPost } from '@/interfaces/IPost';
import { revalidateTag } from 'next/cache';

export async function generateMetadata(): Promise<Metadata> {
	const { data: settings } = await WordpressService.getSettings();

	return {
		title: `Блог - ${settings.name}`
	}
}

export default async function Blog() {
	revalidateTag('posts');
	// деструктуризация объекта с ссылками с ссылками на объекты
	const response = await fetch(`${API}/posts`, { next: { tags: ['posts'] } });
	const posts: IPost[] = await response.json();

	console.log(posts);

	if (!posts) return <>help@fb24m.ru</>

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