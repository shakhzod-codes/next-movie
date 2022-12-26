import { useContext, useEffect } from "react";
import { MovieContext } from "../context";
import SearchWrapper from "../components/search-section/search-wrapper";
import SearchSection from "../components/search-section/search-section";
import ResultSection from "../components/result-section";

export default function Search() {
  const { loading, searchResultMovies, searchMovies } =
    useContext(MovieContext);

  return (
    <>
      <SearchSection addOnRight={<SearchWrapper onSearch={searchMovies} />} />
      <ResultSection loading={loading} movies={searchResultMovies} />
    </>
  );
}
