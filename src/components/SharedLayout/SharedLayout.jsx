import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
const SharedLayout = () => {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<p>...Loading page</p>}>
        <Outlet></Outlet>
      </Suspense>
    </>
  );
};
export { SharedLayout };
