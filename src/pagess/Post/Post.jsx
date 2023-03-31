import styles from "./Post.module.css";

import { Route, Routes, useParams } from "react-router-dom";
import TemplatePost from "../../Components/TemplatePost/TemplatePost";
import posts from "../../json/posts.json";
import ReactMarkdown from "react-markdown";
import "./Post.css";
import Error404 from "../Error404/Error404";
import PostCard from "../../Components/PostCard/PostCard";

export default function Post() {
  const params = useParams();

  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <Error404 />;
  }

  const recommendedPosts = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id) //Ordenando o post em ordem decrescente.
    .slice(0, 5); //Pegando somente 5 posts.

  return (
    <Routes>
        <Route
          index
          element={
            <TemplatePost
              src={`/assets/posts/${post.id}/banner.png`}
              title={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>

              <h2 className={styles.recommendedPostTitle}>
                Outros modelos que você pode gostar
              </h2>

              <ul className={styles.recommendedPost}>
                {recommendedPosts.map((post) => (
                  <li key={post.id}>
                    <PostCard post={post} />
                  </li>
                ))}
              </ul>
            </TemplatePost>
          }
        />
    </Routes>
  );
}
