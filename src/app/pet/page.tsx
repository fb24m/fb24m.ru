import { WordpressService } from '../../services/Wordpress';
import React from 'react';

import { PetCard } from './PetCard';
import { Box } from '@/ui/components';

export default async function Pet() {
	const { data } = await WordpressService.getPetProjects();

	if (data) return (
		<Box direction="column" className="container">
			{data.map((item) =>
				<PetCard key={item.id} icon={item.acf.icon} title={item.title.rendered} content={item.content.rendered} url={item.acf.url} />
			)}
		</Box>
	)

	else return <>{"<NotFoundError />"}</>
};