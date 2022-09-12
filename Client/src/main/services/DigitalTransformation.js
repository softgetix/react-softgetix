import React from 'react'
import Template from '../common/Template'
import FreeQuote from '../common_components/FreeQuote'

function DigitalTransformation() {
  return (
    <>
      <Template>
          <section class="services">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 text-center">
                        <h2 class="heading-section">Digital Transformation</h2>
                    </div>
                </div>
            </div>
          </section>
          <section class="all_services">
            <div class="container">
              <div class="row align-items-center mt-5">
                <div class="col-md-8 col-xl-7 order-md-2">
                  <h3><b>Digital Transformation Services for Business Growth</b></h3>
                      Digital Transformation is the new buzzword, and used so much already that it almost sounds cliched. The fact, however, remains that digitization has provided businesses with the much-needed proximity to their customers. Digitization guarantees various benefits to organizations in various measures. Some of such benefits can be competitiveness, customer experience, business simplification, speed of operations, efficiency and growth. The efforts, however, can be a little daunting, especially if preparations are less than perfect. This is why it is important to have someone who is an expert in utilizing digital for transforming the status quo.
                </div>
                <div class="col-md-4 col-xl-5 text-center">
                  <img src="images/Digitaltransformation.png" alt="Product Engineering" class="service_img" width="400px"/>
                </div>
              </div>
            </div>
          </section>   

        <FreeQuote />
      </Template>
    </>
  )
}

export default DigitalTransformation
