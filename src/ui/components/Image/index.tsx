import { HTMLAttributes } from 'react';
import styles from './index.module.scss';

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
	src: string
	alt: string
	absoluteSrc?: boolean
}

export const Image = ({ className, src, absoluteSrc, ...props }: ImageProps): JSX.Element => {
	return <img src={`${!absoluteSrc ? '/img/' : ''}${src}`} {...props} className={`observe ${styles.image} ${className}`} />
}