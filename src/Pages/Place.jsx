import React from "react";
import "./place.scss";
import Card from "../Card/Card";
import Grid1 from "../asset/img-1.png";
import Grid2 from "../asset/img-2.png";
import Grid3 from "../asset/img-3.png";
import Grid4 from "../asset/img-4.png";
import Grid5 from "../asset/img-5.png";
import Grid6 from "../asset/img-6.png";
import Grid7 from "../asset/img-7.png";
import Grid8 from "../asset/img-8.png";
import Grid9 from "../asset/img-9.png";
import Grid10 from "../asset/img-10.png";
import Grid11 from "../asset/img-11.png";
import Grid12 from "../asset/img-12.png";
import Grid13 from "../asset/img-13.png";
import Grid14 from "../asset/img-14.png";
import Grid15 from "../asset/img-15.png";
import Grid16 from "../asset/img-16.png";
import Settings from "../asset/setting.svg";

function Place(props) {
  return (
    <div className="container">
      <ul className="miniNav">
        <li className="mininav-list">Resturant</li>
        <li className="mininav-list">Cottage</li>
        <li className="mininav-list">Castle</li>
        <li className="mininav-list">Fantast city</li>
        <li className="mininav-list">Beach</li>
        <li className="mininav-list">Carbins</li>
        <li className="mininav-list">Off-gird</li>
        <li className="mininav-list">Farm</li>
        <button className="mininav-btn">
          <div className="btn-text">Location</div>
          <img src={Settings} alt="settings" className="settings" />
        </button>
      </ul>

      <div className="grid">
        <Card img={Grid6} />
        <Card img={Grid7} />
        <Card img={Grid8} />
        <Card img={Grid9} />
        <Card img={Grid1} />
        <Card img={Grid2} />
        <Card img={Grid3} />
        <Card img={Grid4} />
        <Card img={Grid5} />
        <Card img={Grid10} />
        <Card img={Grid11} />
        <Card img={Grid12} />
        <Card img={Grid13} />
        <Card img={Grid14} />
        <Card img={Grid15} />
        <Card img={Grid16} />
      </div>
    </div>
  );
}

export default Place;
