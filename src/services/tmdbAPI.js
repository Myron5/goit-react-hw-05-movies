import axios from 'axios';

const API_KEY = '8741a9c14c2465a0e7b18901e07e7ee9';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const staticURLparams = {
  api_key: API_KEY,
};

// Список найпопулярніших фільмів на сьогодні
export const getPopular = async (page, token = null) => {
  const searchParams = new URLSearchParams({ ...staticURLparams, page });
  const { data } = await axios.get(`/trending/movie/day?${searchParams}`, {
    cancelToken: token,
  });
  return data;
};

// Пошук фільму за ключовим словом
export const getByKeyWord = async (query, page) => {
  const searchParams = new URLSearchParams({ ...staticURLparams, query, page });
  const { data } = await axios.get(`/search/movie?${searchParams}`);
  return data;
};

// Запит повної інформації про фільм
export const getDetails = async id => {
  const searchParams = new URLSearchParams({ ...staticURLparams });
  const { data } = await axios.get(`/movie/${id}?${searchParams}`);
  return data;
};

// Запит інформації про акторський склад
export const getCreditDetails = async id => {
  const searchParams = new URLSearchParams({ ...staticURLparams });
  const { data } = await axios.get(`/movie/${id}/credits?${searchParams}`);
  return data;
};

// Запит оглядів фільму
export const getReviewsDetails = async id => {
  const searchParams = new URLSearchParams({ ...staticURLparams });
  const { data } = await axios.get(`/movie/${id}/reviews?${searchParams}`);
  return data;
};

// Отримати фото або постер фільму відповідно до параметру
// (параметр poster_path або backdrop_path приходить з API відповіді)
export const getFilmPhoto = path => {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : 'default';
};
