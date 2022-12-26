import { useContext, useEffect } from "react";
import { MovieContext } from "../context";
import SearchSection from "../components/search-section/search-section";
import ReleasesSection from "../components/releases-section";
import styles from "../styles/home.module.css";

export default function Home() {
  const { latestMovies, getLatestMovies } = useContext(MovieContext);

  useEffect(() => {
    getLatestMovies();
  }, [getLatestMovies]);

  return (
    <>
      <SearchSection
        addOnRight={
          <>
            <p className={styles.title}>Find your movies here!</p>
            <p className={styles.description}>
              Explore our gallery full of exciting films from all around the
              globe only your yor entertainments. No hidden charges or
              disturbing ads.
            </p>
          </>
        }
      />
      <ReleasesSection movies={latestMovies} />
    </>
  );
}
