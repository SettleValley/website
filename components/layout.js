import Link from 'next/link'
import Head from './Head'
//Components
import Header from './Header'
import Footer from './Footer'
// import Footer from './Footer'

// Style
import '../css/custom.css'

const Layout = props =>(
  <>
    <Head/>
    <Header/>
    {props.children}
    <Footer/>
  </>
)


// const Layout = (Page, title) =>{
//   return()=>(
//     <div> 
//       <Head/>
//         <section className="bg-dark main-background opacity">
//             <Header title={title}/>
//             <Initial/>
//         </section>
//       <Page/>
//       <Footer/>

//       <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>  
//       <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossOrigin="anonymous"></script>
//       <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossOrigin="anonymous"></script>
//     </div>
//   );
// }

export default Layout 