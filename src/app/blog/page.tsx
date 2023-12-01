// 'use client';

import styles from './index.module.scss';
import React from 'react';

import { WordpressService } from '../../services/Wordpress';

import { PostCard } from '@/components/PostCard';

export default async function Blog() {
	const { data: posts } = await WordpressService.getPosts();

	console.log(posts);

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