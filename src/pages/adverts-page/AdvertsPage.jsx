import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/document-title/DocumentTitle';
import AdvertList from '../../components/advert-list/AdvertList';
import { fetchAdverts } from '../../redux/adverts/operations';
import { selectAdvertsLoading } from '../../redux/adverts/selectors';
import Filter from '../../components/filter/Filter';
import css from './AdvertsPage.module.css';

const AdvertsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAdvertsLoading);

  useEffect(() => {
    dispatch(fetchAdverts({ page: 1 }));
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Adverts</DocumentTitle>
      <div>{isLoading && 'Request in progress...'}</div>
      <div className={css.container}>
        <div className={css.filterBox}>
          <Filter />
        </div>
        <div className={css.advertListBox}>
          <AdvertList />
        </div>
      </div>
    </>
  );
};

export default AdvertsPage;
