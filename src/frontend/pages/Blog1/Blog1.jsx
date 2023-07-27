import { useEffect} from 'react';
import {  useParams } from 'react-router-dom';
import Navbar  from "../../components/Navbar/Navbar"
import Footer from '../../components/Footer/Footer';
import "./Blog.css"


const Blog1 = () => {
  useParams();  

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);


  return (
    <>  
    <Navbar/>
    <div className="deepfake-container">
      <h1 className="deepfake-title">What is a Deepfake?</h1>
      <p className="deepfake-description">
        A deepfake refers to a manipulated or fabricated media (such as videos, images, or audio) that has been created
        using deep learning techniques, particularly generative adversarial networks (GANs). Deepfakes utilize artificial
        intelligence algorithms to generate convincing fake content that can often be difficult to distinguish from real,
        unaltered media.
      </p>
      <h2 className="spotting-title">How to Spot Deepfakes</h2>
      <ul className="spotting-list">
        <li className="spotting-item">
          <span className="spotting-number">1.</span> Unnatural or Uncanny Appearance: Look for unnatural facial
          expressions, odd movements, or inconsistencies in the appearance of the person or objects in the video.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">2.</span> Facial or Body Movements: Pay attention to any inconsistencies or
          glitches in the movement of the person's face or body.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">3.</span> Quality Discrepancies: Deepfakes may exhibit variations in image
          quality or resolution between different parts of the video.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">4.</span> Lip Syncing and Speech: Watch for discrepancies between lip
          movements and the audio.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">5.</span> Context and Source Verification: Consider the context in which the
          media is presented and verify the source of the media.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">6.</span> Unusual Behaviors or Events: Look for any unusual or unlikely
          events occurring in the video.
        </li>
        <li className="spotting-item">
          <span className="spotting-number">7.</span> Consult Expert Analysis: Seek expert analysis from professionals
          specializing in deepfake detection.
        </li>
      </ul>
    </div>
  <Footer/>
  </>
  );
};

export default Blog1;
