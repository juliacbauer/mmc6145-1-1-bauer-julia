import styles from '../styles/home.module.css'
import me from '../images/me.jpg'

export default function Home() {
  return (
    <main>
      <h1 className={styles.placeholder}>Julia Bauer</h1>
      <h2>UF Student</h2>
      <img src={me} alt="Me" width="200" height="auto"></img>
    </main>
  )
}