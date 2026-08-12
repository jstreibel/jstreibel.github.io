import { NavLink } from 'react-router-dom';

import styles from './SectionCard.module.scss';

export default function SectionCard({ description, linkLabel, title, to }) {
  return (
    <NavLink className={styles.card} to={to}>
      <span className={styles.kicker}>Explore</span>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <span className={styles.link}>{linkLabel}</span>
    </NavLink>
  );
}
