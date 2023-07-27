import { useNavigate } from 'react-router-dom';
import Title from '../Title/Title';
import styles from './Categories.module.css';
import { useAllProductsContext } from '../../contexts/ProductsContextProvider';
import { useFiltersContext } from '../../contexts/FiltersContextProvider';

const Categories = () => {
  const navigate = useNavigate();

  const { categories: categoriesFromContext } = useAllProductsContext();

  const { checkCategoryOnTabClick } = useFiltersContext();

  const handleCategoryClick = (categoryNameClicked) => {
    // update the category in filtersContext
    checkCategoryOnTabClick(categoryNameClicked);
    // then
    // navigate to products
    navigate('/products');
  };

  return (
    <section className='section'>
      <Title>Categorias</Title>

      <div className={`container ${styles.categoryContainer}`}>
      {categoriesFromContext.map(({ _id, categoryName, img }) => (
  <article
    key={_id}
    className={styles.category}
    onClick={() => handleCategoryClick(categoryName)}
  >
    <img src={img} alt={categoryName} />
    <span>{categoryName}</span>
  </article>
))}

      </div>
    </section>
  );
};

export default Categories;
