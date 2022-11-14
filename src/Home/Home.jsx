import React from "react";
import HeroImg from "../asset/hero-meta.png";
import "./Home.scss";

function Home(props) {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text">
          <h1 className="heading-primary">
            Rent a <strong className="purple">Place</strong> away from <br />
            <strong className="purple"> Home</strong> in the
            <strong className="purple"> Metaverse</strong>
          </h1>
          <p className="hero__description">
            We provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <form className="search">
            <input
              type="text"
              className="search-input"
              placeholder="Search for location"
            />
            <button className="search-button btn-small">Search</button>
          </form>
        </div>
        <div className="hero-img-box">
          <img src={HeroImg} alt="metaverse home" className="hero__img" />
        </div>
      </div>
    </section>
  );
}

export default Home;
