import clsx from 'clsx'
import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Container.module.scss'

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>): ReactNode => {
	return <div className={clsx(className, styles.container)} {...props} />
}
