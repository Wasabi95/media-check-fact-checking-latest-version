import { useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import Navbar  from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer';
import "./Blog2.css"


const Blog2 = () => {
  useParams();  

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);


  return (
    <>  
    <Navbar/>
    <div className="clickbait-container">
      <h1 className="clickbait-title">What is Clickbait?</h1>
      <p className="clickbait-description">
        Clickbait refers to content, such as headlines or thumbnails, that is designed to attract attention and encourage
        users to click on a link, often with the goal of generating more web traffic.
      </p>
      <h2 className="spotting-title">How to Spot Clickbait</h2>
      <ul className="spotting-list">
        <li className="spotting-item">
          <span className="spotting-number">1.</span> Sensationalized Headlines: Look for exaggerated or misleading
          headlines that create curiosity but may not deliver on the promised content.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">2.</span> Manipulative Language: Watch out for emotionally charged or
          persuasive language that aims to manipulate your emotions or provoke strong reactions.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">3.</span> Misleading Thumbnails: Check if the thumbnail image misrepresents
          the actual content or is designed solely to grab attention.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">4.</span> Overpromising Content: Be cautious of content that promises
          outrageous claims, unrealistic outcomes, or instant solutions to common problems.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">5.</span> Lack of Credible Sources: Verify if the information is supported by
          reliable sources or if the content lacks proper citations.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">6.</span> Unreliable Websites: Be cautious of clickbait on websites with a
          history of spreading misinformation or questionable credibility.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">7.</span> Trust Your Gut Feeling: If something seems too good to be true or
          feels suspicious, it's worth questioning the authenticity of the content.
        </li>
      </ul>
    </div>
  <Footer/>
  </>
  );
};

export default Blog2;
