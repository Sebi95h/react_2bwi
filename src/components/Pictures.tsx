import styles from "../App.module.css";

const pictures = [
  { title: "Berge", src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&auto=format&fit=crop&q=80" },
  { title: "See", src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&auto=format&fit=crop&q=80" },
  { title: "Wald", src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&auto=format&fit=crop&q=80" },
  { title: "Strand", src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80" },
  { title: "Stadt", src: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600&auto=format&fit=crop&q=80" },
  { title: "Natur", src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=600&auto=format&fit=crop&q=80" },
];

export default function Pictures() {
  return (
    <div className={styles.pictureGrid}>
      {pictures.map((picture) => (
        <article className={styles.pictureCard} key={picture.title}>
          <img src={picture.src} alt={picture.title} />
          <p>{picture.title}</p>
        </article>
      ))}
    </div>
  );
}
