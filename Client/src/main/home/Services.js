import React from 'react'

function Services() {
  return (
    <>
      <section className="index-services">
		   <div className="container mt-5">
	   		 	<div className="col-md-12">
	      	 		<h1 className="font-weight-bold">What we can do for you</h1>
	      	 	</div>
			   	<div className="col-md-12 mt-4">
			      	<div className="row services_container">
				        <div className="col-sm-6 col-lg-3 col-xs-6 ">
				        	<div className="service">
				            <div className="service_icon text-center">
				               <img className="mt-3" src="icons/Product_engineering.png"/>
				            </div>
				            <div className="service_heading mt-3 text-center">
				               <h4>Product Engineering</h4>
				            </div>
				            <p className="service_title">Boost Customer Experience with Smarter Software Products</p>
				            <p className="service_details">Building innovative products is no longer a matter of traditional software development. The outcomes must be tied together with customer goals and future business expansion... </p>
				            <a className="read_more_btn" href="/product_engineering">Read More <i className="fa fa-angle-double-right"></i></a>
				            </div>
				        </div>
				        <div className="col-sm-6 col-lg-3 col-xs-6 ">
                  <div className="service">
                    <div className="service_icon text-center">
                       <img className="mt-3" src="icons/Enterprise_services .png"/>
                    </div>
                    <div className="service_heading mt-3 text-center">
                       <h4>Startup <br/> Softwares</h4>
                    </div>
                    <p className="service_title">Building Smart Products for Startups</p>
                    <p className="service_details">We love startups for the passion they have exhibited in wanting to change the world. Their perseverance in achieving this noble outcome is truly praiseworthy. Our Startup IT services aim at helping early...</p>
                    <a className="read_more_btn" href="/startup_software">Read More <i className="fa fa-angle-double-right"></i></a>
                  </div>
                </div>
				        <div className="col-sm-6 col-lg-3 col-xs-6 ">
				        	<div className="service">
				            <div className="service_icon text-center">
				               <img className="mt-3" src="icons/Digital_transformation.png"/>
				            </div>
				            <div className="service_heading mt-3 text-center">
				               <h4>Digital Transformation</h4>
				            </div>
				            <p className="service_title">Digital Transformation Services for Business Growth</p>
				            <p className="service_details">Digital Transformation is the new buzzword, and used so much already that it almost sounds cliched. The fact, however, remains that digitization has provided businesses with the much-needed...</p>
				            <a className="read_more_btn" href="/digital_transformation">Read More <i className="fa fa-angle-double-right"></i></a>
				          </div>
				        </div>
                <div className="col-sm-6 col-lg-3 col-xs-6">
                  <div className="service">
                    <div className="service_icon text-center">
                       <img className="mt-3" src="icons/Startup_softwares.png"/>
                    </div>
                    <div className="service_heading mt-3 text-center">
                       <h4>Enterprise Services</h4>
                    </div>
                    <p className="service_title">IT Services & Solutions for the Enterprise Business</p>
                    <p className="service_details">Software systems enable enterprises to operate businesses efficiently while managing growth effectively. With changing organizational practices and rapidly improving technology, modern enterprises...</p>
                    <a className="read_more_btn" href="/enterprise_services">Read More <i className="fa fa-angle-double-right"></i></a>
                  </div>
                </div>
			      	</div>
			   	</div>
			</div>   	
		</section>
    </>
  )
}

export default Services
