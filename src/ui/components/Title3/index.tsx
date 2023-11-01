import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps';

export const Title3 = ({ children, className, ...props }: TextComponentProps): JSX.Element => {
	return <h3 className={`${styles.title3} ${className}`} {...props}>{children}</h3>
}