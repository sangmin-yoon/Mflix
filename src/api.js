import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5b482b54ede8f968398b20d6a3eea898",
    language: "ko-KR",
  },
});

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  showDetail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        appned_to_tesponse: "videos",
      },
    }),
  Search: (term) =>
    api.get("search/tv", {
      params: {
        query: decodeURIComponent(term),
      },
    }),
};

export const moviesApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upcoming: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  movieDetail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  Search: (term) =>
    api.get("search/movie", {
      params: {
        query: decodeURIComponent(term),
      },
    }),
};
