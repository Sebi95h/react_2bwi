import styles from "./App.module.css";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import CardCountdown from "./components/CardCountdown";
import Card_Countdown from "./components/CardCountdown";
function App() {
  return (
    <>
      <div className={styles.cardcontainer}>
        <CardCountdown
          title="Countdown"
          text="Click to decrease"
          image="https://via.placeholder.com/300"
        />
        <Card
          title="Handball"
          text="Bench Player"
          image="https://i0.wp.com/hsggraz.at/wp-content/uploads/2026/09/Belos-Nemanja.png?w=700&ssl=1"
        />
        <Card2
          title="Basketball"
          text="Start Spieler"
          image="https://cdn.britannica.com/09/188709-050-03BF34CB/Michael-Jordan.jpg"
        />
        <Card3
          title="Volleyball"
          text="Best Player"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVH0JvXEcMWnUUz5udnaSdMr1-wzq2NZ6992DOVROe9b90g-QoX08dKqtN&s=10"
        />
      </div>
    </>
  );
}

export default App;
