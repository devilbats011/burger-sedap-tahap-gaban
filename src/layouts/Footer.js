import React from "react";
import logo from "burger-gambar/logo-4.svg";
import "scss/contact.scss";

function Footer() {
  return (
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
              style={{ border: 0, width: "100%", margin: "2rem 0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>

          <div className="location-card-group  ">
            <div className="location-card ">
              <h2 className="h3-size"> About </h2>
              <p className="">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscinequemet,
                consectetur adipiscineque.{" "}
              </p>
            </div>
            <div className="location-card">
              <h2 className="h3-size"> Address </h2>
              <p className="">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscinequemet,
                consectetur adipiscineque.{" "}
              </p>
            </div>
            <div className="location-card">
              <h2 className="h3-size"> Partner </h2>
              <p className="">
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscinequemet,
                consectetur adipiscineque.{" "}
              </p>
            </div>
          </div>

          <img src={logo} alt="logo" className="logo" />
        </section>
      </article>
    </footer>
  );
}

export default Footer;
