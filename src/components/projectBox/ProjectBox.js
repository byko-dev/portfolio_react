import React from "react";
import Button from "../button/Button";

const ProjectBox = ({children, title, description, githubLink, backendLink, demoLink}) => {

    return (
        <div className="container_project_box">
            <div className="photo_project_box">
                {children}
            </div>
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="project_button_group">
                {demoLink != undefined? <Button size="small" filled={false} onClick={() => window.location.href = demoLink}>Live Demo</Button> : <></>}
                {backendLink != undefined? <Button size="small" filled={false} onClick={() => window.location.href = backendLink}>Github backend</Button>: <></>}
                <Button size="small" filled={true} onClick={() => window.location.href = githubLink}>Github</Button>
            </div>
        </div>
    )

}
export default ProjectBox;