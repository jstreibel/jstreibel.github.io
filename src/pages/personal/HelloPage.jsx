export default function HelloPage() {
  return (
    <div className="hello-page">
      <h1>Hello</h1>
      <p>and welcome.</p>

      <p>I&apos;m a software engineer for 15 years, with a PhD in Physics.</p>

      <p>
        My current focus is machine learning: to understand it properly, experiment and put it to work.
      </p>

      <p>
        Besides that, I enjoy pulling things apart
        <sup className="footnote-reference">
          <a href="#footnote-dagger" id="footnote-ref-dagger" aria-label="Read footnote">
            †
          </a>
        </sup>, learning new ideas, and building small projects whenever I get driven into them.
      </p>

      <aside className="footnote" id="footnote-dagger" aria-label="Footnote">
        <span className="footnote-mark" aria-hidden="true">†</span>
        <span>
          As much as when I was 5; but now I actually fix them (and have evidence).{' '}
          <a className="footnote-backlink" href="#footnote-ref-dagger" aria-label="Back to text">
            ↩
          </a>
        </span>
      </aside>
    </div>
  );
}
