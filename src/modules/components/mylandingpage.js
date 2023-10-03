import React from "react";
import Card from 'react-bootstrap/Card';
import { Carddata } from './Mydata';

function Mylandingpage() {
  return (
    <div className="container-fluid " id="Home">
      <div className="row ">
        <div className="col-12 g-0 ">
          <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="img/img5.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="img/img1.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="img/img4.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <div className="row g-0 text-center gap ">
            <div className="container content center  call gap" id="band">
              <h2 className="wide">THE BAND</h2>
              <p className="opacity"><i>We love music</i></p>
              <p className="justify">We have created Link fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="row-padding padding-32">
                <div className="third">
                  <img src="img/photo.jpg" className="round margin-bottom val" alt="Random Name" />
                  <p>Name</p>
                </div>
                <div className="third">
                  <img src="img/photo.jpg" className="round margin-bottom val" alt="Random Name" />
                  <p>Name</p>
                </div>
                <div className="third">
                  <img src="img/photo.jpg" className="w3-round val" alt="Random Name" />
                  <p>Name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row back g-0" style={{ width: '150rem', justifyContent: "center" }}>
          <div className="col-md-3">
            <div style={{ width: '22rem' }}>
              <h1 className="wide">Our Work</h1>
              <p className="justify"style={{paddingLeft:"8px"}}>English is a West Germanic language in the Indo-European language family. Originating in early medieval England today English is both the most spoken language in the world and the third most spoken native language, after Mandarin Chinese and Spanish.English is the most widely learned second language and is either the official language or one of the official languages in 59 sovereign states. There are more people who have learned English as a second language than there are native speakers. As of 2005, it was estimated that there were over two billion speakers of English.
              </p>
            </div>
          </div>
          {Carddata.map((c) => {
            return (
              <div className="col-md-3">
                <Card style={{ width: '21rem' }}>
                  <Card.Img variant="top" src={c.Myimg} />
                  <Card.Body>
                    <Card.Title>{c.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}
export default Mylandingpage