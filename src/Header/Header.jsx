// import { ReactComponent as Logo } from "../asset/";
import "./Header.scss";
import logo from "../asset/logo.png";
export function Header() {
  return (
    <nav className="nav">
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
      <ul className="header__ul">
        <li className="nav-link">
          <a href="home" className="link">
            Home
          </a>
        </li>
        <li className="nav-link">
          <a href="place" className="link">
            Place to stay
          </a>
        </li>
        <li className="nav-link">
          <a href="nft" className="link">
            NFTS
          </a>
        </li>
        <li class="nav-link">
          <a href="community" className="link">
            Community
          </a>
        </li>
      </ul>
      <button class="cta btn-small">Connect Wallet</button>
    </nav>
  );
}
