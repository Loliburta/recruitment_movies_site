import { useState, useEffect, useCallback, useContext } from "react";
import { Movie } from "../Movie/Movie";
import { getCall, searchCall } from "../../utils/apiCalls";
import { overviewContext } from "../../utils/context";
import { debounce } from "lodash";
import { Icon } from "@iconify/react";
import searchFill from "@iconify-icons/eva/search-fill";
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
  const debouncedSearch = useCallback(
    debounce((search, setMovies) => searchCall(search, setMovies), 700),
    []
  );
  const handleChange = (e: React.ChangeEvent<any>) => {
    debouncedSearch(e.target.value, setMovies);
  };

  useEffect(() => {
    getCall("popular", setMovies);
    console.log(movies);
  }, []);

  return (
    <>
      {overviewBox ? overviewBox : ""}
      <div className="navbar">
        <div
          className="navbar__popular"
          onClick={() => getCall("popular", setMovies)}
        >
          Popular
        </div>
        <div
          className="navbar__popular"
          onClick={() => getCall("top_rated", setMovies)}
        >
          Top Rated
        </div>
        <div
          className="navbar__popular"
          onClick={() => getCall("upcoming", setMovies)}
        >
          Upcoming
        </div>
        <div className="navbar__search">
          <label htmlFor="input">
            <Icon className="navbar__icon" icon={searchFill} />
          </label>
          <input
            id="input"
            className="navbar__input"
            type="text"
            placeholder="Search"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={overviewBox ? "movies--open" : "movies"}>
        {movies &&
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
