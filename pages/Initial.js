import Link from 'next/link'

const Initial = ()=>{
    return(
        <div className="container py-5">
            <div className="row text-white">
                <div className="col-4">
                    <div className="text-center">
                        <img src="https://via.placeholder.com/200" className="rounded-circle" alt="..."/>
                    </div>
                </div>
                <div className="col-8">
                    <p>I'm</p>
                    <h1>Efrain Lay Castillo</h1>
                    <p className="lead">Software Engineer</p>
                    <p><small>Panama City, Panama</small></p>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-start align-items-center">
                            <Link href="https://github.com/EfrainLayCastillo">
                                <a className="nav-link">
                                    <i className="fab fa-github-alt"></i>
                                </a>
                            </Link>
                            <Link href="https://www.instagram.com/efrainlay/">
                                <a className="nav-link">
                                    <i className="fab fa-instagram"></i>
                                </a> 
                            </Link>
                            <Link href="mailto:efrainlaycastillo@hotmail.com">
                                <a className="nav-link">
                                    <i className="fab fa-google-plus-g"></i>
                                </a> 
                            </Link>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
}
export default Initial