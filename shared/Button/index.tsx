import {FC, ReactNode} from "react";

import styles from './button.module.scss'

export enum BTN_TYPE{
    MAIN = 'main',
    SECONDARY = 'secondary'
}

 interface IButton{
    typeBtn: BTN_TYPE;
    className?: string;
    children: ReactNode;
    onClick: () => void;
    disabled?: boolean
}


export const Button:FC<IButton>  = (props) => (
    <button disabled={props.disabled} type={'submit'} onClick = {props.onClick} className={`${styles['btn']} ${styles[props.typeBtn]} ${props.className}`}>
        {props.children}
    </button>
)