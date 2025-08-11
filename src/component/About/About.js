import React from "react";
import './About.css'

const About = ()=>(
    <div className="About">
        <div className="About_me">
            <h3>Who am I</h3>
            <p>I'm Zahra, a 25-year-old Computer Engineering graduate from Iran University of Science and Technology. I'm skilled in advanced Python, with experience in SQL, Git, and basic networking. On the front-end, I’ve built various projects using HTML, CSS, SASS, JavaScript, and React.
            <br/>
            My final project focused on designing a reinforcement learning–based algorithm for decision-making and resource allocation in edge computing systems. I also have 2 years of experience as a software analyst in a payment company. I'm currently aiming to work as a freelance front-end developer with a strong focus on UI development and web technologies.</p>
            <div className="skills">
                <h4>My skills : </h4>
                <div className="icon_container">
                    <i className="fa-brands fa-github"></i>
                </div>
                <div className="icon_container">
                    <i className="fa-solid fa-database"></i>
                </div>
                <div className="icon_container">
                    <i className="fa-brands fa-html5"></i>
                </div>
                <div className="icon_container">
                    <i class="fa-brands fa-css3-alt"></i>
                </div>
                <div className="icon_container">
                    <i className="fa-brands fa-js"></i>
                </div>
                <div className="icon_container">
                    <i class="fa-brands fa-python"></i>
                </div>
            </div>
        </div>
    </div>
)

export default About;