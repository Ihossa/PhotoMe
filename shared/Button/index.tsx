import {FC, ReactNode} from "react";

import styles from './button.module.scss'

export enum BTN_TYPE{
    MAIN = 'main',
    SECONDARY = 'secondary'
}

 interface IButton{
    type: BTN_TYPE;
    className?: string;
    children: ReactNode;
}


export const Button:FC<IButton>  = (props) => (
    <button className={`${styles['btn']} ${styles[props.type]} ${props.className}`}>
        {props.children}
    </button>
)