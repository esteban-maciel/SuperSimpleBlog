import BlogList from '../BlogList/BlogList';
import Navbar from '../Navbar/Navbar';
import UseFetch from '../UseFetch/UseFetch';

const Home = () => { 
    const{data: blogs, isPending, error} = UseFetch('http://localhost:8080/blogs');

    return (
        <div className="home">
            <Navbar/>
            {error && <div>{error}</div>}
            {isPending && <div>{isPending}</div>}

            <BlogList blogs={blogs} title="All Blogs"/>
        </div>
    );
}

export default Home;