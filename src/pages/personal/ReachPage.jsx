import { useEffect } from 'react';

const contacts = [
  {
    label: 'E-mail',
    href: 'mailto:jstreibel@gmail.com',
    text: 'jstreibel@gmail.com',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jstreibel',
    text: 'linkedin.com/in/your-profile',
  },
  {
    label: 'X',
    href: 'https://x.com/j_streibel',
    text: 'x.com/j_streibel',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/jstreibel',
    text: 'instagram.com/jstreibel',
  },
];

export default function ReachPage() {
  useEffect(() => {
    document.title = 'Reach | João Streibel';
  }, []);

  return (
    <>
      <h1>Reach</h1>
      <p>A few facets.</p>

      <address>
        <ul className="reach-list">
          {contacts.map(({ label, href, text }) => (
            <li key={label}>
              <span className="reach-label">{label}</span>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </address>
    </>
  );
}
