// 'use client';

import styles from './index.module.scss';
import React from 'react';

import { Wordpress } from '../\../services/Wordpress';

import { PostCard } from '@/components/PostCard';

export default async function Blog() {

	const posts = await Wordpress.getPosts();

	if (!posts) return <>help@fb24m.ru</>
	if (posts)
		return (
			<div className={`container container-grid ${styles.container}`}>
				<div className={`main ${styles.posts}`}>
					{/* использование ссылки с ссылкой в компоненте */}
					{posts ? posts.map((item) =>
						<PostCard key={item.id}
							title={item.title.rendered}
							excerpt={item.excerpt.rendered}
							imageId={item.featured_media}
							slug={item.slug}
						/>
					) : ''}
				</div>
			</div>
		);
	else return <></>
};