import React from "react";
import OwlCarousel from 'react-owl-carousel';
import IFwinners from "./../assets/img/portfolio/IFwinners.jpeg";
import {Link} from "react-scroll";
class Inn extends React.Component{
    render(){
        return  <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
    
            <ol>
              <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details: Innovation Factory, IIT Bombay 2022</h2>
    
          </div>
        </section> {/* <!-- End Breadcrumbs -->
    
<        !-- ======= Portfolio Details Section ======= --> */}
        <section id="portfolio-details" class="portfolio-details">
          <div class="container">
    
            <div class="portfolio-details-container">
    
            <OwlCarousel items={1}>
                <img src={IFwinners} class="img-fluid" alt=""/>
                {/*<!-- <img src="assets/img/portfolio/siemens2.png" class="img-fluid" alt="">
                <img src="assets/img/portfolio/siemens1.jpg" class="img-fluid" alt=""> -->*/}
              </OwlCarousel>
    
              <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Product Name</strong>: Smart Clubfoot Brace</li>
                  <li><strong>Event Name</strong>: Innovation Factory, IIT Bombay 2022</li>
                  <li><strong>Event date</strong>: May 19-July 1, 2022</li>
                  <li><strong>Event URL</strong>: <a href="https://www.indiatoday.in/education-today/news/story/exciting-student-innovations-showcased-at-iit-bombay-s-invention-factory-1969501-2022-07-02">Click to Visit</a></li>
                </ul>
              </div>
    
            </div>
    
            <div class="portfolio-description">
              <h2>Smart Clubfoot Brace</h2>
              <p>
                Invention Factory India is a six-week summer program in which IIT students from across India, working in teams of two, Prototype, Pitch and Patent 
                inventions that each team has conceived of in the program's first intensive week. Teams compete for substantial prize money for the “Best Inventions“ as determined by 
                an illustrious panel of judges who select the inventions, with functioning prototypes, that successfully meet an important societal or consumer need.  <br /><br />
                This device is a smart corrective brace for kids with an objective to ensure a higher
                 compliance rate, enabling every baby with clubfoot to sleep comfortably.<br /><br />
                The Team placed first and took home a cash prize of Rs. 2 Lakhs<br /><br />
    
              </p>
            </div>
    
          </div>
        </section>{/* <!-- End Portfolio Details Section --> */}
    
      </main>



    }
}

export default Inn;