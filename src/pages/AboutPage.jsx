import { useSelector } from 'react-redux';

import { selectAboutContent, selectIdentity } from '../features/site/siteSlice';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './ContentPage.module.scss';

export default function AboutPage() {
  const about = useSelector(selectAboutContent);
  const identity = useSelector(selectIdentity);

  useDocumentTitle(`${about.title} | ${identity.name}`);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>About</p>
        <h2 className={styles.title}>{about.title}</h2>
        <p className={styles.subtitle}>{about.lead}</p>
      </header>

      <section className={styles.panel}>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className={styles.lead}>
            {paragraph}
          </p>
        ))}
      </section>
    </section>
  );
}
