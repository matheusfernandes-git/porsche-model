import styles from './MainButton.module.css'

export default function MainButton({ children, size, color }){
    return(
        <button className={`
            ${styles.mainButton}
            ${styles[size]}
            ${styles[color]}
        `}>
        {children}
        </button>
    )
}