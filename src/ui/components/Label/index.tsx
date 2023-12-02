import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps';
import { pacifico } from '@/fonts';

export const Label = (props: TextComponentProps) => {
	return <span className={`${pacifico.className} ${styles.label} ${props.className}`}>{props.children}</span>
};