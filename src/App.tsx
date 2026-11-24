import styles from "./App.module.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";

function App() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <h1>Test Heading</h1>
        <span className={styles.logo}>Logo</span>
      </header>

      <section className={styles.content} aria-label="Menu">
        <h2 className={styles.menuTitle}>Menu</h2>
        <div className={styles.cardcontainer}>
          <Card
            title="peter"
            text="Das ist Peter"
            image="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=600&q=85"
            alternateImage="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=85"
          />
          <Card2
            title="susi"
            text="super susi"
            image="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=85"
            alternateImage="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=85"
          />
          <Card3
            title="paul"
            text="super paul"
            image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=85"
            alternateImage="https://images.unsplash.com/photo-1476673160081-cf065607f449?auto=format&fit=crop&w=600&q=85"
          />
        </div>
      </section>
    </main>
  );
}

export default App;
