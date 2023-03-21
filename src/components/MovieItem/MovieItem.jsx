import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MovieItem = ({ id, title, poster }) => {
  const location = useLocation();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <li>
      <img src={poster} width="200" alt="" onLoad={() => setIsLoaded(true)} />
      {!isLoaded && <p>Завантажується зображення</p>}
      <p>{title}</p>
      <Link
        to={
          location.pathname.includes('movies') ? `movies/${id}` : `movies/${id}`
        }
        state={{ from: location }}
      >
        Подробиці фільму
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
