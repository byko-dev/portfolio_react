import React from "react";
import ProjectBox from "../../components/projectBox/ProjectBox";
import androidPass from "../../assets/androidPass.png";
import windowsPass1 from "../../assets/winPass1.png";
import windowsPass2 from "../../assets/winPass2.png";
import SliderImages from "../../components/sliderImages/SliderImages";
import print3d1 from "../../assets/print1.png";
import print3d2 from "../../assets/print2.png";
import ship1 from "../../assets/ships1.png";
import ship2 from "../../assets/ships2.png";
import ship3 from "../../assets/ships3.png";

const Projects = () => {

    return (
        <section className="section_projects" id="services">
            <h4>My Recent Work</h4>
            <h2> Portfolio - Projects</h2>

            <div className="container_projects">
                <ProjectBox title="Multiplatform Password Manager: Android MainPage"
                            description="Simple & Safe password manager for android devices. Passwords are saved on mongoDB database and encrypted using Aes256. Developed in Android Studio using Java.">
                    <img src={androidPass} />
                </ProjectBox>
                <ProjectBox title="Multiplatform Password Manager: Desktop Windows"
                            description="Similar password manager how on android but developed using C#.">
                    <SliderImages images={[windowsPass1, windowsPass2]}/>
                </ProjectBox>
                <ProjectBox title="E-commerce web application for client"
                            description="Project created for small 3D printing company. Application developed used React.js, Spring Framework, MongoDB and gridFS."> <SliderImages images={[print3d1, print3d2]}/>  </ProjectBox>
                <ProjectBox title="Norwegian sea vessels tracker"
                            githubLink="https://github.com/byko-dev/vessel_tracking_react"
                            backendLink="https://github.com/byko-dev/vessels_tracking_api"
                            demoLink="https://github.com/byko-dev/portfolio_react"
                            description="Web application created for programming contest where i set seventh place of 33 participants. Project developed using React.js, Spring Framework, PostgreSQL and Docker.">
                    <SliderImages images={[ship1, ship2, ship3]}/>
                </ProjectBox>

            </div>


        </section>
    )

}
export default Projects;