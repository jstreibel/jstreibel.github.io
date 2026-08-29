import { useEffect } from "react";

const linkGroups = [
  {
    title: "People",
    links: [
      {
        name: "John Carlos Baez",
        url: "https://johncarlosbaez.wordpress.com/",
        description:
          "in particular his posts on information theory.",
      },
      {
        name: "Paul Graham",
        url: "https://paulgraham.com",
      },
      {
        name: "Andrej Karpathy",
        url: "https://karpathy.ai/",
        description: "I have the impression he knew there was a way.",
      },

    ],
  },
  {
    title: "Machine Learning",
    links: [
      {
        name: "Journal of Machine Learning Research",
        url: "https://www.jmlr.org",
      },
      {
        name: "Cosmograph",
        url: "https://run.cosmograph.app/public/ca9fd1ad-fe83-4238-8b69-b707c633aef0",
      }
    ],
  },
  {
    title: "Social | News",
    links: [
      {
        name: "Hacker News",
        url: "https://news.ycombinator.com/",
      },
    ],
  },
  {
    title: "Other",
    links: [
      {
        name: "Pure nostalgia",
        url: "https://web.archive.org/web/19961221231010/http://lucasarts.com/"
      },
      {
        name: "Hand Made from Zipties",
        url: "https://www.youtube.com/shorts/fybQMm133mc",
      },
    ],
  }
];

function LinkItem({ name, url, description }) {
  const hostname = new URL(url).hostname;

  return (
    <p>
      <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
      {description && <span>  {description}</span>}
    </p>
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
