import DocumentTitle from '../../components/document-title/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.container}>
        <h1 className={css.title}>Best camper for your luxury travel!</h1>
      </div>
    </>
  );
};

export default HomePage;
