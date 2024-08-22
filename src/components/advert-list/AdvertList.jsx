import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdvertsError,
  selectIsLastItemLoaded,
  selectFilteredAdverts,
} from '../../redux/adverts/selectors';
import Advert from '../advert/Advert';
import css from './AdvertList.module.css';
import { fetchAdverts } from '../../redux/adverts/operations';
import { useEffect, useState } from 'react';

const AdvertList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const error = useSelector(selectAdvertsError);
  const filteredAdverts = useSelector(selectFilteredAdverts);
  const isLastItemLoaded = useSelector(selectIsLastItemLoaded);

  useEffect(() => {
    dispatch(fetchAdverts({ page }));
  }, [page, dispatch]);

  const onLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <div className={css.container}>
      {error && <p>ERROR!</p>}
      <ul className={css.list}>
        {!error &&
          filteredAdverts.map(advert => {
            return (
              <li key={advert._id}>
                <Advert advert={advert} />
              </li>
            );
          })}
      </ul>
      {!isLastItemLoaded && (
        <button className={css.btn} onClick={onLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default AdvertList;
