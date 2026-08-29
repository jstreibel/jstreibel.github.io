import { useEffect } from 'react';

import BlogEntry from '../../components/BlogEntry';

const entries = [];

export default function NotesPage() {
  useEffect(() => {
    document.title = 'Notes | João Streibel';
  }, []);

  return (
    <>
      <h1>Notes</h1>

      {entries.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        entries.map(({ date, time, title, body, format }) => (
          <BlogEntry
            key={`${date}-${time}-${title}`}
            title={title}
            date={date}
            time={time}
            body={body}
            format={format}
          />
        ))
      )}
    </>
  );
}
