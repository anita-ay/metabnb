import React, { useState } from "react";
import "./Header.scss";

import metaLogo from "../asset/meta-logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

function Header(props) {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    setShowNav(!showNav);
    console.log(showNav);
  };
  return (
    <header className={`header ${showNav ? "nav-open" : ""}`}>
      <a href="/" className="header__logo">
        <img src={metaLogo} alt="metabnb logo" className="logo" />
      </a>
      <nav className={`nav `}>
        <ul className="nav__list">
          <li>
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>
          <li>
            <Link to="place" className="nav__link">
              Place to stay
            </Link>
          </li>
          <li>
            <Link to="nft" className="nav__link">
              NFTS
            </Link>
          </li>
          <li>
            <Link to="community" className="nav__link">
              Community
            </Link>
          </li>
        </ul>
      </nav>
      <button className="connect nav__link cta" onClick={props.onOpen}>
        Connect wallet
      </button>
      <button class="btn-mobile-nav">
        <AiOutlineMenu className="menu" onClick={handleNav} />
        <AiOutlineClose className="close" onClick={handleNav} />
      </button>
    </header>
  );
}

export default Header;
