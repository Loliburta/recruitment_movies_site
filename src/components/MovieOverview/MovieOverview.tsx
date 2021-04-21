import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/carbon/close";
import { overviewContext } from "../../utils/context";
import { useContext } from "react";
interface Props {
  original_title: string;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
}
export const MovieOverview: React.FC<Props> = ({
  original_title,
  overview,
  release_date,
  title,
  vote_average,
  poster_path,
  backdrop_path,
}) => {
  const [overviewBox, setOverviewBox] = useContext(overviewContext);
  const closeOverview = () => {
    document.getElementsByTagName("body")[0]!.style.overflowY = "visible";

    setOverviewBox!("");
  };

  const imgApi = "https://image.tmdb.org/t/p/w1280";
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
        <div className="movieOverview__details">
          <div className="movieOverview__details__overview">{overview}</div>
          <div className="movieOverview__details__title">{title}</div>
        </div>
      </div>
    </div>
  );
};
