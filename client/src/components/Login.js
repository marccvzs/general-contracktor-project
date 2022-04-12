import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="container col-start-5">
        <form>
            <div className="flex items-center bg-slate-500 rounded-full">
                <div>
                    <span className="p-3.5 text-2xl font-bold">
                        <input placeholder="Username" type="text" className="bg-slate-500"/>
                    </span>
                </div>
            </div>
            <div  className="flex items-center bg-slate-500 rounded-full">
                <div>
                    <span className="p-3.5 text-2xl font-bold">
                        <input placeholder="Password" type="text" className="bg-slate-500"/>                </span>
                </div>
                <input type="submit" className="hover:bg-blue-400 rounded-full hover:ring-slate-600"/>
            </div>
        </form>
        <span>Don't have an account? <Link to="/signup">Sign Up</Link></span>
    </div>
  )
}

export default Login