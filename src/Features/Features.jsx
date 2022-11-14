import React from "react";
import "./Feature.scss";
import Token from "../asset/mbtoken.png";
import Metamask from "../asset/metamask.png";
import Opensea from "../asset/opensea.png";

function Features(props) {
  return (
    <section class="section-featured section">
      <div class="container">
        <div class="logos">
          <img src={Token} alt="mbToken logo" />
          <img src={Metamask} alt="metamask logo" />
          <img src={Opensea} alt="Opensea logo" />
        </div>
      </div>
    </section>
  );
}

export default Features;
