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
                <ProjectBox title="Android Password Manager using MongoDB and Java"> <SliderImages images={[windowsPass1, windowsPass2]}/> </ProjectBox>
                <ProjectBox title="Android Password Manager using MongoDB and Java"> <img src={androidPass} /> </ProjectBox>
                <ProjectBox title="Android Password Manager using MongoDB and Java"> <SliderImages images={[print3d1, print3d2]}/>  </ProjectBox>
                <ProjectBox title="Android Password Manager using MongoDB and Java"> <SliderImages images={[ship1, ship2, ship3]}/>  </ProjectBox>

            </div>


        </section>
    )

}
export default Projects;