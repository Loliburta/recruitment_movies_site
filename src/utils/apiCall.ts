const apiKey = process.env.REACT_APP_API_KEY;

export const apiCall = async (
  setMovies: React.Dispatch<React.SetStateAction<never[]>>
) => {
  const base = "https://api.themoviedb.org/3/";
  const mostPopularMovies = `${base}movie/popular?api_key=${apiKey}&language=en-US&page=1`;
  const res = await fetch(mostPopularMovies);
  const moviesList = await res.json();
  console.log(moviesList.results)
  setMovies(moviesList.results);
};
