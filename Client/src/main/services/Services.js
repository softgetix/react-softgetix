import React from 'react'
import Template from '../common/Template'
import FreeQuote from '../common_components/FreeQuote'

function Services() {
  return (
    <div>
      <Template>
            <section class="services">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-10 text-center">
                                <h2 class="heading-section">Our Servicess</h2>
                            </div>
                            <div class="col-md-8 text-center mb-3">
                                <p>We help established businesses, blue chips and start-ups adopt advanced technology solutions to drive organisational change and achieve revenue growth.</p>

                                <p>Our services cover the key aspects of the successful product development: product vision, business goals, quality, user experience and technology innovation.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="all_services">
                    <div class="container">
                        <div class="row align-items-center mt-5">
                            <div class="col-md-8 col-xl-7 order-md-2">
                                <h2>Product Engineering</h2>
                                <p><b>Boost Customer Experience with Smarter Software Products</b></p>
                                Building innovative products is no longer a matter of traditional software development. The outcomes must be tied together with customer goals and future business expansion. From conceptualizing an idea to maintaining and supporting a product, Product Engineering has come a long way. This process also
                                <span class="dots">...</span>
                                <span class="more">leverages emerging technologies such as Cloud, Mobility, Web, Analytics, AI, Machine Learning and Cognitive Computing. We are specialists in Product Engineering services to Enterprises and startups alike,and take pride in collaborating, building and maintaining world-class software products that speed up achievement of customer goals. The entire software product lifecycle from the innovation stage, development, deployment up to user acceptance is taken care of by Experion.</span>
                                <button class="read">Read more</button>	
                            </div>
                            <div class="col-md-4 col-xl-5 text-center">
                                <img src="images/Productiteration.png" alt="Product Engineering" class="service_img" width="300px"/>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-8 col-xl-7">
                                <h2>Startup Softwares</h2>
                                <p><b>Building Smart Products for Startups</b></p>
                                We love startups for the passion they have exhibited in wanting to change the world. Their perseverance in achieving this noble outcome is truly praiseworthy. Our Startup IT services aim at helping early stage companies accomplish their goals through product ideation, prototyping, software development, testing and maintenance. We are extremely fulfilled to be associated<span class="dots">...</span>
                                <span class="more">with the growth story of several global startups across verticals, particularly from the healthcare, retail and transportation domains. With our expertise in agile development combined with the latest in product development methodologies, Experion ensures that your brilliant idea gets translated into a market redefining product with more potential of gaining market success than any other average software solution. We have worked with close to 80 startup companies in bringing their solutions to the forefront. Some of these startups have been outright winners, with next-level expansion in full swing after initial market success.</span>
                                <button class="read">Read more</button>	
                            </div>
                            <div class="col-md-4 col-lg-5 text-center">
                                <img src="images/startupsoftware.png" alt="Startup Softwares" class="service_img" width="400px"/>
                            </div>
                        </div>
                        <div class="row align-items-center">
                            <div class="col-md-8 col-xl-7 order-md-2">
                                <h2>Digital Transformation</h2>
                                <p><b>Digital Transformation Services for Business Growth</b></p>
                                Digital Transformation is the new buzzword, and used so much already that it almost sounds cliched. The fact, however, remains that digitization has provided businesses with the much-needed proximity to their customers. Digitization guarantees various benefits to organizations in various measures. Some of such benefits can be competitiveness, customer 
                                <span class="dots">...</span>
                                <span class="more">experience, business simplification, speed of operations, efficiency and growth. The efforts, however, can be a little daunting, especially if preparations are less than perfect. This is why it is important to have someone who is an expert in utilizing digital for transforming the status quo.</span>
                                <button class="read">Read more</button>	
                            </div>
                            <div class="col-md-4 col-lg-5 text-center">
                                <img src="images/Digitaltransformation.png" alt="Digital Transformation" class="service_img" width="300px"/>
                            </div>
                        </div>
                        <div class="row align-items-center mb-5">
                            <div class="col-md-8 col-xl-7 col-xl-6">
                                <h2>Enterprise Services</h2>
                                <p><b>IT Services & Solutions for the Enterprise Business</b></p>
                                Software systems enable enterprises to operate businesses efficiently while managing growth effectively. With changing organizational practices and rapidly improving technology, modern enterprises have started to rely more on such software systems. They are now investing in futuristic technologies that transform businesses.
                                <span class="dots">...</span><span class="more">
                                <br/><br/>
                                Since technology evolves over time, businesses have to keep investing in newer applications, and also maintain, enhance / re-engineer legacy systems. Contemporary applications reduce downtime, trim costs and enhance user experience. Businesses across the world are adopting better and more agile ways of designing, building and maintaining suitable software. With a host of new technologies such as mobility, cloud and AI, the capability of enterprise solutions to deliver value to clientele has increased exponentially.<br/><br/>
                                Experion posesses the required expertise for building software applications that deliver immense value to stakeholders as well as provide even better customer experience. Our business customers quickly transform to be long-term partners, as we delve deep to understand their business, and in the process, deliver long-lasting and effective solutions.</span>
                                <button class="read">Read more</button>
                            </div>
                            <div class="col-md-4 col-xl-5 m-auto text-center">
                                <img src="images/EnterpriseServices.jpg" alt="Enterprise Services" class="service_img" width="400px"/>
                            </div>
                        </div>
                    </div>
                </section>

            <FreeQuote />
            
      </Template>
    </div>
  )
}

export default Services
