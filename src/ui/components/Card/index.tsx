import { exists } from '@/functions/exists'
import styles from './index.module.scss'
import type { HTMLAttributes, ReactNode } from 'react'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
	size?: 'small' | 'normal' | 'big'
	as?: 'div' | 'section' | 'article'
}

const Card = ({ className, as, ...props }: CardProps): ReactNode => {
	const size = exists(props.size)

	const childrenProps = {
		...props,
		className: `${className} ${styles.card} ${styles[`card_${size}`]}`
	}

	if (as === 'section') return <section {...childrenProps}></section>
	if (as === 'article') return <article {...childrenProps}></article>
	else return <div {...childrenProps}></div>
}

export default Card
