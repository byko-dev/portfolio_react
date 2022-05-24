import React from "react";
import ProjectBox from "../../components/projectBox/ProjectBox";
import androidPass from "../../assets/androidPass.png";
import windowsPass1 from "../../assets/winPass1.png";
import windowsPass2 from "../../assets/winPass2.png";
import SliderImages from "../../components/sliderImages/SliderImages";
import print3d1 from "../../assets/print3d_project/print1.png";
import print3d2 from "../../assets/print3d_project/print2.png";
import print3d3 from "../../assets/print3d_project/print3.png";
import print3d4 from "../../assets/print3d_project/print4.png";
import print3d5 from "../../assets/print3d_project/print5.png";
import print3d6 from "../../assets/print3d_project/print6.png";
import ship1 from "../../assets/ships1.png";
import ship2 from "../../assets/ships2.png";
import ship3 from "../../assets/ships3.png";
import androidJarlvpn from "../../assets/androidJarlvpn.png";
import jarlvpn1 from "../../assets/jarlvpn_project/jarl1.png";
import jarlvpn2 from "../../assets/jarlvpn_project/jarl2.png";
import jarlvpn3 from "../../assets/jarlvpn_project/jarl3.png";
import jarlvpn4 from "../../assets/jarlvpn_project/jarl4.png";
import jarlvpn5 from "../../assets/jarlvpn_project/jarl5.png";
import jarlvpn6 from "../../assets/jarlvpn_project/jarl6.png";
import jarlvpn7 from "../../assets/jarlvpn_project/jarl7.png";
import jarlvpn8 from "../../assets/jarlvpn_project/jarl8.png";

const Projects = () => {

    return (
        <section className="section_projects" id="services">
            <h4>My Recent Work</h4>
            <h2> Portfolio - Projects</h2>

            <div className="container_projects">
                <ProjectBox title="E-commerce web application for client"
                            backendLink="https://github.com/byko-dev/3d_print_api"
                            githubLink="https://github.com/zeroche-dev/3d_printing_e-commerce"
                            demoLink="http://157.230.104.23/"
                            description="Project created for a small 3D printing company. Application development used React.js, Spring Framework, MongoDB, and gridFS.">
                    <SliderImages images={[print3d1, print3d4, print3d2, print3d3, print3d5, print3d6]}/>
                </ProjectBox>
                <ProjectBox title="JarlVPN - Commercial VPN seller project."
                            demoLink="http://157.230.111.141:8080/"
                            description="I with my friends developed a VPN provider application for selling private dedicated servers with installed WireGuard. I created the backend for this application, automation scripts, and some parts of the frontend application.">
                    <SliderImages images={[jarlvpn1, jarlvpn2, jarlvpn3, jarlvpn4, jarlvpn5, jarlvpn6, jarlvpn7, jarlvpn8]}/>
                </ProjectBox>

                <ProjectBox title="JarlVPN - AdminPanel for android"
                            githubLink="https://github.com/byko-dev/jarlvpn_android_adminpanel"
                            description="Admin panel developed used to manage jarlVPN site by android devices. Application is connecting to site by rest API. Project developed in Android Studio using java.">
                    <img src={androidJarlvpn} />
                </ProjectBox>

                <ProjectBox title="Norwegian sea vessels tracker"
                            githubLink="https://github.com/byko-dev/vessel_tracking_react"
                            backendLink="https://github.com/byko-dev/vessels_tracking_api"
                            description="Web application created for a programming contest. Project developed using React.js, Spring Framework, PostgreSQL, and Docker.">
                    <SliderImages images={[ship1, ship2, ship3]}/>
                </ProjectBox>

                <ProjectBox title="Multiplatform Password Manager: Android App"
                            githubLink="https://github.com/byko-dev/password_manager_android"
                            description="Simple & Safe password manager for android devices. Passwords are saved on mongoDB database and encrypted using Aes256. Developed in Android Studio using Java.">
                    <img src={androidPass} />
                </ProjectBox>
                <ProjectBox title="Multiplatform Password Manager: Desktop Windows"
                            description="Similar password manager how on android but developed using C#."
                            githubLink="https://github.com/zeroche-dev/passwd_manager_forms_opensrc">
                    <SliderImages images={[windowsPass1, windowsPass2]}/>
                </ProjectBox>

            </div>
        </section>
    )

}
export default Projects;