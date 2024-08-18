import StarRating from '../star-rating/StarRating';
import css from './Reviews.module.css';

const Reviews = ({ advert }) => {
  const { reviews } = advert;

  return (
    <ul className={css.container}>
      {reviews.map(({ comment, reviewer_name, reviewer_rating }) => {
        return (
          <li className={css.item} key={reviewer_name}>
            <div className={css.nameContainer}>
              <div className={css.avatar}>{reviewer_name[0].toUpperCase()}</div>
              <div className={css.nameBox}>
                <div className={css.name}>{reviewer_name}</div>
                <div className={css.rating}>
                  <StarRating rating={reviewer_rating} />
                </div>
              </div>
            </div>
            <p className={css.description}>{comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
