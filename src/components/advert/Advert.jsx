import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import css from './Advert.module.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Advert = ({ advert }) => {
  const { _id, name, location, description, details, gallery, price, reviews, rating } = advert;

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.some(item => item._id === _id);

  const onFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(_id));
    } else {
      dispatch(addToFavorites(advert));
    }
  };

  console.log(advert);

  const onShowMore = () => {};

  return (
    <div className={css.container}>
      <div className={css.imgBox}>
        <img className={css.img} src={gallery[0]} alt={name} />
      </div>
      <div className={css.contentBox}>
        <div className={css.titleBox}>
          <h2 className={css.title}>{name}</h2>
          <div className={css.price}>€{price}</div>
          <div className={css.iconBox} onClick={onFavoriteClick}>
            {isFavorite ? <FaHeart /> : <FaRegHeart />}
          </div>
        </div>
        <div className={css.reviewsBox}>
          <div className={css.reviews}>{`${rating}(${reviews.length} Reviews)`}</div>
          <div className={css.location}>{location}</div>
        </div>
        <p className={css.description}>{description}</p>
        <ul className={css.featureList}>
          {Object.entries(details).map(([key, value]) => {
            return (
              <li className={css.feature} key={key}>
                {key}
              </li>
            );
          })}
        </ul>
        <button className={css.btn} onClick={() => onShowMore()}>
          Show more
        </button>
      </div>
    </div>
  );
};

export default Advert;

// CD
// TV
// airConditioner
// bathroom
// beds
// freezer
// gas
// hob
// kitchen
// microwave
// radio
// shower
// toilet
// water
