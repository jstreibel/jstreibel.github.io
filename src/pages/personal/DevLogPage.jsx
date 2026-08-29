import { useEffect } from 'react';

const entries = [];

export default function DevLogPage() {
  useEffect(() => {
    document.title = 'DevLog | João Streibel';
  }, []);

  return (
    <>
      <h1>DevLog</h1>
      <p>Notes on things I&apos;m building, learning, and figuring out.</p>

      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        entries.map(({ date, title, body }) => (
          <article key={`${date}-${title}`}>
            <h2>{title}</h2>
            <time dateTime={date}>{date}</time>
            <p>{body}</p>
          </article>
        ))
      )}
    </>
  );
}
