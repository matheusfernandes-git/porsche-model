import Banner from "../Banner/Banner";
import styles from "./TemplatePost.module.css";

export default function TemplatePost({ src, title, children }) {
  return (
    <article className={styles.templatePostContainer}>
      <Banner src={src} 
      className={styles.coverPhoto}>
      </Banner>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.contentPostContainer}>{children}</div>
    </article>
  );
}
