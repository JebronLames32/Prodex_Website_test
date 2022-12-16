import React from "react";
import OwlCarousel from 'react-owl-carousel';
import {Link} from "react-scroll";
import masterpiece1 from "./../assets/img/portfolio/masterpiece1.jpg";
import masterpiece2 from "./../assets/img/portfolio/masterpiece2.jpg";
class Masterpiece extends React.Component{
    render(){
        return   <main id="main">

       {/*  <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
    
            <ol>
              <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details: Living Talent Masterpiece 2017, Dubai (Category - Innovation)</h2>
    
          </div>
        </section>{/* <!-- End Breadcrumbs --> */}
    
        {/* <!-- ======= Portfolio Details Section ======= --> */}
        <section id="portfolio-details" class="portfolio-details">
          <div class="container">
    
            <div class="portfolio-details-container">
    
            <OwlCarousel items={1}>
                <img src={masterpiece1} class="img-fluid" alt=""/>
                <img src={masterpiece2} class="img-fluid" alt=""/>
              </OwlCarousel>
    
              <div class="portfolio-info">
                <h3>Event information</h3>
                <ul>
                  <li><strong>Event Name</strong>: Masterpiece 2017, (Category - Innovation)</li>
                  <li><strong>Event Venue</strong>: Dubai, UAE</li>
                  <li><strong>Event date</strong>: 15-16 December, 2017</li>
                  <li><strong>Event URL</strong>: <a href="https://www.prnewswire.com/in/news-releases/living-talent-presents-masterpiece-2017---the-worlds-first-multi-genre-intercontinental-talent-hunt-660496263.html">Click to Visit</a></li>
                </ul>
              </div>
    
            </div>
    
            <div class="portfolio-description">
              <h2>Product-Vibronot, Masterpiece 2017 (Category - Innovation)</h2>
              <p>
                We feel proud to announce that our team was selected to demonstrate a model in the International Semi-Finals of Masterpiece 2017 organised by Living Talent held at Dubai from 13December,2017 to 18 December,2017.
                <br /> <br/> Our product Vibronot was shortlisted for the Grand Finale after a tough competition in the semi-finals and was adjudged as one of the best solution for controlling the Parkinson’s Disease. <br/> <br/>
                The team got to interact with Mr. Roopam Sharma (Top 8 innovators Under 35 in MIT technology review for his invention to replace braille language) and Mr. Mayur Ramgir (International award winning author) who are experts in the field of
                innovations and entrepreneurship.
              </p>
            </div>
    
          </div>
        </section>{/* <!-- End Portfolio Details Section --> */}
    
      </main>



    }
}

export default Masterpiece;