import Link from 'next/link'

export default ()=>{
  return(
    <div className="grey text-white">
      <div className="container py-5">
       <div className="p-5 grey-light">
        <div className="row">
            <div className="col-4">
              <img src="https://via.placeholder.com/640x860" className="img-thumbnail rounded mx-auto d-block" alt="..."/>
            </div>
            <div className="col-8">
              <h2 className="display-5">UI/UX Website Design, Startup to know about Japanese culture, grouping content produced by my friend.</h2>
              <p>
                This project started with me wanting to study a new framework called Next and React.
                The goal of this project is to improve on the idea of bringing in more users,
                who are interested in digesting content produced by my friend.
                My tools of the trade are Github and VSCode.
                It took me a month more or less to learn these technologies.
                This project is not live yet, but it will be when my friend decides to use it.
              </p>
            </div>
          </div>
       </div>
      </div>
    </div>
  );
}