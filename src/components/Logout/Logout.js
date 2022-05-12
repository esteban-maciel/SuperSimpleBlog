import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {

    localStorage.clear();    

    return (
        <div className="not-found">
            <h2>Successfully Logged Out!</h2>
            <Link to='/login'>Log Back In</Link>
        </div>
    );
}

export default Logout;