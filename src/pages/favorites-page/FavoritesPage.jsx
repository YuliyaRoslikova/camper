import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DocumentTitle from '../../components/document-title/DocumentTitle';
// import { fetchContacts } from '../../redux/adverts/operations';
// import { selectContactsLoading } from '../../redux/adverts/selectors';
// import ContactForm from '../../components/contact-form/ContactForm';
// import ContactList from '../../components/contact-list/ContactList';
// import SearchBox from '../../components/search-box/SearchBox';

const FavoritesPage = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectContactsLoading);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <div>FavoritesPage</div>
      {/* <div>{isLoading && 'Request in progress...'}</div>
      <ContactForm />
      <SearchBox />
      <ContactList /> */}
    </>
  );
};

export default FavoritesPage;
