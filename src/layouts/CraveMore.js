import React from 'react'
import burgerCheese from "burger-gambar/burger-cheese-1.jpg";
import burgerKLKaw from "burger-gambar/kl-burger-kawkaw.jpg";
import burgerLembu from "burger-gambar/burger-lembu-1.jpg";
import burgerFriesChili from "burger-gambar/burger-chili.jpg";
import "scss/cards.scss";

function CraveMore() {
    return (
        <main className="article">
        <section className="article-container ">
          <div className="header-1-wrapper">
            <h1 className="header-1 h2-size family-potta">
              Craving for more?
            </h1>
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
    )
}

export default CraveMore

