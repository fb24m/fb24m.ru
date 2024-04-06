import styles from './index.module.scss'

import { Wordpress } from '../../services/Wordpress'
import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'
import { Container } from '@/shared/ui/components/Container'

const PostCard = dynamic(() => import('@/components/Blog/PostCard'))

const Blog = async (): Promise<ReactElement> => {
	const posts = await Wordpress.getPosts()

	if (typeof posts[0].id === 'undefined') { return <>help@fb24m.ru</> }
	if (typeof posts[0].id !== 'undefined') {
		return (
			<article className={styles.blog}>
				<Container className={`${styles.container}`}>
					<div className={`main ${styles.posts}`}>
						{posts.map((item) =>
							<PostCard key={item.id}
								post={item}
							/>
						)}
					</div>
				</Container>
			</article>
		)
	} else return <></>
}

export default Blog
