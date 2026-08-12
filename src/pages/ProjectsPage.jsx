import { useSelector } from 'react-redux';

import { selectIdentity, selectProjectsContent } from '../features/site/siteSlice';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './ContentPage.module.scss';

export default function ProjectsPage() {
  const projects = useSelector(selectProjectsContent);
  const identity = useSelector(selectIdentity);

  useDocumentTitle(`${projects.title} | ${identity.name}`);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Projects</p>
        <h2 className={styles.title}>{projects.title}</h2>
        <p className={styles.subtitle}>{projects.lead}</p>
      </header>

      <section className={styles.panel}>
        <ul className={styles.list}>
          {projects.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}
