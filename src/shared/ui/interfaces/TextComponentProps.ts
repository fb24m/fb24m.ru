import type { HTMLAttributes, ReactNode } from 'react'

export interface TextComponentProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode
	className?: string
}
