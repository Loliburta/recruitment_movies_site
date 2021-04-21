import { useState, useEffect, useCallback, useContext } from "react";
import { Movie } from "../Movie/Movie";
import { apiCall } from "../../utils/apiCall";
import { overviewContext } from "../../utils/context";
import { debounce } from "lodash";
import { Icon } from "@iconify/react";
import searchFill from "@iconify-icons/eva/search-fill";
const apiKey = process.env.REACT_APP_API_KEY;
interface Props {
  id: number;
  original_title: string;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}
export const App = () => {
  const [movies, setMovies] = useState([]);
  const [overviewBox, setOverviewBox] = useContext(overviewContext);
  const [search, setSearch] = useState("");
  const handleChange = (e: React.ChangeEvent<any>) => {
    setSearch(e.target.value);
    console.log(search);
    debouncedSearch(search, setMovies);
  };
  const base = "https://api.themoviedb.org/3/";
  const searchCall = async (
    search: string,
    setMovies: React.Dispatch<React.SetStateAction<never[]>>
  ) => {
    const res = await fetch(
      `${base}search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
    );
    const moviesList = await res.json();
    console.log(moviesList);
    setMovies(moviesList.results);
  };
  useEffect(() => {
    apiCall(setMovies);
    console.log(movies);
  }, []);
  const debouncedSearch = useCallback(
    debounce((search, setMovies) => searchCall(search, setMovies), 1000),
    []
  );

  return (
    <>
      {overviewBox ? overviewBox : ""}
      <div className="navbar">
        <label htmlFor="input">
          <Icon className="navbar__icon" icon={searchFill} />
        </label>
        <input
          id="input"
          className="navbar__search"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      <div className={overviewBox ? "movies--open" : "movies"}>
        {movies.length > 0 &&
          movies.map((movie: Props) => {
            if (!movie.backdrop_path || !movie.poster_path) {
              return;
            }
            return (
              <Movie
                key={movie.id}
                original_title={movie.original_title}
                overview={movie.overview}
                release_date={movie.release_date}
                title={movie.title}
                vote_average={movie.vote_average}
                poster_path={movie.poster_path}
                backdrop_path={movie.backdrop_path}
              />
            );
          })}
      </div>
    </>
  );
};
