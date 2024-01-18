import styles from '../styles/home.module.css'
import Project from '../components/project'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.hero}>
        <h1 className={styles.heading}>Julia Bauer</h1>
        <h2 className={styles.heading2}>Aspiring Writer and Web Designer</h2>
      </div>

      <div className={styles.homeParagraph}>
        <h2>Welcome to my portfolio!</h2>
        <p>Hello! My name is Julia Bauer, and I am an aspiring writer and web designer. I am a A University of Florida graduate student in the Master's in Mass Communication with a concentration in Web Design program. I graduated from UF with a B.S. in journalism in 2023. If you want to learn more about me, visit the about page! Below you can find some of my web development work from a few of my master's courses.</p>
      </div>

      <div>
        <Project 
          projectName='"The Office" Website' 
          projectInfo="This is a group project I worked on during my course on HTML and CSS. It is a multi-page website about one of our favorite shows, The Office."
          websiteLink="https://codepetersen1.github.io/the-office-group3/index.html"
        />
        <Project 
          projectName="Movie Database Website" 
          projectInfo="This is another group project I worked on during my course on JavaScript and external APIs. It is a movie database website that allows the user to search for information about any movie and see a list of the most popular movies in theaters at the moment." 
          websiteLink="https://renabmew.github.io/com6338-10-10-bauer-brown-colver/" 
        />
      </div>
    </main>
  );
}