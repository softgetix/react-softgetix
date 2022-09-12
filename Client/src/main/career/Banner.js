import React from 'react'

function Banner() {

  return (
    <>
      <section id="careers-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="font-weight-bold text-center staff-heading">Explore a career at SoftGetix.</h1>
            </div>
            <div className="col-md-10 m-auto">
              <div className="staff_row_details text-center">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s  when an unknown printer took a galley</p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="container-sm">
                <div className="row">
                  <div className="col-md-8 mx-auto">
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                      <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                      </ol>   
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="images/careers-slider1.jpeg" className="img-fluid" alt=""/>
                        </div>
                        <div className="carousel-item">
                          <img src="images/careers-slider2.jpg" className="img-fluid" alt=""/>
                        </div>
                        <div className="carousel-item">
                          <img src="images/careers-slider3.jpeg" className="img-fluid" alt=""/>
                        </div>            
                      </div>
                      <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                        <span><i className="fa fa-angle-left"></i></span>
                      </a>
                      <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                        <span><i className="fa fa-angle-right"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}


export default Banner
