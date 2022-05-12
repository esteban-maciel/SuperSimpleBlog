import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Super Simple Blog</h1>
            <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/create">Create Blog</Link>
                <Link to="/logout">Log Out</Link>
            </div>
        </nav>
    );
}

export default Navbar;