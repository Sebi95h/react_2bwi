import styles from "../Card.module.css";
type Props = {
  title: string;
  text: string;
  image: string;
};

export default function Card({ title, text, image }: Props) {
const random = Math.random();

  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{text}</p>
      <p>{random}</p>
    </div>
  );
}
