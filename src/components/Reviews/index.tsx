import styles from './index.module.scss';
import { ReactNode } from 'react';

export const ReviewsBlock = (): ReactNode => {
	return (
		<article className="container">
			{"<ReviewsBlock />"}
			{[1, 2, 3].map(() => <br />)}
		</article>
	);
};