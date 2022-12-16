import React from "react";
import OwlCarousel from 'react-owl-carousel';
import novus from "./../assets/img/portfolio/novus2.jpg";
import {Link} from "react-scroll";
class Novus extends React.Component{
    render(){

        return   <main id="main">

       {/*  <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className='breadcrumbs'>
          <div className='container'>
    
            <ol>
              <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details: NOVUS X.0 Producathon 2021</h2>
    
          </div>
        </section>    { /* <!-- End Breadcrumbs --> */}
    
        {/* <!-- ======= Portfolio Details Section ======= --> */}
        <section id="portfolio-details" className='portfolio-details'>
          <div className='container'>
    
            <div className='portfolio-details-container'>
    
            <OwlCarousel items={1}>
                <img src={novus} className='img-fluid' alt=""/>
                {/*<!-- <img src="assets/img/portfolio/siemens2.png" className='img-fluid" alt="">
                <img src="assets/img/portfolio/siemens1.jpg" className='img-fluid" alt=""> -->*/}
              </OwlCarousel>
    
             {/* <!-- <div className='portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Product Name</strong>: FireAxe</li>
                  <li><strong>Event Name</strong>: Prod-D, Prakriti 2018, IITKGP</li>
                  <li><strong>Event date</strong>: 16-18 March, 2018</li>
                  <li><strong>Event URL</strong>: <a href="https://www.knowafest.com/college-fests/events/2018/03/0930-prakriti-2018-iit-kharagpur-agricultural-food-innovation-fest">Click to Visit</a></li>
                </ul>
              </div> -->*/}
    
            </div>
    
            <div className='portfolio-description'>
              <h2>Innovative electronic rear-view camera</h2>
              <p>
                Given 4 Domains with 26 Challenges, they (Team Matrix) chose to work upon e-Mirrors under Electronics Domain. They have designed and developed a virtual rear-view mirror 
                with overwhelming value over existing physical mirrors and stands out from the existing alternative virtual mirror systems.<br /><br/>
                The idea presentation secured First place amongst the 400+ ideas pitched across the country. A global jury has judged the competition. Along with Prize money of ₹1,25,000 and prototype funding, they were also supported for IP Protection.<br /><br />
                Our Intellectual Property is now transferred to Faurecia, India. Currently, the invention is in the process of filing Invention Disclosure Forms (IDFs).
    
              </p>
            </div>
    
          </div>
        </section>  { /* <!-- End Portfolio Details Section --> */}
      </main>

    }
}

export default Novus;