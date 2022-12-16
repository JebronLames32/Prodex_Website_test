import React ,{useState} from "react";
import openiit18 from "./../assets/img/portfolio/cgiu1.jpg";
import cgiu1 from "./../assets/img/portfolio/cgiu1.jpg";
import empowerimg from "./../assets/img/portfolio/empower.jpg";
import GES2 from "./../assets/img/portfolio/GES2.jpg";
import IFwinners from "./../assets/img/portfolio/IFwinners.jpeg";
import masterpiece from "./../assets/img/portfolio/masterpiece.jpg";
import novus from "./../assets/img/portfolio/novus2.jpg";
import prakrit from "./../assets/img/portfolio/prakriti1.jpg";
import RTH from "./../assets/img/portfolio/RTH.jpg";
import r31 from "./../assets/img/portfolio/r31.jpg";
import hero from "./../assets/img/hero-img.png";
import openiit22 from "./../assets/img/portfolio/open_iit_2022_winner.jpg";
import openiit21 from "./../assets/img/portfolio/Open_iit_2021.png";
import openiit20 from "./../assets/img/portfolio/Open_IIT_2020.jpg" ;
import siemens from "./../assets/img/portfolio/siemens1.jpg";
import { Link, renderMatches} from "react-router-dom";
import { Icon } from '@iconify/react';

