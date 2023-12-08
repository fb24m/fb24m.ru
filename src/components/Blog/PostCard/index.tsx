import styles from './index.module.scss';
import { Card } from '@/ui/components';
import Link from 'next/link';
import { WpImage } from '../../WpImage/WpImage.component';

interface PostProps {
	slug: string
	title: string
	excerpt: string
	imageId: number
}

const PostCard = (props: PostProps): React.ReactElement => {
	return (
		<Card className={styles.card} as="section">
			<Link href={`/blog/${props.slug}`} className={styles.link}><>
				<WpImage className={styles.image} imageId={props.imageId} />
				<div className={styles.info}>
					<span className={styles.title}>{props.title}</span>
					<div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: props.excerpt }} />
				</div>
			</></Link>
		</Card>
	)
}

export default PostCard