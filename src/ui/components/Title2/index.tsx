import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps';
import { fira_code } from '@/fonts';

export const Title2 = (props: TextComponentProps): JSX.Element => {
	return <h2 className={`${fira_code.className} ${styles.title2} ${props.className}`}>{props.children}</h2>
}