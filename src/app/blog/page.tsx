import styles from './index.module.scss'

import { Wordpress } from '../../services/Wordpress'
import dynamic from 'next/dynamic'
import type { ReactElement } from 'react'

const PostCard = dynamic(() => import('@/components/Blog/PostCard'))

const Blog = async (): Promise<ReactElement> => {
	const posts = await Wordpress.getPosts()

	if (typeof posts[0].id === 'undefined') { return <>help@fb24m.ru</> }
	if (typeof posts[0].id !== 'undefined') {
		return (
			<div className={`container container-grid ${styles.container}`}>
				<div className={`main ${styles.posts}`}>
					{/* использование ссылки с ссылкой в компоненте */}
					{posts.map((item) =>
						<PostCard key={item.id}
							title={item.title.rendered}
							excerpt={item.excerpt.rendered}
							imageId={item.featured_media}
							slug={item.slug}
						/>
					)}
				</div>
			</div>
		)
	} else return <></>
}

export default Blog
