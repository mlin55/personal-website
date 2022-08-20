import { useEffect, useState } from "react";
import Resume from "../Resume.pdf";

function Navbar() {
  const [backgroundColor, setBackgroundColor] = useState("#070C20");

  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setBackgroundColor("#070C20");
      } else {
        setBackgroundColor("#0662a4");
      }
    };
  });

  return (
    <div className="navbar-fixed">
      <nav>
        <div
          className="nav-wrapper"
          style={{ backgroundColor: backgroundColor }}
        >
          <a href="/" className="brand-logo" id="logo">
            Matthew Lin
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href={Resume} target="_blank">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
