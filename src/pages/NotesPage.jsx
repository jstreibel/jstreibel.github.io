import { useDispatch, useSelector } from 'react-redux';

import {
  selectActiveFilter,
  selectFilteredNotes,
  selectNoteFilters,
  setActiveFilter,
} from '../features/notes/notesSlice';
import { selectIdentity } from '../features/site/siteSlice';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { toLocalDate } from '../utils/dates';
import styles from './NotesPage.module.scss';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export default function NotesPage() {
  const dispatch = useDispatch();
  const identity = useSelector(selectIdentity);
  const activeFilter = useSelector(selectActiveFilter);
  const filters = useSelector(selectNoteFilters);
  const notes = useSelector(selectFilteredNotes);

  useDocumentTitle(`Notes | ${identity.name}`);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>Notes</p>
        <h2 className={styles.title}>Notes</h2>
        <p className={styles.subtitle}>
          Short essays, fragments, and decision logs. Filtered through Redux, rendered through React.
        </p>
      </header>

      <section className={styles.filters} aria-label="Note categories">
        {filters.map((filter) => {
          const active = filter === activeFilter;

          return (
            <button
              key={filter}
              className={active ? `${styles.filterChip} ${styles.filterChipActive}` : styles.filterChip}
              onClick={() => dispatch(setActiveFilter(filter))}
              type="button"
            >
              {filter}
            </button>
          );
        })}
      </section>

      <section className={styles.notesList}>
        {notes.map((note) => (
          <article key={note.id} className={styles.noteCard}>
            <p className={styles.noteMeta}>
              <time dateTime={note.date}>{dateFormatter.format(toLocalDate(note.date))}</time>
              {' · '}
              {note.category}
            </p>
            <h3 className={styles.noteTitle}>{note.title}</h3>
            <div className={styles.noteBody}>
              {note.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
