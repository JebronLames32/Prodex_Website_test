import React from "react";
import OwlCarousel from 'react-owl-carousel';
import GES2 from "./../assets/img/portfolio/GES2.jpg";
import {Link} from "react-scroll";
class Ges extends React.Component{
    render(){
        return   <main id="main">

        {/*         <!-- ======= Breadcrumbs ======= --> */}
       <section id="breadcrumbs"  class="breadcrumbs">
         <div class="container">
           <ol>
             <li><Link to="portfolio" smooth={true} offset={-50} duration={100} className="link">Home</Link></li>
             <li>Portfolio Details</li>
           </ol>
           <h2>Portfolio Details: Product Design Idea Competition, GES 2018, E-cell IITKGP</h2>
         </div>
       </section> 
       {/* <!-- ======= Portfolio Details Section ======= --> 
          <!-- ======= Portfolio Details Section ======= --> */}
       <section id="portfolio-details" class="portfolio-details">
         <div class="container">
   
           <div class="portfolio-details-container">
   
             <OwlCarousel items={1}>
               <img src={GES2} class="img-fluid" alt=""/>
               {/* <!-- <img src="assets/img/portfolio/siemens2.png" class="img-fluid" alt=""> 
               <img src="assets/img/portfolio/siemens1.jpg" class="img-fluid" alt=""> -->*/}
             </OwlCarousel>
   
             <div class="portfolio-info">
               <h3>Project information</h3>
               <ul>
                 <li><strong>Product Name</strong>: EvapoReefer</li>
                 <li><strong>Event Name</strong>: PDI-C, GES 2018, IITKGP</li>
                 <li><strong>Event date</strong>: 2-4 March, 2018</li>
                 <li><strong>Event URL</strong>: <a href="https://ecell-iitkgp.org/index.php">Click to Visit</a></li>
               </ul>
             </div>
   
           </div>
   
           <div class="portfolio-description">
             <h2>EvapoReefer - An alternative to conventional refrigirated trucks</h2>
             <p>
               Following the streak of showcasing our enthusiasm and zeal for erudition and moulding our ideas into innovative products, our product Evapo - Reefer was announced as the winner of Product Design Idea Competition conducted in Global
               Entrepreneurship Summit 2018 by E-Cell, IIT Kharagpur on 3rd February, 2018.<br /><br/>
               The product was aimed to improve the life of consumable commodities during transportation and to reduce food wastage in supply chain by designing a power efficient cold storage transportation system.<br /><br />
               Winning is a tradition here, at ProDex! We congratulate the team for adding another feather in their beret !
             </p>
           </div>
   
         </div>
       </section> {/* <!-- End Portfolio Details Section --> */}
   
    </ main>
    }
}

export default Ges;