import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReviewsItem } from '../../components/ReviewsItem/ReviewsItem';
import { getReviewsDetails } from '../../services';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const setReviewsDetails = async () => {
    const { results } = await getReviewsDetails(movieId);

    setReviews(
      results.map(review => ({
        id: review.id,
        author: review.author,
        content: review.content,
      }))
    );
  };

  useEffect(() => {
    (async () => {
      await setReviewsDetails();
    })();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <ul>
        {reviews.length === 0 && <div>⛔ Немає відгуків для цього фільму</div>}
        {reviews.map(({ id, author, content }) => (
          <ReviewsItem key={id} author={author} content={content} />
        ))}
      </ul>
    </div>
  );
};
