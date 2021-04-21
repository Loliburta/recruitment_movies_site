import { useState, useEffect, useRef, useContext } from "react";
import { MovieOverview } from "../MovieOverview/MovieOverview";
import { overviewContext } from "../../utils/context";

interface Props {
  original_title: string;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
  poster_path: string;
}
const imgApi = "https://image.tmdb.org/t/p/w1280";
export const Movie: React.FC<Props> = ({
  original_title,
  overview,
  release_date,
  title,
  vote_average,
  poster_path,
}) => {
  const [overviewBox, setOverviewBox] = useContext(overviewContext);

  const openOverview = () => {
    setOverviewBox!(
      <MovieOverview
        original_title={original_title}
        overview={overview}
        release_date={release_date}
        title={title}
        vote_average={vote_average}
        poster_path={poster_path}
      />
    );
  };

  return (
    <>
      <div className="movie" onClick={openOverview}>
        <img className="movie__img" src={imgApi + poster_path} alt={title} />
        <div className="movie__info">
          <div className="movie__info__title">{title}</div>
          <div className="movie__info__vote_average">{vote_average}</div>
        </div>
      </div>
    </>
  );
};
