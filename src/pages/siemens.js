import React from "react";
import OwlCarousel from 'react-owl-carousel';
import {Link} from "react-scroll";
import siemens from "./../assets/img/portfolio/siemens1.jpg";
class Siemens extends React.Component{
    render(){
        return   <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
    
            <ol>
              <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details: Siemens MakeIT Real 2019</h2>
    
          </div>
        </section>{/* <!-- End Breadcrumbs -->
    
<!-- ======= Portfolio Details Section ======= --> */}
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
    
            <div className="portfolio-details-container">
    
            <OwlCarousel items={1}>
                <img src={siemens} className="img-fluid" alt=""/>
                {/* <!-- <img src="assets/img/portfolio/siemens2.png" className="img-fluid" alt="">
                <img src="assets/img/portfolio/siemens1.jpg" className="img-fluid" alt=""> --> */}
              </OwlCarousel>
    
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Product Name</strong>: TaSafe</li>
                  <li><strong>Event Name</strong>: Siemens MakeIT Real 2019</li>
                  <li><strong>Event date</strong>: 19-20 December, 2019</li>
                  <li><strong>Event URL</strong>: <a href="https://www.hackerearth.com/challenges/hackathon/siemens-makeit-real-2019/">Click to Visit</a></li>
                </ul>
              </div>
    
            </div>
    
            <div className="portfolio-description">
              <h2>TaSafe - A foot wearable security device for women</h2>
              <p>
                Amidst the requirement of Smart Security Devices, Team ProDex developed the product TaSafe. That helped them achieve 1st runner up award at Siemens "MakeIt Real 24 Hour Hackathon" on 20th December. <br/> <br/> TaSafe is foot wearable device
                that
                ensures the safety of our female companions by electrocuting the assailant during an ambush and provide time to escape from the scenario and at the same time, it send alerts to emergency contact for help.<br/><br/>It is also a matter of
                pride and honor for us that TaSafe was also presented as an upcoming innovation of ProDex - IIT Kharagpur in the 8th Inter IIT Tech Meet held at IIT Roorkee.
              </p>
            </div>
    
          </div>
        </section>  {/* <!-- End Portfolio Details Section --> */}
    
      </main>


    }
}


export default Siemens;