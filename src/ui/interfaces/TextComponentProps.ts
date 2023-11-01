import { HTMLAttributes } from "react"

export interface TextComponentProps extends HTMLAttributes<HTMLDivElement> {
	children?: JSX.Element | string
	className?: string
}