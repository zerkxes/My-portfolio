function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav " >
                        <li className="nav-item" >
                            <a className="nav-link active border-end border-white " href="#">01 : Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link border-end border-white " href="#">02 : Works</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link border-end border-white " href="#">03 : About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link border-end border-white " href="#" >04 : Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav;