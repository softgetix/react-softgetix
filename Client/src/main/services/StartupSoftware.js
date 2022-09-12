import React from 'react'
import Template from '../common/Template'
import FreeQuote from '../common_components/FreeQuote'

function StartupSoftware() {
  return (
    <>
      <Template>
      <section class="services">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 text-center">
                        <h2 class="heading-section">Startup Softwares</h2>
                    </div>
                </div>
            </div>
          </section>
          <section class="all_services">
            <div class="container">
              <div class="row align-items-center mt-5">
                <div class="col-md-8 col-xl-7 order-md-2">
                  <h3><b>Building Smart Products for Startups</b></h3>
                  We love startups for the passion they have exhibited in wanting to change the world. Their perseverance in achieving this noble outcome is truly praiseworthy. Our Startup IT services aim at helping early stage companies accomplish their goals through product ideation, prototyping, software development, testing and maintenance. We are extremely fulfilled to be associated with the growth story of several global startups across verticals, particularly from the healthcare, retail and transportation domains. With our expertise in agile development combined with the latest in product development methodologies, Experion ensures that your brilliant idea gets translated into a market redefining product with more potential of gaining market success than any other average software solution. We have worked with close to 80 startup companies in bringing their solutions to the forefront. Some of these startups have been outright winners, with next-level expansion in full swing after initial market success.
                </div>
                <div class="col-md-4 col-xl-5 text-center">
                  <img src="images/startupsoftware.png" alt="Product Engineering" class="service_img" width="400px"/>
                </div>
              </div>
            </div>
          </section> 

        <FreeQuote />

      </Template>
    </>
  )
}

export default StartupSoftware
