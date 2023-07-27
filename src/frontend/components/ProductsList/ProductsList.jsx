import { useEffect, useState } from 'react';
import { useFiltersContext } from '../../contexts/FiltersContextProvider';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductsList.module.css';
import {
  DELAY_DEBOUNCED_MS,
  TOTAL_SKELETONS_LENGTH,
} from '../../constants/constants';
import SkeletonProductCard from '../ProductCard/SkeletonProductCard';
import { RiFilter2Fill } from 'react-icons/ri';

const ProductsList = ({
  handleFilterToggle,
  isFilterContainerVisible,
  isMobile,
}) => {
  const {
    filteredProducts,
    filters: filtersObjFromContext,
    applyFilters,
    updatePaginatedIndex,
    paginateIndex,
    displayableProductsLength: totalProductsLength,
  } = useFiltersContext();

  const [isFilterLoading, setIsFilterLoading] = useState(false);

  const filteredProductsLength = filteredProducts.length;

  const showFilterButtonJSXInMobile = isMobile && (
    <button
      className={`${styles.showFilterBtn} center-div`}
      onClick={handleFilterToggle}
    >
      <RiFilter2Fill />
    </button>
  );

  const overlayJSXInMobile = isMobile && isFilterContainerVisible && (
    <div className={styles.overlay} onClick={handleFilterToggle}></div>
  );

  useEffect(() => {
    setIsFilterLoading(true);

    const timer = setTimeout(() => {
      applyFilters();

      setIsFilterLoading(false);
    }, DELAY_DEBOUNCED_MS);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line
  }, [filtersObjFromContext]);

 
  if (isFilterLoading) {
    const skeletons = new Array(TOTAL_SKELETONS_LENGTH).fill(null);

    return (
      <section className={styles.productListSection}>
        <div>
          {overlayJSXInMobile}

          <header className={styles.listHeader}>
            <p className='primary-color-text font-size-one-half'>Loading...</p>
          </header>

          <div className={styles.productsCenter}>
            {skeletons.map((_, index) => (
              <SkeletonProductCard key={index} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (filteredProductsLength < 1) {
    return (
      <section className={styles.errorContainer}>
        {overlayJSXInMobile}

        <p className='error-text'>
          No hay noticias VERIFICADAS que coincidan con los filtros seleccionados. ☹️
        </p>

        {showFilterButtonJSXInMobile}
      </section>
    );
  }

  const PAGE_RANGE = 3; // Maximum number of page buttons to show
  const ELLIPSIS_THRESHOLD = 3; // Show ellipsis after this page count

  // Calculate the start and end index for the page buttons
  let startPage = Math.max(0, paginateIndex - Math.floor(PAGE_RANGE / 2));
  let endPage = Math.min(startPage + PAGE_RANGE - 1, filteredProductsLength - 1);
  startPage = Math.max(0, endPage - PAGE_RANGE + 1);

  const showEllipsis = filteredProductsLength > ELLIPSIS_THRESHOLD;

  return (
    <section className={styles.productListSection}>
      {overlayJSXInMobile}

      {showFilterButtonJSXInMobile}

      <header className={styles.listHeader}>
        <p className='primary-color-text font-size-one-half'>
          {totalProductsLength} Artículo{totalProductsLength !== 1 && 's'} Encontrado{totalProductsLength !== 1 && 's'}
        </p>

        <p className={styles.pageCount}>
          Page {paginateIndex + 1} of {filteredProductsLength}
        </p>
      </header>

      <div className={styles.productsCenter}>
        {filteredProducts[paginateIndex].map((singleProduct) => (
          <ProductCard key={singleProduct._id} product={singleProduct} />
        ))}
      </div>

      {filteredProductsLength > 1 && (
        <div className={styles.paginateBtnContainer}>
          <button
            className='btn btn-activated'
            onClick={() => updatePaginatedIndex((paginateIndex - 1 + filteredProductsLength) % filteredProductsLength)}
          >
            Prev
          </button>

          {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((pageIndex) => (
            <button
              key={pageIndex}
              className={paginateIndex === pageIndex ? 'btn' : 'btn btn-hipster'}
              onClick={() => updatePaginatedIndex(pageIndex)}
            >
              {pageIndex + 1}
            </button>
          ))}

          {showEllipsis && endPage < filteredProductsLength - 1 && (
            <span className={styles.ellipsis}>...</span>
          )}

          <button
            className='btn btn-activated'
            onClick={() => updatePaginatedIndex((paginateIndex + 1) % filteredProductsLength)}
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductsList;

