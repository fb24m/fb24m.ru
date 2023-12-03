import styles from './index.module.scss';
import './index.scss'
import React, { HTMLAttributes } from 'react';

import { Title2, Title4 } from '@/ui/components';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-flip'

import { Autoplay, EffectFlip, Pagination } from 'swiper/modules';
import { WpImage } from '../../../WpImage/WpImage.component';

interface CaseProps extends HTMLAttributes<HTMLDivElement> {
	title: string
	content: string
	light?: boolean
	label: string
	images?: string[]
	review?: number
}

export const Case = ({ title, images, label, review, light }: CaseProps) => {
	return (
		<section className={`portfolio-case ${light ? styles.light : ''} ${styles.wrapper}`}>
			<div className={`container ${styles.inner}`}>
				<div className={styles.imageBlock}>
					{/* <WpImage className={`${styles.image} observe`} imageId={imageId} /> */}
					<Swiper modules={[EffectFlip, Pagination, Autoplay]} effect="flip" pagination loop autoplay>
						{images?.map((image) =>
							<SwiperSlide key={image}>
								<Image className={styles.image} src={image} alt="" width={600} height={600} />
							</SwiperSlide>)}
					</Swiper>
				</div>
				<div className={styles.info}>
					<Title4 className="observe">{label}</Title4>
					<Title2 className="observe">{title}</Title2>
					{review ? <><Title4 className="observe">Отзыв заказчика:</Title4><WpImage className={styles.review} imageId={review} /></> : ''}
				</div>
			</div>
		</section >
	);
};