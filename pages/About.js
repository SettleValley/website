import Link from 'next/link'

export default ()=>{
  return(
    <section id="about" className="section">
      <div className="container">
       <div className="row">
        <div className="col-md-6">
          <span className="subtitle text-uppercase">About Myself</span>
          <h2 className="font-weight-bold text-uppercase title-2">Creating and Building Creative Idea</h2>
            <p>
              This project started with me wanting to study a new framework called Next and React.
              The goal of this project is to improve on the idea of bringing in more users,
              who are interested in digesting content produced by my friend.
              My tools of the trade are Github and VSCode.
              It took me a month more or less to learn these technologies.
              This project is not live yet, but it will be when my friend decides to use it.
            </p>
        </div>
        <div className="col-md-6">
          <img src="https://forzo.beshley.com/wp-content/uploads/2019/07/about_img.jpg" className="img-thumbnail rounded mx-auto d-block img-hall" alt="..."/>
        </div>
       </div>
      </div>
    </section>
  );
}