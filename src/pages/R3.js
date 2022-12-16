import React from "react";
import OwlCarousel from 'react-owl-carousel';
import {Link} from "react-scroll";
class R3 extends React.Component{
    render(){
        return    <main id="main">

        {/* <!-- ======= Breadcrumbs ======= --> */}
        <section id="breadcrumbs" className="breadcrumbs">
          <div className="container">
    
            <ol>
              <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details: Reduce Reuse Recycle(R3) - IITB 2017</h2>
    
          </div>
        </section>{/* <!-- End Breadcrumbs --> */}
    
        {/* <!-- ======= Portfolio Details Section ======= --> */}
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
    
            <div className="portfolio-details-container">
    
            <OwlCarousel items={1}>
                {/*<!-- <img src="assets/img/portfolio/cgiu1.jpg" className="img-fluid" alt=""> -->
                <!-- <img src="assets/img/portfolio/siemens2.png" className="img-fluid" alt="">
                <img src="assets/img/portfolio/siemens1.jpg" className="img-fluid" alt=""> -->*/}
                <iframe className="video-responsive" src="https://www.youtube.com/embed/bBmaqzUP0io" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </OwlCarousel>
    
              <div className="portfolio-info" style={{position: 'relative' , bottom: '0'}}>
                <h3>Product information</h3>
                <ul>
                  <li><strong>Product Name</strong>: WasteRover</li>
                  <li><strong>Event Name</strong>: R3(Reduce, Reuse, Recycle)</li>
                  <li> <strong>Organised By</strong>: Abhudaya, IIT Bombay</li>
                  <li><strong>Event date</strong>: 21-22 January, 2017</li>
                  <li><strong>Event URL</strong>: <a href="https://www.abhyudayiitb.org/main2k18/competitions.html">Click to Visit</a></li>
                </ul>
              </div>
    
            </div>
    
            <div className="portfolio-description">
              <h2>WasteRover: An efficient automatic floating water waste collector</h2>
              <p>
                Innovations are sparked only when we find ourselves facing the barrage of difficulties. We revved up our neurons to kick off 2017 by securing first runner-up in “R3 (Reduce, Recycle, Reuse)”.The vision of this competition is to
                inspire the youth of India to achieve the highest waste reduction, recycling and reuse goals through innovation and creativity.
                R3 is a nation-wide Product Design competition conducted by Abhyuday, IIT Bombay. <br/><br/> Three members (Aakash Patidar, Rajesh Prajapati and Harmanjot Singh Grewal) of Team ProDex made it happen. Our idea of a product named “WasteRover”
                : simple
                yet efficient automatic floating water waste collector was made up from everyday waste materials.
              </p>
            </div>
    
          </div>
        </section>{/* <!-- End Portfolio Details Section --> */}
    
      </main>



    }
}

export default R3;