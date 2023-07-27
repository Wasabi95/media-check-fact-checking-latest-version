import styles from './Hero.module.css';
//import jethalalBanner from '../../assets/jethalalBanner.png';
import pets from '../../assets/pets.png';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../../hooks';

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <section className='white-bcg'>
      <div className={`container ${styles.hero}`}>
        <article className={styles.content}>
          <h1>The World Economic Forum "wants to slaughter millions of pet cats and dogs to fight climate change."</h1>

          <p>
            A previously debunked claim stated without evidence that the World Economic Forum called for euthanizing millions of pets to fight climate change.
            
            "WEF wants to slaughter millions of pet cats and dogs to fight climate change," said the text on a TikTok video shared June 28 on Facebook.
          </p>

          <Link to='/products' className={`btn ${styles.btnHero}`}>
            Leer Mas
          </Link>
        </article>

        {!isMobile && (
          <article className={styles.imageContainer}>
            <img
              src={pets}
              alt='NEWS'
              className={styles.banner}
            />
          </article>
        )}
      </div>
    </section>
  );
};

export default Hero;
