import React from "react";
import OwlCarousel from 'react-owl-carousel';
import empowerimg from "./../assets/img/portfolio/empower.jpg";
import {Link} from "react-scroll";
class Empower extends React.Component{
     render() {
        return   <main id="main">

        { /* ======= Breadcrumbs ======= */}
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
    
            <ol>
              <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
              <li>Portfolio Details</li>
            </ol>
            <h2>Portfolio Details: Student Design Challenge, Empower 2022</h2>
    
          </div>
        </section>{/* End Breadcrumbs */}
    
        {/*<!-- ======= Portfolio Details Section ======= -->*/}
        <section id="portfolio-details" class="portfolio-details" >
          <div class="container">
    
            <div class="portfolio-details-container">
    
            <OwlCarousel items={1}>
                <img src={empowerimg} class="img-fluid" alt=""/>
                </OwlCarousel>
                {/*<!-- <img src="assets/img/portfolio/siemens2.png" class="img-fluid" alt=""/>
                <img src="assets/img/portfolio/siemens1.jpg" class="img-fluid" alt=""/> -->
              <!-- <div class="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li><strong>Product Name</strong>: FireAxe</li>
                  <li><strong>Event Name</strong>: Prod-D, Prakriti 2018, IITKGP</li>
                  <li><strong>Event date</strong>: 16-18 March, 2018</li>
                  <li><strong>Event URL</strong>: <a href="https://www.knowafest.com/college-fests/events/2018/03/0930-prakriti-2018-iit-kharagpur-agricultural-food-innovation-fest">Click to Visit</a></li>
                </ul>
                 </div> -->*/}
    
            </div>
    
            <div class="portfolio-description">
              <h2>EMPOWER 2022, IIT Madras</h2>
              <p>
                The EMPOWER conference is an annual technical event, organized with the objective of bringing together all stakeholders in the assistive technology sector, which includes researchers, user organizations, industries as well as policy makers.
                Two teams from ProDex were selected as finalists for Empower 2022 held at IIT Madras Research Park. <br />
                It was a product innovation for visually impaired assistance. The top 8 teams were selected out of 87 teams from various institutions across the nation. <br /><br />
                Team Streamline were announced as winners. They were awarded a cash prize for their innovation which was an application to detect the volume of a liquid
                 filled in a test tube or beaker to make labs more accessible for the visually impaired.  <br /><br />
    
              </p>
            </div>
    
       </div>
        </section>{/*<!-- End Portfolio Details Section -->*/}
      </main>
     }
}

export default Empower;