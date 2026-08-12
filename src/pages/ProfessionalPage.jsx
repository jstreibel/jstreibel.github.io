import { useSelector } from 'react-redux';

import { selectIdentity, selectProfessionalContent } from '../features/site/siteSlice';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import styles from './ContentPage.module.scss';

export default function ProfessionalPage() {
  const professional = useSelector(selectProfessionalContent);
  const identity = useSelector(selectIdentity);

  useDocumentTitle(`${professional.title} | ${identity.name}`);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Professional</p>
        <h2 className={styles.title}>{professional.title}</h2>
        <p className={styles.subtitle}>{professional.subtitle}</p>
      </header>

      <section className={styles.panel}>
        {professional.lead.map((paragraph) => (
          <p key={paragraph} className={styles.lead}>
            {paragraph}
          </p>
        ))}
      </section>

      <section className={styles.grid}>
        {professional.strengths.map((strength) => (
          <article key={strength.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{strength.title}</h3>
            <p className={styles.cardText}>{strength.text}</p>
          </article>
        ))}
      </section>

      <section className={styles.panel}>
        <p className={styles.lead}>
          Contact:{' '}
          <a href={`mailto:${identity.email}`}>
            {identity.email}
          </a>
        </p>
      </section>
    </section>
  );
}
