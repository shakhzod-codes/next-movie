import Card from "./card";
import styles from "../styles/components/ResultSection.module.css";

export default function ResultSection({ loading, movies }) {
  function getCard() {
    if (!loading && movies.length === 0) {
      return <p className={styles.no_result}>No Result</p>;
    }

    if (!loading) {
      return movies.map((item) => <Card key={item.Movie_ID} item={item} />);
    }

    return <p className={styles.loading}>Loading ....</p>;
  }

  return (
    <div className={styles.result_section}>
      <p className={styles.title}>Search Results</p>
      <div className={styles.cards}>{getCard()}</div>
    </div>
  );
}
