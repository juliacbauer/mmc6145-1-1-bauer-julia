import styles from '../styles/home.module.css'
import me from '../images/me.jpg'

export default function About() {
    return (
      <main className={styles.mainPages}>
        <div className={styles.homeParagraph}>
          <h1>About Me</h1>
          <img src={me} alt="Me" width="400" height="auto"/>
          <p className={styles.aboutParagraph}>Glad to see you made it to the About page! As I mentioned on the Home page, My name is Julia Bauer, and I am an aspiring writer and web designer. I am a A University of Florida graduate student in the Master's in Mass Communication with a concentration in Web Design program. I graduated from UF with a B.S. in journalism and a minor in Communication Studies in May 2023.</p>
          <p className={styles.aboutParagraph}>During my time as an undergrad, I took courses on written news reporting and TV news reporting. Through those classes, I was published in WUFT News, The Independent Florida Alligator, and the Gainesville Sun. Additionally, a TV story that I wrote and filmed was aired on WUFT First at Five.</p>
          <p className={styles.aboutParagraph}>I also interned for the UF Alumni Association as a writer for Florida Gator Magazine, and I interned as a writer for Irving Publications, where I wrote stories for its parenting and fitness magazines.</p>
          <p className={styles.aboutParagraph}>Currently, I am still working for Irving Publications as I complete my master's degree. I am excited for what the future holds!</p>
        </div>
      </main>
    )
  }