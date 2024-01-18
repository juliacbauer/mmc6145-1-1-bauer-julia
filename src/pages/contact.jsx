import styles from '../styles/home.module.css';
import linkedInPic from '../images/linkedin.png'
import gitHubPic from '../images/github.png'


export default function Contact() {
  const linkedIn = 'https://www.linkedin.com/in/julia-bauer-896229201/'
  const gitHub = 'https://github.com/juliacbauer'

  return (
    <main className={styles.mainPages}>
      <div className={styles.homeParagraph}>
        <h1>Contact</h1>
        <p className={styles.aboutParagraph}>Welcome to the Contact Page! To see even more of my work - like my publications, other projects, and work experience - vist my LinkedIn profile. If you want to see more of my repositories for previous course assignments, visit my GitHub profile.</p>
        
        <div className={styles.contactBox}>
          <div>
            <img src={linkedInPic} alt="LinkedIn logo" width="200" height="auto"/>
            <p>Check out my LinkedIn <a href={linkedIn} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>here</a>!</p>
          </div>

          <div>
            <img src={gitHubPic} alt="GitHub logo" width="200" height="auto"/>
            <p>Check out my GitHub <a href={gitHub} target="_blank" rel="noopener noreferrer" className={styles.contactLink}>here</a>!</p>
          </div>
        </div>
      </div>
    </main>
  );
}