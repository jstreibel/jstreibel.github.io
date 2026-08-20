import { useEffect } from "react";

const linkGroups = [
  {
    title: "People",
    links: [
      {
        name: "John Carlos Baez",
        url: "https://johncarlosbaez.wordpress.com/",
        description:
          "In particular his posts on information theory.",
      },
      {
        name: "Paul Graham",
        url: "https://paulgraham.com",
        description: "Discovered his existence today (Aug 19th, 2026)"
      },
      {
        name: "Andrej Karpathy",
        url: "https://karpathy.ai/",
        description: "I have the impression he knew there was a way.",
      },
    ],
  },
];

function LinkItem({ name, url, description }) {
  const hostname = new URL(url).hostname;

  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">
        {name}
      </a>{" "}
      <span>— {hostname}</span>
      {description && <p>{description}</p>}
    </li>
  );
}

export default function LinksPage() {
  useEffect(() => {
    document.title = "Links | João Streibel";
  }, []);

  return (
    <>
      <h1>Links</h1>

      {linkGroups.map(({ title, links }) => (
        <section key={title} aria-labelledby={`${title}-heading`}>
          <h2 id={`${title}-heading`}>{title}</h2>
          <ul>
            {links.map((link) => (
              <LinkItem key={link.url} {...link} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
