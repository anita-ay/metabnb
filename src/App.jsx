import "./App.css";
import React, { useState } from "react";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Features from "./Features/Features";
import Adventure from "./Adventure/Adventure";
import Nft from "./Nft/Nft";
import Footer from "./Footer/Footer";
import Place from "./Pages/Place";
import { Modal } from "./Modal/Modal";
import { Route, Switch } from "react-router-dom";
import Community from "./Pages/Community";
import Metaverse from "./Pages/Metaverse";
import crossIcon from "./asset/cross.png";
import metaMask from "./asset/meta-mask.png";
import walletConnect from "./asset/wallectconnect.png";
import chevronRight from "./asset/chevron-right.png";

function App() {
  const [modalIsShown, setModalIsShown] = useState(false);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };
  return (
    <div className="containe">
      <Header onOpen={showModalHandler} />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
            <Features />
            <Adventure />
            <Nft />
          </Route>
          <Route path="/place">
            <Place />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/nft">
            <Metaverse />
          </Route>
        </Switch>
      </main>
      <Footer />
      {modalIsShown && (
        <Modal onClose={hideModalHandler}>
          <div className="modal-heading">
            <p className="title">Connect Wallet</p>
            <div className="cross">
              <img
                src={crossIcon}
                alt="cross"
                className="cross icon"
                onClick={hideModalHandler}
              />
            </div>
          </div>
          <span className="sub-title">Choose your preferred wallet:</span>
          <div className="modal-buttons">
            <div className="wallet-type">
              <div className="wallet-box">
                <img src={metaMask} alt="Metamask" className="btn-logo" />
                <p className="btn-text">Metamask</p>
              </div>
              <img src={chevronRight} alt="chevron" className="chevron icon" />
            </div>
            <div className="wallet-type">
              <div className="wallet-box">
                <img src={walletConnect} alt="Metamask" className="btn-logo" />
                <p className="btn-text">WalletConnect</p>
              </div>
              <img src={chevronRight} alt="chevron" className="chevron icon" />
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
