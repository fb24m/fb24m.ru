import styles from './index.module.scss';
import './index.scss'
import { HTMLAttributes } from 'react';

import { Title2, Title4 } from '@/ui/components';

import 'swiper/css'
import 'swiper/css/effect-flip'

import { WpImage } from '../../../WpImage/WpImage.component';

interface CaseProps extends HTMLAttributes<HTMLDivElement> {
	title: string
	content: string
	light?: boolean
	label: string
	imageId: number
	review?: number
}

export const Case = ({ title, imageId, label, review, light }: CaseProps) => {
	console.log('render case')

	return (
		<section className={`portfolio-case ${light ? styles.light : ''} ${styles.wrapper}`}>
			<div className={`container ${styles.inner}`}>
				<div className={styles.imageBlock}>
					<WpImage className={styles.review} imageId={imageId} />
				</div>

				<div className={styles.info}>
					<Title4 className="observe">{label}</Title4>
					<Title2 className="observe">{title}</Title2>
					{review ? <>
						<Title4 className="observe">Отзыв заказчика:</Title4>
						<WpImage className={styles.review} imageId={review} />
					</> : ''}
				</div>
			</div>
		</section >
	);
};