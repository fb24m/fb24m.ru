// import styles from './index.module.scss';
'use client';

import React from 'react';

import { Popup, PopupBody, PopupFooter, Button, Box, Icon, Alignment, Title3 } from '@/ui/components';
import { QueryClient, dehydrate, useQuery } from '@tanstack/react-query';
import { WordpressService } from '@/services/Wordpress';

export interface PopupProps {
	bind: string
	togglePopup: Function
};

const getChangelog = () => {
	return WordpressService.getGlobalFileBySlug('changelog');
}

export async function getStaticProps() {
	const queryClient = new QueryClient()

	await queryClient.prefetchQuery({
		queryKey: ['changelog'],
		queryFn: getChangelog,
	})

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	}
}

export const WhatsNewPopup = (props: PopupProps): React.ReactElement => {
	const { isLoading, isError, data } =
		useQuery({ queryKey: ['changelog'], queryFn: getChangelog })

	if (isLoading) return <>Подождите...</>
	if (isError) return <>Ошибка</>
	if (!data) return <>Неизвестная ошибка</>
	return (
		<Popup bind={props.bind}>
			<PopupBody>
				<Box justify={Alignment.center}>
					<Title3>Что нового</Title3>
				</Box>
				<Box className='eval' direction="column" dangerouslySetInnerHTML={{ __html: data.data[0].content.rendered }}></Box>
			</PopupBody>
			<PopupFooter>
				<Box justify={Alignment.end}>
					<Button onClick={() => props.togglePopup()} icon={<Icon name='cancel' />} appearance='Secondary'>Закрыть</Button>
				</Box>
			</PopupFooter>
		</Popup >
	);
};