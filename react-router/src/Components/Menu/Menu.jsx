import styles from './Menu.module.css';
import MenuLink from '../MenuLink/MenuLink';

export default function Menu(){ 
    return(
        <header>
            <nav className={styles.navegation}>
               <MenuLink to='/'>
                    Home
               </MenuLink>
               <MenuLink to='/sobremim'>
                    About me
               </MenuLink>
            </nav>
        </header>
    )
}