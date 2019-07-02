import Layout from '../components/layout'

//Partials components
// import Jumbotron from './partial/Jumbotron';
// import Card from './partial/Card';
// import Feature from './partial/Feature';
import About from './About';
//Style
const title = 'Settle Valley'
const Page =()=>{
  return(
    <div>
      <About/>
    </div>
  );
}

export default Layout(Page, title)