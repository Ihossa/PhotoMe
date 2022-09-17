import styles from './LoadingSpinner.module.scss'

export const LoadingSpinner = () => {
    return (
        <div className={styles["spinner-container"]}>
            <div className={styles["loading-spinner"]} />
        </div>
    );
}