import styles from './Error404.module.css';
import MainButton from '../../Components/MainButton/MainButton';
import { useNavigate } from 'react-router-dom';

export default function Error404(){
    const navigation = useNavigate();

    return(
        <>
        <div className={styles.contentContainer}>
            <span className={styles.text404}>404</span>

            <h1 className={styles.title}>
                Page not found
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
                <MainButton size='lg' color='color'>
                    Voltar
                </MainButton>
            </div>
        </div>

        <div className={styles.blankSpace}></div>
        </>
    )
}