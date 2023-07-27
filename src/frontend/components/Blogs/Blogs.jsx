import React, { useEffect, useState } from 'react';
import "./Blogs.css";
import { Link } from "react-router-dom";
import { products } from "../../../backend/db/products"

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  const truncatedText = text.substr(0, maxLength).trimEnd();
  return truncatedText + '...';
}

function Blogs() {
  const [mostReadArticles, setMostReadArticles] = useState([]);

  useEffect(() => {
    const sortedProducts = [...products].sort((a, b) => b.views - a.views);
    const topThreeArticles = sortedProducts.slice(0, 3);
    setMostReadArticles(topThreeArticles);
  }, []);

  return (
    <div>
    <div className="row">
      <div className="divider"></div>
      <div className="col-6 right">
        <h1>Lo mas leido</h1>
        <div className="underlinetx"></div>
        <div className="aside1">
          {/* Render most read articles */}
          {mostReadArticles.map((article) => (
            <div className="article" key={article._id}>
              <Link to={`/products/${article._id}`}>
              <img className="image" src={article.image} alt={`Article ${article._id}`} />
              </Link>
              <div>
                <h4>{article.name}</h4>
                <p>{truncateText(article.description, 200)}</p>
                <Link to={`/products/${article._id}`} className="readMoreButton">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="col-6 right">
          <h1>Blogs</h1>
          <div className="underlinetx"></div>
          <div className="aside1">
            <div className="article">
              <Link to="/blog1">
                <img className="image" src="https://helios-i.mashable.com/imagery/articles/07H0JDqdjqv7Q73TwDk3lJK/hero-image.fill.size_1200x675.v1687880371.jpg" alt="Deepfakes" />
              </Link>
              <div>
                <h4>{truncateText("What are deepfakes? How to spot them?", 50)}</h4>
                <p>{truncateText("AI-generated fake videos are becoming more common (and convincing). Here’s why we should be worried. Have you seen Barack Obama call Donald Trump a 'complete dipshit'?", 200)}</p>
                <Link to="/blog1" className="readMoreButton">
                  Read More
                </Link>
              </div>
            </div>
  
            <div className="article">
              <Link to="/blog2">
                <img className="image" src="https://www.ilounge.com/wp-content/uploads/2020/02/Spam-Phishing-and-Clickbait-An-Overview-of-Internet-Scams.jpg" alt="Clickbaits" />
              </Link>
              <div>
                <h4>How to spot Clickbaits?</h4>
                <p>{truncateText("AI-generated fake videos are becoming more common (and convincing). Here’s why we should be worried. Have you seen Barack Obama call Donald Trump a 'complete dipshit'?", 200)}</p>
                <Link to="/blog2" className="readMoreButton">
                  Read More
                </Link>
              </div>
            </div>
  
            <div className="article">
              <Link to="/blog3">
                <img className="image" src="https://images.pexels.com/photos/268460/pexels-photo-268460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Popular Hoax" />
              </Link>
              <div>
                <h4>Most popular HOAX on the internet.</h4>
                <p>{truncateText("AI-generated fake videos are becoming more common (and convincing). Here’s why we should be worried. Have you seen Barack Obama call Donald Trump a 'complete dipshit'?", 200)}</p>
                <Link to="/blog3" className="readMoreButton">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
  
}

export default Blogs;

