import Link from 'next/link'

const Header = (props)=>{
    return(
<div className="" id="TopHeader">

    <nav className="navbar navbar-expand-lg navbar-dark container">
        <Link href="#">
            <a className="navbar-brand">{props.title}</a>
        </Link>    
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link href="#">
                        <a class="nav-link text-white">Works</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="#">
                        <a class="nav-link text-white">About</a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="#">
                        <a class="nav-link text-white">Contact</a>
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
</div>
    );
}
export default Header