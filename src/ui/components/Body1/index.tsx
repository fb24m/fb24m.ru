import styles from "./index.module.scss";
import { TextComponentProps } from "../../interfaces/TextComponentProps";

export const Body1 = ({ className, children, ...props }: TextComponentProps): JSX.Element => {
	return <p className={`${styles.body1} ${className}`} {...props}>{children}</p>
};