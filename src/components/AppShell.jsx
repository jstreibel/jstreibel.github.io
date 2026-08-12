import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { selectFooterNote, selectIdentity, selectNavigation } from '../features/site/siteSlice';
import styles from './AppShell.module.scss';

function navClassName({ isActive }) {
  return isActive ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink;
}

export default function AppShell({ children }) {
  const identity = useSelector(selectIdentity);
  const navigation = useSelector(selectNavigation);
  const footerNote = useSelector(selectFooterNote);

  return (
    <div className={styles.shell}>
      <div className={styles.frame}>
        <header className={styles.header}>
          <div className={styles.topline}>
            <div className={styles.brandBlock}>
              <p className={styles.eyebrow}>Personal Site</p>
              <h1 className={styles.brand}>
                <Link className={styles.brandLink} to="/">
                  {identity.name}
                </Link>
              </h1>
              <p className={styles.subtitle}>{identity.role}</p>
            </div>

            <nav aria-label="Primary" className={styles.nav}>
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  className={navClassName}
                  end={item.to === '/'}
                  to={item.to}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </header>

        <main className={styles.content}>{children}</main>

        <footer className={styles.footer}>
          <div className={styles.footerRow}>
            <span className={styles.footerLabel}>Contact</span>
            <a href={`mailto:${identity.email}`}>{identity.email}</a>
          </div>
          <p className={styles.footerNote}>{footerNote}</p>
        </footer>
      </div>
    </div>
  );
}
