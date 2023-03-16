import { useParams } from "react-router-dom"
import TemplatePost from "../../Components/TemplatePost/TemplatePost";
import posts from '../../json/posts.json'

export default function Post(){
    const params = useParams();

    const post = posts.find((post) => {
        return post.id === Number(params.id);
    })

    return (
        <TemplatePost 
            coverPhoto= {`/assets/posts/${post.id}/capa.png`}
            title={post.titulo}>
                wefjknwei
        </TemplatePost>
    )
}