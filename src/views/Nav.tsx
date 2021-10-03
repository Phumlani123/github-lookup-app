import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav = () => {

    return <>
        <nav className="navbar shadow bg-white justify-content-between flex-nowrap flex-row fixed-top py-3">
              <div className="container">
                  <Link to={"/users"} className="navbar-brand">
                      <img src="/img/github.png" width="auto" height="30" className="d-inline-block align-top" alt="" />
                  </Link>
                  <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to={"/users"} className="nav-link">
                        Users
                      </Link>
                    </li>
                  </div>
                  <ul className="nav navbar-nav flex-row ">
                      <li className="nav-item">
                          <Link className="btn btn-secondary mr-2" to="/">logout</Link>
                      </li>
                  </ul>
              </div>
          </nav>
          <div className="page-header header-filter" data-parallax="true" ></div>
    </>
  }
  
  export default Nav;