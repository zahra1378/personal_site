import React from "react";
import "./Layout.css";
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = ({children})=>(
    <div className="Layout">
        <Navbar />
            <main>
                <Outlet />
            </main>
        <Footer />
    </div>
)

export default Layout