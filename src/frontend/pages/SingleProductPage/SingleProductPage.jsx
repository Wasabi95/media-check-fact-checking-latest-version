import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProductService } from "../../Services/services";
import styles from "./SingleProductPage.module.css";
import { Error } from "../../components";
import { useAllProductsContext } from "../../contexts/ProductsContextProvider";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { FaFacebook, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SingleProductPage = () => {
  const { productId } = useParams();
  const {
    showMainPageLoader,
    hideMainPageLoader,
    // addToCartDispatch,
    // addToWishlistDispatch,
  } = useAllProductsContext();

  const [singleProductState, setSingleProductState] = useState({
    isSinglePageLoading: true,
    singleProductData: [],
    isSinglePageError: false,
  });

  const [, setActiveColorObj] = useState(null);
  // const [isCartBtnDisable] = useState(false);

  const fetchSingleProduct = async () => {
    setSingleProductState({ ...singleProductState, isSinglePageLoading: true });

    showMainPageLoader();

    try {
      const product = await getSingleProductService(productId);

      hideMainPageLoader();
      setSingleProductState({
        isSinglePageLoading: false,
        singleProductData: product,
        isSinglePageError: false,
      });
      setActiveColorObj(product?.colors[0]);
    } catch (error) {
      console.error(error.response);

      hideMainPageLoader();

      setSingleProductState({
        ...singleProductState,
        isSinglePageLoading: false,
        isSinglePageError: true,
      });
    }
  };

  useEffect(() => {
    fetchSingleProduct();
    // eslint-disable-next-line
  }, [productId]);

  const { isSinglePageLoading, singleProductData, isSinglePageError } =
    singleProductState;

  if (isSinglePageLoading) {
    return <main className="full-page"></main>;
  }

  if (isSinglePageError) {
    return <Error errorText="Error: Product Not Found" />;
  }

  const {
    name,
    image,
    category,
    afirmacion,
    analisis,
    veredicto,
    status,
    date,
  } = singleProductData;

  const getStatusColor = (status) => {
    if (status === "FALSO") {
      return styles.statusRed;
    } else if (status === "VERDADERO") {
      return styles.statusGreen;
    } else if (status === "PARCIAL") {
      return styles.statusOrange;
    } else {
      return "";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const shareUrl = window.location.href;

  return (
    <main className={`container half-page ${styles.productPageCenter}`}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} />
      </div>

      <div className={styles.productContent}>
        <h3 className="primary-color-text">{name}</h3>

        <span className={`product-status ${getStatusColor(status)}`}>
          {status}
        </span>
        <div className={styles.row}>
          <span>Category:</span>
          <p>{category}</p>
        </div>
        <p className="product-date">{formatDate(date)}</p>

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

        {/* <p className={styles.desc} dangerouslySetInnerHTML={{ __html: description }}></p> */}

        <div className={styles.row}>
          <span>Afirmacion:</span>
          <p className={styles.afirmacion}>{afirmacion}</p>
        </div>
        <div className={styles.row}>
          <span>Analisis:</span>
          <p
            className={styles.analisis}
            dangerouslySetInnerHTML={{ __html: analisis }}
          ></p>
        </div>
        <div className={styles.row}>
          <span>Veredicto:</span>
          <p
            className={styles.veredicto}
            dangerouslySetInnerHTML={{ __html: veredicto }}
          ></p>
        </div>

        <hr />
      </div>
    </main>
  );
};

export default SingleProductPage;
