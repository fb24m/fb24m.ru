'use client'

import styles from './index.module.scss';
import './index.scss'
import React, { HTMLAttributes, useEffect, useState } from 'react';

import { Title2, Title4 } from '@/ui/components';

import 'swiper/css'
import 'swiper/css/effect-flip'

import { WpImage } from '../../../WpImage/WpImage.component';
import Image from 'next/image';

interface CaseProps extends HTMLAttributes<HTMLDivElement> {
	title: string
	content: string
	light?: boolean
	label: string
	image?: string
	review?: number
}

export const Case = ({ title, image, label, review, light }: CaseProps) => {

	return (
		<section className={`portfolio-case ${light ? styles.light : ''} ${styles.wrapper}`}>
			<div className={`container ${styles.inner}`}>
				<div className={styles.imageBlock}>
					<Image loading="lazy" src={image ? image : ''} className={`${styles.image}`} alt="" width={600} height={600} />
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