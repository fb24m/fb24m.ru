import { WordpressService } from "@/services/Wordpress"
import { Metadata } from "next"
import { redirect } from "next/navigation"


interface PageProps {
	params: { shortcut: string }
}

export default async function Shortcut(props: PageProps) {
	const { data } = await WordpressService.getShortcutByName(props.params.shortcut);

	if (data[0]) {
		redirect(data[0].acf.link);
	}
	else {

		return <>Пути {props.params.shortcut} не существует (404)</>
	}
}