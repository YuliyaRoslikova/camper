import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../layout/Layout';

const HomePage = lazy(() => import('../../pages/home-page/HomePage'));
const AdvertsPage = lazy(() => import('../../pages/adverts-page/AdvertsPage'));
const FavoritesPage = lazy(() => import('../../pages/favorites-page/FavoritesPage'));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<AdvertsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
