import PropTypes from 'prop-types';
import { useState } from 'react';

export const CastItem = ({ name, character, photo }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <li>
      <div>
        <img src={photo} width="100" alt="" onLoad={() => setIsLoaded(true)} />
        {!isLoaded && <p>Завантаження зображення ...</p>}
      </div>
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
