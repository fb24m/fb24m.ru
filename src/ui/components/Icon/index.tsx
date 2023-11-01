import styles from './index.module.scss';

interface IconProps {
	name: string
	className?: string
	size?: 'small' | 'medium' | 'big' | 'large'
}

export const Icon = ({ size = 'small', ...props }: IconProps): JSX.Element => {
	return <i className={`${styles.icon} ${styles[size]} ${props.className ? `${props.className} ` : ''}material-symbols-outlined`}>{props.name}</i>
};