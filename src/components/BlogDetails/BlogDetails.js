import { useNavigate, useParams } from 'react-router-dom';
import UseFetch from '../UseFetch/UseFetch';

const BlogDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: blog, error, isPending } =  UseFetch('http://localhost:8080/blogs/' + id);

    const handleClick = () => {
        fetch('http://localhost:8080/blogs/' + blog._id, {
            method: 'DELETE'
        }).then(() => {
            navigate("/home", {replace: true});
        })
    }

    const belongsToUser = (blog.author === localStorage.getItem("user"));

    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <article >
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                {belongsToUser && <button onClick={handleClick}>Delete</button>}
                
            </article>
        </div>
     );
}
 
export default BlogDetails;