
// import { useQuery } from "@tanstack/react-query";
import styles from "./style.module.scss";

import { Alignment, Box, Icon, Title2 } from "@/ui/components";
import { WordpressService } from "@/services/Wordpress";
import { formatDate } from "@/functions/formatDate";
import { IPost } from "@/interfaces/IPost";

interface PageProps {
	params: { slug: string }
}

export const dynamicParams = true;

export async function generateStaticParams() {
	const posts = await fetch('https://www.fb24m.ru/fb24m/wp-json/wp/v2/posts').then((res) => res.json()) as { slug: string }[];

	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export default async function Post({ params: { slug } }: PageProps) {
	const response = await fetch(`https://www.fb24m.ru/fb24m/wp-json/wp/v2/posts?slug=${slug}`);
	const post = await response.json() as IPost[];

	if (post) {
		return (
			<div className="container">
				<Title2 className={styles.title}>{post[0].title.rendered}</Title2>
				<Box className={styles.labels}>
					<Box gap={4} align={Alignment.center}><Icon name='person' />fb24m</Box>
					<Box gap={4} align={Alignment.center}><Icon name='calendar_month' />
						{formatDate(post[0].date)}
					</Box>
				</Box>
				<div className={'eval ' + styles.content} dangerouslySetInnerHTML={{ __html: post[0].content.rendered }}></div>
			</div>
		)
	}
	else {
		return <>{" <NotFoundError />"}</>
	}

}