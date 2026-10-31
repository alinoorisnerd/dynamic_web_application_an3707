import styles from './BackBar.module.css'

const BackBar = () => {
  return (
    <div className={styles.bar}>
      <a href="/" className={styles.link}>
        ← Back to the homework wiki
      </a>
    </div>
  )
}

export default BackBar
