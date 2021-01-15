import React from 'react'
import "scss/slider.scss";
import Carousel from "react-bootstrap/Carousel";
import burgerDouble from "burger-gambar/burger-double.jpg";
import burgerCheese from "burger-gambar/burger-cheese-1.jpg";
import burgerLembu from "burger-gambar/burger-lembu-1.jpg";

function Slider() {
    return (
        <main className="article">
        <Carousel className="custom-slider">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={burgerCheese}
              alt="First slide"
            />
            <div className="slider-wrapper glass glass-border family-potta">
              <h1 className=""> Burger Cheese Gaban</h1>
              <p className="slider-p">
                Sedap gaban Excepteur ad elit eiusmod cupidatat quis aute.
                Occaecat deserunt eiusmod mollit tempor anim Lorem in sint
                laborum in. Occaecat ipsum cillum laborum ut laboris.
              </p>
              <p className="slider-price"> RM12.99 </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={burgerDouble}
              alt="Third slide"
            />

            <div className="slider-wrapper glass glass-border family-potta">
              <h1 className=""> Burger Double Gaban </h1>
              <p className="slider-p">
                Sedap gaban Excepteur ad elit eiusmod cupidatat quis aute.
                Occaecat deserunt eiusmod mollit tempor anim Lorem in sint
                laborum in. Occaecat ipsum cillum laborum ut laboris.
              </p>
              <p className="slider-price"> RM12.99 </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={burgerLembu}
              alt="Third slide"
            />
            <div className="slider-wrapper glass glass-border family-potta">
              <h1 className=""> Burger Cheese Gaban </h1>
              <p className="slider-p">
                Sedap gaban Excepteur ad elit eiusmod cupidatat quis aute.
                Occaecat deserunt eiusmod mollit tempor anim Lorem in sint
                laborum in. Occaecat ipsum cillum laborum ut laboris.
              </p>
              <p className="slider-price"> RM12.99 </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </main>
    )
}

export default Slider
