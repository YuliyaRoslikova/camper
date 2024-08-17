import { useDispatch } from 'react-redux';
import css from './AdvertModal.module.css';
import { GoStarFill } from 'react-icons/go';
import { SlLocationPin } from 'react-icons/sl';
import Features from '../features/Features';
import Reviews from '../reviews/Reviews';
import { useState } from 'react';
// import toast from 'react-hot-toast';

const AdvertModal = ({ handleCloseModal, advert }) => {
  const { _id, name, location, description, details, gallery, price, reviews, rating } = advert;
  const [isFeature, setIsFeature] = useState(true);

  const dispatch = useDispatch();

  const getLocation = location => {
    const [country, city] = location.split(', ');
    return `${city}, ${country}`;
  };

  // const onLogOut = async () => {
  //   try {
  //     await dispatch(logout());

  //     toast.success('Successfully logged out!');

  //     handleCloseModal();
  //   } catch (error) {
  //     toast.error('Something went wrong. Please try again.');
  //   }
  // };

  return (
    <>
      <div className={css.container}>
        <h2 className={css.title}>{name}</h2>
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
        <div className={css.price}>€{price}</div>
        <div className={css.imgBox}>
          {gallery.map(image => (
            <img className={css.img} src={image} alt={name} key={image} />
          ))}
        </div>
        <p className={css.description}>{description}</p>
        <div className={css.tabBtnBox}>
          <button className={css.featuresBtn} onClick={() => setIsFeature(true)}>
            Features
          </button>
          <button className={css.reviewsBtn} onClick={() => setIsFeature(false)}>
            Reviews
          </button>
        </div>
        <div className={css.tabBox}>
          <div className={css.leftBox}>
            {isFeature ? <Features advert={advert} /> : <Reviews advert={advert} />}
          </div>
          <div className={css.rightBox}>BookForm</div>
        </div>
      </div>
    </>
  );
};

export default AdvertModal;
