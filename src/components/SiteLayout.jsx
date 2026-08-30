import { Link, NavLink, Outlet } from 'react-router-dom';

import { siteVariants } from '../config/siteVariants';

export default function SiteLayout({ variant = 'personal' }) {
  const site = siteVariants[variant];

  return (
    <div className={`site-layout site-layout--${variant}`}>
      <aside className="page-rail">
        {site.mainImage && <img className="main-image" src={site.mainImage} alt="" />}

        <nav className="page-nav" aria-label="Primary">
          {site.navigation.map(({ label, to }) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : undefined}>
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <Link className="site-version-link"
        to={variant === 'personal' ? '/professional/about' : '/personal/about'}>
        {variant === 'personal' ? 'View professional version of this site' : 'View personal version of this site'}
      </Link>

      <main className="page-content">
        <Outlet />
      </main>
      {site.cornerImage && <img className="corner-image" src={site.cornerImage} alt="" />}
    </div>
  );
}
