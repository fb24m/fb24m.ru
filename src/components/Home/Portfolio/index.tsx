import './index.scss';
import styles from './index.module.scss';
import React from 'react';

import { Case } from './Case';
import { Wordpress } from '@/services/Wordpress';

export const Portfolio = async () => {
	const portfolio = await Wordpress.getPortfolio();

	return (
		<article className={`${styles.wrapper}`} id='portfolio'>

			{portfolio.map((portfolioCase, index) =>
				<Case key={index}
					{...index % 2 === 0 ? { light: true } : ''}
					image={portfolioCase.acf.gallery.split('\n')[0]}
					label={portfolioCase.acf.label}
					title={portfolioCase.title.rendered}
					content={portfolioCase.content.rendered}
					review={portfolioCase.acf.review}
				/>
			)}
		</article>
	);
};