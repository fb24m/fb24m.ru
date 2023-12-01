import styles from "./style.module.scss";
import { Metadata } from "next";

import { Alignment, Box, Icon, Title2, Title3 } from "@/ui/components";
import { formatDate } from "@/functions/formatDate";
import { Wordpress } from "@/services/Wordpress";
import { WpImage } from '../../../components/WpImage/WpImage.component';

interface PageProps {
	params: { slug: string }
}

export const dynamicParams = true;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const data = await Wordpress.getPostBySlug(params.slug);
	const [post] = data;

	if (post) return {
		title: post.title.rendered,
		openGraph: {
			title: post.title.rendered,
			description: post.title.rendered,
			url: `https://fb24m.ru/blog/${post.slug}}`,
			images: ['https://fb24m.ru/.png'],
		},
	}
	return {}
}

export default async function Post(props: PageProps) {
	const { params } = props;
	const data = await Wordpress.getPostBySlug(params.slug);

	return (
		<div className={`container ${styles.container}`}>
			<div className={styles.base}>
				<WpImage className={styles.image} imageId={data[0].featured_media} />
				<div className={styles.info}>
					<Title3 className={styles.title}>{data[0]?.title.rendered}</Title3>
					<Box className={styles.labels}>
						<Box gap={4} align={Alignment.center}><Icon name='person' />fb24m</Box>
						<Box gap={4} align={Alignment.center}><Icon name='calendar_month' />
							{formatDate(data[0]?.date)}
						</Box>
					</Box>
				</div>
			</div>
			<div className={'eval ' + styles.content} dangerouslySetInnerHTML={{ __html: data[0]?.content.rendered }}></div>
		</div>
	)
}