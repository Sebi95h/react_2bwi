import styles from "./App.module.css"
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";

function App() {
  return (
    <>
      <div className={styles.cardcontainer}>
        <Card title="Handball" text="Bank Spieler" image="https://lauterach-hc.clubdesk.com/clubdesk/w_lauterach-hc/fileservlet?type=image&id=1000986&s=djEtZjdMHvLw8A9jBlnF1Z_O_4f_HCgu08ZL3udOhw8a8Ag=&imageFormat=_1024x1024" />
        <Card2 title="Basketball" text="Start Spieler" image="https://cdn.britannica.com/09/188709-050-03BF34CB/Michael-Jordan.jpg" />
        <Card3 title="Volleyball" text="Zuspieler" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVH0JvXEcMWnUUz5udnaSdMr1-wzq2NZ6992DOVROe9b90g-QoX08dKqtN&s=10" />
      </div>
    </>
  );
}

export default App;
