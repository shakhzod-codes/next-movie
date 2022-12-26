import { createContext, useCallback, useState } from "react";

const API = "https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io";

export const MovieContext = createContext();

export function MovieContextProvider({ children }) {
  const [latestMovies, setLatestMovies] = useState([]);
  const [searchResultMovies, setSearchResultMovies] = useState([]);
  const [loading, setIsLoading] = useState(false);

  const getLatestMovies = useCallback(async () => {
    const response = await fetch(`${API}/new_movies/?r_date=${new Date()}`);
    const result = await response.json();
    setLatestMovies(result.data);
  }, []);

  const searchMovies = useCallback(async (type, params) => {
    if (type === "theatre") {
      setIsLoading(true);
      const { name, date } = params;
      const response = await fetch(
        `${API}/specific_movie_theater/?theater_name=${name}&d_date=${date}`
      );
      const result = await response.json();
      setSearchResultMovies(result.data);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      const { name, startDate, endDate } = params;
      const response = await fetch(
        `${API}/timeslot/?theater_name=${name}&time_start=${startDate}&time_end=${endDate}`
      );
      const result = await response.json();
      setSearchResultMovies(result.data);
      setIsLoading(false);
    }
  }, []);

  const params = {
    loading,
    latestMovies,
    searchResultMovies,
    getLatestMovies,
    searchMovies,
  };

  return (
    <MovieContext.Provider value={params}>{children}</MovieContext.Provider>
  );
}
