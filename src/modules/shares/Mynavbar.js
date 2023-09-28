import React from "react";
import { Link } from "react-router-dom";

function Mynavbar() {
  return (
    <div className="container-fluit fixed-top ">
      <div className="row">
        <div className="col-12">
          <nav className="navbar navbar-expand-lg tex">
            <div className="container-fluid ">
              <Link className="navbar-brand" to="o">Navbar</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="contact">Contact</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Myabout">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Myaxiosdata">Axios</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="Mygraph">Graph</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="o">Link</Link>
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
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success me-4" type="submit">Search</button>
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"/>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      </div>
    </div>
  </div>
export default Mynavbar;

