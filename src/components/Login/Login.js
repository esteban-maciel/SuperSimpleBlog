import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {username, password};
        setIsPending(true);

        const token = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        });
        

        localStorage.setItem('token', await token.text());
        localStorage.setItem('user', username);
        localStorage.setItem("loggedIn", true); 
        navigate("/home", {replace: true});
    }

    return (
        <div className="create">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type={"text"}
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label>Password</label>
                <input
                    type={"text"}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!isPending && <button type="submit">Log In</button>}
                {isPending && <button disabled>Logging In</button>}
                <div className="register-button">
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </div>
    );
}

export default Login;