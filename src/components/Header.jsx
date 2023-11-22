import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [menuClass, setMenuClass] = useState("");

  return (
    <header className="app-header">
      <div className="container app-header-container">
      <Logo   />

        <button onClick={() => setMenuClass("open-menu")} className="burger">
          <i className="fa fa-bars"></i>
        </button>
        <div className={`app-header-right ${menuClass}`}>
          <nav>
            <button onClick={() => setMenuClass("")} className="close-menu">
              <i className="fa fa-times"></i>
            </button>
            <ul>
              <li>
                <a href="#nav">Home</a>
              </li>
              <li>
                <a href="#nav">
                  Landings <i className="fa fa-angle-down"></i>
                </a>
              </li>
              <li>
                <a href="#nav">
                  Pages <i className="fa fa-angle-down"></i>
                </a>
              </li>
              <li>
                <a href="#nav">Docs</a>
              </li>
              <li>
                <a href="#nav">Help</a>
              </li>
            </ul>
          </nav>
          <button className="get-started">Get it now</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
