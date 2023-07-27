import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import { useAllProductsContext } from '../contexts/ProductsContextProvider';
import { Backdrop, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { useFiltersContext } from '../contexts/FiltersContextProvider';
import "./Scroll.css"


const SharedLayout = () => {
  const { isMainPageLoading } = useAllProductsContext();
  const { paginateIndex } = useFiltersContext();

  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location, paginateIndex]);

  return (
    <>
      <Backdrop
        sx={{
          color: 'var(--primary-300)',
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={isMainPageLoading}
      >
        <CircularProgress color='inherit' />
      </Backdrop>

      <Navbar />

      <Outlet />

      <Footer />
      <div
        className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <FaArrowUp className='scroll-to-top-icon' />
      </div>
    </>
  );
};

export default SharedLayout;