class Home extends React.Component{
      render(){
        return <main id="main">
          
          <section id="hero" class="d-flex align-items-center">

<div className='container'>
  <div className='row'>
    <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos="fade-up" data-aos-delay="200">
      <h1>Welcome to ProDex <br />IIT Kharagpur</h1>
      <h2>ProDex is a technical society focused on promoting Hardware modelling, Design and Innovation among the
        students of IIT Kharagpur.</h2>
      <div className='d-lg-flex'>
        <Link to="#about" className="btn-get-started scrollto">Get Started</Link>
        {/*<Link to="https://youtu.be/fcIHGUXnSWg" className='venobox btn-watch-video' data-vbtype="video" data-autoplay="true"> Watch Video <i class="icofont-play-alt-2"></i></Link>*/}
      </div>
    </div>
    <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos="zoom-in" data-aos-delay="200">
      <img src={hero} className='img-fluid animated' alt=""/>
    </div>
  </div>
</div>

</section>{/* <!-- End Hero --> */}


        {/*<!-- ======= Cliens Section ======= -->
        <!-- <section id="cliens" className='cliens section-bg">
          <div className='container">
            <div className='row" data-aos="zoom-in">
              <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-1.png" className='img-fluid" alt="">
              </div>
              <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-2.png" className='img-fluid" alt="">
              </div>
              <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-3.png" className='img-fluid" alt="">
              </div>
              <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-4.png" className='img-fluid" alt="">
              </div>
              <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-5.png" className='img-fluid" alt="">
              </div>
              <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
                <img src="assets/img/clients/client-6.png" className='img-fluid" alt="">
              </div>
            </div>
          </div>
        </section> -->
        <!-- End Cliens Section -->
    
        <!-- ======= Register ======= -->
    <!--
        <div className='register" id="register">
          <div className='container">
            <div className='row justify-content-center">
              <div className='col-lg-6">
                <div className='section-title">
                  <h2>Register</h2>
                </div>
                <p2>Are you a fresher? Haven't registered for our intro-seminar yet? <br>
                  Click the button below to register!</p>
                <a href="registration.html"><button id="registerBtn">Register</button></a><br><br>
                <p2>Already have an account?
                  Click the button below to login!</p>
                <a href="login.html"><button id="registerBtn">Login</button></a>
                <a href="login.html">Login</a>
              </div>
            </div>
          </div>
        </div> -->
        <!-- End Register Section -->
    
    <!-- ======= About Us Section ======= -->*/}
        <section id="about" className='about'>
          <div className='container' data-aos="fade-up">
    
            <div className='section-title'>
              <h2>About Us</h2>
            </div>
    
            <div className='row content'>
              <div className='col-lg-6'>
                <p>
                  Prodex is a workplace for innovation, technology and research driven activists who aspire to shape their
                  ideas into reality.
                  <br />
                  <br />ProDex provides you a platform to :-
                </p>
                <ul>
                  <li><Icon icon="ri:check-double-line" color="#48b2e4" /> Develop new ideas and shape them into real-worldly models.</li>
                  <li><Icon icon="ri:check-double-line" color="#48b2e4" /> Work with a team of like minded, tech-savvy, innovation driven
                    people.</li>
                  <li><Icon icon="ri:check-double-line" color="#48b2e4" /> Represent your team, yourself and the society in various
                    competitions and events.</li>
                </ul>
              </div>
              <div className='col-lg-6 pt-4 pt-lg-0'>
                <p>
                  ProDex is not just a technical society, it's much more than that. It provides you an opportunity to be a
                  part of a group which strives to nurture the innovator in you, so that you understand that it is time for
                  us to change ourselves,
                  and hence,
                  be the change.<br /><br /> Here, you will be exposed to various fields and work with different
                  technologies spanning various engineering backgrounds, be it electrical engineering or mechanical
                  engineering, biotech or cse.
                </p>
                <a href="https://www.facebook.com/prodex.iitkgp" className='btn-learn-more'>Learn More</a>
              </div>
            </div>
    
          </div>
        </section>{/*<!-- End About Us Section -->
    
        <!-- ======= Cta Section ======= -->
        <!-- <section id="cta" className='cta">
          <div className='container" data-aos="zoom-in" style="">
            <div className='row">
              <div className='col-lg-9 text-center text-lg-left">
                <h3>Sign Up for ProDex IIT Kharagpur</h3>
                <p>Wish to know more about us? Don't have an account? Click to sign up now!</p>
              </div>
              <div className='col-lg-3 cta-btn-container text-center">
                <a className='cta-btn align-middle" href="registration.html">Sign Up</a>
              </div>
            </div>
          </div>
          <br><br><br><br>
          <div className='container" data-aos="zoom-in" style="">
            <div className='row">
              <div className='col-lg-9 text-center text-lg-left">
                <h3>Login to ProDex IIT Kharagpur</h3>
                <p>Do you already have an account? Proceed to login</p>
              </div>
              <div className='col-lg-3 cta-btn-container text-center">
                <a className='cta-btn align-middle" href="login.html">Login</a>
              </div>
            </div>
          </div>
        </section> -->
        <!-- End Cta Section -->
    
    
        <!-- ======= Why Us Section ======= -->
        <!-- <section id="why-us" className='why-us">
          <div className='container-fluid" data-aos="fade-up">
    
            <div className='row">
    
              <div className='col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">
    
                <div className='content">
                  <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  </p>
                </div>
    
                <div className='accordion-list">
                  <ul>
                    <li>
                      <a data-toggle="collapse" className='collapse" href="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis? <i className='bx bx-chevron-down icon-show"></i><i className='bx bx-chevron-up icon-close"></i></a>
                      <div id="accordion-list-1" className='collapse show" data-parent=".accordion-list">
                        <p>
                          Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                        </p>
                      </div>
                    </li>
    
                    <li>
                      <a data-toggle="collapse" href="#accordion-list-2" className='collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? <i className='bx bx-chevron-down icon-show"></i><i className='bx bx-chevron-up icon-close"></i></a>
                      <div id="accordion-list-2" className='collapse" data-parent=".accordion-list">
                        <p>
                          Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim.
                          Mauris ultrices eros in cursus turpis massa tincidunt dui.
                        </p>
                      </div>
                    </li>
    
                    <li>
                      <a data-toggle="collapse" href="#accordion-list-3" className='collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i className='bx bx-chevron-down icon-show"></i><i className='bx bx-chevron-up icon-close"></i></a>
                      <div id="accordion-list-3" className='collapse" data-parent=".accordion-list">
                        <p>
                          Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis
                          convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                        </p>
                      </div>
                    </li>
    
                  </ul>
                </div>
    
              </div>
    
              <div className='col-lg-5 align-items-stretch order-1 order-lg-2 img" style='background-image: url("assets/img/why-us.png");' data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
            </div>
    
          </div>
        </section> -->
        <!-- End Why Us Section -->
    
        <!-- ======= Skills Section ======= -->
        <!-- <section id="skills" className='skills">
          <div className='container" data-aos="fade-up">
            <div className='row">
              <div className='col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
                <img src="assets/img/skills.png" className='img-fluid" alt="">
              </div>
              <div className='col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
                <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
                <p className='font-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <div className='skills-content">
                  <div className='progress">
                    <span className='skill">HTML <i className='val">100%</i></span>
                    <div className='progress-bar-wrap">
                      <div className='progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className='progress">
                    <span className='skill">CSS <i className='val">90%</i></span>
                    <div className='progress-bar-wrap">
                      <div className='progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className='progress">
                    <span className='skill">JavaScript <i className='val">75%</i></span>
                    <div className='progress-bar-wrap">
                      <div className='progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <div className='progress">
                    <span className='skill">Photoshop <i className='val">55%</i></span>
                    <div className='progress-bar-wrap">
                      <div className='progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> -->
        <!-- End Skills Section -->
    
<!-- ======= Services Section ======= -->*/}
        <section id="services" className='services section-bg'>
          <div className='container' data-aos="fade-up">
    
            <div className='section-title'>
              <h2>What We Do</h2>
              {/*<!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                quidem hic quas.</p> -->*/}
            </div>
    
            <div className='row'>
              <div className='col-xl-3 col-md-6 d-flex align-items-stretch' data-aos="zoom-in" data-aos-delay="100">
                <div className='icon-box'>
                  <div className='icon'><Icon icon="icon-park-outline:dribble"color="#47b2e4" width="36" height="36" /></div>
                  <h4><Link to="javascript:;">We Imagine</Link></h4>
                  <p>"Logic will get you from A to B. Imagination will take you everywhere."<br /><br />Albert Einstein</p>
                </div>
              </div>
             {/* < Card className="h-100 shadow-sm bg-white rounded">
                <Card.Body className="d-flex flex column">
                  <div className="d-flex mb-2 justify-content-between">
                  <h4><Link to="javascript:;">We Imagine</Link></h4>
                  <p>"Logic will get you from A to B. Imagination will take you everywhere."<br /><br />Albert Einstein</p> 
                  </div>
                </Card.Body>

            </Card>*/}
    
              <div className='col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0' data-aos="zoom-in" data-aos-delay="200">
                <div className='icon-box'>
                  <div className='icon'><Icon icon="mdi:file-document-outline"color="#47b2e4" width="36" height="36" /></div>
                  <h4><a href="javascript:;">We Analyse</a></h4>
                  <p>"Analysis is the critical starting point of strategic thinking."<br /><br />Kenichi Ohmae</p>
                </div>
              </div>
    
              <div className='col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0' data-aos="zoom-in" data-aos-delay="300">
                <div className='icon-box'>
                  <div className='icon'><Icon icon="bx:tachometer" color="#47b2e4" width="36" height="36" /></div>
                  <h4><a href="javascript:;">We Create</a></h4>
                  <p>"The desire to create is one of the deepest yearnings of the human soul."<br /><br />Dieter F. Uchtdorf
                  </p>
                </div>
              </div>
    
              <div className='col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0' data-aos="zoom-in" data-aos-delay="400">
                <div className='icon-box'>
                  <div className='icon'><Icon icon="uil:layer-group" color="#47b2e4" width="36" height="36" /></div>
                  <h4><a href="javascript:;">We Innovate</a></h4>
                  <p>"Innovation distinguishes between a leader and a follower."<br /><br />Steve Jobs</p>
                </div>
              </div>
    
            </div>
    
          </div>
        </section> {/* <!-- End Services Section --> */}
    
    
    
        {/* <!-- ======= Portfolio Section ======= --> */}
        <section id="portfolio" className='portfolio'>
          <div className='container' data-aos="fade-up">
    
            <div className='section-title'>
              <h2>Portfolio</h2>
              <p>When it comes to competitions and events, winning is a tradition here at ProDex! Since its inception in
                2012, <br /> our teams have not just represented ProDex and IITKGP, but have also won numerous
                intra-institutional, national<br />
                and
                international level events.<br /><br /> Some of our notable achievements are : <br /></p><small>(*Click on
                the event banner to learn more)</small>
            </div>
    
            <ul id="portfolio-flters" className='d-flex justify-content-center' data-aos="fade-up" data-aos-delay="100">
              <li data-filter="*" className='filter-active'>All</li>
              <li data-filter=".filter-comp">2022</li>
              <li data-filter=".filter-prod">2021</li>
              <li data-filter=".filter-box">2020</li>
              <li data-filter=".filter-app">2019</li>
              <li data-filter=".filter-card">2018</li>
              <li data-filter=".filter-web">2017</li>
            </ul>
    
            <div className='row portfolio-container' data-aos="fade-up" data-aos-delay="200">
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-comp'>
                <div className='portfolio-img'> <Link to="/openiit22"><img src={openiit22} className='img-fluid' alt="" /></Link> </div>
                <div className='portfolio-info'>
                  <h4>Open IIT Prod-D 2022, IITKGP</h4>
                  <p>2022</p>
                  <Link to={openiit22} data-gall="portfolioGallery" className='venobox preview-link' title="Open IIT Product Design 2021"><i className='bx bx-plus'></i></Link>
                  <Link to="/openiit22" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-comp'>
                <div className='portfolio-img'> <Link to="/empower"><img src={empowerimg} className='img-fluid' alt="" /></Link> </div>
                <div className='portfolio-info'>
                  <h4>Empower 2022</h4>
                  <p>2022</p>
                  <Link to={empowerimg} data-gall="portfolioGallery" className='venobox preview-link' title="Empower"><i className='bx bx-plus'></i></Link>
                  <Link to="/empower" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-comp'>
                <div className='portfolio-img'> <Link to="/Inn"><img src={IFwinners} className='img-fluid' alt=""/></Link> </div>
                <div className='portfolio-info'>
                  <h4>Innovation Factory, IIT Bombay 2022</h4>
                  <p>2022</p>
                  <Link to={IFwinners} data-gall="portfolioGallery" className='venobox preview-link' title="Innovation"><i className='bx bx-plus'></i></Link>
                  <Link to="/Inn" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-prod'>
                <div className='portfolio-img'> <Link to="/novus"><img src={novus} className='img-fluid' alt=""/></Link> </div>
                <div className='portfolio-info'>
                  <h4>Novus X.0 - 2021 Producathon</h4>
                  <p>2021</p>
                  <Link to={novus} data-gall="portfolioGallery" className='venobox preview-link' title="Novus_X.0"><i className='bx bx-plus'></i></Link>
                  <Link to="/novus" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
              
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-prod'>
                <div className='portfolio-img'> <a href="openiit21.html"><img src="assets/img/portfolio/Open_iit_2021.png" className='img-fluid' alt=""/></a> </div>
                <div className='portfolio-info'>
                  <h4>Open IIT Prod-D 2021, IITKGP</h4>
                  <p>2021</p>
                  <Link to={openiit21} data-gall="portfolioGallery" className='venobox preview-link' title="Open IIT Product Design 2021"><i className='bx bx-plus'></i></Link>
                  <Link to="/openiit21" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-box'>
                <div className='portfolio-img'> <a href="openiit20.html"><img src="assets/img/portfolio/Open_IIT_2020.jpg" className='img-fluid' alt=""/></a> </div>
                <div className='portfolio-info'>
                  <h4>Open IIT Prod-D 2020, IITKGP</h4>
                  <p>2020</p>
                  <Link to={openiit20} data-gall="portfolioGallery" className='venobox preview-link' title="Open IIT Product Design 2020"><i className='bx bx-plus'></i></Link>
                  <Link to="/openiit20" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
                <div className='portfolio-img'> <Link to="/cgiu"><img src={cgiu1} className='img-fluid' alt=""/></Link> </div>
                <div className='portfolio-info'>
                  <h4>Clinton Foundation - CGI U 2018</h4>
                  <p>2018</p>
                  <Link to={cgiu1} data-gall="portfolioGallery" className='venobox preview-link' title="Clinton Foundation - CGI U 2018"><i className='bx bx-plus'></i></Link>
                  <Link to="/cgiu" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
                <div className='portfolio-img'> <Link to="/prakriti"> <img src={prakrit} className='img-fluid' alt=""/></Link></div>
                <div className='portfolio-info'>
                  <h4>Prod-D, Prakriti 2018, IITKGP</h4>
                  <p>2018</p>
                  <Link to={prakrit} data-gall="portfolioGallery" className='venobox preview-link' title="Prod-D, Prakriti 2018, IITKGP"><i className='bx bx-plus'></i></Link>
                  <Link to="/prakriti" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
                <div className='portfolio-img'><Link to="/openiit18"><img src={openiit18} className='img-fluid' alt=""/></Link></div>
                <div className='portfolio-info'>
                  <h4>Open IIT Prod-D 2018, IITKGP</h4>
                  <p>2018</p>
                  <Link to={openiit18} data-gall="portfolioGallery" className='venobox preview-link' title="Open IIT Product Design 2018"><i className='bx bx-plus'></i></Link>
                  <Link to="/openiit18" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
                <div className='portfolio-img'> <Link to="/ges"><img src={GES2} className='img-fluid' alt=""/></Link> </div>
                <div className='portfolio-info'>
                  <h4>Product Design Idea Competition, GES 2018, E-Cell IITKGP</h4>
                  <p>2018</p>
                  <Link to={GES2} data-gall="portfolioGallery" className='venobox preview-link' title="Product Design Idea Competition, GES 2018"><i className='bx bx-plus'></i></Link>
                  <Link to="/ges" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
                <div className='portfolio-img'> <Link to="/r3"><img src={r31} className='img-fluid' alt=""/></Link> </div>
                <div className='portfolio-info'>
                  <h4>R3 - Abhyudaya, IIT Bombay 2017</h4>
                  <p>2017</p>
                  <Link to={r31} data-gall="portfolioGallery" className='venobox preview-link' title="R3 - Abhyudaya, IIT Bombay 2017"><i className='bx bx-plus'></i></Link>
                  <Link to="/r3" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
                <div className='portfolio-img'> <Link to="/siemens"><img src={siemens} className='img-fluid' alt=""/></Link> </div>
                <div className='portfolio-info'>
                  <h4>Siemens MakeIT Real 2019</h4>
                  <p>2019</p>
                  <Link to={siemens} data-gall="portfolioGallery" className='venobox preview-link' title="Siemens MakeIT Real 2019"><i className='bx bx-plus'></i></Link>
                  <Link to="/siemens" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                  
                </div>
              </div>
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-web'>
                <div className='portfolio-img'> <Link to="/masterpiece"><img src={masterpiece} className='img-fluid' alt=""/></Link> </div>
                <div className='portfolio-info'>
                  <h4>Masterpiece 2017, Dubai</h4>
                  <p>2017</p>
                  <Link to={masterpiece} data-gall="portfolioGallery" className='venobox preview-link' title="Masterpiece 2017, Dubai"><i className='bx bx-plus'></i></Link>
                  <Link to="/masterpiece" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
              <div className='col-lg-4 col-md-6 portfolio-item filter-card'>
                <div className='portfolio-img'> <Link to="/rth"> <img src={RTH} className='img-fluid' alt=""/></Link></div>
                <div className='portfolio-info'>
                  <h4>Rural Tech. Hackathon 2018</h4>
                  <p>2018</p>
                  <Link to={RTH} data-gall="portfolioGallery" className='venobox preview-link' title="RTH 2018"><i className='bx bx-plus'></i></Link>
                  <Link to="/rth" className='details-link' title="More Details"><i className='bx bx-link'></i></Link>
                </div>
              </div>
    
              {/*<!-- <div className='col-lg-4 col-md-6 portfolio-item filter-web">
                <div className='portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className='img-fluid" alt=""></div>
                <div className='portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className='venobox preview-link" title="Web 3"><i className='bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className='details-link" title="More Details"><i className='bx bx-link"></i></a>
                </div>
              </div> -->
    
              <!-- <div className='col-lg-4 col-md-6 portfolio-item filter-web">
                <div className='portfolio-img"><img src="assets/img/portfolio/portfolio-9.jpg" className='img-fluid" alt=""></div>
                <div className='portfolio-info">
                  <h4>Web 3</h4>
                  <p>Web</p>
                  <a href="assets/img/portfolio/portfolio-9.jpg" data-gall="portfolioGallery" className='venobox preview-link" title="Web 3"><i className='bx bx-plus"></i></a>
                  <a href="portfolio-details.html" className='details-link" title="More Details"><i className='bx bx-link"></i></a>
                </div>
                </div> -->*/}
    
            </div>
    
          </div>
        </section>{/* <!-- End Portfolio Section --> */}
    
        {/* <!-- ======= Team Section ======= --> */}
        <section id="team" className='team section-bg'>
          <div className='container' data-aos="fade-up">
    
            <div className='section-title'>
              <h2>Team</h2>
             {/*  <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                quidem hic quas.</p> --> */}
            </div>
           
            <div className='row'>
    
              <div className='col-lg-6'>
                <div className='member d-flex align-items-start' data-aos="zoom-in" data-aos-delay="100">
                  <div className='pic'><img src="assets/img/team/Shubham.jpg" className='img-fluid' alt=""/></div>
                  <div className='member-info'>
                    <h4>Shubham Kakde</h4>
                    <span>Governor</span>
                    <p>Final Year B.Tech, Industrial and Systems Engineering (2017-2022)</p>
                    <div className='social'>
                     {/*  <!-- <a href=""><i className='ri-twitter-fill"></i></a> --> */}
                      <a href="https://www.facebook.com/shubham.kakade.77770194"><Icon icon= "ri:facebook-fill" color="#37517e" width="15" height="15" /></a>
                      {/* <!-- <a href=""><i className='ri-instagram-fill"></i></a> --> */}
                      <a href="https://www.linkedin.com/in/kakdeshubham3487"> <Icon icon="radix-icons:linkedin-logo" color="#37517e" width="15" height="15" /> </a>
                      <a href="https://github.com/flarrow7"><Icon icon="ion:logo-github" color="#37517e" width="15" height="15" /></a>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className='col-lg-6 mt-4 mt-lg-0'>
                <div className='member d-flex align-items-start' data-aos="zoom-in" data-aos-delay="100">
                  <div className='pic'><img src="assets/img/team/Vivek.jpg" className='img-fluid' alt="" /></div>
                  <div className='member-info'>
                    <h4>Vivek Wankhade</h4>
                    <span>Governor</span>
                    <p>Final Year M.Sc, Physics (2017-2022)</p>
                    <div className='social'>
                      <a href="https://www.facebook.com/vivek.wankhade.9279"><Icon icon="ri:facebook-fill" color="#37517e" width="15" height="15" /></a>
                      <a href="https://www.linkedin.com/in/vivek-wankhade-7a260216b/"> <Icon icon="radix-icons:linkedin-logo" color="#37517e" width="15" height="15" />
                      </a>
                      <a href="https://github.com/Vivek24299"><Icon icon="ion:logo-github" color="#37517e" width="15" height="15" /></a>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className='col-lg-6 mt-4'>
                <div className='member d-flex align-items-start' data-aos="zoom-in" data-aos-delay="100">
                  <div className='pic'><img src="assets/img/team/Mann.jfif" className='img-fluid' alt="" /></div>
                  <div className='member-info'>
                    <h4>Mann Goel</h4>
                    <span>Governor</span>
                    <p>Final Year B.Tech, Chemical Engineering (2017-2022)</p>
                    <div className='social'>
                      {/* <!-- <a href=""><i className='ri-twitter-fill"></i></a> --> */}
                      <a href="https://www.facebook.com/mann.goel.3"><Icon icon="ri:facebook-fill" color="#37517e" width="15" height="15" /></a>
                      {/* <!-- <a href=""><i className='ri-instagram-fill"></i></a> --> */}
                      <a href="https://www.linkedin.com/in/mann-goel-656b45150/"> <Icon icon="radix-icons:linkedin-logo" color="#37517e" width="15" height="15" /></a>
                      <a href=""><Icon icon="ion:logo-github" color="#37517e" width="15" height="15" /></a>
                    </div>
                  </div>
                </div>
              </div>
    
    
            </div>
            <br/>
    
            <div className='section-title'>
              <h2>Advisors</h2>
             {/*  <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                quidem hic quas.</p> --> */}
            </div>
            <div className='row'>
    
              <div className='col-lg-6'>
                <div className='member d-flex align-items-start' data-aos="zoom-in" data-aos-delay="100">
                  <div className='pic'><img src="assets/img/team/ag.jfif" className='img-fluid' alt=""/></div>
                  <div className='member-info'>
                    <h4>Anurag Goyal</h4>
                    <span>Advisor</span>
                    <p>B.Tech, Instrumentation Engineering, className 'f 2019</p>
                    <div className='social'>
                      {/* <!-- <a href=""><i className='ri-twitter-fill"></i></a> --> */}
                      <a href="https://www.facebook.com/anurag.goyal.1297"><Icon icon="ri:facebook-fill" color="#37517e" width="15" height="15" /></a>
                      {/* <!-- <a href=""><i className='ri-instagram-fill"></i></a> --> */}
                      <a href="https://www.linkedin.com/in/anurag-goyal-iitkgp/"> <Icon icon="radix-icons:linkedin-logo" color="#37517e" width="15" height="15" /></a>
                      <a href="javascript:;"><Icon icon="ion:logo-github" color="#37517e" width="15" height="15" /></a>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className='col-lg-6 mt-4 mt-lg-0'>
                <div className='member d-flex align-items-start' data-aos="zoom-in" data-aos-delay="100">
                  <div className='pic'><img src="assets/img/team/jai.jpg" className='img-fluid' alt="" /></div>
                  <div className='member-info'>
                    <h4>Jai Shukla</h4>
                    <span>Advisor</span>
                    <p>Final Year M.Sc, Chemistry (2016-2021)</p>
                    <div className='social'>
                     {/*  <!-- <a href=""><i className='ri-twitter-fill"></i></a> --> */}
                      <a href="https://www.facebook.com/profile.php?id=100000640011565"><Icon icon="ri:facebook-fill" color="#37517e" width="15" height="15"/></a>
                     {/*  <!-- <a href=""><i className='ri-instagram-fill"></i></a> --> */}
                      <a href="https://www.linkedin.com/in/jaishuklaiitkgp/"><Icon icon="radix-icons:linkedin-logo" color="#37517e" width="15" height="15" /></a>
                      <a href="https://github.com/jaxmatrix"><Icon icon="ion:logo-github" color="#37517e" width="15" height="15" /></a>
                    </div>
                  </div>
                </div>
              </div>
    
    
            </div>
            <br/>
    
            <div className='section-title'>
              <h2>Mentors</h2>
              {/* <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                quidem hic quas.</p> --> */}
            </div>
            <div className='row'>
    
              <div className='col-lg-6'>
                <div className='member d-flex align-items-start' data-aos="zoom-in" data-aos-delay="100">
                  <div className='pic'><img src="assets/img/team/pkdan.jpg" className='img-fluid' alt=""/></div>
                  <div className='member-info'>
                    <h4>Dr. Pranab K Dan</h4>
                    <span>Mentor</span>
                    <p>Associate Professor, Rajendra Mishra School of Engineering Entrepreneurship</p>
                    <div className='social'>
                      <a href="https://www.linkedin.com/in/pranab-dan-1a39999?trk=hp-identity-name"><Icon icon="radix-icons:linkedin-logo" color="#37517e" width="15" height="15" /></a>
                      <a href="mailto:pkdan@see.iitkgp.ernet.in"><Icon icon="mingcute:mail-fill" color="#37517e" width="15" height="15" /></a>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className='col-lg-6 mt-4 mt-lg-0'>
                <div className='member d-flex align-items-start' data-aos="zoom-in" data-aos-delay="100">
                  <div className='pic'><img src="assets/img/team/Aditya_Bandopadhyay.jpg" className='img-fluid' alt="" /></div>
                  <div className='member-info'>
                    <h4>Dr. Aditya Bandopadhyay</h4>
                    <span>Mentor</span>
                    <p>Assistant Professor, Mechanical Engineering</p>
                    <div className='social'>
                      <a href="https://www.linkedin.com/in/adityabandopadhyay/"><Icon icon="radix-icons:linkedin-logo" color="#37517e" width="15" height="15" /></a>
                      <a href="mailto:aditya@mech.iitkgp.ac.in"><Icon icon="mingcute:mail-fill" color="#37517e" width="15" height="15" /></a>
                    </div>
                  </div>
                </div>
              </div>
    
    
            </div>
    
          </div>
        </section>{/* !-- End Team Section --> */}
    
        {/*<!-- ======= Pricing Section ======= -->
        <!-- <section id="pricing" className='pricing">
          <div className='container" data-aos="fade-up">
            <div className='section-title">
              <h2>Pricing</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>
            <div className='row">
              <div className='col-lg-4" data-aos="fade-up" data-aos-delay="100">
                <div className='box">
                  <h3>Free Plan</h3>
                  <h4><sup>$</sup>0<span>per month</span></h4>
                  <ul>
                    <li><i className='bx bx-check"></i> Quam adipiscing vitae proin</li>
                    <li><i className='bx bx-check"></i> Nec feugiat nisl pretium</li>
                    <li><i className='bx bx-check"></i> Nulla at volutpat diam uteera</li>
                    <li className='na"><i className='bx bx-x"></i> <span>Pharetra massa massa ultricies</span></li>
                    <li className='na"><i className='bx bx-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                  </ul>
                  <a href="javascript:;" className='buy-btn">Get Started</a>
                </div>
              </div>
              <div className='col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
                <div className='box featured">
                  <h3>Business Plan</h3>
                  <h4><sup>$</sup>29<span>per month</span></h4>
                  <ul>
                    <li><i className='bx bx-check"></i> Quam adipiscing vitae proin</li>
                    <li><i className='bx bx-check"></i> Nec feugiat nisl pretium</li>
                    <li><i className='bx bx-check"></i> Nulla at volutpat diam uteera</li>
                    <li><i className='bx bx-check"></i> Pharetra massa massa ultricies</li>
                    <li><i className='bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                  </ul>
                  <a href="javascript:;" className='buy-btn">Get Started</a>
                </div>
              </div>
              <div className='col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
                <div className='box">
                  <h3>Developer Plan</h3>
                  <h4><sup>$</sup>49<span>per month</span></h4>
                  <ul>
                    <li><i className='bx bx-check"></i> Quam adipiscing vitae proin</li>
                    <li><i className='bx bx-check"></i> Nec feugiat nisl pretium</li>
                    <li><i className='bx bx-check"></i> Nulla at volutpat diam uteera</li>
                    <li><i className='bx bx-check"></i> Pharetra massa massa ultricies</li>
                    <li><i className='bx bx-check"></i> Massa ultricies mi quis hendrerit</li>
                  </ul>
                  <a href="javascript:;" className='buy-btn">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </section> -->
        <!-- End Pricing Section -->
    
            <!-- ======= Frequently Asked Questions Section ======= -->*/}
        <section id="faq" className='faq'>
          <div className='container' data-aos="fade-up">
    
            <div className='section-title'>
              <h2>Frequently Asked Questions</h2>
              {/* <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                quidem hic quas.</p> --> */}
            </div>
    
            <div className='faq-list'>
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className='bx bx-help-circle icon-help'></i> <a data-toggle="collapse" className='collapse' href="#faq-list-1">What is ProDex and why should I join it? <i className='bx bx-chevron-down icon-show'></i><i
                      className='bx bx-chevron-up icon-close'></i></a>
                  <div id="faq-list-1" className='collapse show' data-parent=".faq-list">
                    <p>
                      ProDex is a students’ initiative on product designing and hardware modelling in IIT Kharagpur. We
                      explore real-life problems and design our innovative solutions that would make an impact on society.
                      Here, at Prodex, we strive to
                      model our creativity and shape our imaginations into reality, in order to make this world a better
                      place to live.
    
                    </p>
                  </div>
                </li>
    
                <li data-aos="fade-up" data-aos-delay="200">
                  <i className='bx bx-help-circle icon-help'></i> <a data-toggle="collapse" href="#faq-list-2" className='collapsed'>How can I join ProDex? <i className='bx bx-chevron-down icon-show'></i><i className='bx bx-chevron-up icon-close'></i></a>
                  <div id="faq-list-2" className='collapse' data-parent=".faq-list">
                    <p>
                      If you are a 1st year UG Student at IIT Kharagpur, you can join ProDex through freshers’ selection
                      conducted every year. The selection procedure consists of Group Discussion (GD) and Personal Interview
                      (PI) rounds. For more
                      information regarding the selection procedure and ProDex in general, visit our Facebook page. (Link in
                      footer below).
                    </p>
                  </div>
                </li>
    
                <li data-aos="fade-up" data-aos-delay="300">
                  <i className='bx bx-help-circle icon-help'></i> <a data-toggle="collapse" href="#faq-list-3" className='collapsed'>Are there any prerequisites to join ProDex?<i className='bx bx-chevron-down icon-show'></i><i
                      className='bx bx-chevron-up icon-close'></i></a>
                  <div id="faq-list-3" className='collapse' data-parent=".faq-list">
                    <p>
                      There are no prerequisites to join ProDex, as such. No prior technical skill is required, albeit
                      having one wouldn’t do any harm :P. The evaluation is done based on the person’s aptitude, critical
                      thinking abilities, a basic
                      understanding of science and a desire to solve real-world problems.
                    </p>
                  </div>
                </li>
    
                <li data-aos="fade-up" data-aos-delay="400">
                  <i className='bx bx-help-circle icon-help'></i> <a data-toggle="collapse" href="#faq-list-4" className='collapsed'>What are the skills that I will gain by joining ProDex? <i className='bx bx-chevron-down icon-show'></i><i
                      className='bx bx-chevron-up icon-close'></i></a>
                  <div id="faq-list-4" className='collapse' data-parent=".faq-list">
                    <p>
                      At ProDex, each and every member gets an opportunity to gain practical exposure and hands-on
                      experience of various fields in products designing, ranging from developing the idea to shaping it
                      into a full-fledged
                      product. He/She is introduced to a variety of technical softwares such as Solidworks, Fusion-360,
                      Ansys etc. One will end up having a plethora of skills under his/her belt after spending a good amount
                      of time in ProDex. Apart from
                      the technical skills, the brainstorming sessions organised here help the members improve their
                      communication skills and critical thinking abilities as well, which plays a vital role in one's
                      overall personality development.
                    </p>
                  </div>
                </li>
    
                <li data-aos="fade-up" data-aos-delay="500">
                  <i className='bx bx-help-circle icon-help'></i> <a data-toggle="collapse" href="#faq-list-5" className='collapsed'>When was ProDex established? <i className='bx bx-chevron-down icon-show'></i><i className='bx bx-chevron-up icon-close'></i></a>
                  <div id="faq-list-5" className='collapse' data-parent=".faq-list">
                    <p>
                      ProDex was established in '2012' by a bunch of passionate people who dreamt big, and shared a common
                      interest in designing and building things out of their own ideas.
                    </p>
                  </div>
                </li>
    
              </ul>
            </div>
    
          </div>
        </section> {/* <!-- End Frequently Asked Questions Section -->
    
<!-- ======= Contact Section ======= --> */}
        <section id="contact" className='contact section-bg'>
          <div className='container' data-aos="fade-up">
    
            <div className='section-title'>
              <h2>Contact</h2>
              <p>Want to tell us something? Have some queries? We would love to hear something from your side. <br/>Drop us a
                line... </p>
              {/* <!-- <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi
                quidem hic quas.</p> --> */}
            </div>
    
            <div className='row'>
    
              <div className='col-lg-5 d-flex align-items-stretch'>
                <div className='info'>
                  <div className='address'>
                    <i className='icofont-google-map'></i>
                    <h4>Location:</h4>
                    <p>Indian Institute Of Technology Kharagpur, West-Bengal, 721302</p>
                  </div>
    
                  <div className='email'>
                    <i className='icofont-envelope'></i>
                    <h4>Email:</h4>
                    <p><a href="mailto:prodex.iitkgp@gmail.com" style={{color:'#6887BD'}}>prodex.iitkgp@gmail.com</a></p>
                  </div>
    
                  <div className='phone'>
                  <Icon icon="mdi:linkedin" color="#47b2e4" width="44" height="44"/>
                    <h4>LinkedIn:</h4>
                    <p><a href="https://www.linkedin.com/company/prodex-iit-kharagpur/about/" style={{color:'#6887BD'}}>ProDex
                        IIT Kharagpur</a></p>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14764.096494212994!2d87.3105311!3d22.3149274!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6f2f20dd0c0d6793!2sIndian%20Institute%20of%20Technology%20Kharagpur!5e0!3m2!1sen!2sin!4v1607621118006!5m2!1sen!2sin"
                    frameborder="0" style={{border:'0',width: '100%', height: '290px'}} allowfullscreen></iframe>
                </div>
    
              </div>
    
              <div className='col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch'>
                <form data-netlify="true" method="post" role="form" className='php-email-form'>
                  <div className='form-row'>
                    <div className='form-group col-md-6'>
                      <label for="name">Your Name</label>
                      <input type="text" name="name" className='form-control' data-rule="minlen:4" data-msg="Please enter at least 4 chars" required="true" />
    
                    </div>
                    <div className='form-group col-md-6'>
                      <label for="name">Your Email</label>
                      <input type="email" className='form-control' name="email" data-rule="email" data-msg="Please enter a valid email" required="true" />
    
                    </div>
                  </div>
                  <div className='form-group'>
                    <label for="name">Subject</label>
                    <input type="text" className='form-control' name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" required="true" />
    
                  </div>
                  <div className='form-group'>
                    <label for="name">Message</label>
                    <textarea className='form-control' name="message" rows="10" data-rule="required" data-msg="Please write something for us" required="true"></textarea>
    
                  </div>
                  <div className='text-center'><button type="submit">Send Message</button></div>
                </form>
              </div>
    
            </div>
    
          </div>
        </section>{/* <!-- End Contact Section --> */}
      </main>
    }
  }


export default Home;