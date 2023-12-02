import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps';
import { fira_code } from '@/fonts';

export const Title1 = (props: TextComponentProps): JSX.Element => {
	return <h1 className={`${fira_code.className} ${styles.title1} ${props.className}`}>{props.children}</h1>
}