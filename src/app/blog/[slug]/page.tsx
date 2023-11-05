
// import { useQuery } from "@tanstack/react-query";
import styles from "./style.module.scss";

import { Alignment, Box, Icon, Title2 } from "@/ui/components";
import { formatDate } from "@/functions/formatDate";
import { IPost } from "@/interfaces/IPost";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { WordpressService } from "@/services/Wordpress";

interface PageProps {
	params: { slug: string }
}

export const dynamicParams = true;

export default async function Post({ params: { slug } }: PageProps) {
	const { data } = await WordpressService.getPostBySlug(slug);

	if (data) {
		return (
			<div className="container">
				<Title2 className={styles.title}>{data[0]?.title.rendered}</Title2>
				<Box className={styles.labels}>
					<Box gap={4} align={Alignment.center}><Icon name='person' />fb24m</Box>
					<Box gap={4} align={Alignment.center}><Icon name='calendar_month' />
						{formatDate(data[0].date)}
					</Box>
				</Box>
				<div className={'eval ' + styles.content} dangerouslySetInnerHTML={{ __html: data[0]?.content.rendered }}></div>
			</div>
		)
	}
	else {
		return <>{" <NotFoundError />"}</>
	}

}