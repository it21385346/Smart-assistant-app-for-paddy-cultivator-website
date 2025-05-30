import React, {useState} from 'react'
import { SiFoodpanda } from "react-icons/si";
import b1 from '../../images/main.jpg'
import b4 from '../../images/b4.jpg'
import b5 from '../../images/b5.jpg'
import b6 from '../../images/b6.jpg'
import b3 from '../../images/b3.jpg'
import b7 from '../../images/b7.jpg'
import s1 from '../../images/s1.png'
import s2 from '../../images/s2.png'
import s3 from '../../images/s3.png'
function home() {

    return (


	<div >
 <div class="w3l-index1">
  <div class="content">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 content-left">
          <h3>Smart assistant app
for paddy cultivators

          </h3>
          <p class="mt-3 mb-lg-5 mb-4">24-25J-071<p>02 December, 2024 </p>
</p>
          <a href="https://drive.google.com/file/d/1NQEX2HkyGtBnABFZFMXLXJKruDyTm3KZ/view?usp=sharing" class="btn btn-outline-primary theme-button">Get Started</a>
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
<section class="w3l-index2 py-5">
  <div class="container py-md-3">
    <div class="header-section text-center mx-auto">
      <h6 class="sub-title">Why Choose Us</h6>
      <h3>OBJECTIVE </h3>
      <p class="my-3">Our innovative Paddy Cultivators mobile application is designed to assist
farmers by providing essential tools for monitoring and managing their crops.
Tailored to help farmers optimize yield and quality, this application covers four
critical components</p>
    </div>
    <div class="row bottom_grids text-center">
      <div class="col-lg-4 col-md-6 mt-5">
        <div class="s-block">
          <a href="services.html" class="d-block">
            <img src={s1} alt="" class="img-fluid" />
            <h3 class="my-3">Background</h3>
            <p class="">. Smart farming applications 
that leverage ML and image processing can assist in early disease diagnosis, price 
forecasting, and quality assessment right at the farm level</p>
          </a>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-5">
        <div class="s-block">
          <a href="services.html" class="d-block">
            <img src={s2} alt="" class="img-fluid" />
            <h3 class="my-3">Methodology</h3>
            <p class="">Disease Images Dataset: We assembled a dataset of rice leaf images covering the 
targeted diseases – Bacterial Leaf Blight, Rice Blast, and Sheath Blight – as well as 
healthy leaves for comparison. Price Data and Factors: For the price prediction module, historical paddy market 
price data was collected.  Grain Image Samples: To develop the rice quality assessment module, we 
prepared a set of rice grain sample images </p>
          </a>
        </div>
      </div>
      <div class="col-lg-4 mt-5">
        <div class="s-block">
          <a href="services.html" class="d-block">
            <img src={s3} alt="" class="img-fluid" />
            <h3 class="my-3">Machine Learning Model Development</h3>
            <p class="">Our project leverages machine learning to automate and enhance various functionalities within the Paddy Cultivators mobile application. The development process involved the following stages .</p>
          </a>
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
        <h6 class="sub-title">components</h6>
        <h3>What We Do! </h3>
        <p class="my-3">We developed a comprehensive mobile application designed to support paddy farmers in improving their crop management and maximizing profitability. The application integrates four key modules.</p>
      </div>
        <div class="scrollbar -services-scroll">
            <div class="row abt-btm pt-4">
                <div class="col-lg-3 col-sm-6 bottom-gds">
                    <div class="elite-services1">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span aria-hidden="true"><SiFoodpanda /></span>
                            </div>
                            <h4 class="mission">Blast Disease Monitoring</h4>
                            <div class="description">
                                <p>Developed tools to detect early signs of blast disease through data inputs or image analysis</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 bottom-gds mt-sm-0 mt-5">
                    <div class="elite-services2">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span  aria-hidden="true"><SiFoodpanda /></span>
                            </div>
                            <h4 class="mission">Blight Disease Identification</h4>
                            <div class="description">
                                <p>Implemented image-based detection using machine learning or computer vision techniques.</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 bottom-gds mt-lg-0 mt-5">
                    <div class="elite-services3">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span  aria-hidden="true"><SiFoodpanda /></span>
                            </div>
                            <h4 class="mission">Rice Quality Analysis</h4>
                            <div class="description">
                                <p>Automated evaluation of rice grains based on visual or physical parameters.</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 bottom-gds mt-lg-0 mt-5">
                    <div class="elite-services4">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span  aria-hidden="true"><SiFoodpanda /></span>
                            </div>
                            <h4 class="mission">Price Prediction for Cultivators</h4>
                            <div class="description">
                                <p>Designed a price forecasting model using historical data and possibly machine learning.</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
   
  </div>
    </div>
  </div>
</section>
<section class="w3l-products py-5 mb-4" id="projects">
  <div class="container py-lg-3">
    <div class="header-section text-center mx-auto">
      <h6 class="sub-title">Featured Cases</h6>
      <h3>Completed Projects </h3>
      <p class="my-3"> Our innovative Paddy Cultivators mobile application is designed to assist 
farmers by providing essential tools for monitoring and managing their crops. 
Tailored to help farmers optimize yield and quality, this application covers four 
critical components:
Blight Disease Identification: Early identification of blight diseases 
       (Bacterial Blight or Sheath Blight) and severity analysis to mitigate crop loss.
Blast Disease Monitoring: Detection and management of blast disease in paddy fields to 
        reduce its impact on crop yield.
Rice Quality Analysis: Automated assessment of rice quality based on key parameters to 
        ensure market readiness and competitiveness.
Price Prediction for Cultivators: Price forecasting for paddy crops, enabling farmers to 
        make informed decisions about when to sell their produce for maximum profit.</p>
    </div>
   
  </div>
</section>

</div>

    )
}

export default home
