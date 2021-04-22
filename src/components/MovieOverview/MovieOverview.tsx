import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/carbon/close";
import { overviewContext } from "../../utils/context";
import { getGenres } from "../../utils/apiCalls";
import { useContext } from "react";
interface Props {
  original_title: string;
  overview: string;
  release_date: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}
export const MovieOverview: React.FC<Props> = ({
  original_title,
  overview,
  release_date,
  genre_ids,
  title,
  vote_average,
  poster_path,
  backdrop_path,
}) => {
  const [overviewBox, setOverviewBox] = useContext(overviewContext);
  const imgApi = "https://image.tmdb.org/t/p/w500";
  const [movieGenres, setMovieGenres] = useState<any>("");


  const closeOverview = () => {
    setOverviewBox!("");
  };

  useEffect(() => {
    (async () => {
      setMovieGenres(await getGenres(genre_ids));
    })();
  }, []);

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
          <div className="details__title">{title}</div>
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
          <div className="details__release_date">
            Release date {release_date}
          </div>
          <div className="details__overview">{overview}</div>
        </div>
        <div>{movieGenres}</div>
      </div>
    </div>
  );
};
