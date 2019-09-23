import Link from 'next/link'

export default ()=>{
  return(
       <div className="row">
           <div className="col-md-12">
               <div className="nav navbar-nav mr-auto pb-3">
                    <ul className="nav list-inline cust-li">
                        <li className="list-inline-item active">All</li>
                        <li className="list-inline-item">Events</li>
                        <li className="list-inline-item">Photography</li>
                        <li className="list-inline-item">Websites</li>
                    </ul>
               </div>
           </div>
        <div className="col-md-8">
            <img src="/static/temp2.jpg" className="mx-auto d-block img-fluid" alt="..."/>
        </div>
        <div className="col-md-4">
          <img src="/static/temp3.jpg" className="mx-auto d-block img-fluid" alt="..."/>
        </div>
        
        <div className="col-md-4 pt-3">
          <img src="/static/temp4.jpg" className="mx-auto d-block img-fluid" alt="..."/>
        </div>
        <div className="col-md-8 pt-3">
            <img src="/static/temp2.jpg" className="mx-auto d-block img-fluid" alt="..."/>
        </div>
        
       </div>
  );
}