import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {username, email, password};

        setIsPending(true);

        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(user)
        })
        .then((res) => {
            setIsPending(false);
            navigate("/login", { replace: true});
        });
    }

    return (
        <div className="create">
            <h2>New User Registration</h2>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input
                    type="text"
                    required
                    value = {username}
                    onChange = {(e) => setUsername(e.target.value)}
                />
                <label>E-Mail</label>
                <input
                    type="text"
                    required
                    value = {email}
                    onChange = {(e) => setEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="text"
                    required
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                />
                {!isPending && <button type="submit">Register</button>}
                {isPending && <button disabled>Registering</button>}
            </form>
        </div>
    );
}

export default Register;