import React from 'react'

function Counting() {
  return (
    <>
      <section className="opportunities-counting">
          <div className="container opportunities-counting_container">
              <div className="row" >
                <div className="col-md-12 text-center">
                  <h1 className="opportunities-counting-title">
                      Growing fast, globally
                  </h1>
                </div>   
              </div>
              <div className="row text-center">
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">14+</h2>
                      <p className="count-text "><img src="icons/flight.png" width="25px" alt=""/> COUNTRIES SERVED </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">230+</h2>
                      <p className="count-text "><img src="icons/person.png" width="30px" alt=""/> HAPPY CLIENTS </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">280+</h2>
                      <p className="count-text "><img src="icons/pencil-and-ruler.png" width="25px" alt=""/> PROJECTS COMPLETE </p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="counter">
                      <h2 className="count-title">82%</h2>
                      <p className="count-text "><img src="icons/experience.png" width="25px" alt=""/> REPEATE+REFERRAL </p>
                    </div>
                </div>
              </div>
          </div>
      </section>

    </>
  )
}

export default Counting
