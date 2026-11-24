import { useState } from "react";
import styles from "../Card.module.css";
type Props = {
  title: string;
  text: string;
  image: string;
  alternateImage?: string;
};

export default function Card({ title, text, image, alternateImage }: Props) {
  const [counter, setCounter] = useState(0);
  const [currentImage, setCurrentImage] = useState(image);

  return (
    <div className={styles.card} onClick={() => setCounter((value) => value + 1)}>
      <h2>{title}</h2>
      <img src={currentImage} alt={title} />
      <p>{text}</p>
      <p aria-live="polite">Amount of clicks: {counter}</p>
      {alternateImage && (
        <button
          className={styles.changeImage}
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            setCurrentImage((value) => value === image ? alternateImage : image);
          }}
        >
          Change image
        </button>
      )}
    </div>
  );
}
