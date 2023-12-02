import styles from './index.module.scss';
import { TextComponentProps } from '../../interfaces/TextComponentProps';
import { fira_code } from '@/fonts';

export const Title3 = ({ children, className, ...props }: TextComponentProps): JSX.Element => {
	return <h3 className={`${fira_code.className} ${styles.title3} ${className}`} {...props}>{children}</h3>
}