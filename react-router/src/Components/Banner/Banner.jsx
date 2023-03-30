import styles from "./Banner.module.css";
import img from "../../assets/carousel-extra.png";

export default function Banner() {
  return (
    <header className={styles.header}>
      <img src={img}/>
    </header>
  );
}