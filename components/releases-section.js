import Card from "./card";
import styles from "../styles/components/ReleaseSection.module.css";

export default function ReleaseSection({ movies }) {
  return (
    <div className={styles.release_section}>
      <div className={styles.header}>
        <p className={styles.title}>New Releases</p>
        <button className={styles.more} type="button">
          View More
        </button>
      </div>
      <div className={styles.cards}>
        {movies.length !== 0 &&
          movies.map((item) => (
            <Card key={item.Movie_ID} item={item} className={styles.card} />
          ))}
      </div>
    </div>
  );
}
