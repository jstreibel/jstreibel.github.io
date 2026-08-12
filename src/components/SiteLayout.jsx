import { Link, Outlet } from 'react-router-dom';

export default function SiteLayout() {
  return (
    <>
      <nav className="page-nav" aria-label="Primary">
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/notes">Notes</Link>
      </nav>

      <main className="page-content">
        <Outlet />
      </main>

      <div className="page-rule" aria-hidden="true" />
    </>
  );
}
