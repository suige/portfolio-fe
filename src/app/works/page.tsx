import styles from './page.module.css';
import { projects } from './data';
import { Project } from './project';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Works',
};

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
