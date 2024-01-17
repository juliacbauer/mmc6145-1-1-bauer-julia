import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <main>
    <div className={styles.hero}>
      <h1 className={styles.heading}>Julia Bauer</h1>
      <h2 className={styles.heading2}>UF Student</h2>
    </div>

    <section className={styles.homeContent}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi amet magni corrupti, sequi error, dolores odit sint tempore facilis deleniti quia quisquam iure nesciunt, ipsum fuga soluta dolorum debitis est!</p>
    </section>
  </main>
  );
}