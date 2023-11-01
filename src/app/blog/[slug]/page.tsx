'use client'

import { useParams } from "next/navigation";

import styles from "./index.module.scss";

import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { WordpressService } from '@/services/Wordpress';
import { Alignment, Box, Icon, Title2 } from '@/ui/components';
import { formatDate } from '@/functions/formatDate';

export default function Post() {
	const params = useParams();

	const { isLoading, isError, isSuccess, data, error } =
		useQuery({ queryKey: ['post'], queryFn: () => WordpressService.getPostBySlug(params.slug as string) });

	if (isLoading) return <>Подождите...</>
	else if (isError) { console.log(error); return <>Ошибка.</> }
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