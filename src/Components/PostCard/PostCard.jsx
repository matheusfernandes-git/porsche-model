import { Link } from "react-router-dom";
import MainButton from "../MainButton/MainButton";
import styles from "./Post.module.css";

export default function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem porsche"
        >
        </img>
        
        <h2 className={styles.title}>{post.titulo}</h2>

        <MainButton>Ver</MainButton>
      </div>
    </Link>
  );
}
