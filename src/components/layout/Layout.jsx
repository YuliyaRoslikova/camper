import { Suspense } from 'react';
import AppBar from '../app-bar/AppBar';

const Layout = ({ children }) => {
  return (
    <div className={{ width: 1440, margin: '0 auto', padding: '20px 40px' }}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};

export default Layout;
