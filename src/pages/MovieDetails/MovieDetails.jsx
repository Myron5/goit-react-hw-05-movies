import { Suspense, useEffect, useRef, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { MovieDetailsItem } from '../../components/MovieDetailsItem/MovieDetailsItem';
import { getDetails, getFilmPhoto } from '../../services';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [film, setFilm] = useState({});

  const setDetails = async () => {
    try {
      const dataFilm = await getDetails(movieId);

      setFilm({
        title: dataFilm.title,
        poster: getFilmPhoto(dataFilm.poster_path),
        vote_average: dataFilm.vote_average,
        backdrop: getFilmPhoto(dataFilm.backdrop_path),
        year: new Date(dataFilm.release_date).getFullYear(),
        overview: dataFilm.overview,
        genres: dataFilm.genres,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      await setDetails();
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div>
        <Link to={backLinkLocationRef.current}>◀ Назад</Link>
      </div>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;📁Деталі фільму ... {movieId}</p>
      <br />
      <MovieDetailsItem film={film} />
      <br />
      <ul>
        <li>
          <Link to={`cast`}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🎭Склад акторів
          </Link>
        </li>
        <li>
          <Link to={`reviews`}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🙈Відгуки критиків
          </Link>
        </li>
      </ul>
      <Suspense fallback={<div>Завантажуєм сторінку...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
