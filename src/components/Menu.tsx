import styles from "../App.module.css";

const menuItems = ["Übersicht", "Bilder", "Favoriten", "Einstellungen"];

export default function Menu() {
  return (
    <aside className={styles.menu}>
      <h2>Menü</h2>
      <nav aria-label="Hauptmenü">
        <ul>
          {menuItems.map((item, index) => (
            <li key={item}>
              <a className={index === 0 ? styles.activeMenuItem : ""} href={index === 0 ? "#start" : "#bilder"}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
