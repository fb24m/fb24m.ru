import React from 'react'

import { WordpressService } from '@/services/Wordpress'
import { GetServerSideProps } from 'next'

import styles from './Catalog.module.scss'
import { PostCard } from '../PostCard'



export const getServerSideProps: GetServerSideProps = async () => {
	const { data: posts } = await WordpressService.getPosts()

	return {
		props: { posts }
	}
}

export const Catalog = async () => {
	const { data: posts } = await WordpressService.getPosts()

	if (!posts) return <>help@fb24m.ru</>
	if (posts)
		return (
			<div className={`container container-grid ${styles.container}`}>
				<div className="main">
					{/* использование ссылки с ссылкой в компоненте */}
					{posts ? posts.map((item) =>
						<PostCard key={item.id}
							title={item.title.rendered}
							excerpt={item.excerpt.rendered}
							image={''}
							slug={item.slug}
						/>
					) : ''}
					{/* {posts[0].date} */}
				</div>
				<div className={styles.sidebar}>
					{/* <Sidebar /> */}
				</div>
			</div>
		);
	else return <></>
}