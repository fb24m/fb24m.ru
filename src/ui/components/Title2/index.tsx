import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps';

export const Title2 = (props: TextComponentProps): JSX.Element => {
	return <h2 className={`${styles.title2} ${props.className}`}>{props.children}</h2>
}