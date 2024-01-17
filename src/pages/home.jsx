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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi amet magni corrupti, sequi error, dolores odit sint tempore facilis deleniti quia quisquam iure nesciunt, ipsum fuga soluta dolorum debitis est!</p>
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