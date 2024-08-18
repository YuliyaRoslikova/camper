import { useDispatch, useSelector } from 'react-redux';
import {
  selectAdvertsError,
  selectAdvertsLoading,
  selectAdverts,
  // selectFilteredAdverts,
} from '../../redux/adverts/selectors';
import Advert from '../advert/Advert';
import css from './AdvertList.module.css';
import { fetchAdverts } from '../../redux/adverts/operations';
import { useEffect, useState } from 'react';

const AdvertList = () => {
  // const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const error = useSelector(selectAdvertsError);
  const loading = useSelector(selectAdvertsLoading);
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts({ page }));
  }, [page, dispatch]);

  const onLoadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <div className={css.container}>
      <div className={css.list}>
        {error && <p>ERROR!</p>}
        {loading && <p>LOADING...</p>}
        {!loading &&
          !error &&
          adverts.map(advert => {
            return <Advert key={advert._id} advert={advert} />;
          })}
      </div>
      <button className={css.btn} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default AdvertList;
