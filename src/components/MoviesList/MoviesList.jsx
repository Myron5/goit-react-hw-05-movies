import { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { MovieItem } from '../MovieItem/MovieItem';
import { Rejected } from '../Rejected/Rejected';
import { Nothing } from '../Nothing/Nothing';

import { setPopularFilms } from '../../utils/setPopularFilms';
import { statusActions } from '../../constants';

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

  // Effect при зміні пропсу query
  useEffect(() => {
    if (query === '' || query === null) return;

    // Для очищення запиту при ComponentWillUnmount
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    (async () => {
      try {
        setStatus(PENDING);
        await setPopularFilms(query, page, setTotalPages, addItems);
        setStatus(RESOLVED);
      } catch (err) {
        console.log(err);
        setStatus(REJECTED);
      }
    })();

    return () => {
      // Власне очищення request
      source.cancel();
    };

    // eslint-disable-next-line
  }, [query, page]);

  return (
    <>
      <ul>
        {movies.map(({ id, title, poster }) => (
          <MovieItem key={id} id={id} title={title} poster={poster} />
        ))}

        {movies.length === 0 && status === RESOLVED && <Nothing />}
      </ul>

      {page < totalPages && status !== PENDING && (
        <button onClick={incrementPage}>Завантажити ще ...</button>
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
