import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import Footer from "../Footer/Footer"
const SharedLayout = () => {
  return (
    <>
      <Header></Header>
      <Suspense fallback={<p>...Loading page</p>}>
        <Outlet></Outlet>
      </Suspense>
      <Footer/>
    </>
  );
};
export { SharedLayout };
