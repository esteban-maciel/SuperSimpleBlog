import Navbar from "../Navbar/Navbar";
import BlogList from "../BlogList/BlogList";

const NewHome = () => {

    const getBlogs = async () => {
        
        const blogs = await fetch('http://localhost:8080/blogs', {
            method: 'GET', 
            headers: {"Application-Type": "application/json"}
        });

        localStorage.setItem("guh", blogs);
        console.log(blogs);
    }

    return (
        <div className="home">
            <Navbar/>
            <BlogList blogs={getBlogs()}/>
        </div>
    );  
}

export default NewHome;