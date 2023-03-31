import styles from "./Banner.module.css";

export default function Banner({ src }) {
  return (
    <header className={styles.header}>
      <img src={src}/>
    </header>
  );
}