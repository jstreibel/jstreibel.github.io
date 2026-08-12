import { Link, Outlet } from 'react-router-dom';

import jojoPapaImage from '../assets/jojo-papa.png';
import calvinImage from '../assets/calvin.webp';

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
      <img className="main-image" src={jojoPapaImage} alt="Calvin" />
      <img className="corner-image" src={calvinImage} alt="Calvin" />
    </>
  );
}
