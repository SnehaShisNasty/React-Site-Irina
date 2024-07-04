import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ServicePage = lazy(()=> import('./pages/ServicePage/ServicePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path='service/:serviceAddress' element={<ServicePage/>}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export { AppRoutes };
