import React from "react";
import OwlCarousel from 'react-owl-carousel';
import {Link} from "react-scroll";
import RTH from "./../assets/img/portfolio/RTH.jpg";
class Rth extends React.Component{
    render(){
        return     <main id="main">

       {/*  <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
    
            <ol>
              <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details: Rural Technology Hackathon (RTH) 2018, IITKGP</h2>
    
          </div>
        </section>{/* <!-- End Breadcrumbs -->
    
             <!-- ======= Portfolio Details Section ======= --> */}
        <section id="portfolio-details" class="portfolio-details">
          <div class="container">
    
            <div class="portfolio-details-container">
            <OwlCarousel items={1}>
                <img src={RTH} class="img-fluid" alt=""/>
                {/*</img><!-- <img src="assets/img/portfolio/siemens2.png" class="img-fluid" alt="">
                <img src="assets/img/portfolio/siemens1.jpg" class="img-fluid" alt=""> -->*/}
              </OwlCarousel>
    
              <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Product Name</strong>: Peltier Chulha</li>
                  <li><strong>Event Name</strong>: RTH 2018, IITKGP</li>
                  <li><strong>Event date</strong>: 19-22 December, 2018</li>
                  <li><strong>Event URL</strong>: <a href="https://preptube.in/news/rural-technology-hackathon-concludes-at-iit-kharagpur/2018/12/25/">Click to Visit</a></li>
                </ul>
              </div>
    
            </div>
    
            <div class="portfolio-description">
              <h2>Peltier Chulha - A novel energy-saving solution for rural households</h2>
              <p>
                It was a moment of great pride when Team ProDex was announced as the second runner up in the Rural Technology Hackathon, 2018 edition conducted at IIT Kharagpur, and the team had also recieved Rs 30K prize money. <br /><br /> It was all
                possible beacause of the hardwork put in by our team. By achieving this feat,
                Team ProDex added another feather to its cap and continued the tradition of winning product designing competitions.<br /><br />
                The product presented by our team, the 'Peltier Chulha' aimed to conserve and somehow store the excess heat generated during cooking in conventional chulhas in rural households.
              </p>
            </div>
    
          </div>
        </section> {/* <!-- End Portfolio Details Section --> */}
      </main>
    



    }
}

export default Rth;