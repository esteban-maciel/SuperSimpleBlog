import { Navigate } from "react-router-dom";

const BlogDetails = (id) => {

    const navigate = Navigate();

    const blog = (id) => {
        fetch('http://localhost:8080/blogs/' + id, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(blog);
    }

    const handleClick = () => {
        fetch('http://localhost:8080/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/home', {replace: true});
        });
    }

    return (
        <div className="blog-details">
            <h1>{id}</h1>
            
            <article >
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        </div>
    );
}