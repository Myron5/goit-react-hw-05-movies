import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getByKeyWord, getFilmPhoto, getPopular } from '../../services';
import { MovieItem } from '../MovieItem/MovieItem';
import { statusActions } from '../../constants';
import { Rejected } from '../Rejected/Rejected';
import { Nothing } from '../Nothing/Nothing';

const { IDLE, PENDING, RESOLVED, REJECTED } = statusActions;

export const MoviesList = ({
  query,
  movies,
  page,
  addItems,
  incrementPage,
  status,
  setStatus,
}) => {
  const [totalPages, setTotalPages] = useState(0);

  // Функція-обгортка одразу для зручного встановлення фільмів
  const setPopularFilms = async () => {
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

  // Для кнопки Load More
  const handleOnLoadMore = () => {
    incrementPage();
  };

  // Effect при зміні пропсу query
  useEffect(() => {
    if (query === '' || query === null) return;

    (async () => {
      try {
        setStatus(PENDING);
        await setPopularFilms();
        setStatus(RESOLVED);
      } catch (err) {
        console.log(err);
        setStatus(REJECTED);
      }
    })();

    // eslint-disable-next-line
  }, [query, page]);

  // Повернена розмітка
  return (
    <>
      <ul>
        {movies.map(({ id, title, poster }) => (
          <MovieItem key={id} id={id} title={title} poster={poster} />
        ))}

        {movies.length === 0 && status === RESOLVED && <Nothing />}
      </ul>

      {page < totalPages && status !== PENDING && (
        <button onClick={handleOnLoadMore}>Завантажити ще ...</button>
      )}

      {status === PENDING && <p>Завантажуються фільми ...</p>}

      {status === REJECTED && <Rejected />}
    </>
  );
};

MoviesList.propTypes = {
  query: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([0, null])]),
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
    })
  ).isRequired,
  page: PropTypes.number.isRequired,
  status: PropTypes.oneOf([IDLE, PENDING, RESOLVED, REJECTED]).isRequired,
  setStatus: PropTypes.func.isRequired,
};
