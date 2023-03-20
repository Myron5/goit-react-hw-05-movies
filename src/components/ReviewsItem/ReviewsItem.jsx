import PropTypes from 'prop-types';

export const ReviewsItem = ({ author, content }) => {
  return (
    <li>
      <hr />
      <h2>Author: {author}</h2>
      <br />
      <p>{content}</p>
    </li>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
