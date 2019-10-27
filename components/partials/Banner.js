import Link from 'next/link'
const Banner = () =>(
    <section className="bg-dark main-background opacity">
        <div className="container">
              <div className="row text-white align-items-center min-500px h-100">
                  <div className="col-4">
                      <div className="text-center ">
                          <img src="/static/img/efrain.jpg" className="rounded-circle w-100" alt="..."/>
                      </div>
                  </div>
                  <div className="col-8 cstm-details pl-4">
                      <p>I'm</p>
                      <h1>Efrain Lay Castillo</h1>
                      <p className="lead size-half">Software Engineer</p>
                      <p className="lead"><small>Panama City, Panama</small></p>
                      <div className="row">
                          <div className="col-12 d-flex justify-content-start align-items-center icon-color">
                              <Link href="https://github.com/EfrainLayCastillo">
                                  <a className="nav-link">
                                      <i className="fab fa-github-alt"></i>
                                  </a>
                              </Link>
                              <Link href="https://www.instagram.com/efrainlay/">
                                  <a className="nav-link">
                                      <i className="fab fa-instagram"></i>
                                  </a> 
                              </Link>
                              <Link href="#">
                                  <a className="nav-link">
                                      <i className="fab fa-twitter"></i>
                                  </a> 
                              </Link>
                              <Link href="mailto:efrainlaycastillo@hotmail.com">
                                  <a className="nav-link">
                                      <i className="fas fa-envelope"></i>
                                  </a> 
                              </Link>
                          </div>
                      </div>   
                  </div>
              </div>
          </div>
        </section>
  );
  export default Banner