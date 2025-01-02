import styles from '../src/styles/components/LoadingIndicator.module.scss';

export default function LoadingIndicator() {
    return (
        <div className={styles.loader}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
