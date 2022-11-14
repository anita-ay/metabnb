import React from "react";
import "./Adventure.scss";
import Card from "../Card/Card";
import Grid1 from "../asset/img-1.png";
import Grid2 from "../asset/img-2.png";
import Grid3 from "../asset/img-3.png";
import Grid4 from "../asset/img-4.png";
import Grid5 from "../asset/img-5.png";
import Grid6 from "../asset/img-6.png";
import Grid8 from "../asset/img-8.png";
import Grid7 from "../asset/img-7.png";

function Adventure(props) {
  return (
    <section className="section adventures adventure__inspiration">
      <div className="container">
        <h1 className="secondary-heading">
          Inspiration for your next Adventure
        </h1>
        <div className="grid">
          <Card img={Grid1} />
          <Card img={Grid2} />
          <Card img={Grid3} />
          <Card img={Grid4} />
          <Card img={Grid5} />
          <Card img={Grid6} />
          <Card img={Grid7} />
          <Card img={Grid8} />
        </div>
      </div>
    </section>
  );
}

export default Adventure;
