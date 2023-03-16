import styles from "./HomePage.module.css";
import posts from "../../json/posts.json";
import PostCard from "../../Components/PostCard/PostCard";

export default function HomePage() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        );
      })}
    </ul>
  );
}
