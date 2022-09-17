import styles from './Title.module.scss'

interface ITitle {
    title: string
}

export const Title = (({title} : ITitle) => {
    return (
        <h1 className={styles['title']}>{title}</h1>
    )
})