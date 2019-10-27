import Layout from '../components/layout'

//Partials components
// import Jumbotron from './partial/Jumbotron';
// import Card from './partial/Card';
// import Feature from './partial/Feature';
import Banner from '../components/partials/Banner'
import Info from '../components/partials/Info'
//Style
import fetch from 'isomorphic-unfetch';

const Index = props =>{
  return(
    <Layout>
      <Banner/>
      <Info/>
        {/* <p>I am a new page</p>
        <ul>
          {props.shows.map(show => (
            <li key={show.id}>
              <Link href="/p/[id]" as={`/p/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul> */}
    </Layout>
  );
}
Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.show)
  };
};
export default Index