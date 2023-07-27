import { useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import Navbar  from '../../frontend/components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import "./AboutUsPage.css"


const AboutUsPage = () => {
  useParams();  

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);


  return (
    <>  
    <Navbar/>
    <div className="about-us-container">
    <h1 className="about-us-heading">Welcome to TruthFinder - Your Source for Verified Facts!</h1>
    <div className="about-us-content">
      <p>
        At TruthFinder, we are dedicated to promoting truth, accuracy, and accountability in an era of misinformation.
        We understand the importance of reliable information in shaping opinions, making informed decisions, and fostering
        a well-informed society.
      </p>
      <p>
        In today's digital landscape, rumors, hoaxes, and false claims can easily spread like wildfire, creating confusion
        and hindering progress. That's where we come in. Our mission is to provide a trustworthy platform that separates fact
        from fiction, empowering individuals with accurate and verified information.
      </p>
      <p>
        Our team of experienced researchers, journalists, and subject matter experts meticulously investigate and analyze a wide
        range of claims, statements, and news stories. Using rigorous fact-checking methodologies, we scrutinize sources, verify
        evidence, and present objective findings to ensure that the information you receive is reliable, unbiased, and based on
        verifiable facts.
      </p>
      <p>
        We believe in transparency and accountability. Our fact-checking process adheres to strict editorial guidelines and is
        driven by a commitment to impartiality and the pursuit of truth. We strive to provide comprehensive and well-researched
        reports, allowing you to make informed judgments and navigate the complexities of today's information landscape confidently.
      </p>
      <p>
        Whether you are a curious individual seeking accurate information, a journalist looking for reliable sources, or a
        concerned citizen wanting to stay informed, TruthFinder is your go-to destination. Join us in the quest for truth and
        contribute to building a more informed and enlightened society.
      </p>
      <p>
        Explore our fact-checks, dive into insightful articles, and discover the power of verified facts at TruthFinder.
      </p>
    </div>
  </div>
  <Footer/>
  </>
  );
};

export default AboutUsPage;

