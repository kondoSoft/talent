import styles from '../styles/Portfolio.module.css'

const Skills = ({skill, knowledge}) => (
  <div className={styles.skillContainer}>
    <span className={styles.skillTitle}>{skill}</span>
    <div className={styles.back}></div>
    <div className={`${styles.skill} ${styles[knowledge]}`} width={knowledge}></div>
  </div>
)

export default Skills