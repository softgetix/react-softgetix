import React from 'react'
import Template from '../common/Template'
import FreeQuote from '../common_components/FreeQuote'

function ProductEngineering() {
  return (
    <>
    <Template>
    <section class="services">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-10 text-center">
                        <h2 class="heading-section">Product Engineering</h2>
                    </div>
                </div>
            </div>
          </section>
          <section class="all_services">
            <div class="container">
              <div class="row align-items-center mt-5">
                <div class="col-md-8 col-xl-7 order-md-2">
                  <h3><b>Boost Customer Experience with Smarter Software Products</b></h3>
                  Building innovative products is no longer a matter of traditional software development. The outcomes must be tied together with customer goals and future business expansion. From conceptualizing an idea to maintaining and supporting a product, Product Engineering has come a long way. This process also leverages emerging technologies such as Cloud, Mobility, Web, Analytics, AI, Machine Learning and Cognitive Computing. We are specialists in Product Engineering services to Enterprises and startups alike,and take pride in collaborating, building and maintaining world-class software products that speed up achievement of customer goals. The entire software product lifecycle from the innovation stage, development, deployment up to user acceptance is taken care of by Experion.
                </div>
                <div class="col-md-4 col-xl-5 text-center">
                  <img src="images/Productiteration.png" alt="Product Engineering" class="service_img" width="400px"/>
                </div>
              </div>
            </div>
          </section>

        <FreeQuote />
    </Template>
        
    </>
  )
}

export default ProductEngineering
