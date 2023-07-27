import { NavLink } from 'react-router-dom';
import { useAllProductsContext } from '../../contexts/ProductsContextProvider';
import ProductCard from '../ProductCard/ProductCard';
import Title from '../Title/Title';
import styles from './FeaturedProducts.module.css';

const FeaturedProducts = () => {
  const { products: productsFromContext } = useAllProductsContext();

  const limitedProducts = productsFromContext.slice(0, 8); // Limit the products to the first 8 items

  return (
    <section className='section'>
      <Title>Ultimos Chequeos</Title>

      <div className={`container ${styles.featuredCenter}`}>
        {limitedProducts.map((singleProduct) => (
          <ProductCard key={singleProduct._id} product={singleProduct} />
        ))}
      </div>

      <div className={styles.exploreButtonContainer}>
        <NavLink to='/products'>
          <button className={styles.exploreButton}>Ver mas Chequeos</button>
        </NavLink>
      </div>
    </section>
  );
};

export default FeaturedProducts;



