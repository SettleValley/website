import Link from 'next/link'

const Footer = ()=>{
    return(
    <div className="section" id="Footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="font-weight-bold text-capitalize title-2 text-center">Contact Me.</h2>
                </div>
                <div className="col-12 d-flex justify-content-center align-items-center icon-color-footer   ">
                    <Link href="https://github.com/EfrainLayCastillo">
                        <a className="nav-link" >
                            <i className="fab fa-github-alt"></i>
                        </a>
                    </Link>
                    <Link href="https://www.instagram.com/efrainlay/">
                        <a className="nav-link">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </Link>
                    <Link href="https://twitter.com/LayEfrain">
                        <a className="nav-link" >
                            <i className="fab fa-twitter"></i>
                        </a>
                    </Link>
                    <Link href="mailto:efrainlaycastillo@gmail.com">
                        <a className="nav-link" >
                            <i className="fas fa-envelope"></i>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Footer