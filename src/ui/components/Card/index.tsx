import styles from './index.module.scss';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	size?: 'small' | 'normal' | 'big',
	as?: 'div' | 'section' | 'article'
}

export const Card = ({ className, as, ...props }: CardProps): React.ReactElement => {
	const size = props.size ? props.size : 'normal';
	const childrenProps = {
		...props,
		className: `${className} ${styles.card} ${styles[`card_${size}`]}`
	}

	if (as === 'section') return <section {...childrenProps}></section>
	if (as === 'article') return <article {...childrenProps}></article>
	else return <div {...childrenProps}></div>
};