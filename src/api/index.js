import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
  },
});

const weekTrendingMoviesUrl = "/trending/movie/week";
const movieDetialUrl = "/movie/";

export async function getWeekTrendingMovies() {
  const respon = await instance.get(weekTrendingMoviesUrl, {
    params: {
      language: "ko-KR",
    },
  });
  return respon.data.results;
}

export async function getMovieDetial(movieId) {
  const respon = await instance.get(`${movieDetialUrl}${movieId}`, {
    params: {
      language: "ko-KR",
    },
  });

  return respon.data;
}
