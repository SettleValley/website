import Link from 'next/link'

export default ()=>{
  return(
  <div className="container">
    <div className="row text-white">
        <div className="col-4">
            <div className="text-center">
                <img src="https://via.placeholder.com/200" className="rounded-circle" alt="..."/>
            </div>
        </div>
        <div className="col-8">
            <p>I'm</p>
            <h1>Efrain Lay Castillo</h1>
            <p class="lead">Software Engineer</p>
            <p><small>Panama City, Panama</small></p>
        </div>
    </div>
  </div>
  );
}