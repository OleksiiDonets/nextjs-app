import styles from './Loader.module.css';
export const Loader = () => {
  return(
    <div id={styles.universe}>
      <div id={styles.galaxy}>
        <div className={styles.circle}></div>
        <div className={styles.circle2}></div>
        <div className={styles.circle3}></div>
        <div id={styles.orbit0}>
          <div id={styles.pos0}>
            <div id={styles.dot0}></div>
          </div>
        </div>
        <div id={styles.orbit1}>
          <div id={styles.pos1}>
            <div id={styles.dot1}></div>
          </div>
        </div>
        <div id={styles.orbit2}>
          <div id={styles.pos2}>
            <div id={styles.dot2}></div>
          </div>
        </div>
        <div id={styles.orbit3}>
          <div id={styles.pos3}>
            <div id={styles.dot3}></div>
          </div>
        </div>
      </div>
    </div>
  )
}