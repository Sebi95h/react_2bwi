import { useState } from "react";
import styles from "../Card.module.css";
type Props = {
  title: string;
  text: string;
  image: string;
};

export default function Card({ title, image }: Props) {
  const [counter, setCounter] = useState(0);

  return (
    <div className={styles.card} onClick={()=>{
      let newValue = counter + 1;
      setCounter(newValue);
      console.log(counter);
    }}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>amount of clicks: {counter}</p>
    
    </div>
  );
}
