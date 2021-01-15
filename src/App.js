import "./App.scss";
import burgerCheese from "burger-gambar/burger-cheese-1.jpg";
import burgerDouble from "burger-gambar/burger-double.jpg";
import burgerKLKaw from "burger-gambar/kl-burger-kawkaw.jpg";
import burgerLembu from "burger-gambar/burger-lembu-1.jpg";
import burgerFriesChili from "burger-gambar/burger-chili.jpg";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo from "burger-gambar/logo-4.svg";
import "scss/cards.scss";
import "scss/global.scss";
import "scss/navbar.scss";
import "scss/slider.scss";
import "scss/contact.scss";


/* 
#to-do
##Done
1. slider using bootstap 
2. navigation 
2.1 create contact layout 
2.2 grid all the layout to responsive 

--------------------

##Not Done

2.3 split App code to chunk of layouts with nature props
3. implement context for bm|english | color white black mode
4. KIV ADD CART flow system using everything i have /know

*/



function App() {
  return (
    <div className="app">
      <nav className="Navbar">
        <div className="Navbar-item black-glass black-glass-border">Cart</div>
      </nav>
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
      <main className="article">
        <section className="article-container ">
          <div className="header-1-wrapper">
            <h1 className="header-1 h2-size family-potta">Craving for more?</h1>
            <div className="bottom-line"> </div>
          </div>

          <div className="group-card-2-lg-4">
            <div className="ccard b-cxheck">
              <img src={burgerKLKaw} alt="bgkaw" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 10.00</p>
            </div>
            <div className="ccard b-chexck">
              <img src={burgerCheese} alt="bgc" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 12.99 </p>
            </div>
            <div className="ccard b-xcheck">
              <img src={burgerFriesChili} alt="bgf" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 12.99 </p>
            </div>
            <div className="ccard">
              <img src={burgerLembu} alt="bglembu" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 12.99</p>
            </div>

            <div className="ccard b-cxheck">
              <img src={burgerKLKaw} alt="bgkaw" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 10.00</p>
            </div>
            <div className="ccard b-chexck">
              <img src={burgerCheese} alt="bgc" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 12.99 </p>
            </div>
            <div className="ccard b-xcheck">
              <img src={burgerFriesChili} alt="bgf" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 12.99 </p>
            </div>
            <div className="ccard">
              <img src={burgerLembu} alt="bglembu" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 12.99</p>
            </div>

            <div className="ccard b-cxheck">
              <img src={burgerKLKaw} alt="bgkaw" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 10.00</p>
            </div>
            <div className="ccard b-chexck">
              <img src={burgerCheese} alt="bgc" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 12.99 </p>
            </div>
            <div className="ccard b-xcheck">
              <img src={burgerFriesChili} alt="bgf" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 12.99 </p>
            </div>
            <div className="ccard">
              <img src={burgerLembu} alt="bglembu" />
              <p className="card-caption"> Burger stack</p>
              <p className="card-caption"> RM 12.99</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <article className="footer-container ">
          <section className="header-1-wrapper">
            <h1 className="header-1 h2-size family-potta">Contact</h1>
            <div className="bottom-line"> </div>
          </section>

          <section className="location-wrapper">
            <div className="location-title-wrapper">
              <div className="hr-bg hr-body"></div>
                <div className="location-title h3-size">Location</div>
              <div className="hr-bg hr-body"></div>
            </div>

            <div className="location-google-map">
              <iframe
                title="burger-kaw-kaw"
                id="unique"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.5722119668735!2d101.73306111414558!3d3.2064354536934836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc383ecba6117d%3A0xe619ec92ac3ae3f8!2sKaw%20Kaw%20Burger%20Wangsa%20Maju!5e0!3m2!1sen!2smy!4v1610640042805!5m2!1sen!2smy"
                height="450"
                frameBorder="0"
                style={{ border: 0,width: '100%',margin:"2rem 0" }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>

            <div className="location-card-group  ">
              <div className="location-card ">
                <h2 className="h3-size"> About </h2>
                <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscinequemet, consectetur adipiscineque. </p>
              </div>
              <div className="location-card">
                <h2 className="h3-size"> Address </h2>
                <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscinequemet, consectetur adipiscineque. </p>
              </div>
              <div className="location-card">
                <h2 className="h3-size"> Partner </h2>
                <p className=""> Lorem ipsum dolor sit amet, consectetur adipiscinequemet, consectetur adipiscineque. </p>
              </div>
            </div>


            <img src={logo} alt="logo" className="logo" />
          </section>
        </article>
      </footer>
    </div>
  );
}

export default App;
