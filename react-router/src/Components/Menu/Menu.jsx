import styles from "./Menu.module.css";
import MenuLink from "../MenuLink/MenuLink";
import porsche from "../../assets/simbolo.png";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Menu() {
//   const [sideBar, setSideBar] = useState(false);

//   const showSideBar = () => {
//     setSideBar(!sideBar);
//   }

//   const closeSideBar = () => {
//     active(false);
//   };

  return (
    <header>
      <nav className={styles.navegation}>
        <div className={styles.div__img}>
          <img className={styles.img} src={porsche} alt="porsche" />
        </div>

        <div className={styles.div__link}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/models">Models</MenuLink>
          <MenuLink to="/sobre">About</MenuLink>
        </div>

        {/* <div>
          <FaBars onClick={showSideBar} />
          {sideBar && <SideBar active={setSideBar} />}
        </div>

        <FaTimes onClick={closeSideBar} /> */}
      </nav>
    </header>
  );
}
