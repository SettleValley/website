import Layout from '../components/layout'
import Link from 'next/link'

//Partials components
// import Jumbotron from './partial/Jumbotron';
// import Card from './partial/Card';
// import Feature from './partial/Feature';
import Banner from '../components/partials/Banner'
import Info from '../components/partials/Info'
import Projects from '../components/partials/Projects'

//Style
import fetch from 'isomorphic-unfetch';

const Index = props =>{



  return(
    <Layout>
      <Banner/>
      <Info/>
      <Projects AllListing={props.Listings}/>
    </Layout>
  );
}
Index.getInitialProps = async function() {
  const count = '2'
  const token = '8459250697.fdc3253.5d4f69040af84b259e49dcf8c74abeef'
  const res = await fetch(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${token}&count=${count}`);
  const result = await res.json();

  // console.log(result.data);

  return {
    Listings: result.data.map(entry => {
      return entry.images
    })
  };
};
export default Index