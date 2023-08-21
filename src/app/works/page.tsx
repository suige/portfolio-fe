import styles from './page.module.css';
import { projects } from './data';
import { Project } from './project';

export default function Works() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>works</h1>
      <div className={styles.workList}>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </main>
  );
}
