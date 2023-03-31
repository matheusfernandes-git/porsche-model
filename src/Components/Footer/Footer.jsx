import styles from './Footer.module.css';
import imagem from '../../assets/simbolo2.png'

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <img src={imagem} alt=""/>
        </footer>
    )
}