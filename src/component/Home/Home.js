import React from "react";
import './Home.css';
import Project from '../Project/Project';

const Home = () => {
    const hireClick = ()=>{
        alert('Thanks');
    }
    return(
        <div className="Home">
            <div className="home_top">
                <div className="Home_text">
                    <span>Hello!</span>
                    <h3>I'm Zahra Mahmoodzadeh</h3>
                    <h2>A Freelance Web Developer</h2>
                    <button type="button" className="btn btn-outline-warning Home_btn" onClick={hireClick}>Hire me</button>
                </div>
                <div className="Home_img">
                    <img src="/personal_site/img/woman-developer.png" className="img-fluid" alt="HomeImage"></img>
                </div>
            </div>
            <Project />
        </div>
    )
}

export default Home