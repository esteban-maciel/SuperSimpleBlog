import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { username, password };

        setIsPending(true);

        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(token => {
            localStorage.setItem('token', token);
        }).catch((err) => {
            console.log(err);
        })
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
            </form>
        </div>
    )
}

export default Login;