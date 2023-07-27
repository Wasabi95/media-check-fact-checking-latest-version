import { useEffect } from 'react';
import Navbar from '../../frontend/components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import './HowWeDo.css';

const HowWeDo = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-howwedo">
        <div className="fact-checking-methods"> {/* Apply the CSS class */}
          <h2>How we find claims and stories to fact check</h2>
          <p>
            LatamCHECK looks for claims and stories to fact check using several tools and methods, here are the most important ones:
          </p>
          <ul>
            <li>Our own Trendolizer™ engine</li>
            <li>Google Trends</li>
            <li>Facebook's tool for Fact Checkers</li>
            <li>TweetDeck</li>
            <li>CrowdTangle</li>
            <li>Reader tips</li>
          </ul>
        </div>
        <div className="fact-checking-container">
          <h2>How to Fact Check Claims and Stories</h2>
          <p>
            Fact-checking claims and stories involves a systematic process to verify
            the accuracy and credibility of information. Here are some steps to
            follow when fact-checking:
          </p>
          <ol>
            <li>
              Understand the Claim or Story: Read and analyze the claim or
              story to gain a clear understanding of what is being asserted or
              reported.
            </li>
            <li>
              Conduct Initial Research: Start by conducting preliminary
              research on the claim or story using trusted sources. Look for
              reputable news articles, official statements, or reliable
              databases that can provide background information.
            </li>
            <li>
              Identify Reliable Sources: Identify reliable sources that can
              provide evidence or context related to the claim or story. Look
              for authoritative sources such as government agencies, academic
              institutions, scientific research papers, or experts in the
              field.
            </li>
            <li>
              Cross-Verify Information: Cross-verify the information by finding
              multiple independent sources that support or refute the claim.
              Compare different perspectives and gather a comprehensive
              understanding of the topic.
            </li>
            <li>
              Fact-Check Tools and Resources: Utilize fact-checking tools and
              resources available online. Fact-checking organizations and
              websites provide databases, search engines, and tools
              specifically designed to verify claims and debunk misinformation.
            </li>
            <li>
              Check for Bias and Misrepresentation: Assess whether the
              information has any bias or potential misrepresentation. Look
              for signs of cherry-picking data, selective quoting, or
              manipulation of facts.
            </li>
            <li>
              Evaluate Expertise and Credibility: Evaluate the expertise and
              credibility of the sources used in the claim or story. Consider
              the qualifications, reputation, and track record of the
              individuals or organizations providing the information.
            </li>
            <li>
              Consult Primary Sources: Whenever possible, refer to primary
              sources such as official reports, original studies, or direct
              statements from involved parties. Primary sources provide the
              most reliable and accurate information.
            </li>
            <li>
              Verify Quotes and Context: Check the accuracy of quotes by
              reviewing the original context in which they were made.
              Misleading or out-of-context quotes can distort the intended
              meaning.
            </li>
            <li>
              Provide a Conclusion: Based on the gathered evidence, provide a
              conclusion about the accuracy and validity of the claim or
              story. Clearly explain the evidence supporting or refuting the
              claim and present a well-supported assessment.
            </li>
          </ol>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowWeDo;
