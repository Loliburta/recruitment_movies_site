const apiKey = process.env.REACT_APP_API_KEY;
const base = "https://api.themoviedb.org/3/";

export const getCall = async (
  query: string,
  setMovies: React.Dispatch<React.SetStateAction<never[]>>
) => {
  const mostPopularMovies = `${base}movie/${query}?api_key=${apiKey}&language=en-US&page=1`;
  try {
    const res = await fetch(mostPopularMovies);
    const moviesList = await res.json();
    console.log(moviesList.results);
    setMovies(moviesList.results);
  } catch (error) {
    console.log(error);
  }
};

export const searchCall = async (
  search: string,
  setMovies: React.Dispatch<React.SetStateAction<never[]>>
) => {
  try {
    if (search) {
      const res = await fetch(
        `${base}search/movie?api_key=${apiKey}&language=en-US&query=${search}&page=1&include_adult=false`
      );
      const moviesList = await res.json();
      console.log(moviesList);
      setMovies(moviesList.results);
    } else {
      getCall("popular", setMovies);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getGenres = async (genre_ids: number[]) => {
  try {
    let result = "";
    const res = await fetch(
      `${base}genre/movie/list?api_key=${apiKey}&language=en-US`
    );
    const genres = await res.json();
    for (const x of genres.genres) {
      genre_ids.includes(x.id) && (result += `${x.name} `);
    }
    return result.slice(0, -1);
  } catch (error) {
    console.log(error);
  }
};
