import React from "react";
import OwlCarousel from 'react-owl-carousel';
import { NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import openiit18 from "./../assets/img/portfolio/openiit1.jpg";
class Openiit18 extends React.Component{
    render(){
        return  <main id="main">
          
          {/* <!-- ======= Breadcrumbs ======= --> */}
          <section id="breadcrumbs" className='breadcrumbs'>
            <div className='container'>
              <ol>
                <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
                <li>Portfolio Details</li>
              </ol>
              <h2>Portfolio Details: Open IIT Product Design Competition 2018, IITKGP</h2>
            </div>
          </section>{/* <!-- End Breadcrumbs --> 
          <!-- ======= Portfolio Details Section ======= -->*/}
          <section id="portfolio-details" className='portfolio-details'>
            <div className='container'>
      
              <div className='portfolio-details-container'>
      
                <OwlCarousel items ={1}>
                  <img src={openiit18} class="img-fluid" alt=""/>
                  {/*<!-- <img src="assets/img/portfolio/siemens2.png" class="img-fluid" alt=""/>
                  <img src="assets/img/portfolio/siemens1.jpg" class="img-fluid" alt=""/> -->*/}
                </OwlCarousel>
      
                <div className='portfolio-info'>
                  <h3>Project information</h3>
                  <ul>
      
                    <li><strong>Event Name</strong>: Open IIT Prod-D 2018, IITKGP</li>
                    <li><strong>Event date</strong>: 19-22 December, 2018</li>
                    <li><strong>Event Venue</strong>: Nalanda Complex, IIT Kharagpur</li>
                    <li><strong>Event URL</strong>: <NavLink to="https://preptube.in/news/rural-technology-hackathon-concludes-at-iit-kharagpur/2018/12/25/">Click to Visit</NavLink></li>
                  </ul>
                </div>
      
              </div>
      
              <div className='portfolio-description'>
                <h2>Open IIT 2018 (Category-Product Design)</h2>
                <p>
                  Open IIT competitions are held every year at IIT Kharagpur. It has several categories like art, music, dramatics etc. One of the categories is Product design. <br /><br />
                  Every year, one can get to witness cut-throat competition, where teams fight neck-to-neck to secure a podium finish, especially in the Product Design category. <br /><br />
                  A lot of brainstorming and innovative products were pitched in
                  the 2018 edition and our Team ProDex emerged victorious by securing 1st position(Gold) overall, carrying on our legacy.
                </p>
              </div>
      
            </div>
          </section>{/* <!-- End Portfolio Details Section --> */}
      
        </main>
    }
}

export default Openiit18;