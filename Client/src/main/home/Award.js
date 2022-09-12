import React from 'react';

function Award() {
  return (
    <>
      <section className="award">
			<div className="container">
				<div className="col-md-12">
					<div className="row award_container">
						<div className="col-lg-2 col-md-6 col-sm-6">
						<div>
							<img src="images/Software-Development.png" width="170"/>
						</div>
						</div>
						<div className="col-lg-2 col-md-6 col-sm-6">
						<div>
							<img src="images/Web-Development.png" width="170"/>
						</div>
						</div>
						<div className="col-lg-2 col-md-6 col-sm-6">
						<div>
							<img src="images/badge.png" width="170"/>
						</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
						<div>
							<img src="images/trusted_by.png" width="270"/>
						</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6">
						<div>
							<a href="/contact" className="btn free_Quote_btn free-qoute-btn btn-lg">Get a Free Quote!</a>
						</div>
						</div>
					</div>
				</div>	
			</div>
		</section>
    </>
  )
}

export default Award
