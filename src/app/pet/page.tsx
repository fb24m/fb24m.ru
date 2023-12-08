import { Wordpress } from '../../services/Wordpress';
import React from 'react';
import { Metadata } from 'next';

import { PetCard } from './PetCard';
import { Body1, Box, Title2 } from '@/ui/components';

export async function generateMetadata(): Promise<Metadata> {
	const settings = await Wordpress.getSettings();

	return {
		title: `Пет-проекты - ${settings?.name}`
	}
}

export default async function Pet() {
	const { data } = await Wordpress.getPetProjects();

	if (data) return (
		<Box direction="column" className="container">
			<Title2>Пет-проекты</Title2>
			<Body1>Здесь вы можете найти все мои пет-проекты, которые были созданы с использованием разных технологий. Это - имитация реальных проектов, поэтому намного проще оценить их уровень.</Body1>
			{data.map((item) =>
				<PetCard key={item.id} icon={item.acf.icon} title={item.title.rendered} content={item.content.rendered} url={item.acf.url} />
			)}
		</Box>
	)

	else return <>{"<NotFoundError />"}</>
};