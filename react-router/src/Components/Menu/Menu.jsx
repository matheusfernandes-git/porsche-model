import styles from "./Menu.module.css";
import MenuLink from "../MenuLink/MenuLink";
import porsche from "../../assets/simbolo.png";
import Hamburger from 'hamburger-react';
import { useState } from "react";

export default function Menu() {

  // const links = [{
  //   title: Home,
  //   to: '/'
  // },{
  //   title: Models,
  //   to: '/models'
  // },{
  //   title: About,
  //   to: '/sobre'
  // }]

  const [isOpen, setOpen] = useState(false); 
  const showBurger = () => {
    console.log('teste')
    setOpen(!isOpen);
  }
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
          <Hamburger size={25} onToggle={showBurger}>
          </Hamburger>
        </div>
      </nav>
    </header>
  );
}
