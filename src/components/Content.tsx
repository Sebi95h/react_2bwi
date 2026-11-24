import styles from "../App.module.css";
import Pictures from "./Pictures";

export default function Content() {
  return (
    <main className={styles.content} id="start">
      <h2>Bilder</h2>
      <Pictures />
    </main>
  );
}
