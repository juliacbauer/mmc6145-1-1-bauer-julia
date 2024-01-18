import styles from '../styles/home.module.css'

const Project = ({projectName, projectInfo, websiteLink}) => (
    <div className={styles.homeParagraph}>
        <h2 className={styles.projectHeading}>{projectName}</h2>
        <p>{projectInfo}</p>
        <button className={styles.projectBtn}><a href={websiteLink} target="_blank" rel="noopener noreferrer" className={styles.projectBtnTxt}>Visit Website</a></button>
    </div>
    );
export default Project