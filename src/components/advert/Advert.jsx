import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import css from './Advert.module.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useState } from 'react';
import Modal from '../modal/Modal';
import AdvertModal from '../advert-modal/AdvertModal';
import FeatureItems from '../feature-items/FeatureItems';
import ReviewsAndLocation from '../reviews-and-location/ReviewsAndLocation';

const Advert = ({ advert }) => {
  const { _id, name, description, gallery, price } = advert;

  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const onShowMore = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const formattedPrice = price.toFixed(2);

  return (
    <>
      <div className={css.container}>
        <div className={css.imgBox}>
          <img className={css.img} src={gallery[0]} alt={name} />
        </div>
        <div className={css.contentBox}>
          <div className={css.titleBox}>
            <h2 className={css.title}>{name}</h2>
            <div className={css.price}>€{formattedPrice}</div>
            <div className={css.iconBox} onClick={onFavoriteClick}>
              {isFavorite ? <FaHeart color="#e44848" size="1em" /> : <FaRegHeart size="1em" />}
            </div>
          </div>
          <ReviewsAndLocation advert={advert} />
          <p className={css.description}>{description}</p>
          <FeatureItems advert={advert} />
          <button className={css.btn} onClick={() => onShowMore()}>
            Show more
          </button>
        </div>
      </div>
      {isModalOpen && (
        <Modal handleCloseModal={handleCloseModal}>
          <AdvertModal handleCloseModal={handleCloseModal} advert={advert} />
        </Modal>
      )}
    </>
  );
};

export default Advert;
