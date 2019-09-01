import Link from 'next/link'

export default ()=>{
  return(
    <section id="about" className="section">
      <div className="container">
       <div className="row">
        <div className="col-md-6">
          <span className="subtitle text-uppercase">About Myself</span>
          <h2 className="font-weight-bold text-uppercase title-2">Creating and Building Creative Idea.</h2>
            <p>
              I'm a Software Engineer, currently working with BlueTide Web Consulting at Ciudad del Saber. 
              Trying to think new ideas that can improve and optimize some process in the industry, sometimes i get some funny ideas that may work once implemented, 
              but some of them are just for fun and to improve myself. In my free time I spend my time on youtube watching Platzi News or Netflix series. 
              I would like to take some trips to explore new cultures, I'm interested in Asian Culture. I can't leave behind Videogames, since childhood I really like to play on my PC videogames. 
              Yep, and I still have to discover more things.
            </p>
        </div>
        <div className="col-md-6">
          <img src="https://forzo.beshley.com/wp-content/uploads/2019/07/about_img.jpg" className="mx-auto d-block img-hall" alt="..."/>
        </div>
       </div>
      </div>
    </section>
  );
}