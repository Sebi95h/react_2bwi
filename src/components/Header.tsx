import styles from "../App.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Test</h1>
      <span className={styles.headerBadge}>0</span>
    </header>
  );
}
