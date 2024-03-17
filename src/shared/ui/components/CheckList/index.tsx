import clsx from 'clsx'
import { type Dispatch, type ReactNode, type SetStateAction, useState } from 'react'
import styles from './CheckList.module.scss'

export const CheckList = (props: {
	variants: string[]
	state: [string, Dispatch<SetStateAction<string>>]
}): ReactNode => {
	const [appType, setAppType] = props.state
	const [isOpened, setIsOpened] = useState(false)

	return (
		<div className={styles.select}>
			<div className={clsx(styles.preview, appType !== '' && styles.visible)} onClick={() => { setIsOpened(!isOpened) }}>{appType}</div>
			<ul className={clsx(styles.list, appType !== '' && styles.shrinked, isOpened && styles.opened)} onClick={() => { setIsOpened(false) }}>
				{props.variants.map(variant =>
					<li key={variant} onClick={() => { setAppType(variant) }} title={variant}>{variant}</li>
				)}
			</ul>
		</div>
	)
}
