import styles from './Error404.module.css';
import error404 from '../../assets/erro_404.png';
import MainButton from '../../Components/MainButton/MainButton';
import { useNavigate } from 'react-router-dom';

export default function Error404(){
    const navigation = useNavigate();

    return(
        <>
        <div className={styles.contentContainer}>
            <span className={styles.text404}>404</span>

            <h1 className={styles.title}>
                Ops! Page not found
            </h1>

            <p className={styles.paragraph}>
                are you sure this is what your were looking for?
            </p>

            <p className={styles.paragraph}>
                Wait for a moment and reload the page, or back to home page.
            </p>

            <div className={styles.ContainerButton}
                onClick={() => navigation(-1)}
            >
                <MainButton size='lg'>
                    Voltar
                </MainButton>
            </div>

            <img 
                className={styles.dogPhoto}
                src={error404} 
                alt="Cachorro de óculos"
            />
        </div>

        <div className={styles.blankSpace}></div>
        </>
    )
}