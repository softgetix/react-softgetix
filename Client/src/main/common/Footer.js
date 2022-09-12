import React from 'react'

function Footer() {
  return (
    <>
      <section className="footer">
        <div className="pb-5">
          <div className="container">
            <div className="row">
                <div className="col-lg-12 col-xs-12 about-company">
                    <a href="/"><img src="logo/softgetix_logo_new.png" width="200px"/></a>
                </div>	
                <div className="col-lg-4 col-xs-12 location">
                <div className="country-title">
                  <h4 className="mt-lg-0 mt-sm-3 font-weight-bold"><img className="align-text-bottom mr-3" src="icons/india.png" width="35px" alt="flag in"/>India</h4>
                </div>
                <ul className="contact-ul m-0 address">
                  <li>
                    <div className="row">
                      <div>
                        SoftGetix Inc. <br/>
                        519, Shagun Tower, AB Road,<br/>
                        Above Apna Sweets, <br/>
                        Vijay Nagar Square,<br/>
                        Indore, MP. 452010
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="mt-1">
                        <a href="tel:+91-731-4002699">+91-731-4002699</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="mt-1">
                        <a href="mailto:hello@softgetix.com">hello@softgetix.com</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>	
                <div className="col-lg-4 col-xs-12 links">
                    <h4 className="mt-lg-0 mt-sm-3 font-weight-bold">Company</h4>
                    <ul className="m-0 p-0 address">
                      <li>- <a href="/staffing">Staffing</a></li>
                      <li>- <a href="/services">Services</a></li>
                      <li>- <a href="#">Products</a></li>
                      <li>- <a href="#">Technology Blog</a></li>
                      <li>- <a href="#">Careers</a></li>
                      <li>- <a href="/contact">Contact Us</a></li>
                      <li>- <a href="#">Confidentiality Policy</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-xs-12 copyright">
                    <h4 className="mt-lg-0 mt-sm-4 font-weight-bold">Find us on:</h4>
                    <a href="#"><i className="fa fa-facebook ml-4"></i></a>
                    <a href="#"><i className="fa fa-linkedin ml-2"></i></a>
                    <a href="#"><i className="fa fa-twitter ml-2"></i></a>
                    <a href="#"><i className="fa fa-instagram ml-2"></i></a>
                    <p className="mt-3 ml-4">© 2022 All Rights Reserved SoftGetix Inc.</p>
                </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer
