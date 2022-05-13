import { Link } from 'react-router-dom';

const BlogList = ( {blogs} ) => {

    return (
        <div className="blog-list">
            <h2>All Blogs</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog._id}>
                    <Link to={`/blogs/${blog._id}`}>
                        <h2>{blog.title}</h2>
                        <h3>{blog._id}</h3>
                        <p>Author: {blog.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;