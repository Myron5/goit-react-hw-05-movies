import { useState } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { statusActions } from '../../constants';
import { useCollection, usePage } from '../../hooks';

const { IDLE } = statusActions;

export const Home = () => {
  const [movies, __, addMovies] = useCollection(); // eslint-disable-line
  const [page, _, incrementPage] = usePage(); // eslint-disable-line
  const [status, setStatus] = useState(IDLE);

  return (
    <div>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🏡 Я є дім 🏡</p>
      <MoviesList
        query={0}
        movies={movies}
        addItems={addMovies}
        page={page}
        incrementPage={incrementPage}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
};
