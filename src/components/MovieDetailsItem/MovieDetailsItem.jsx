import PropTypes from 'prop-types';
import { useState } from 'react';

export const MovieDetailsItem = ({ film }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  if (Object.keys(film).length === 0) return;

  return (
    <div>
      <div>
        <img src={film.poster} alt="" onLoad={() => setIsLoaded(true)} />
        {!isLoaded && <p>Завантажується зображення</p>}
      </div>

      <ul>
        <li>
          <h1>
            {film.title} ({film.year})
          </h1>
        </li>
        <li>
          <h2>User score</h2>
          <p>{film.vote_average}</p>
        </li>
        <li>
          <h2>Overview</h2>
          <p>{film.overview}</p>
        </li>
        <li>
          <h2>Genres</h2>
          <ul>
            {film.genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

MovieDetailsItem.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string,
    poster: PropTypes.string,
    year: PropTypes.number,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};
