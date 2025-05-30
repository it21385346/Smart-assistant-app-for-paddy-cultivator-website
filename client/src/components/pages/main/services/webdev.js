import React, {useState} from 'react'
import { SiFoodpanda } from "react-icons/si";
import b1 from '../../../images/9.png'
import b4 from '../../../images/6.jpg'
import { FaLocationArrow } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";
import { IoMailOpen } from "react-icons/io5";

function website() {

    return (


	<div >
 <div class="w3l-index1">
  <div class="content">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 content-left">
          <h3>Full Stack Web Devlopment 
          </h3>
          <p class="mt-3 mb-lg-5 mb-4">Building a beautiful interactive Websites and mobile app for startups and innovative companies.</p>
          <a href="about.html" class="btn btn-outline-primary theme-button">Get Started</a>
        </div>
        <div class="col-lg-6 content-photo mt-lg-0 mt-5">
          <img src={b1} class="img-fluid" alt="main image" />
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</div>
{/* <!-- //index-block1 -->
<!-- index-block2 --> */}

<section class="about" id="about">
            <div class="container">
                <div class="heading text-center">
                    <h2>About
                        <span>Us</span></h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        <br></br>
                        incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <img src={b4} alt="about" class="img-fluid e" width="100%" />
                    </div>
                    <div class="col-lg-6">
                        <h3>Lorem ipsum dolor sit amet, consectetur </h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>Awesome Design</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>
                                    Creative Design</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>Better Client Service</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>
                                    Digital Marketing & Branding</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>Creative Design</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>
                                    Speed And Flexibility</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

<section class="w3l-testimonials" id="testimonials">
  <div class="testimonials py-5">
    <div class="container py-lg-3">
   
      <div class="container principles-grids principles-grids1 py-lg-3">
      <div class="header-section mb-5 text-center mx-auto">
        <h6 class="sub-title">Our Projects</h6>
        <h3>What We Do! </h3>
        <p class="my-3"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Nulla mollis dapibus nunc, ut rhoncus
          turpis sodales quis. Integer sit amet mattis quam.</p>
      </div>
        <div class="scrollbar -services-scroll">
        <div class="container1">

<div>
    <img class="img" src="https://images.unsplash.com/photo-1558981033-0f0309284409?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="bike"/>
</div>

<div>
    <img class="img"src="https://images.unsplash.com/photo-1580820726687-30e7ba70d976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="rose"/>
</div>

<div>
    <img class="img"src="https://images.unsplash.com/photo-1580769154185-abdda4691da5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="camera"/>
</div>

<div>
    <img class="img"src="https://images.unsplash.com/photo-1580732055671-e64dde2eb75b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="road"/>
</div>


</div>
        </div>
    
   
  </div>
    </div>
  </div>
</section>



<section class="w3l-index6 py-5">
  <div class="container py-md-3 text-center">
    <div class="header-section text-center mx-auto">
      <h3>Ready to build your own brand community? </h3>
      <div class="contact-info">
  <div class="card1">
    <i class="icon"><FaLocationArrow /></i>
    <div class="card-content">
      <h3>Email</h3>
      <span>email@address.com</span>
    </div>
  </div>

  <div class="card1">
    <i class="icon "><FaPhone /></i>
    <div class="card-content">
      <h3>Phone </h3>
      <span>0761083682</span>
    </div>
  </div>

  <div class="card1">
    <i class="icon"><IoMailOpen /></i>
    <div class="card-content">
      <h3>Location</h3>
      <span>United States</span>
    </div>
  </div>
</div>
    </div>
    <div class="buttons mt-5">
     
      <Link to="/contact" class="btn btn-primary theme-button ml-2">Get Started</Link>
    </div>
  </div>
</section>
</div>

    )
}

export default website
