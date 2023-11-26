'use client';

import styles from './index.module.scss';
import React, { useEffect, useState } from 'react';

import { WordpressService } from '../../services/Wordpress';

import { PostCard } from '@/components/PostCard';
import { IPost } from '@/interfaces/IPost';
import { Axios, AxiosResponse } from 'axios';

const useQuery = (queryFn: any) => {
	const [loaded, setLoaded] = useState(false);
	const [posts, setPosts] = useState<IPost[] | false>(false);

	useEffect(() => {
		if (!loaded) {
			console.log('hook call');

			queryFn().then((data: AxiosResponse) => {
				setPosts(data.data)
			});
		}
		setLoaded(true);
	}, [loaded]);

	return posts;
}

export default function Blog() {
	const posts = useQuery(() => WordpressService.getPosts());

	console.log(posts);
	// деструктуризация объекта с ссылками с ссылками на объекты


	// console.log(posts);

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
					{/* {posts[0].date} */}
				</div>
				<div className={styles.sidebar}>
					{/* <Sidebar /> */}
				</div>
			</div>
		);
	else return <></>
};