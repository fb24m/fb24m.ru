import { Wordpress } from "@/services/Wordpress"
import { redirect } from "next/navigation"


interface PageProps {
	params: { shortcut: string }
}

export default async function Shortcut(props: PageProps) {
	const data = await Wordpress.getShortcutByName(props.params.shortcut);

	if (data) {
		redirect(data[0].acf.link);
	}
	else {

		return <>Пути {props.params.shortcut} не существует (404)</>
	}
}