import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>... Сторінку не знайдено 😪 </p>
      <button onClick={() => navigate('/', { replace: true })}>
        Повернутись на домашню
      </button>
    </div>
  );
};
