import styles from './Menu.module.css';
import MenuLink from '../MenuLink/MenuLink';
import porsche from '../../assets/simbolo.png'

export default function Menu(){ 
    return(
        <header>
            <nav className={styles.navegation}>
                
                <div className={styles.div__img}>
                    <img className={styles.img} src={porsche} alt="porsche"/>
                </div>

               <div className={styles.div__link}>
                   <MenuLink to='/'>
                        Home
                   </MenuLink>
                   <MenuLink to='/sobre'>
                        About
                   </MenuLink>
               </div>
            </nav>
        </header>
    )
}