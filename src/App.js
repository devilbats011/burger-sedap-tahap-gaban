import "./App.scss";
import burgerCheese from "burger-gambar/burger-cheese-1.jpg";
import burgerDouble from "burger-gambar/burger-double.jpg";
import burgerKLKaw from "burger-gambar/kl-burger-kawkaw.jpg";
import burgerLembu from "burger-gambar/burger-lembu-1.jpg";
import burgerFriesChili from "burger-gambar/burger-chili.jpg";
import Carousel from "react-bootstrap/Carousel";
import "scss/cards.scss";
import "scss/global.scss";
import "scss/navbar.scss";
import "scss/slider.scss";

/* 
#to-do
1. slider using bootstap done
2. navigation done
2.1 create contact layout
2.2 grid all the layout to responsive on going
3. implement context for bm|english | color white black mode

*/
function App() {
  return (
    <div className="app">
      <nav className="Navbar">
        <div className="Navbar-item glass">Cart</div>
      </nav>
      <main className="article">
        <Carousel className="custom-slider">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={burgerCheese}
              alt="First slide"
            />
            {/* <Carousel.Caption className="">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
            <div className="slider-wrapper glass family-potta">
              <h1 className="h2-size"> BURGER CHEESE GABAN</h1>
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

            <div className="slider-wrapper glass family-potta">
              <h1 className="h2-size"> Burger Double Gaban </h1>
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
            <div className="slider-wrapper glass family-potta">
              <h1 className="h2-size"> Burger Cheese Gaban </h1>
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
        <section className="footer-container ">
          <div className="header-1-wrapper">
            <h1 className="header-1 h2-size family-potta">Contact</h1>
            <div className="bottom-line"> </div>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default App;
