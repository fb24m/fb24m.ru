'use client'

import styles from './index.module.scss';
import React from 'react';

import { WordpressService } from '../../services/Wordpress';

import { Sidebar } from '@/components/Sidebar';
import { PostCard } from '@/components/PostCard';

import { useQuery } from '@tanstack/react-query';

export default function Blog() {
	// деструктуризация объекта с ссылками с ссылками на объекты
	const { isLoading, isError, isSuccess, data, error } =
		useQuery({ queryKey: ['post'], queryFn: () => WordpressService.getPosts() });

	if (isLoading) return <>Загрузка...</>
	if (isError) { console.log(error); return <>Ошибка</> }
	if (!isSuccess || !data) return <>Что-то все совсем плохо... срочно пишите в хелп по сайту! help@fb24m.ru</>

	return (
		<div className={`container container-grid ${styles.container}`}>
			<div className="main">
				{/* использование ссылки с ссылкой в компоненте */}
				{data!.data.map((item) =>
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