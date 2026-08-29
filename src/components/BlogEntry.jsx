import { useId } from 'react';
import Markdown from 'react-markdown';

function EntryBody({ body, format, children }) {
  if (body === undefined) {
    return children;
  }

  if (format === 'html') {
    return <div dangerouslySetInnerHTML={{ __html: body }} />;
  }

  return <Markdown>{body}</Markdown>;
}

export default function BlogEntry({
  title,
  date,
  time,
  body,
  format = 'md',
  children,
}) {
  const headingId = useId();
  const dateTime = date && time ? `${date}T${time}` : date || time;

  return (
    <article className="blog-entry" aria-labelledby={headingId}>
      <header>
        <h2 id={headingId}>{title}</h2>
        {dateTime && (
          <time dateTime={dateTime}>
            {date}
            {date && time && ' · '}
            {time}
          </time>
        )}
      </header>
      <div className="blog-entry-content">
        <EntryBody body={body} format={format}>{children}</EntryBody>
      </div>
    </article>
  );
}
