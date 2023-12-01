import { Wordpress } from "@/services/Wordpress"
import Image from "next/image";
import styles from './WpImage.module.scss';

export interface WpImagemageProps {
	imageId: number
	className?: string
}

export const WpImage = async ({ imageId, className, ...props }: WpImagemageProps) => {
	const image = await Wordpress.getMediaById(imageId);

	return <>
		{image?.guid?.rendered ? <Image className={`${styles.image} ${className}`} {...props} width={1000} height={1000} src={image?.guid?.rendered} alt="" /> : <div className={styles.placeholer}></div>}
	</>
}