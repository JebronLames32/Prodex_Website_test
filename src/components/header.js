import React from "react";
import brand from "./../assets/img/brand.png";
import { Link} from "react-router-dom";
import {Portfolio} from "./portfolio";
import { Icon } from '@iconify/react';
class Header extends React.Component{
    render(){
        return <header id="header" className="fixed-top header-scrolled">
        <div className="container d-flex align-items-center">
      {/*     <!--
          <h1 className="logo mr-auto"><Link to="index.html"> Prodex </a></h1> -->
          <!-- Uncomment below if you prefer to use an image logo --> */}
          <Link to="index.html" className="logo mr-auto"><img src={brand} alt="" className="img-fluid"/></Link>
    
          <nav className="nav-menu d-none d-lg-block">
            <ul>
              <li className="active"><Link to="/">Home</Link></li>
              <li><Link to="#about">About</Link></li>
              <li><Link to="#services">Services</Link></li>
              {/* <!-- <li><Link to="blog.html">Blogs</a></li> --> */}
              <li className="drop-down"><Link to="/portfolio">Portfolio<Icon icon="mdi:chevron-down" classNameName="icon" width="18" height="24" /></Link>
                <ul>
                  
                {/*   <!-- <li className="drop-down"><Link to="javascript:;">Deep Drop Down</a>
                    <ul>
                      <li><Link to="javascript:;">Deep Drop Down 1</a></li>
                      <li><Link to="javascript:;">Deep Drop Down 2</a></li>
                      <li><Link to="javascript:;">Deep Drop Down 3</a></li>
                      <li><Link to="javascript:;">Deep Drop Down 4</a></li>
                      <li><Link to="javascript:;">Deep Drop Down 5</a></li>
                    </ul>
                  </li> --> */}
                  <li><Link to="/openiit18">Open IIT 2018</Link></li>
                  <li><Link to="/openiit20">Open IIT 2020</Link></li>
                  <li><Link to="/openiit21">Open IIT 2021</Link></li>
                  <li><Link to="/openiit22">Open IIT 2022</Link></li>
                  <li><Link to="/cgiu">CGI U 2018</Link></li>
                  <li><Link to="/siemens">Siemens Hackathon 2019</Link></li>
                  <li><Link to="/prakriti">Prakriti Prod-D 2018</Link></li>
                  <li><Link to="/rth">Rural Tech. Hackathon 2018</Link></li>
                  <li><Link to="/ges">GES Product Design 2018</Link></li>
                  <li><Link to="/masterpiece">Masterpiece Dubai 2017</Link></li>
                  <li><Link to="/r3">R3 IIT Bombay 2017</Link></li>
                  <li><Link to="/Inn">Innovation Factory IIT Bombay 2022</Link></li>
                  <li><Link to="/empower">EMPOWER 2022, IIT Madras</Link></li>
                  <li><Link to="/novus">NOVUS X.0 Producathon 2021</Link></li>
                </ul>
              </li>
              <li><Link to="#team">Team</Link></li>
    
              <li><Link to="#contact">Contact</Link></li>
    
            </ul>
          </nav>{/* <!-- .nav-menu -->
    
  <!-- <Link to="#cta" className="get-started-btn scrollto">Login</a> --> */}
    
        </div>
      </header>
    }
} 

export default Header;