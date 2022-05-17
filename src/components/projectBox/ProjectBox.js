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
            <div>
                <Button filled={true} onClick={() => window.location.href = githubLink}>Github</Button>
                {backendLink == undefined? <Button  filled={false} className="button2" onClick={() => window.location.href = backendLink}>Github backend</Button>: <></>}
                {demoLink == undefined? <Button filled={false} className="button1" onClick={() => window.location.href = demoLink}>Live Demo</Button> : <></>}
            </div>
        </div>
    )

}
export default ProjectBox;