import styles from "./Banner.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Carousel  from 'react-bootstrap/Carousel';
import img from "../../assets/carousel.png";
import img2 from '../../assets/carousel2.png';
import img3 from '../../assets/carousel3.png';


export default function Banner() {

  return (
    <header className={styles.header}>
      <div>
        <Carousel>
          <Carousel.Item>
            <img src={img} alt="" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} alt="img1" />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} alt="img1" />
          </Carousel.Item>
        </Carousel>
      </div>
    </header>
  );
}
