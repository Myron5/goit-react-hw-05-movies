import { getByKeyWord, getFilmPhoto, getPopular } from '../services';

// Функція-обгортка одразу для зручного встановлення фільмів
export const setPopularFilms = async (query, page, setTotalPages, addItems) => {
  const { results, total_pages } =
    query === 0 ? await getPopular(page) : await getByKeyWord(query, page);

  // Симуляція бекенда
  await new Promise(r => setTimeout(r, 500));

  const films = results.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster: getFilmPhoto(poster_path),
  }));

  setTotalPages(total_pages);
  addItems(films);
};
