import styles from "./Banner.module.css";

export default function Banner({ src }) {
  return (
    <div className={styles.container}>
      <img src={src} />
    </div>
  );
}
