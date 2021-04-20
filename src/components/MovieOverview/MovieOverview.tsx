import { Icon } from "@iconify/react";
import closeIcon from "@iconify-icons/carbon/close";
interface Props {
  original_title: string;
  overview: string;
  release_date: string;
  title: string;
  vote_average: number;
  poster_path: string;
}
export const MovieOverview: React.FC<Props> = ({
  original_title,
  overview,
  release_date,
  title,
  vote_average,
  poster_path,
}) => {
  const imgApi = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="movieOverview__wrapper">
      <div className="movieOverview">
        <div className="movieOverview__iconDiv">
          <Icon className="movieOverview__iconDiv__icon" icon={closeIcon} />
        </div>
        <img
          className="movieOverview__img"
          src={imgApi + poster_path}
          alt={title}
        />

        <div className="movieOverview__overview">{overview}</div>
        <div className="movieOverview__title">{title}</div>
      </div>
    </div>
  );
};
