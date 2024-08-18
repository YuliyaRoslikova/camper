import { useDispatch } from 'react-redux';
import css from './AdvertModal.module.css';
import Features from '../features/Features';
import Reviews from '../reviews/Reviews';
import { useState } from 'react';
import ReviewsAndLocation from '../reviews-and-location/ReviewsAndLocation';
import BookForm from '../book-form/BookForm';
// import toast from 'react-hot-toast';

const AdvertModal = ({ handleCloseModal, advert }) => {
  const { name, description, gallery, price } = advert;
  const [isFeature, setIsFeature] = useState(true);

  const dispatch = useDispatch();

  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>{name}</h1>
        <ReviewsAndLocation advert={advert} />
        <div className={css.price}>€{price}</div>
        <div className={css.imgBox}>
          {gallery.map(image => (
            <img className={css.img} src={image} alt={name} key={image} />
          ))}
        </div>
        <p className={css.description}>{description}</p>
        <div className={css.tabBtnBox}>
          <button
            className={`${css.featuresBtn} ${isFeature ? css.activeTab : ''}`}
            onClick={() => setIsFeature(true)}
          >
            Features
          </button>
          <button
            className={`${css.reviewsBtn} ${!isFeature ? css.activeTab : ''}`}
            onClick={() => setIsFeature(false)}
          >
            Reviews
          </button>
        </div>
        <div className={css.tabBox}>
          <div className={css.leftBox}>
            {isFeature ? <Features advert={advert} /> : <Reviews advert={advert} />}
          </div>
          <div className={css.rightBox}>
            <BookForm advert={advert} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdvertModal;
