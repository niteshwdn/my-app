import React from "react";
import Abc from '../image/lights.jpg';
import Acb from '../image/snow.jpg';
import Av from '../image/sailboat.jpg';


function Mylandingpage() {
  return (
    <div className="container-fluit">
      <div className="roe">
        <div className="col-12 g-0">
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={Abc} class="d-block w-100" alt="Mypage" />
              </div>
              <div class="carousel-item">
                <img src={Acb} class="d-block w-100" alt="Mypage" />
              </div>
              <div class="carousel-item">
                <img src={Av} class="d-block w-100" alt="Mypage" />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>


  )
}
export default Mylandingpage