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

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <div className="containe">
      <Header onOpen={showCartHandler} />
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
      {cartIsShown && (
        <Modal onClose={hideCartHandler}>
          <h1 onClick={hideCartHandler}>Hello</h1>
          <p>I am a modal window</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
