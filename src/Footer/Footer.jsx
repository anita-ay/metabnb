import React from "react";
import "./Footer.scss";
import metaLogo from "../asset/meta-logo.png";
import { ReactComponent as Facebook } from "../asset/facebook.svg";
import { ReactComponent as Instagram } from "../asset/instagram.svg";
import { ReactComponent as Twitter } from "../asset/twitter.svg";

function Footer(props) {
  return (
    <footer class="footer section">
      <div class="container grid grid--footer">
        <div class="logo-col">
          <a href="/" class="footer-logo">
            <img src={metaLogo} alt="Omnifood Logo" class="logo" />
          </a>
          <ul class="social-links">
            <li>
              <a class="footer-link" href="/">
                <Facebook />
              </a>
            </li>
            <li>
              <a class="footer-link" href="/">
                <Instagram />
              </a>
            </li>
            <li>
              <a class="footer-link" href="/">
                <Twitter />
              </a>
            </li>
          </ul>
          <p class="copyright">Copyright &copy; 2023 Metabnb</p>
        </div>
        {/* <div class="address-col">
          <p class="footer-heading">Contact us</p>
          <address class="contacts">
            <p class="address">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a class="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a class="footer-link" href="mailto:hello@omnifood.com">
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div> */}
        <nav class="nav-col">
          <p class="footer-heading">Community</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="/">
                NFT
              </a>
            </li>
            <li>
              <a class="footer-link" href="/">
                Tokens
              </a>
            </li>
            <li>
              <a class="footer-link" href="/">
                Landlords
              </a>
            </li>
            <li>
              <a class="footer-link" href="/">
                Discord
              </a>
            </li>
          </ul>
        </nav>
        <nav class="nav-col">
          <p class="footer-heading">Places</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="/">
                Castle
              </a>
            </li>
            <li>
              <a class="footer-link" href="/">
                Farms
              </a>
            </li>
            <li>
              <a class="footer-link" href="/">
                Beach
              </a>
            </li>
            <li>
              <a class="footer-link" href="/">
                Learn more
              </a>
            </li>
          </ul>
        </nav>
        <nav class="nav-col">
          <p class="footer-heading">About us</p>
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="/">
                Road map
              </a>
            </li>
            <li>
              <a class="footer-link" href="/">
                Creators
              </a>
            </li>
            <li>
              <a class="footer-link" href="/">
                Career
              </a>
            </li>
            <li>
              <a class="footer-link" href="/">
                Contact us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
