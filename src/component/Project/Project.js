import React, {useState, useEffect} from "react";
import './Project.css';
import ProjectItems from "./PROJECTS.json";
import SlideShow from "../SlideShow/SlideShow";

const Project = ()=>{

    const [project,setProject] = useState([]);

    useEffect(()=>{
        setProject(ProjectItems);
    },[]);
    return(
        <div className="Project">
            <h2 className="Projects_title">List Of Projects</h2>
            <div className="Project_items">
                {project.map((item,index)=>(
                    <div className="Project_item" key={index}>
                        <SlideShow data={item.imgs} id={`carousel-${index}`} className="Project_imgs"/>
                        <h3 className="Project_title">{item.title}</h3>
                        <p className="Project_desc">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;