import { Links } from "../MenuLink/Links";
import "./Menu.css";
import logo from "../../assets/simbolo2.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

export default function Menu() {
  const [isOpen, setOpen] = useState(false);
  const showBurger = () => setOpen(!isOpen);

  return (
    <header>
      <div className="div_img">
        <Link to='/' alt="home" ><img src={logo} alt="logo" /></Link>
      </div>
      <div className="nav_bar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showBurger} />
        </Link>
      </div>
      <nav className={isOpen ? "nav_menu active" : "nav_menu"}>
        <ul className="nav_menu_itens" onClick={showBurger}>
          <li className="navbar_toggle">
            <Link to="#" className="menu-bars-closed">
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
    </header>
  );
}
