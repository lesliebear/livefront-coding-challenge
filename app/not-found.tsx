import styles from './not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.text}> “Sometimes you have to get lost to find your way.”</p>
            <p className={styles.text}> — Jeff Rasley, Bringing Progress to Paradise</p>
        </div>
    )
}