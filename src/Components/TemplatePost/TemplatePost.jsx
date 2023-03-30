import styles from './TemplatePost.module.css';

export default function TemplatePost({ coverPhoto, title, children }){
    return(
        <article className={styles.templatePostContainer}>
            <div 
                className={styles.coverPhoto}
                style={ { backgroudImage: `url(${coverPhoto})`}}>

            </div>

            <h2 className={styles.title}>
                {title}
            </h2>

            <div className={styles.contentPostContainer}>
                {children}
            </div>

        </article>
    )
}