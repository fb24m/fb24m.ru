import styles from './index.module.scss'

import { Case } from './Case'
import { Wordpress } from '@/services/Wordpress'
import type { ReactElement } from 'react'
import { Container } from '@/shared/ui/components/Container'

const Portfolio = async (): Promise<ReactElement> => {
	const portfolio = await Wordpress.getPortfolio()

	return (
		<article id='portfolio'>
			<Container className={styles.wrapper} >

				{portfolio?.map((portfolioCase, index) =>
					<Case key={index}
						className={styles.case}
						imageId={portfolioCase.featured_media}
						label={portfolioCase.acf.label}
						title={portfolioCase.title.rendered}
						content={portfolioCase.content.rendered}
					/>
				)}
			</Container>
		</article>
	)
}

export default Portfolio
