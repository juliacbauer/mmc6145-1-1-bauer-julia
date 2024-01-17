import styles from '../styles/home.module.css'

const Project = ({projectName, projectInfo, websiteLink}) => (
    <div className={styles.projectBox}>
        <h2 className={styles.heading2}>{projectName}</h2>
        <p className={styles.homeContent}>{projectInfo}</p>
        <button><a href={websiteLink} target="_blank" rel="noopener noreferrer">Visit Website</a></button>
    </div>
    );
export default Project