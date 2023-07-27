import React from 'react';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from 'react-share';
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const shareUrl = window.location.href;

  const getStatusColor = (status) => {
    if (status === 'FALSO') {
      return styles.statusRed;
    } else if (status === 'VERDADERO') {
      return styles.statusGreen;
    } else if (status === 'PARCIAL') {
      return styles.statusOrange;
    } else {
      return '';
    }
  };

  const isProductInStock = product.stock > 0;

  return (
    <article
      className={
        isProductInStock
          ? styles.productStyle
          : `${styles.productStyle} ${styles.disabledProduct}`
      }
    >
      <div className={styles.imgContainer}>
        <Link to={`/products/${product._id}`}>
          <img
            className={styles.productImage}
            src={product.image}
            alt={product.name}
          />
        </Link>
      </div>

      <div className={styles.cardInfo}>
        <header className={styles.cardHeader}>
        <div className={styles.socialSharing}>
            <FacebookShareButton url={shareUrl}>
              <FaFacebook className={styles.facebookIcon} />
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl}>
              <FaLinkedin className={styles.linkedinIcon} />
            </LinkedinShareButton>
            <TwitterShareButton url={shareUrl}>
              <FaTwitter className={styles.twitterIcon} />
            </TwitterShareButton>
            <EmailShareButton url={shareUrl}>
              <FaEnvelope className={styles.emailIcon} />
            </EmailShareButton>
          </div>
          <span className={styles.rating}>{product.category}</span>

          <p>{product.name}</p>
          <p>{product.author}</p>
        </header>
        <p className="product-date">{formatDate(product.date)}</p>

        <span
          className={`product-status ${getStatusColor(product.status)}`}
        >
          {product.status}
        </span>
      </div>
    </article>
  );
};

export default ProductCard;




