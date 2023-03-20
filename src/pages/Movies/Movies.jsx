import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { statusActions } from '../../constants';
import { useCollection, usePage } from '../../hooks';

const { IDLE, PENDING } = statusActions;

export const Movies = () => {
  const [movies, resetMovies, addMovies] = useCollection();
  const [page, resetPage, incrementPage] = usePage();
  const [status, setStatus] = useState(IDLE);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnSubmit = e => {
    e.preventDefault();
    const queryValue = e.currentTarget.elements.query.value.trim();

    if (queryValue === '' || searchParams.get('query') === queryValue) {
      return;
    }

    resetPage();
    resetMovies();

    setSearchParams({ query: queryValue });
  };

  return (
    <div>
      <div>
        <form autoComplete="off" onSubmit={handleOnSubmit}>
          <input name="query" type="text" />
          <button type="submit" disabled={status === PENDING}>
            Знайти
          </button>
        </form>
      </div>
      {/* ------------------ Тут колекція за запитом ------------------ */}
      <MoviesList
        query={searchParams.get('query')}
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
