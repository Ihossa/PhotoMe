import styles from './Container.module.scss'
import {FC, ReactNode} from "react";

export const Container:FC<{ children?: ReactNode, className?: string}> = (props) => {
    return (
        <div className={`${styles['wrap-container']} ${props.className}`}>
            {props.children}
        </div>
    )
}