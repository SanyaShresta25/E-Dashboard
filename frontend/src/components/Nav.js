import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/signup');
    }

    return (
        <div>
            <img alt="logo" className='logo' src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"/>
            {
                auth ? <ul className="nav-ul">
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/add">Add Products</Link></li>
                    <li><Link to="/update">Update product</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/signup" onClick={logout}>Logout ({JSON.parse(auth).name})</Link></li>


                </ul>
                    : <ul className="nav-ul nav-right">
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            }
        </div>
    );
}

export default Nav;
