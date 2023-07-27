import { Categories, FeaturedProducts, Hero } from '../components';
import Blogs from '../components/Blogs/Blogs';
import { useAllProductsContext } from '../contexts/ProductsContextProvider';

const Home = () => {
  const { products: productsFromContext } = useAllProductsContext();

  if (productsFromContext.length < 1) {
    return <main className='full-page'></main>;
  }

  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Blogs />
    </main>
  );
};

export default Home;
