import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/carbon/close";
import { overviewContext } from "../../utils/context";
import { getGenres, getCast } from "../../utils/apiCalls";
import { useContext } from "react";
interface Props {
  id: number;
  overview: string;
  release_date: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}
export const MovieOverview: React.FC<Props> = ({
  id,
  overview,
  release_date,
  genre_ids,
  title,
  vote_average,
  poster_path,
  backdrop_path,
}) => {
  const [, setOverviewBox] = useContext(overviewContext);
  const imgApi = "https://image.tmdb.org/t/p/w500";
  const [movieGenres, setMovieGenres] = useState<any>("");
  const [movieCast, setMovieCast] = useState<any>([]);

  const closeOverview = () => {
    setOverviewBox!("");
  };

  useEffect(() => {
    (async () => {
      setMovieGenres(await getGenres(genre_ids));
      setMovieCast(await getCast(id));
      console.log(movieCast);
    })();
  }, [genre_ids, id, movieCast]);

  return (
    <div className="movieOverview__wrapper" onClick={closeOverview}>
      <div
        className="movieOverview"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="movieOverview__iconDiv" onClick={closeOverview}>
          <Icon className="movieOverview__iconDiv__icon" icon={closeIcon} />
        </div>
        <img
          className="movieOverview__img"
          src={imgApi + backdrop_path}
          alt={title}
        />
        <div className="details">
          <div className="details__title">
            {title} ({release_date.slice(0, 4)})
          </div>
          <div className="details__rating">
            Rating{" "}
            <b
              className={
                vote_average > 6
                  ? "details__vote_average"
                  : "details__vote_average--bad"
              }
            >
              {vote_average}
            </b>{" "}
            / 10
          </div>

          <div className="details__overview">{overview}</div>
          <div className="details__movieGenres">Genres: {movieGenres}</div>
          <div className="details__cast">Cast: {movieCast}</div>
        </div>
      </div>
    </div>
  );
};