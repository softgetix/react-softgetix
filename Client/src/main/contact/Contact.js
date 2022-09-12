import React from 'react';
import Template from '../common/Template';

function Contact() {
  return (
    <>
      <Template>
      <section className="ftco-section">
            <div className="container">
              <div class="row justify-content-center">
                <div class="col-md-10 text-center mb-3">
                      <h2 class="heading-section">Please submit your information and we will get back to you.</h2>
                </div>
              </div>
                <div className="row justify-content-center">
                  <div className="col-md-12">
                      <div className="wrapper">
                        <div className="row mb-3">
                            <div className="col-md-3">
                              <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-map-marker"></span>
                                  </div>
                                  <div className="text">
                                    <p><span>Address:</span> 519, Shagun Tower, AB Road, Vijay Nagar Square, Indore</p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-phone"></span>
                                  </div>
                                  <div className="text">
                                    <p><span>Phone:</span> <a href="tel://1234567920">+91-731-4002699</a></p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-envelope"></span>
                                  </div>
                                  <div className="text">
                                    <p><span>Email:</span> <a href="mailto:info@yoursite.com">hello@softgetix.com</a></p>
                                  </div>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="dbox w-100 text-center">
                                  <div className="icon d-flex align-items-center justify-content-center">
                                    <span className="fa fa-globe"></span>
                                  </div>
                                  <div className="text">
                                    <p><span>Website</span> <a href="#">softgetix.com</a></p>
                                  </div>
                              </div>
                            </div>
                        </div>

                        <div className="row no-gutters">
                            <div className="col-md-7">
                              <div className="contact-wrap w-100  p-4">
                              
                              <form method="POST" id="contactForm" name="contactForm" className="contactForm" novalidate="novalidate" >
                                  <div className="row">
                                      <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="label" for="name">Full Name</label>
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
                                        </div>
                                      </div>
                                      <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="label" for="email">Email Address</label>
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email"/>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" for="organization">Organization</label>
                                            <input type="text" className="form-control" name="organization" id="organization" placeholder="Organization"/>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-group radio-block">
                                            <label className="label" for="#">Interested in?*</label>
                                            <ul className="radio-flex">
                                                <li>
                                                  <input type="radio" id="staffing" name="service_interest__c" value="Staffing Services" required=""/>
                                                  <label className="wpforms-field-label-inline ml-2" for="staffing">Staffing Services</label>
                                                </li>
                                                <li>
                                                  <input type="radio" id="design" name="service_interest__c" value="Design Development Services"/>
                                                  <label className="wpforms-field-label-inline ml-2" for="design">Design &amp; Development Services</label>
                                                </li>
                                                <li>
                                                  <input type="radio" id="other" name="service_interest__c" value="Other Services"/>
                                                  <label className="wpforms-field-label-inline ml-2" for="other">Other Services</label>
                                                </li>
                                            </ul>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-group">
                                            <label className="label" for="#">Message (optional)</label>
                                            <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message"></textarea>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-group">
                                            <a href="">
                                              <input type="submit" value="Let's connect with us" className="btn free_consult_btn"/>
                                            </a>
                                        </div>
                                        
                                        </div>
                                        <div className="col-md-12">
                                              <p>We respect your privacy and will not use your email address for any other communication</p>
                                        </div>
                                      </div>
                                </form>


                              </div>
                            </div>
                            <div className="col-md-5 d-flex align-items-stretch">
                              <div className="info-wrap w-100 p-5 img infowrap-contactimg" >

                              </div>
                            </div>
                          </div>
                       
                      </div>
                  </div>
                </div>
              </div>
          </section>
      </Template>
    </>
  )
}

export default Contact
