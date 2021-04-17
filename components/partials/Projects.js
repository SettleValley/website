import Link from 'next/link'

const Projects =(props)=>{

  const Images = props.AllListing.map((data)=>
      <div className="col-3 mb-3">
        <Link href={data.link}>
          <a className="tag_img" target="_blank">
            <div className="hover_like">
              <i class="fab fa-instagram"></i>
            </div>
            <img src={data.images.standard_resolution.url} className="mx-auto d-block img-fluid"/>
          </a>
        </Link>
      </div>
  )

  const Tags = props.AllListing.map(data=>
      <>
        
          {data.tags.map(tag =>
             <span class="badge badge-light">{tag}</span>
            )}
      </>
    )

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
      <div className="col-md-12">
               <div className="eclipse-text">
                    {Tags}
               </div>
           </div>
        {Images}
      </div>
      </div>
      
    </section>
  );
}
export default Projects