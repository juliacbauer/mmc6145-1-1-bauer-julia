import styles from '../styles/home.module.css'
import me from '../images/me.jpg'

export default function About() {
    return (
      <main>
        <div className={styles.infoBox}>
        <h1>About Page</h1>
        <h2>Test</h2>
        <img src={me} alt="Me" width="200" height="auto" className={styles.image}/>
        </div>
      </main>
    )
  }