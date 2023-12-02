import { HTMLAttributes, ReactNode } from "react";

export interface PopupProps extends HTMLAttributes<HTMLDivElement> {
	trigger: ReactNode;
}