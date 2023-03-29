import styles from "./Menu.module.css";
import MenuLink from "../MenuLink/MenuLink";
import porsche from "../../assets/simbolo.png";
import Hamburger from 'hamburger-react';
import { useState } from "react";

export default function Menu() {
  const [isOpen, setOpen] = useState(false); 

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

        <div className={styles.container__burger}>
          <Hamburger size={25} onToggle={toogle => {
            if(toogle){

            }else{
              console.log('closed')
            }
          }}>
          </Hamburger>
        </div>
      </nav>
    </header>
  );
}
