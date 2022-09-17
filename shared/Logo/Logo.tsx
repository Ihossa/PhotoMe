import styles from './Logo.module.scss'

export const Logo = (props: {className?: string}) => {
    return <span className={`${styles['logo']} ${props.className}`}>Photomey</span>
}