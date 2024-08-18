import { useDispatch, useSelector } from 'react-redux';
import { selectAdvertsError, selectAdverts } from '../../redux/adverts/selectors';
import Advert from '../advert/Advert';
import css from './FavoriteList.module.css';
import { fetchAdverts } from '../../redux/adverts/operations';
import { useEffect } from 'react';
import { selectFavorites } from '../../redux/favorites/selectors';

const FavoriteList = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  // useEffect(() => {
  //   dispatch(fetchAdverts({ page }));
  // }, [page, dispatch]);

  return (
    <div className={css.container}>
      {favorites.length ? (
        <div className={css.list}>
          {favorites.map(advert => {
            return <Advert key={advert._id} advert={advert} />;
          })}
        </div>
      ) : (
        <span className={css.noItem}>No favorites</span>
      )}
    </div>
  );
};

export default FavoriteList;
