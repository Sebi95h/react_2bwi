import styles from "./App.module.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.layout}>
        <Menu />
        <Content />
      </div>
    </div>
  );
}

export default App;
