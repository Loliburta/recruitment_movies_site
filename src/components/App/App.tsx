import { useState, useEffect, useCallback, useContext } from "react";
import { Movie } from "../Movie/Movie";
import { getCall, searchCall } from "../../utils/apiCalls";
import { overviewContext } from "../../utils/context";
import { debounce } from "lodash";
import { Icon } from "@iconify/react";
import searchFill from "@iconify-icons/eva/search-fill";
interface Props {
  id: number;
  overview: string;
  release_date: string;
  all_genres: [{ id: number; name: string }];
  genre_ids: number[];
  title: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}
export const App: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [overviewBox] = useContext(overviewContext);
  //Doesn't matter if variable is stale bcs it overwrites it
  //eslint-disable-next-line
  const debouncedSearch = useCallback(
    debounce(
      (
        search: string,
        setMovies: React.Dispatch<React.SetStateAction<never[]>>
      ) => searchCall(search, setMovies),
      500
    ),
    []
  );
  const handleChange = (
    e: React.ChangeEvent<any>,
    setMovies: React.Dispatch<React.SetStateAction<never[]>>
  ) => {
    debouncedSearch(e.target.value, setMovies);
  };

  useEffect(() => {
    getCall("popular", setMovies);
  }, []);

  return (
    <>
      {overviewBox ? overviewBox : ""}
      <div className="navbar">
        <div className="categories">
          <div
            className="categories__popular"
            onClick={() => getCall("popular", setMovies)}
          >
            Popular
          </div>
          <div
            className="categories__popular"
            onClick={() => getCall("top_rated", setMovies)}
          >
            Top Rated
          </div>
          <div
            className="categories__popular"
            onClick={() => getCall("upcoming", setMovies)}
          >
            Upcoming
          </div>
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
            onChange={(e) => handleChange(e, setMovies)}
          />
        </div>
      </div>
      <div className="movies">
        {movies &&
          movies.map((movie: Props) => {
            if (!movie.backdrop_path || !movie.poster_path) {
              return "";
            }
            return (
              <Movie
                key={movie.id}
                id={movie.id}
                overview={movie.overview}
                release_date={movie.release_date}
                genre_ids={movie.genre_ids}
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
