import React from "react";
import { NavLink} from "react-router-dom";
import { Icon } from '@iconify/react';


class Footer extends React.Component {
    render() {
        return   <footer id="footer">
             {/*<!-- <div className="footer-newsletter">
             <div className="container">
             <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4>Join Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email"><input type="submit" value="Subscribe">
                </form>
              </div>
            </div>
              </div>
              < /div> -->*/}
            <div className='footer-top'>
                <div class="container">
                     <div class="row"> 
                     <div class="col-lg-3 col-md-6 footer-contact">
                            <h3><span style={{color: '#31A9E1'}}>P</span>ro<span style={{color: '#31A9E1'}}>D</span>ex</h3>
                                <p>
                                Indian Institute Of Technology Kharagpur <br/>
                                West-Bengal, 721302<br/>
                                India <br/><br/>
                                <strong>LinkedIn: @</strong>ProDex IIT Kharagpur<br/>
                                <strong>Email:</strong> prodex.iitkgp@gmail.com<br/>
                               </p>             
                        </div>
    
           <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><Icon icon="ic:baseline-chevron-right" className="icon" /><NavLink to="/">Home</NavLink></li>
                   <li><Icon icon="ic:baseline-chevron-right" className="icon" /><NavLink to="#about">About us</NavLink></li>
                  <li><Icon icon="ic:baseline-chevron-right" className="icon" /><NavLink to="#services">What We Do</NavLink></li>
                  <li><Icon icon="ic:baseline-chevron-right" className="icon" /><NavLink to="#portfolio">Portfolio</NavLink></li>
                 <li><Icon icon="ic:baseline-chevron-right" className="icon" /><NavLink to="#contact">Contact Us</NavLink></li>
                </ul>
              </div>
    
           <div class="col-lg-3 col-md-6 footer-links">  
                <h4>Areas Of Work</h4>
                <ul>
                  <li><Icon icon="bx:medal" className="icon" /> Hardware Modelling</li>
                  <li><Icon icon="bx:medal" className="icon" /> Product Management</li>
                  <li><Icon icon="bx:medal" className="icon" /> Design and Media</li>
                  <li><Icon icon="bx:medal" className="icon" /> Web/App Development</li>
                  {/*<!-- <li><i className="bx bx-chevron-right"></i> <NavLink to="javascript:;">Graphic Design</a></li> -->*/}
                </ul>
              </div>
    
              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <p>Get in touch with us!</p>
                <div className="social-links mt-3">
                  {/*<!-- <NavLink to="javascript:;" className="twitter"><i className="bx bxl-twitter"></i></a> -->*/}
                  <a href="https://www.facebook.com/prodex.iitkgp" className='facebook'><Icon icon="ri:facebook-fill" color="white" /></a>
                  {/* <!-- <NavLink to="javascript:;" className="instagram"><i className="bx bxl-instagram"></i></a> --> */}
                  {/* <!-- <NavLink to="javascript:;" className="google-plus"><i className="bx bxl-skype"></i></a> --> */}
                  <a href="https://www.linkedin.com/company/prodex-iit-kharagpur/about/" className='linkedin'><Icon icon="ci:linkedin" color="white" /></a>
                  {/* <!-- <NavLink to="https://github.com/ProDex-IIT-Kharagpur" className="github"><i className="bx bxl-github"></i></a> --> */}
                  <a href="https://www.youtube.com/channel/UCMaLD7pBmxgstEuirySdoDQ" className='youtube'><Icon icon="ph:youtube-logo-fill" color="white" /></a>
                </div>
              </div>
  
          </div>
          </div>
        </div>
    
        <div className="container footer-bottom clearfix">
          <div className="copyright">
            &copy; Copyright <strong><span>ProDex</span></strong> All Rights Reserved
          </div>
          <div className="credits">
    
            Designed with ❤ by <NavLink to="javascript:;">ProDex IIT-Kharagpur</NavLink>
          </div>
        </div>
 </footer>

        
    }
}

export default Footer;