import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps';

export const Title1 = (props: TextComponentProps): JSX.Element => {
	return <h1 className={`${styles.title1} ${props.className}`}>{props.children}</h1>
}