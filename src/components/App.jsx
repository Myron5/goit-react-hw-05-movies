import { lazyImport } from '../utils'; // Моя влясна ф-я для розділення коду
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';

// Юзаєм динамічні імпорти в комбінації з react.lazy()
const Home = lazyImport(import('../pages/Home/Home'), 'Home');
const MovieDetails = lazyImport(import('../pages/MovieDetails/MovieDetails')); // ---- Тут дефолтний імпорт
const Movies = lazyImport(import('../pages/Movies/Movies'), 'Movies');
const NotFound = lazyImport(import('../pages/NotFound/NotFound'), 'NotFound');
const Cast = lazyImport(import('../pages/Cast/Cast'), 'Cast');
const Reviews = lazyImport(import('../pages/Reviews/Reviews'), 'Reviews');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
      {/* На випадок, якщо користувач зайшов не туда */}
    </Routes>
  );
};
