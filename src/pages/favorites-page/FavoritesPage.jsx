import DocumentTitle from '../../components/document-title/DocumentTitle';
import FavoriteList from '../../components/favorite-list/FavoriteList';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  return (
    <>
      <DocumentTitle>Favorites</DocumentTitle>
      <div className={css.favoriteListBox}>
        <FavoriteList />
      </div>
    </>
  );
};

export default FavoritesPage;
