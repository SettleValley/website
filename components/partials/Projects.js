import Link from 'next/link'

const Projects =(props)=>{
  
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
              sharing updates projects or events in my day life.
            </p>
            <p>
              Living new experiences in my life journey, meeting interesting people, while sharing very interesting ideas and experiences.
            </p>
        </div>
        <div className="col-md-4">
          <img src="/static/temp1.jpg" className="mx-auto d-block img-fluid" alt="..."/>
        </div>
      </div>
      <div className="row">
          {props.AllListing.map((listing,key) => {
            return(
            <li key={key}>
              <Link href="/p/[key]" as={`/p/${key}`}>
                <a>{listing}</a>
              </Link>
            </li>
            )
          })}
      </div>
      </div>
    </section>
  );
}
export default Projects