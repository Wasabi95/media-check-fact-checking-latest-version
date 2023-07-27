/* eslint-disable react/prop-types */
import styles from './SearchBar.module.css';

const Suggestions = ({
  trimmedSearchText,
  filteredList,
  isSuggestionsLoading,
  updateTextOnLinkClick,
}) => {
  if (isSuggestionsLoading)
    return (
      <section className={styles.suggestions}>
        <div className='horizontal-center'>
          <span className='loading'></span>
        </div>
      </section>
    );

  if (!trimmedSearchText) {
    return (
      <section className={styles.suggestions}>
        <div className='horizontal-center'>
          <p className={`bold ${styles.textPlease}`}>
            Buscar
          </p>
        </div>
      </section>
    );
  }

  if (filteredList.length < 1) {
    return (
      <section className={styles.suggestions}>
        <div className='horizontal-center'>
          <p className='error-text'>No encontramos nada ☹️</p>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.suggestions}>
      {filteredList.map((item) => (
        <button
          type='button'
          // navigates after onClick
          onClick={() => updateTextOnLinkClick(item)}
          key={item._id}
        >
          <p>🔍 {item.name}</p>
        
        </button>
      ))}
    </section>
  );
};

export default Suggestions;
