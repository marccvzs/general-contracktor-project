import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div>
        <h3>Log In as:</h3>
        <div className="bg-white m-2 rounded">
            <Link to="/login/client">Client</Link>
        </div>
        <div className="bg-white m-2 rounded">
            <Link to="/login/contractor">Contractor</Link>
        </div>
        <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
    </div>
  )
}

export default Login