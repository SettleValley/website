import Link from 'next/link'
import Listing from './Listingprojects';

export default ()=>{
  return(
    <section id="projects" className="section">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h2 className="font-weight-bold text-capitalize title-2 text-center">Latest Works.</h2>
            </div>
        </div>
       <div className="row">
        <div className="col-md-8">
          <h4 className="font-weight-bold text-uppercase title-4">Work hard. Dream big.</h4>
            <p className="lead">
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
            </p>
        </div>
        <div className="col-md-4">
          <img src="/static/temp1.jpg" className="mx-auto d-block img-fluid" alt="..."/>
        </div>
       </div>
       <Listing/>
      </div>
    </section>
  );
}