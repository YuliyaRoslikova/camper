import { useSelector } from 'react-redux';
import {
  selectAdvertsError,
  selectAdvertsLoading,
  selectAdverts,
  // selectFilteredAdverts,
} from '../../redux/adverts/selectors';
import Advert from '../advert/Advert';
import css from './AdvertList.module.css';

const AdvertList = () => {
  // const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectAdvertsError);
  const loading = useSelector(selectAdvertsLoading);
  const adverts = useSelector(selectAdverts);

  return (
    <div className={css.list}>
      {error && <p>ERROR!</p>}
      {loading && <p>LOADING...</p>}
      {!loading &&
        !error &&
        adverts.map(advert => {
          return <Advert key={advert._id} advert={advert} />;
        })}
    </div>
  );
};

export default AdvertList;
