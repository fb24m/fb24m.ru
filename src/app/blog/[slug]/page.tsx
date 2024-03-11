import styles from './style.module.scss'
import type { Metadata } from 'next'

import { Alignment } from '@/ui/components'
import { formatDate } from '@/functions/formatDate'
import { Wordpress } from '@/services/Wordpress'
import { WpImage } from '../../../components/WpImage/WpImage.component'
import { exists } from '@/functions/exists'
import type { ReactElement } from 'react'
import { isDefined } from '@/functions/isDefined'
import dynamic from 'next/dynamic'
import { WpCategory } from '@/components/Wp/Category/WpCategory.component'
import Link from 'next/link'
import Eval from '@/components/Eval/Eval.component'

const Box = dynamic(() => import('@/ui/components/Box'))
const Icon = dynamic(() => import('@/ui/components/Icon'))

const Title3 = dynamic(() => import('@/ui/components/Title3'))

interface PageProps {
	params: { slug: string }
}

export const dynamicParams = true

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
	const data = await Wordpress.getPostBySlug(params.slug)

	if (typeof data.length === 'undefined') return {}

	const [post] = data

	const image = await Wordpress.getMediaById(post.featured_media)

	return {
		title: post.title.rendered,
		openGraph: {
			title: post.title.rendered,
			description: post.excerpt.rendered.replace(/[<p>,</p>]/g, ''),
			url: `https://fb24m.ru/blog/${post.slug}`,
			images: [exists(image?.guid?.rendered)]
		}
	}
}

const Post = async (props: PageProps): Promise<ReactElement> => {
	const { params } = props
	const data = await Wordpress.getPostBySlug(params.slug)

	if (isDefined(data)) {
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
							<Box gap={4} align={Alignment.center}>
								<Icon name='sell' />
								<Link href={`/blog/categories/${data[0].categories[0]}`}><WpCategory categoryId={data[0].categories[0]} /></Link>
							</Box>
						</Box>
					</div>
				</div>
				<Eval className={styles.content} dangerouslySetInnerHTML={{ __html: data[0]?.content.rendered }}></Eval>
			</div>
		)
	} else return <>404</>
}

export default Post
