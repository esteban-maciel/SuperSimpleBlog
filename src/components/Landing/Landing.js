import { Link } from "react-router-dom";

const Landing = () => {

    return (
        <div className="create">
            <h1>Super Simple Blog</h1>
            <div className="login-register">
                <Link to="/login">
                    <button type="button">Login</button>
                </Link>
                <Link to="/register">
                    <button type="button">Register</button>
                </Link>
            </div>

            
            
        </div>
    );
}

export default Landing;