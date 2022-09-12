import React from 'react'

function Nav() {
  return (
    <>
      <section className="navigation">
      <div className="">
         <div className="">
            <div className="row">
               <nav id="navbar_top" className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-softgetix">
                  <div className="row">
                  <div className="col-md-3 logo">
                     <a className="navbar-brand" href="/"><img src="logo/softgetix_logo_new.png"/></a>
                  </div>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown active">
                           <a className="nav-link dropdown-toggle">
                           STAFFING <i className="fa fa-angle-down"></i>
                           </a>
                           <ul className="dropdown-menu ">
                              <a className="dropdown-item" href="#">Action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="/staffing">Browse all Staffing</a>
                           </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle">
                           SERVICES <i className="fa fa-angle-down"></i>
                           </a>
                           <ul className="dropdown-menu ">
                              <a className="dropdown-item" href="/product_engineering">Product Engineering</a>
                              <a className="dropdown-item" href="/startup_software">Startup Softwares </a>
                              <a className="dropdown-item" href="/digital_transformation">Digital Transformation</a>
                              <a className="dropdown-item" href="/enterprise_services">Enterprise Services</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="/services">Browse all Services</a>
                           </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle">
                           PRODUCTS <i className="fa fa-angle-down"></i>
                           </a>
                           <ul className="dropdown-menu ">
                              <a className="dropdown-item" href="#">FenceERP</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Browse all Products</a>
                           </ul>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link" href="/about">ABOUT US</a>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link" href="/career">CAREERS</a>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link" href="/blog">BLOG</a>
                        </li>
                     </ul>
                     <form className="form-inline my-2 my-lg-0">
                        <a href="/contact" className="btn contact_us_btn my-2 my-sm-0" type="submit">Contact Us</a>
                     </form>
                  </div>
                  </div>
                </div>
               </nav>
            </div>
         </div>
      </div>
</section>
    </>
  )
}

export default Nav
