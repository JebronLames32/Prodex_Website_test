import React from "react";
import prakrit from "./../assets/img/portfolio/prakriti1.jpg";
import OwlCarousel from 'react-owl-carousel';
import {Link} from "react-scroll";
class Prakriti extends React.Component{
    render(){
        return    <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
    
            <ol>
              <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details: Prod-D, Prakriti 2018, IITKGP</h2>
    
          </div>
        </section>{/* <!-- End Breadcrumbs --> */}
    
       {/*  <!-- ======= Portfolio Details Section ======= --> */}
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
    
            <div className="portfolio-details-container">
    
             <OwlCarousel items={1}>
                <img src={prakrit} className="img-fluid" alt=""/>
              {/*  <!-- <img src="assets/img/portfolio/siemens2.png" className="img-fluid" alt="">
                <img src="assets/img/portfolio/siemens1.jpg" className="img-fluid" alt=""> -->*/}
              </OwlCarousel>
     
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Product Name</strong>: FireAxe</li>
                  <li><strong>Event Name</strong>: Prod-D, Prakriti 2018, IITKGP</li>
                  <li><strong>Event date</strong>: 16-18 March, 2018</li>
                  <li><strong>Event URL</strong>: <a href="https://www.knowafest.com/college-fests/events/2018/03/0930-prakriti-2018-iit-kharagpur-agricultural-food-innovation-fest">Click to Visit</a></li>
                </ul>
              </div>
    
            </div>
    
            <div className="portfolio-description">
              <h2>FireAxe - An efficient crop cutting solution</h2>
              <p>
                Showcasing their enthusiasm and inclination towards innovations, our team was announced as the winner of Product Design competition 'PROD-D' which was organized during Prakriti 2018 by Agricultural Engineering Society, IIT Kharagpur on
                17th March 2018.<br /><br/>
                Our product is a farm machine which aims to reduce the widespread burning of farm residue that serves as a prime contributor to the alarming pollution levels in Delhi-NCR and other neighbouring cities.<br /><br />
                In turn, it promises to turn the waste generated during harvesting into a potential economic resource for the farmers.
              </p>
            </div>
    
          </div>
        </section>{/* <!-- End Portfolio Details Section --> */}
    
      </main> 


    }
}

export default Prakriti;