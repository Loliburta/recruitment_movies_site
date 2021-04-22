import { useContext } from "react";
import { MovieOverview } from "../MovieOverview/MovieOverview";
import { overviewContext } from "../../utils/context";

interface Props {
  id: number;
  overview: string;
  release_date: string;
  title: string;
  genre_ids: number[];
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}
const imgApi = "https://image.tmdb.org/t/p/w300";
export const Movie: React.FC<Props> = ({
  id,
  overview,
  release_date,
  title,
  genre_ids,
  vote_average,
  poster_path,
  backdrop_path,
}) => {
  const [,setOverviewBox] = useContext(overviewContext);

  const openOverview = () => {
    setOverviewBox!(
      <MovieOverview
        id={id}
        overview={overview}
        release_date={release_date}
        genre_ids={genre_ids}
        title={title}
        vote_average={vote_average}
        poster_path={poster_path}
        backdrop_path={backdrop_path}
      />
    );
  };

  return (
    <>
      <div className="movie" onClick={openOverview}>
        <img className="movie__img" src={imgApi + poster_path} alt={title} />
        <div
          className={
            vote_average > 6
              ? "movie__vote_average"
              : "movie__vote_average--bad"
          }
        >
          {vote_average}
        </div>
        <div className="movie__info">
          <div className="movie__info__title">{title}</div>
        </div>
      </div>
    </>
  );
};
