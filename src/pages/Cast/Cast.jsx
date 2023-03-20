import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastItem } from '../../components/CastItem/CastItem';
import { getCreditDetails, getFilmPhoto } from '../../services';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const setCastDetails = async () => {
    try {
      const { cast } = await getCreditDetails(movieId);
      setCast(
        cast.map(actor => ({
          id: actor.id,
          name: actor.name,
          character: actor.character,
          photo: getFilmPhoto(actor.profile_path),
        }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      await setCastDetails();
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ul>
        {cast.map(({ id, name, character, photo }) => (
          <CastItem key={id} name={name} character={character} photo={photo} />
        ))}
      </ul>
    </div>
  );
};
