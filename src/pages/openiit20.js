import React from "react";
import OwlCarousel from 'react-owl-carousel';
import {Link} from "react-scroll";
import openiit20 from "./../assets/img/portfolio/drishtipad.jpg";
class Openiit20 extends React.Component{
    render(){
        return    <main id="main">

{/*         <!-- ======= Breadcrumbs ======= -->  */}
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
    
            <ol>
              <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details: Open IIT Product Design Competition 2020, IITKGP</h2>
    
          </div>
        </section>{/* <!-- End Breadcrumbs -->
    
<!-- ======= Portfolio Details Section ======= --> */}
        <section id="portfolio-details" class="portfolio-details">
          <div class="container">
    
            <div class="portfolio-details-container">
    
            <OwlCarousel items={1}>
                <img src={openiit20} class="img-fluid" alt=""/>
{/*                 <!-- <img src="assets/img/portfolio/siemens2.png" class="img-fluid" alt=""> -->
                <!-- <img src="assets/img/portfolio/siemens1.jpg" class="img-fluid" alt=""> --> */}
              </OwlCarousel>
    
              {/* <!-- <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Event Name</strong>: Open IIT Prod-D 2020, IITKGP</li>
                  <li><strong>Event date</strong>: 19-22 December, 2018</li>
                  <li><strong>Event Venue</strong>: Nalanda Complex, IIT Kharagpur</li>
                  <li><strong>Event URL</strong>: <a href="https://preptube.in/news/rural-technology-hackathon-concludes-at-iit-kharagpur/2018/12/25/">Click to Visit</a></li>
                </ul>
              </div> --> */}
    
            </div>
    
            <div class="portfolio-description">
              <h2>Product: DrishtiPad</h2>
              <p>
                Open IIT competitions are held every year at IIT Kharagpur. It has several categories like art, music, dramatics etc. One of the categories is Product design. <br /><br />
                Every year, one can get to witness cut-throat competition, where teams fight neck-to-neck to secure a podium finish, especially in the Product Design category. <br /><br />
                A lot of brainstorming and innovative products were pitched in
                the 2020 edition and our Team ProDex emerged victorious by securing 3rd position(bronze) overall, carrying on our legacy.
                They designed a device to help visually challenged people to detect deep pits and obstacles
              </p>
            </div>
    
          </div>
        </section>{/* <!-- End Portfolio Details Section --> */}
    
      </main>


    }
}


export default Openiit20;