import { Link, useLocation } from 'react-router-dom';
import { LinksContainer } from '..';
import SearchBar from '../SearchBar/SearchBar';
import styles from './Navbar.module.css';
//import lc2 from "../Footer/images/lc2.png"

const Navbar = () => {
  const location = useLocation();

  const isNavInLoginOrSignupPage =
    location.pathname === '/login' || location.pathname === '/signup';

  return (
    <nav className={styles.nav}>
      <div
        className={`container ${styles.navCenter} ${
          isNavInLoginOrSignupPage && styles.loginNavCenter
        }`}
      >
        <Link to='/' className={styles.logoLink}>
      {/*     <img
            src={lc2} 
            alt="Logo"
            height="80"
            className={styles.logoImage}
          /> */}
         
          <div className={styles.logoText}>
            <h3 className={styles.logo}>
              Latam
              <span className={styles.logoTheme}>
                CHECK{!isNavInLoginOrSignupPage ? '.' : 'tronics'}
              </span>
            </h3>
          </div>
        </Link>

        {!isNavInLoginOrSignupPage && (
          <>
            <SearchBar />
            <LinksContainer />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
