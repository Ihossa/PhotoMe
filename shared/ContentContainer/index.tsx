import {FC, ReactNode} from "react";
import styles from './ContentContainer.module.scss'

export const ContentContainer:FC<{
    children: ReactNode;
}> = (props) => {
    return (
        <div className={styles['container']}>
            {props.children}
        </div>
    )
}