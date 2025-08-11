import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
const Navbar = ()=>(
    <div className="Navbar">
        <div className="Navbar_container">
            <h3 className="Navbar_title">ZAHRA</h3>
            <ul className="Nabar_list">
                <li>
                    <Link to="/">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <span>About Me</span>
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
)

export default Navbar;