import styles from "./Highlight.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel  from 'react-bootstrap/Carousel';
import img from "../../assets/carousel.png";
import img2 from '../../assets/carousel2.png';
import img3 from '../../assets/carousel3.png';


export default function Highlights() {
  return (
    <header className={styles.header}>
      <Carousel>
          <Carousel.Item >
            <div style={{ backgroundImage: `url(${img})` }}></div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ backgroundImage: `url(${img2})` }}></div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ backgroundImage: `url(${img3})` }}></div>
          </Carousel.Item>
        </Carousel>
    </header>
  );
}