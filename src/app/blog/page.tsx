// 'use client';

import styles from './index.module.scss';
import React from 'react';

import { API } from '../../services/Wordpress';

import { PostCard } from '@/components/PostCard';
import { IPost } from '@/interfaces/IPost';
export default async function Blog() {
	const response = await fetch(`${API}/posts`, { next: { tags: ["posts"], revalidate: 1 }, cache: "no-cache" });
	const posts: IPost[] = await response.json();

	if (!posts) return <>help@fb24m.ru</>
	if (posts)
		return (
			<div className={`container container-grid ${styles.container}`}>
				<div className="main">
					{/* использование ссылки с ссылкой в компоненте */}
					{posts ? posts.map((item) =>
						<PostCard key={item.id}
							title={item.title.rendered}
							excerpt={item.excerpt.rendered}
							image={''}
							slug={item.slug}
						/>
					) : ''}
				</div>
				{/* <div className={styles.sidebar}>
					<Sidebar /> 
				</div> */}
			</div>
		);
	else return <></>
};