const IMGExample = '/static/img/example_perfil.jpg'

const Info = () =>(
        <section id="about" className="section">
      <div className="container">
       <div className="row">
        <div className="col-md-8">
          <span className="subtitle text-uppercase">About Myself</span>
          <h2 className="font-weight-bold text-uppercase title-2 ">Building and Creating Ideas.</h2>
            <p className="text-justify">
              I'm a Software Engineer, currently working for BlueTide Web Consulting at Ciudad del Saber. 
              I’m trying to come up with new ideas that can improve and optimize some processes in the industry. Sometimes I get some interesting ideas that may work once implemented, 
              but some of them are just for fun and to improve myself / my skills. In my free time, I spend my time on Youtube watching Platzi News or Netflix series. 
              I would like to go on trips to explore new cultures, especially Asian cultures. I can't stop playing video games, because I liked playing them on my PC ever since I was a child. 
              I believe I still have many things to discover.
            </p>
        </div>
        <div className="col-md-4">
          <img src={IMGExample} className="mx-auto d-block img-hall" alt="..."/>
        </div>
       </div>
      </div>
    </section>
);

export default Info