import React from "react";
import { Link } from "react-router-dom";
import { BsFillGridFill } from "react-icons/bs";

function Mynavbar() {
  return (
    <div className="container-fluit fixed-top shadow">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg tex">
            <div className="container-fluid ">
              <Link className="navbar-brand" to="https://nitesh123.netlify.app/"><BsFillGridFill/></Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Myabout">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Myaxiosdata">Axios</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Mygraph">Graph</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="o" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="o">Action</Link></li>
                      <li><Link className="dropdown-item" to="o">Another action</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><Link className="dropdown-item" to="o">Something else here</Link></li>
                    </ul>
                  </li>
                </ul>
                <form className="d-flex me-3" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success me-4" type="submit">Search</button>
                  <div className="dropdown me-2">
                    <Link ot="#" className="d-flex align-items-center text-decoration-none dropdown-toggle show" data-bs-toggle="dropdown" aria-expanded="true">
                      <img src="photo/nn.k.jpg" alt="" width="40" height="40" className="rounded-circle me-2" />
                      <strong>Hello</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-light text-small shadow" data-popper-placement="top-start" >
                      <li><Link className="dropdown-item" style={{color:"red"}} href="#">Login</Link></li>
                      <li><Link className="dropdown-item" style={{color:"green"}} to="registor">Registor</Link></li>
                      <li><Link className="dropdown-item" style={{color:"orange"}} to="/">Sign out</Link></li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default Mynavbar;

