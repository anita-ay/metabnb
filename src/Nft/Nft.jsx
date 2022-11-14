import React from "react";
import "./Nft.scss";
import NftImg from "../asset/meta3d.png";

function Nft(props) {
  return (
    <section className="section-nft ">
      <div className="nft">
        <div className="nft-text">
          <h1 className="nft-heading">Metabnb NFTs</h1>
          <p className="nft-info">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our customer
            access to loads of our exclusive services.
          </p>
          <button className="nft-btn cta">Learn more</button>
        </div>
        <div className="nft-img">
          <img src={NftImg} alt="meta" />
        </div>
      </div>
    </section>
  );
}

export default Nft;
