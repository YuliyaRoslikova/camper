import { GoStarFill } from 'react-icons/go';
import { SlLocationPin } from 'react-icons/sl';
import css from './ReviewsAndLocation.module.css';

const ReviewsAndLocation = ({ advert }) => {
  const { location, reviews, rating } = advert;

  const getLocation = location => {
    const [country, city] = location.split(', ');
    return `${city}, ${country}`;
  };

  return (
    <div className={css.reviewsBox}>
      <div className={css.reviews}>
        <GoStarFill color="#ffc531" size="1em" />
        {`${rating}(${reviews.length} Reviews)`}
      </div>
      <div className={css.location}>
        <SlLocationPin />
        {getLocation(location)}
      </div>
    </div>
  );
};

export default ReviewsAndLocation;
