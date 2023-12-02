import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps';

export const Title4 = (props: TextComponentProps): JSX.Element => {
	return <h4 className={`${styles.title4} ${props.className}`}>{props.children}</h4>
}