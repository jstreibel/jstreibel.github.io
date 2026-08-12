import { useEffect } from 'react';

export default function BlankPage() {
  useEffect(() => {
    document.title = 'João Streibel';
  }, []);

  return (
    <>
      <nav className="page-nav" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#notes">Notes</a>
      </nav>

      <main className="page-sections">
        <section id="about">
          <h1>About</h1>
          <p>Bla, bla, bla</p>
        </section>
        <section id="work">
          <h1>Work</h1>
          <p>Blo, blo, blo</p>
        </section>
        <section id="notes">
          <h1>Notes</h1>
          <p>Blu, blu, blu</p>
        </section>
      </main>

      <div className="page-rule" aria-hidden="true" />
    </>
  );
}

/*
return (
    <>
      <nav className="page-nav" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#notes">Notes</a>
      </nav>
      <div className="page-rule" aria-hidden="true" />
    </>
  );
*/
