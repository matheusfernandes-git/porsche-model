import { Links } from "../MenuLink/Links";
import css from "./Menu.css";
import porsche from "../../assets/simbolo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);
  const showBurger = () => setOpen(!isOpen);

  return (
    <header>
      <div className="div_img">
        <img src={porsche} alt="porsche" />
      </div>

      <IconContext.Provider value={{}}>
        <div className="nav_bar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showBurger} />
          </Link>
        </div>
        <nav className={isOpen ? "nav_menu active" : "nav_menu"}>
          <ul className="nav_menu_itens" onClick={showBurger}>
            <li className="navbar_toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {Links.map((link, index) => {
              return (
                <li key={index} className={link.cName}>
                  <Link to={link.to}>{link.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </header>
  );
}
