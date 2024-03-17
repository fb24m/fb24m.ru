import styles from './index.module.scss'
import Link from 'next/link'
import { WpImage } from '../../WpImage/WpImage.component'
import type { ReactElement } from 'react'
import dynamic from 'next/dynamic'
import type { PostCardProps } from './PostCard.props'
import { WpCategory } from '@/components/Wp/Category/WpCategory.component'

const Card = dynamic(() => import('@/shared/ui/components/Card'))

const PostCard = async (props: PostCardProps): Promise<ReactElement> => {
	return (
		<Card className={styles.card} as="section">
			<Link href={`/blog/${props.post.slug}`} className={styles.link}><>
				<WpImage className={styles.image} imageId={props.post.featured_media} />
				<div className={styles.info}>
					<span className={styles.title}>{props.post.title.rendered}</span>
					<div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: props.post.excerpt.rendered }} />
				</div>
			</></Link>
			<ul className={styles.tags}>
				{props.post.categories.map((category) => <li key={category} className={styles.tag}><Link href={`/blog/category/${category}`}><WpCategory categoryId={category} /></Link></li>)}
			</ul>
		</Card>
	)
}

export default PostCard
