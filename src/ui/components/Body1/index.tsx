import styles from "./index.module.scss";
import { TextComponentProps } from "../../interfaces/TextComponentProps";
import { fira_code } from "@/fonts";

export const Body1 = ({ className, children, ...props }: TextComponentProps): JSX.Element => {
	return <p className={`${fira_code.className} ${styles.body1} ${className}`} {...props}>{children}</p>
};