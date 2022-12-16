import React from "react";
import {Link} from "react-scroll";
import OwlCarousel from 'react-owl-carousel';
import cgiu1 from "./../assets/img/portfolio/cgiu1.jpg";
class Cgiu extends React.Component{
    render(){
        return <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className='breadcrumbs'>
          <div className='container'>
    
            <ol>
              <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details: Clinton Foundation - CGI U 2018</h2>
    
          </div>
        </section>{/*<!-- End Breadcrumbs --> */}
    
        {/* <!-- ======= Portfolio Details Section ======= --> */}
      <section id="portfolio-details" className='portfolio-details'>
          <div className='container'>
            <div className='portfolio-details-container'>
    
            <OwlCarousel items={1}>
                <img src={cgiu1} className='img-fluid' alt=""/>
                </OwlCarousel>{/*<!-- <img src="assets/img/portfolio/siemens2.png" class="img-fluid" alt=""/>
                <img src="assets/img/portfolio/siemens1.jpg" class="img-fluid" alt=""/> -->*/}
              </div>
    
              <div className='portfolio-info'>
                <h3>Event information</h3>
                <ul>
                  <li><strong>Event Name</strong>: Clinton Foundation - CGI U 2018</li>
                  <li><strong>Event Venue</strong>: Univeristy Of Chicago, USA</li>
                  <li><strong>Event date</strong>: 19-21 October, 2018</li>
                  <li><strong>Event URL</strong>: <a href="https://www.clintonfoundation.org/clinton-global-initiative/meetings/cgi-university/2018">Click to Visit</a></li>
                </ul>
              </div>
    
            </div>
    
            <div className='portfolio-description'>
              <h2>CGI U - University of Chicago</h2>
              <p>
                Team ProDex was selected to participate in the Clinton Global Initiative University (CGI U) hosted at the University of Chicago from 19th October to 21st October, 2018. Amidst the enthusiasm among the fellow attendees and the inspiring
                speeches given by distinguished leaders including former US President Clinton, the team felt ecstatic to present two of their projects focussing on the problems of pollution and food wastage in India.
                <br /><br /> CGIU is a platform to compete and collaborate between innovative solutions for tackling pressing global challenges through knowledge building with topic experts and university representatives from around 200 countries. With the
                enriching exposure at CGI U, the team is more focused than ever to work towards their commitment to “turning ideas into reality”.
              </p>
            </div>
        </section>
        {/* <!-- End Portfolio Details Section --> */}
      </main>
    }
}

export default Cgiu;