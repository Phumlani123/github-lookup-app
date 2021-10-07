import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav = () => {

    return <>
        <nav className="navbar shadow bg-grey  justify-content-between flex-nowrap flex-row fixed-top py-3">
              <div className="container">
                  <Link to={"/users"} className="navbar-brand">
                      <img src="/img/GitHub-logo.png" width="auto" height="30" className="d-inline-block align-top" alt="" />
                  </Link>
                  <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to={"/users"} className="nav-link text-dark">
                        Users
                      </Link>
                    </li>
                  </div>
                  <ul className="nav navbar-nav flex-row ">
                      <li className="nav-item">
                          <Link className="btn btn-secondary mr-2" to="/">logout</Link>
                      </li>
                      <li className="nav-item ml-2">
                          <Link className="btn btn-primary  mr-2" to="/offline-users">Offline mode</Link>
                      </li>
                  </ul>
              </div>
          </nav>
          <div className="page-header header-filter" data-parallax="true" ></div>
    </>
  }
  
  export default Nav;