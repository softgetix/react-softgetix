import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Projects() {

  const options = {
    loop:true,
    items: 2,
    margin: 30,
    responsiveClass: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
    },
    nav: false,
    autoplay: true,
    smartSpeed: 500,
  };


  return (
      <>
        <section className="testimonial_slider_block">
          <div className="container">
              <h1 className="font-weight-bold">Our success stories</h1>
              <div className="row">
                <div className="col-md-12 card mt-2">
                    <div className="carousel-wrapper">
                    <OwlCarousel className="slider-items owl-carousel screen-carasoul" {...options} >
                    <div className="post-slide">
                          <div className="">
                            <div className="post-content carousel-bg-orange">
                                <div className="row">
                                  <div className="col-sm-12 col-12">
                                    <img className="card-img-top" src="images/fence.jpg" alt="Card image cap" />
                                      <h4 className="card-title">Fence Construction ERP</h4>
                                      <p className="card-text">FenceForce is all-in-one fence construction management software application that helps firms increase their project efficiency and accountability by providing streamlined project communication and documentation. Users are able to manage their projects from any web-connected mobile device, tablet, laptop, or desktop.</p>
                                    </div>
                                </div>
                            </div>
                          </div>
                      </div>
                      <div className="post-slide">
                          <div className="">
                            <div className="post-content carousel-bg-green">
                                <div className="row">
                                  <div className="col-sm-12 col-12">
                                      <img className="card-img-top" src="images/tracker-core.jpg"  alt="Card image cap"/>
                                      <h4 className="card-title">Business Automation Software</h4>
                                      <p className="card-text">Tracker Core offers advanced level project management features with a simple-to-use interface that requires no training for teams and no expensive consultant onboarding costs. Tracker Core is used by IT, marketing, manufacturing and professional services teams across industries to collaborate on projects across the organization.</p>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                      <div className="post-slide">
                          <div className="">
                            <div className="post-content carousel-bg-blue">
                                <div className="row">
                                  <div className="col-sm-12 col-12">
                                      <img className="card-img-top" src="images/fence-erp.jpg"
                                        alt="Card image cap"/>
                                      <h4 className="card-title">Real Estate CRM</h4>
                                      <p className="card-text">This is a cloud-based global real estate platform suitable for real estate brokerages, enterprises and teams of all sizes. This allows users to manage leads and contacts via lead routing, drip campaigns and other automated processes. It integrates with multiple applications like Dropbox, Quickbook and DocuSign.</p>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                      <div className="post-slide">
                          <div className="">
                            <div className="post-content carousel-bg-red">
                                <div className="row">
                                  <div className="col-sm-12 col-12">
                                      <img className="card-img-top" src="images/dashboard.jpg"
                                        alt="Card image cap"/>
                                      <h4 className="card-title">Real Estate Project Management</h4>
                                      <p className="card-text">This is a construction project management software used by residential construction professionals such as homebuilders, custom builders, specialty contractors, and remodelers. It offers construction companies a cloud-based solution to empower them in taking more projects, minimizing costly errors, and accelerating project completion to boost customer satisfaction.</p>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                      <div className="post-slide">
                          <div className="">
                            <div className="post-content carousel-bg-green">
                                <div className="row">
                                  <div className="col-sm-12 col-12">
                                      <img className="card-img-top" src="images/document-management.jpg"
                                        alt="Card image cap"/>
                                      <h4 className="card-title">Document Management Software</h4>
                                      <p className="card-text">It is designed to help businesses manage, organize, and track in documents and information. This host of features bound to benefit any organization such as mobile optimization, version control, e-signature support, document templates, offline access, permission control and automated workflows.</p>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                      <div className="post-slide">
                          <div className="">
                            <div className="post-content carousel-bg-green">
                                <div className="row">
                                  <div className="col-sm-12 col-12">
                                    <img className="card-img-top" src="images/crypto-exchange.jpg"
                                        alt="Card image cap"/>
                                      <h4 className="card-title">Crypto Exchange</h4>
                                      <p className="card-text">This is a crypto exchange indicator that works on any market, assets, and timeframes simultaneously, offering multi-resolution trend analysis, entry/exit points alert, possible direction change warnings, 20 indicator consensus confirmations, price prediction clouds and more with extensive fine-tuning options.</p>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                  </OwlCarousel>
                    </div>
                </div>
              </div>
          </div>
        </section>
      </>
  )
}

export default Projects
