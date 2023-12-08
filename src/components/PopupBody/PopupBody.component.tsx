import { PopupBodyProps } from './PopupBody.props'

import styles from './PopupBody.module.scss'

export const PopupBody = ({ className, children, ...props }: PopupBodyProps) => {
	return (
		<div {...props} className={`${className} ${styles.popupBody}`}>
			{children}
		</div>
	);
}