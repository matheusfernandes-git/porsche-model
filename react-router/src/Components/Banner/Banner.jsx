import styles from './Banner.module.css';
import coloredCircle from '../../assets/circulo_colorido.png';
import myPhoto from '../../assets/minha_foto.png'

export default function Banner(){
    return(
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.title}>
                    Salve!
                </h1>

                <p className={styles.paragraph}>
                    Welcome to my person space! i am front-end developer.
                </p>
            </div>

            <div className={styles.imagens}>
                <img 
                    className={styles.colored__circle}
                    src={coloredCircle}
                    aria-hidden={true}
                />
                <img 
                    className={styles.myPhoto}
                    src={myPhoto}
                    alt='Foto'
                />
            </div>
        </div>
    )
}