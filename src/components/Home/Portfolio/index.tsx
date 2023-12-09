import './index.scss'
import styles from './index.module.scss'

import { Case } from './Case'
import { Wordpress } from '@/services/Wordpress'
import type { ReactElement } from 'react'

const Portfolio = async (): Promise<ReactElement> => {
	const portfolio = await Wordpress.getPortfolio()
	console.log('portfolio render')

	return (
		<article className={`${styles.wrapper}`} id='portfolio'>

			{portfolio?.map((portfolioCase, index) =>
				<Case key={index}
					{...index % 2 === 0 ? { light: true } : ''}
					imageId={portfolioCase.featured_media}
					label={portfolioCase.acf.label}
					title={portfolioCase.title.rendered}
					content={portfolioCase.content.rendered}
					review={portfolioCase.acf.review}
				/>
			)}
		</article>
	)
}

export default Portfolio
