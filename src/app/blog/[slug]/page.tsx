import styles from "./style.module.scss";
import { Metadata } from "next";

import { Alignment, Box, Icon, Title2 } from "@/ui/components";
import { formatDate } from "@/functions/formatDate";
import { WordpressService } from "@/services/Wordpress";

interface PageProps {
	params: { slug: string }
}

export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const post = WordpressService.getPostBySlug(params.slug).then((data) => data.data[0]);

	return {
		title: (await post).title.rendered,
		openGraph: {
			title: (await post).title.rendered,
			description: (await post).title.rendered,
			url: `https://fb24m.ru/blog/${(await post).slug}`
		},
	}
}

export default async function Post(props: PageProps) {
	const { params } = props;
	const { data } = await WordpressService.getPostBySlug(params.slug);

	return (
		<div className={`container ${styles.container}`}>
			<Title2 className={styles.title}>{data[0]?.title.rendered}</Title2>
			<Box className={styles.labels}>
				<Box gap={4} align={Alignment.center}><Icon name='person' />fb24m</Box>
				<Box gap={4} align={Alignment.center}><Icon name='calendar_month' />
					{formatDate(data[0]?.date)}
				</Box>
			</Box>
			<div className={'eval ' + styles.content} dangerouslySetInnerHTML={{ __html: data[0]?.content.rendered }}></div>
		</div>
	)
}