import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/document-title/DocumentTitle';
import AdvertList from '../../components/advert-list/AdvertList';
import { fetchAdverts } from '../../redux/adverts/operations';
import { selectAdvertsLoading } from '../../redux/adverts/selectors';
// import ContactForm from '../../components/contact-form/ContactForm';
// import ContactList from '../../components/contact-list/ContactList';
// import SearchBox from '../../components/search-box/SearchBox';

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
      {/* <ContactForm />
      <SearchBox />
      <ContactList /> */}
      <AdvertList />
    </>
  );
};

export default AdvertsPage;
