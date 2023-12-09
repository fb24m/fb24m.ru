import { Wordpress } from '@/services/Wordpress'
import { redirect } from 'next/navigation'
import type { ReactElement } from 'react'

interface PageProps {
	params: { shortcut: string }
}

const Shortcut = async (props: PageProps): Promise<ReactElement> => {
	const data = await Wordpress.getShortcutByName(props.params.shortcut)

	if (typeof data[0].acf.link !== 'undefined') {
		redirect(data[0].acf.link)
	} else {
		return <>Пути {props.params.shortcut} не существует (404)</>
	}
}

export default Shortcut
