import React from "react";
import { Icon } from '@iconify/react';
function About(){
    return(
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
      </section>
    )
}

export default About;