import { Wordpress } from '../../services/Wordpress'
import type { Metadata } from 'next'

import { Body1, Box, Title2 } from '@/ui/components'
import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'

const PetCard = dynamic(() => import('./PetCard'))

export const generateMetadata = async (): Promise<Metadata> => {
	const settings = await Wordpress.getSettings()

	return {
		title: `Пет-проекты - ${settings?.name}`
	}
}

const Pet = async (): Promise<ReactElement> => {
	const data = await Wordpress.getPetProjects()

	if (typeof data[0].id !== 'undefined') {
		return (
			<Box direction="column" className="container">
				<Title2>Пет-проекты</Title2>
				<Body1>Здесь вы можете найти все мои пет-проекты, которые были созданы с использованием разных технологий. Это - имитация реальных проектов, поэтому намного проще оценить их уровень.</Body1>
				{data.map((item) =>
					<PetCard key={item.id} icon={item.acf.icon} title={item.title.rendered} content={item.content.rendered} url={item.acf.url} />
				)}
			</Box>
		)
	} else return <>{'<NotFoundError />'}</>
}

export default Pet
