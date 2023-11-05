import styles from './index.module.scss';
import { ReactNode } from 'react';

export const ReviewsBlock = (): ReactNode => {
	return (
		<div className="container">
			{"<ReviewsBlock />"}
			{[1, 2, 3].map(() => <br />)}
		</div>
	);
};

const ящер = {
	бить: () => { },
	вода_байкальская: () => {
		return {
			убить: () => { }
		}
	}
}