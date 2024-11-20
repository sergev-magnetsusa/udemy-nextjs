import styles from './loading.module.css';

const LoadingOut = () => {
  return <p className={styles.loading}>
    Fetching meals...
  </p>
}

export default LoadingOut