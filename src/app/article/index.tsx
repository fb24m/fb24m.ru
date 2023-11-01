'use client';

import styles from "./index.module.scss";

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { WordpressService } from '@/services/Wordpress';
import { Alignment, Box, Icon, Title2 } from '@/ui/components';
import { formatDate } from '@/functions/formatDate';

export default function Post() {
	const page = location.search.replace('?', '');

	const { isLoading, isSuccess, data } =
		useQuery({ queryKey: ['post'], queryFn: () => WordpressService.getPostBySlug(page) });

	if (isLoading) return <>Подождите...</>
	if (isSuccess && data.data[0]) {
		return (
			<div className="container">
				<Title2 className={styles.title}>{data.data[0].title.rendered}</Title2>
				<Box className={styles.labels}>
					<Box gap={4} align={Alignment.center}><Icon name='person' />fb24m</Box>
					<Box gap={4} align={Alignment.center}><Icon name='calendar_month' />
						{formatDate(data.data[0].date)}
					</Box>
				</Box>
				<div className={styles.content} dangerouslySetInnerHTML={{ __html: data.data[0].content.rendered }}></div>
			</div>
		)
	}
	else {
		return <>{"<NotFoundError />"}</>
	}
};