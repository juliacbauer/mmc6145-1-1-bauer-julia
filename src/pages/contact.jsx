import styles from '../styles/home.module.css';

export default function Contact() {
  const linkedIn = 'https://www.linkedin.com/in/julia-bauer-896229201/'
  const gitHub = 'https://github.com/juliacbauer'

  return (
    <main>
      <div className={styles.infoBox}>
        <h1>Contact Page</h1>
        <h2>Test</h2>
        <p>Check out my <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>!</p>
        <p>Check out my <a href={gitHub} target="_blank" rel="noopener noreferrer">GitHub</a>!</p>
      </div>
    </main>
  );
}