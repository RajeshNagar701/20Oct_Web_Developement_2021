import React from 'react'

function MainHome() {
  return (
   <div>
  <div>
    <div className="container-fluid pb-5 contact-info">
      <div className="row">
        <div className="col-lg-4 p-0">
          <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0">
            <i className="fa fa-3x fa-map-marker-alt text-secondary mr-4" />
            <div className>
              <h5 className="mb-2">Our Office</h5>
              <p className="m-0">123 Street, New York, USA</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0">
          <div className="contact-info-item d-flex align-items-center justify-content-center bg-secondary text-white py-4 py-lg-0">
            <i className="fa fa-3x fa-envelope-open text-primary mr-4" />
            <div className>
              <h5 className="mb-2">Email Us</h5>
              <p className="m-0">info@example.com</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 p-0">
          <div className="contact-info-item d-flex align-items-center justify-content-center bg-primary text-white py-4 py-lg-0">
            <i className="fa fa-3x fa-phone-alt text-secondary mr-4" />
            <div className>
              <h5 className="mb-2">Call Us</h5>
              <p className="m-0">+012 345 6789</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Contact Info End */}
    {/* About Start */}
    <div className="container-fluid py-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="d-flex flex-column align-items-center justify-content-center bg-about rounded h-100 py-5 px-3">
              <i className="fa fa-5x fa-award text-primary mb-4" />
              <h1 className="display-2 text-white mb-2" data-toggle="counter-up">25</h1>
              <h2 className="text-white m-0">Years Experience</h2>
            </div>
          </div>
          <div className="col-lg-7 pt-5 pb-lg-5">
            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Learn About Us</h6>
            <h1 className="mb-4 section-title">We Provide The Best Cleaning Services</h1>
            <h5 className="text-muted font-weight-normal mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea lorem justo est dolor eos</h5>
            <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
            <div className="d-flex align-items-center pt-4">
              <a href className="btn btn-primary mr-5">Learn More</a>
              <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                <span />
              </button>
              <h5 className="font-weight-normal text-white m-0 ml-4 d-none d-sm-block">Play Video</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Video Modal Start */}
    <div className="modal fade" id="videoModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-body">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>        
            {/* 16:9 aspect ratio */}
            <div className="embed-responsive embed-responsive-16by9">
              <iframe className="embed-responsive-item" src id="video" allowscriptaccess="always" allow="autoplay" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Video Modal End */}
    {/* Services Start */}
    <div className="container-fluid bg-service py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Our Services</h6>
            <h1 className="mb-4 section-title text-white">Awesome Cleaning Services For You</h1>
            <p className="text-white">Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum</p>
            <a href className="btn btn-primary mt-3 py-2 px-4">More Services</a>
          </div>
          <div className="col-lg-6 pt-5 pt-lg-0">
            <div className="owl-carousel service-carousel position-relative">
              <div className="d-flex flex-column align-items-center text-center bg-white rounded overflow-hidden pt-4">
                <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                  <i className="fa fa-2x fa-hotel" />
                </div>
                <h5 className="font-weight-bold mb-4 px-4">Home Cleaning</h5>
                <img src="img/blog-1.jpg" alt />
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded overflow-hidden pt-4">
                <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                  <i className="fa fa-2x fa-city" />
                </div>
                <h5 className="font-weight-bold mb-4 px-4">Window Cleaning</h5>
                <img src="img/blog-3.jpg" alt />
              </div>
              <div className="d-flex flex-column align-items-center text-center bg-white rounded overflow-hidden pt-4">
                <div className="icon-box bg-light text-secondary shadow mt-2 mb-4">
                  <i className="fa fa-2x fa-spa" />
                </div>
                <h5 className="font-weight-bold mb-4 px-4">Carpet Cleaning</h5>
                <img src="img/blog-2.jpg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Services End */}
    {/* Features Start */}
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-7 pt-lg-5 pb-3">
            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Why Choose Us</h6>
            <h1 className="mb-4 section-title">25 Years Experience In Cleaning Industry</h1>
            <p className="mb-4">Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
            <div className="row">
              <div className="col-sm-4">
                <h1 className="text-secondary mb-2" data-toggle="counter-up">225</h1>
                <h6 className="font-weight-semi-bold mb-sm-4">Our Cleaners</h6>
              </div>
              <div className="col-sm-4">
                <h1 className="text-secondary mb-2" data-toggle="counter-up">1050</h1>
                <h6 className="font-weight-semi-bold mb-sm-4">Happy Clients</h6>
              </div>
              <div className="col-sm-4">
                <h1 className="text-secondary mb-2" data-toggle="counter-up">2500</h1>
                <h6 className="font-weight-semi-bold mb-sm-4">Projects Done</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-5" style={{minHeight: 400}}>
            <div className="position-relative h-100 rounded overflow-hidden">
              <img className="position-absolute w-100 h-100" src="img/feature.jpg" style={{objectFit: 'cover'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Features End */}
    {/* Portfolio Start */}
    <div className="container-fluid bg-portfolio py-5">
      <div className="container py-5">
        <div className="row m-0 portfolio-container">
          <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <div className="portfolio-img">
                <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt />
              </div>
              <div className="portfolio-text bg-primary">
                <h4 className="font-weight-bold mb-4">Project Name</h4>
                <div className="d-flex align-items-center justify-content-center">
                  <a className="btn btn-sm btn-secondary m-1" href>
                    <i className="fa fa-link" />
                  </a>
                  <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <div className="portfolio-img">
                <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt />
              </div>
              <div className="portfolio-text bg-primary">
                <h4 className="font-weight-bold mb-4">Project Name</h4>
                <div className="d-flex align-items-center justify-content-center">
                  <a className="btn btn-sm btn-secondary m-1" href>
                    <i className="fa fa-link" />
                  </a>
                  <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-2.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <div className="portfolio-img">
                <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt />
              </div>
              <div className="portfolio-text bg-primary">
                <h4 className="font-weight-bold mb-4">Project Name</h4>
                <div className="d-flex align-items-center justify-content-center">
                  <a className="btn btn-sm btn-secondary m-1" href>
                    <i className="fa fa-link" />
                  </a>
                  <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-3.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <div className="portfolio-img">
                <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt />
              </div>
              <div className="portfolio-text bg-primary">
                <h4 className="font-weight-bold mb-4">Project Name</h4>
                <div className="d-flex align-items-center justify-content-center">
                  <a className="btn btn-sm btn-secondary m-1" href>
                    <i className="fa fa-link" />
                  </a>
                  <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-4.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <div className="portfolio-img">
                <img className="img-fluid w-100" src="img/portfolio-5.jpg" alt />
              </div>
              <div className="portfolio-text bg-primary">
                <h4 className="font-weight-bold mb-4">Project Name</h4>
                <div className="d-flex align-items-center justify-content-center">
                  <a className="btn btn-sm btn-secondary m-1" href>
                    <i className="fa fa-link" />
                  </a>
                  <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-5.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item">
            <div className="position-relative overflow-hidden">
              <div className="portfolio-img">
                <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt />
              </div>
              <div className="portfolio-text bg-primary">
                <h4 className="font-weight-bold mb-4">Project Name</h4>
                <div className="d-flex align-items-center justify-content-center">
                  <a className="btn btn-sm btn-secondary m-1" href>
                    <i className="fa fa-link" />
                  </a>
                  <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-6.jpg" data-lightbox="portfolio">
                    <i className="fa fa-eye" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Portfolio End */}
  {/* Team Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div className="row align-items-end mb-4">
        <div className="col-lg-6">
          <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Meet Our Team</h6>
          <h1 className="section-title mb-3">Meet Our Highly Experienced Cleaners</h1>
        </div>
        <div className="col-lg-6">
          <h4 className="font-weight-normal text-muted mb-3">Eirmod kasd duo eos et magna, diam dolore stet sea clita sit ea erat lorem. Ipsum eos ipsum magna lorem stet</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="owl-carousel team-carousel position-relative">
            <div className="team d-flex flex-column text-center rounded overflow-hidden">
              <div className="position-relative">
                <div className="team-img">
                  <img className="img-fluid w-100" src="img/team-1.jpg" alt />
                </div>
                <div className="team-social d-flex flex-column align-items-center justify-content-center bg-primary">
                  <a className="btn btn-secondary btn-social mb-2" href="#"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-secondary btn-social mb-2" href="#"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-secondary btn-social" href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="d-flex flex-column bg-primary text-center py-4">
                <h5 className="font-weight-bold">Full Name</h5>
                <p className="text-white m-0">Designation</p>
              </div>
            </div>
            <div className="team d-flex flex-column text-center rounded overflow-hidden">
              <div className="position-relative">
                <div className="team-img">
                  <img className="img-fluid w-100" src="img/team-2.jpg" alt />
                </div>
                <div className="team-social d-flex flex-column align-items-center justify-content-center bg-primary">
                  <a className="btn btn-secondary btn-social mb-2" href="#"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-secondary btn-social mb-2" href="#"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-secondary btn-social" href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="d-flex flex-column bg-primary text-center py-4">
                <h5 className="font-weight-bold">Full Name</h5>
                <p className="text-white m-0">Designation</p>
              </div>
            </div>
            <div className="team d-flex flex-column text-center rounded overflow-hidden">
              <div className="position-relative">
                <div className="team-img">
                  <img className="img-fluid w-100" src="img/team-3.jpg" alt />
                </div>
                <div className="team-social d-flex flex-column align-items-center justify-content-center bg-primary">
                  <a className="btn btn-secondary btn-social mb-2" href="#"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-secondary btn-social mb-2" href="#"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-secondary btn-social" href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="d-flex flex-column bg-primary text-center py-4">
                <h5 className="font-weight-bold">Full Name</h5>
                <p className="text-white m-0">Designation</p>
              </div>
            </div>
            <div className="team d-flex flex-column text-center rounded overflow-hidden">
              <div className="position-relative">
                <div className="team-img">
                  <img className="img-fluid w-100" src="img/team-4.jpg" alt />
                </div>
                <div className="team-social d-flex flex-column align-items-center justify-content-center bg-primary">
                  <a className="btn btn-secondary btn-social mb-2" href="#"><i className="fab fa-twitter" /></a>
                  <a className="btn btn-secondary btn-social mb-2" href="#"><i className="fab fa-facebook-f" /></a>
                  <a className="btn btn-secondary btn-social" href="#"><i className="fab fa-linkedin-in" /></a>
                </div>
              </div>
              <div className="d-flex flex-column bg-primary text-center py-4">
                <h5 className="font-weight-bold">Full Name</h5>
                <p className="text-white m-0">Designation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Testimonial Start */}
  <div className="container-fluid bg-testimonial py-5">
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-7 pt-lg-5 pb-5">
          <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Testimonial</h6>
          <h1 className="section-title text-white mb-5">What Our Clients Say</h1>
          <div className="owl-carousel testimonial-carousel position-relative">
            <div className="d-flex flex-column text-white">
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid" src="img/testimonial-1.jpg" alt />
                <div className="ml-3">
                  <h5 className="text-primary">Client Name</h5>
                  <i>Profession</i>
                </div>
              </div>
              <p>Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
            </div>
            <div className="d-flex flex-column text-white">
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid" src="img/testimonial-2.jpg" alt />
                <div className="ml-3">
                  <h5 className="text-primary">Client Name</h5>
                  <i>Profession</i>
                </div>
              </div>
              <p>Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
            </div>
            <div className="d-flex flex-column text-white">
              <div className="d-flex align-items-center mb-3">
                <img className="img-fluid" src="img/testimonial-3.jpg" alt />
                <div className="ml-3">
                  <h5 className="text-primary">Client Name</h5>
                  <i>Profession</i>
                </div>
              </div>
              <p>Tempor at diam tempor sed. Sanctus dolor ipsum ut nonumy amet clita sea. Sed eos sed dolores vero no. Ipsum elitr elitr stet dolor  lorem erat. Diam no amet sea justo vero ut. Dolor ipsum kasd ipsum dolore.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-5" style={{minHeight: 400}}>
          <div className="position-relative h-100 rounded overflow-hidden">
            <img className="position-absolute w-100 h-100" src="img/testimonial.jpg" style={{objectFit: 'cover'}} />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
  {/* Blog Start */}
  <div className="container-fluid pt-5">
    <div className="container pt-5">
      <div className="row align-items-end mb-4">
        <div className="col-lg-6">
          <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Latest Blog</h6>
          <h1 className="section-title mb-3">Latest Articles From Our Blog Post</h1>
        </div>
        <div className="col-lg-6">
          <h4 className="font-weight-normal text-muted mb-3">Eirmod kasd duo eos et magna, diam dolore stet sea clita sit ea erat lorem. Ipsum eos ipsum magna lorem stet</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="position-relative mb-4">
            <img className="img-fluid rounded w-100" src="img/blog-1.jpg" alt />
            <div className="blog-date">
              <h4 className="font-weight-bold mb-n1">01</h4>
              <small className="text-white text-uppercase">Jan</small>
            </div>
          </div>
          <div className="d-flex mb-2">
            <a className="text-secondary text-uppercase font-weight-medium" href>Admin</a>
            <span className="text-primary px-2">|</span>
            <a className="text-secondary text-uppercase font-weight-medium" href>Cleaning</a>
          </div>
          <h5 className="font-weight-medium mb-2">Rebum lorem eos ipsum diam</h5>
          <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
          <a className="btn btn-sm btn-primary py-2" href>Read More</a>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="position-relative mb-4">
            <img className="img-fluid rounded w-100" src="img/blog-2.jpg" alt />
            <div className="blog-date">
              <h4 className="font-weight-bold mb-n1">01</h4>
              <small className="text-white text-uppercase">Jan</small>
            </div>
          </div>
          <div className="d-flex mb-2">
            <a className="text-secondary text-uppercase font-weight-medium" href>Admin</a>
            <span className="text-primary px-2">|</span>
            <a className="text-secondary text-uppercase font-weight-medium" href>Cleaning</a>
          </div>
          <h5 className="font-weight-medium mb-2">Rebum lorem eos ipsum diam</h5>
          <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
          <a className="btn btn-sm btn-primary py-2" href>Read More</a>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="position-relative mb-4">
            <img className="img-fluid rounded w-100" src="img/blog-3.jpg" alt />
            <div className="blog-date">
              <h4 className="font-weight-bold mb-n1">01</h4>
              <small className="text-white text-uppercase">Jan</small>
            </div>
          </div>
          <div className="d-flex mb-2">
            <a className="text-secondary text-uppercase font-weight-medium" href>Admin</a>
            <span className="text-primary px-2">|</span>
            <a className="text-secondary text-uppercase font-weight-medium" href>Cleaning</a>
          </div>
          <h5 className="font-weight-medium mb-2">Rebum lorem eos ipsum diam</h5>
          <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
          <a className="btn btn-sm btn-primary py-2" href>Read More</a>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default MainHome