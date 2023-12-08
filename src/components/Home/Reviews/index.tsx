import { ReactNode } from 'react';

const ReviewsBlock = (): ReactNode => {
	return (
		<article className="container">
			{"<ReviewsBlock />"}
			{[1, 2, 3].map((item) => <br key={item} />)}
		</article>
	);
};

export default ReviewsBlock