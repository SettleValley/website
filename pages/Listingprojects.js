import Link from 'next/link'

export default ()=>{
  return(
       <div className="row">
           <div className="col-md-12">
               <div className="nav navbar-nav mr-auto pb-3">
                    <ul className="nav list-inline cust-li">
                        <li className="list-inline-item">All</li>
                        <li className="list-inline-item">Websites</li>
                        <li className="list-inline-item">Photography</li>
                        <li className="list-inline-item">Post</li>
                    </ul>
               </div>
           </div>
        <div className="col-md-8">
            <img src="/static/temp2.jpg" className="mx-auto d-block img-fluid" alt="..."/>
        </div>
        <div className="col-md-4">
          <img src="/static/temp3.jpg" className="mx-auto d-block img-fluid" alt="..."/>
        </div>
       </div>
  );
}