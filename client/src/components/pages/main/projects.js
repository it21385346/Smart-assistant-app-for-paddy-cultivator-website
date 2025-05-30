import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import b9 from '../../images/g1.jpeg'
import logo1 from '../../images/logo1.jpg'
import logo2 from '../../images/logo2.jpg'
import logo3 from '../../images/logo3.jpg'
import logo4 from '../../images/logo4.jpg'
import b5 from '../../images/f2.jpeg'
import team1 from '../../images/team1.jpg'
import team2 from '../../images/team2.jpg'
import team3 from '../../images/team3.jpg'
import team4 from '../../images/team4.jpg'
import team5 from '../../images/team5.jpg'
import team6 from '../../images/team6.jpg'
import team7 from '../../images/team7.jpg'
import team8 from '../../images/team8.jpg'
function Projects() {

    return (





	<div >
 <nav id="breadcrumbs" class="breadcrumbs">
  <div class="container page-wrapper">
    <a href="index.html">Home</a> » <span class="breadcrumb_last" aria-current="page">Rice Quality Analysis</span>
  </div>
</nav>

<section class="w3l-about1" id="about">
  <div id="content-with-photo4-block" class="pt-5">
    <div class="container py-md-3">
      <div class="header-section mb-5 text-center">
        <h2>Rice Quality Analysis</h2>
      </div>
      <div class="cwp4-two row">

        <div class="cwp4-text col-lg-6">
          <h3>🌾 Introduction to Rice Quality in Paddy</h3>
          <p>my project on Automated Rice Quality Detection Using Image Processing and Deep Learning. This project aims to replace manual inspection with an AI-driven system that is faster, more accurate, and scalable."
</p>
<a href="https://drive.google.com/file/d/1yQyCoD12W51ishwewDQT-AQh_zHLIgtY/view?usp=drive_link">
    <button>Research Thieses</button>
  </a>
   
          <ul class="cont-4">
            <li><span class="fa fa-check"></span>Key goals of your research</li>
            <li><span class="fa fa-check"></span>Identify causal agents </li>
            <li><span class="fa fa-check"></span>Analyze infection mechanisms</li>
            <li><span class="fa fa-check"></span>Assess resistant strains, etc </li>
          </ul>
        </div>
        <div class="cwp4-image col-lg-6 pl-lg-5 mt-lg-0 mt-5">
          <img src={b5} class="img-curve img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
<section class="w3l-about2">
  <div class="features py-5">
    <div class="container py-lg-3">

      <div class="fea-gd-vv row ">
        <div class="float-lt feature-gd col-lg-4 col-sm-6">

          <div class="icon-info">
            <h5>Background</h5>
            <p>my project on Automated Rice Quality Detection Using Image Processing and Deep Learning. This project aims to replace manual inspection with an AI-driven system that is faster, more accurate, and scalable."

            </p>

          </div>

        </div>
        <div class="float-mid feature-gd col-lg-4 col-sm-6 mt-sm-0 mt-4">

          <div class="icon-info">
            <h5>Research Problems for Rice Blight Detection </h5>
            <p>  Human error and subjectivity in grading can lead to inconsistent results, where different inspectors may classify the same batch of rice differently.
</p>
          </div>
        </div>
        <div class="float-rt feature-gd col-lg-4 col-sm-6 mt-lg-0 mt-sm-5 mt-4">

          <div class="icon-info">
            <h5>Objective</h5>
            <p>Create a model to identify and classify rice grains based on quality and defects using image processing.  </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

<div class="w3l-services py-5">
    <div class="container principles-grids principles-grids1 py-lg-3">
      <div class="header-section mb-5 text-center mx-auto">
        <h6 class="sub-title">Features</h6>
        <h3>Processing ! </h3>
        <p class="my-3"> Improve quality control and profitability by ensuring better-grade rice.</p>
      </div>
        <div class="scrollbar -services-scroll">
            <div class="row abt-btm pt-4">
                <div class="col-lg-3 col-sm-6 bottom-gds">
                    <div class="elite-services1">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span class="fa fa-usd service-icon" aria-hidden="true"></span>
                            </div>
                            <h4 class="mission">Model Selection & Training</h4>
                            <div class="description">
                                <p> Enhance efficiency, reduce labor costs, and ensure consistent product quality.
</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 bottom-gds mt-sm-0 mt-5">
                    <div class="elite-services2">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span class="fa fa-user-circle-o service-icon" aria-hidden="true"></span>
                            </div>
                            <h4 class="mission">Model Evaluation</h4>
                            <div class="description">
                                <p> For running code in a cloud environment with GPU support</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 bottom-gds mt-lg-0 mt-5">
                    <div class="elite-services3">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span class="fa fa-hand-peace-o service-icon" aria-hidden="true"></span>
                            </div>
                            <h4 class="mission">Methodology</h4>
                            <div class="description">
                                <p>
TensorFlow / Keras: For building and training deep learning models.
scikit-learn: For data preprocessing, splitting, and evaluation.
Pillow (PIL): For basic image manipulation.
OpenCV: For additional computer vision tasks (optional).
Matplotlib : For visualization of images and model performance.
NumPy : For array operations and numerical tasks.</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6 bottom-gds mt-lg-0 mt-5">
                    <div class="elite-services4">
                        <div class="bott-img">
                            <div class="icon-holder editContent">
                                <span class="fa fa-laptop service-icon" aria-hidden="true"></span>
                            </div>
                            <h4 class="mission">Data Loading and Any Processing</h4>
                            <div class="description">
                                <p>Input Data
Example: Raw rice images (e.g., images of rice grains)Preprocessing
Example: Resizing to (128, 128), normalizing pixel values</p>
                                <a href="services.html" class="editContent">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<section class="w3l-about4" id="about">
  <div class="new-block py-5">
    <div class="container py-lg-5">
      <div class="middle-section text-center">
        <div class="header-section text-center mx-auto">
          <h6 class="sub-title">Creative Solutions</h6>
          <h3> Problem Definition</h3>
          <p class="my-3">  Gain access to high-quality, standardized rice, reducing waste and increasing trust.</p>
        </div>
        <div class="history-info mt-5">
          <div class="position-relative">
            <img src={b9} class="img-fluid img-curve video-popup-image" alt="video-popup" />
            {/* <!-- <a href="#popup-video" class="play-view text-center position-absolute">
						<span class="video-play-icon">
							<span class="fa fa-play"></span>
						</span>
					</a> --> */}

            <a href="#small-dialog" class="popup-with-zoom-anim play-view text-center position-absolute">
              <span class="video-play-icon">
                <span class="fa fa-play"></span>
              </span>
            </a>

       
            <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
              <iframe src="https://www.youtube.com/embed/a5KYlHNKQB8" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div class="mt-5 request-quote">
          
          <button type="button" class="btn btn-primary theme-button" data-toggle="modal" data-target="#exampleModalCenter">
            Request a quote
          </button>

          <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header px-4">
                  <h5 class="modal-title request-demo-title" id="exampleModalCenterTitle">Get Free Quote</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body demo-request p-4">
                  <form action="/" method="GET">
                    <div class="form-group">
                      {/* <!-- <label for="NameInput">Name:</label> --> */}
                      <input type="text" class="form-control" name="name" placeholder="Name" required />
                    </div>
                    <div class="form-group">
                      {/* <!-- <label for="exampleInputEmail1">Email address:</label> --> */}
                      <input type="email" class="form-control" name="emailid" placeholder="Email" required />
                    </div>
                    <div class="form-group">
                      {/* <!-- <label for="CompanyInput">Company:</label> --> */}
                      <input type="text" class="form-control" name="company" placeholder="Company" required/>
                    </div>
                    <div class="form-group">
                      {/* <!-- <label for="CompanyInput">Designation:</label> --> */}
                      <input type="text" class="form-control" name="subject" placeholder="Subject" required />
                    </div>
                    <div class="text-right">
                      <button type="submit" class="btn btn-primary theme-button" data-toggle="modal" data-target="#exampleModal">Submit Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</section>



</div>

    )
}

export default Projects
