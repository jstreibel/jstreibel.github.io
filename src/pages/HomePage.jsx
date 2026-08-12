import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SectionCard from '../components/SectionCard';
import { selectLatestNote } from '../features/notes/notesSlice';
import { selectHomeContent, selectIdentity } from '../features/site/siteSlice';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { toLocalDate } from '../utils/dates';
import styles from './HomePage.module.scss';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export default function HomePage() {
  const home = useSelector(selectHomeContent);
  const identity = useSelector(selectIdentity);
  const latestNote = useSelector(selectLatestNote);

  useDocumentTitle(identity.name);

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroPanel}>
          <p className={styles.eyebrow}>{home.eyebrow}</p>
          <h2 className={styles.title}>{home.title}</h2>
          <p className={styles.tagline}>{home.tagline}</p>

          <div className={styles.copy}>
            {home.intro.map((paragraph) => (
              <p key={paragraph} className={styles.lead}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.actions}>
            <Link className={styles.primaryAction} to="/professional">
              See professional profile
            </Link>
            <a className={styles.secondaryAction} href={`mailto:${identity.email}`}>
              {identity.email}
            </a>
          </div>
        </div>

        {latestNote ? (
          <aside className={styles.notePanel}>
            <p className={styles.noteLabel}>Latest Note</p>
            <h3 className={styles.noteTitle}>{latestNote.title}</h3>
            <p className={styles.noteMeta}>
              <time dateTime={latestNote.date}>{dateFormatter.format(toLocalDate(latestNote.date))}</time>
              {' · '}
              {latestNote.category}
            </p>
            <p className={styles.noteExcerpt}>{latestNote.body[0]}</p>
            <Link className={styles.noteLink} to="/notes">
              Read all notes
            </Link>
          </aside>
        ) : null}
      </div>

      <section className={styles.grid} aria-label="Site sections">
        {home.sections.map((section) => (
          <SectionCard key={section.to} {...section} />
        ))}
      </section>
    </section>
  );
}
