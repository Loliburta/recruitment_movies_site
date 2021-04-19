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
  return (
    <div className="movie">
      <img className="movie__img" src={imgApi + poster_path} alt={title} />
      <div className="movie__title">{title}</div>
    </div>
  );
};
