import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Blog3.css';

const Blog3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <>
      <Navbar />
      <div className="scam-container">
        <h1 className="scam-title">The Nigerian Prince Scam: A Fraudulent Scheme</h1>
        <p className="scam-description">
          The Nigerian Prince scam, also known as the 419 scam, is one of the most infamous online frauds. It involves
          receiving an unsolicited email from someone claiming to be a Nigerian prince, government official, or a
          representative of a wealthy individual. The scammer typically presents a story of an urgent need to transfer a
          large sum of money out of Nigeria and requests the recipient's assistance in exchange for a promised reward.
        </p>
        <h2 className="scam-warning">Warning Signs and Red Flags</h2>
        <ul className="scam-list">
          <li className="scam-item">
            <span className="scam-number">1.</span> Unsolicited Email: The scam usually begins with an unexpected email
            from someone claiming to be a Nigerian prince or official.
          </li>
          <li className="scam-item">
            <span className="scam-number">2.</span> Urgency and High Reward: The scammer creates a sense of urgency,
            emphasizing the need for immediate action to transfer a large sum of money with the promise of a substantial
            reward.
          </li>
          <li className="scam-item">
            <span className="scam-number">3.</span> Advance Fee or Personal Information Request: The scammer requests an
            upfront payment or personal information to facilitate the money transfer, often claiming it is necessary for
            legal or administrative purposes.
          </li>
          <li className="scam-item">
            <span className="scam-number">4.</span> Poor Grammar and Spelling: Many scam emails contain noticeable
            grammatical errors, unusual sentence structures, or misspelled words.
          </li>
          <li className="scam-item">
            <span className="scam-number">5.</span> Unknown Sender and Unverifiable Claims: The email is typically sent
            from an unknown or suspicious email address, and the claims made by the sender are often difficult to verify.
          </li>
          <li className="scam-item">
            <span className="scam-number">6.</span> Request for Confidential Information: Scammers may ask for sensitive
            personal information, such as bank account details, passport numbers, or social security numbers.
          </li>
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Blog3;

