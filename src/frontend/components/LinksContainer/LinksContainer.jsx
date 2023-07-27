/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import styles from './LinksContainer.module.css';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useAllProductsContext } from '../../contexts/ProductsContextProvider';
import ItemCount from './ItemCount';

const LinksContainer = () => {
  // from userContext I will get whether its login or not
 

  const { wishlist: wishlistFromContext, cart: cartFromContext } =
    useAllProductsContext();

  const navStyle = ({ isActive }) => {
    const outputClass = styles.linkCSS;
    if (isActive) return `${outputClass} ${styles.active}`;
    return outputClass;
  };

  return (
    <div className={styles.linksContainer}>
      <NavLink className={styles.exploreLink} to='/products'>
        Explore
      </NavLink>
      <NavLink className={navStyle} to='https://twitter.com/AndreyCarvaja17' target="_blank">
          <div className={styles.socialMediaIcon}>
            <FaTwitter />
            <ItemCount count={wishlistFromContext.length} />
          </div>
        </NavLink>

        <NavLink className={navStyle} to='https://www.linkedin.com/in/andy-sanclemente-58b134283/' target="_blank">
          <div className={styles.socialMediaIcon}>
            <FaLinkedin />
            <ItemCount count={wishlistFromContext.length} />
          </div>
        </NavLink>

        <NavLink className={navStyle} to='https://www.facebook.com/AndyCarvajal100fx' target="_blank">
          <div className={styles.socialMediaIcon}>
            <FaFacebook />
            <ItemCount count={cartFromContext.length} />
          </div>
        </NavLink>

        <NavLink className={navStyle} to='https://www.instagram.com/carvajal.ups/' target="_blank">
          <div className={styles.socialMediaIcon}>
            <FaInstagram />
          </div>
        </NavLink>

    </div>
    
  );
};

export default LinksContainer;


