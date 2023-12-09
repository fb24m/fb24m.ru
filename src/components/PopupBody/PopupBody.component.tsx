import type { PopupBodyProps } from './PopupBody.props'

import styles from './PopupBody.module.scss'
import type { ReactNode } from 'react'

const PopupBody = ({ className, children, ...props }: PopupBodyProps): ReactNode => {
	return (
		<div {...props} className={`${className} ${styles.popupBody}`}>
			{children}
		</div>
	)
}

export default PopupBody
