import React from "react";
import ProgressBar from "../../components/progressBar/ProgressBar";
import {IoLogoHtml5, IoLogoJavascript} from "react-icons/io";

import {DiJava, DiCss3} from "react-icons/di";
import {FaReact, FaBootstrap, FaDocker} from "react-icons/fa";
import {SiSpring, SiMysql, SiMongodb, SiPhp, SiDotnet} from "react-icons/si";

const MySkills = () => {

    return (
        <section className="container_skills" id="experience">

            <h4> What Skills I Have</h4>
            <h2>My Experience</h2>

            <div className="skills_section">
                <div className="skills_box">
                    <h1> Frontend</h1>

                    <div className="skills">
                        <ProgressBar value={90} description="HTML"> <IoLogoHtml5 fill="#e34c26" /></ProgressBar>
                        <ProgressBar value={90} description="CSS/SCSS/SASS"> <DiCss3 fill="#264de4" /> </ProgressBar>
                        <ProgressBar value={90} description="JavaScript"> <IoLogoJavascript fill="#F0DB4F" /> </ProgressBar>
                        <ProgressBar value={90} description="React.js"> <FaReact fill="#61DBFB"/></ProgressBar>
                        <ProgressBar value={80} description="Tailwind/Bootstrap"> <FaBootstrap fill="#563d7c"/></ProgressBar>

                    </div>




                </div>


                <div className="skills_box">
                    <h1>Backend</h1>

                    <div className="skills">
                        <ProgressBar value={90} description="Java"> <DiJava fill="#f89820"/></ProgressBar>
                        <ProgressBar value={90} description="Spring Framework"> <SiSpring fill="green"/></ProgressBar>
                        <ProgressBar value={80} description="MongoDB (NoSql)"> <SiMongodb fill="green"/></ProgressBar>
                        <ProgressBar value={75} description="MySQL/PostgreSQL"> <SiMysql /></ProgressBar>
                        <ProgressBar value={40} description="PHP"> <SiPhp /></ProgressBar>
                        <ProgressBar value={40} description="C#"> <SiDotnet /></ProgressBar>
                        <ProgressBar value={70} description="Docker/docker-compose"> <FaDocker fill="#0db7ed" /></ProgressBar>

                    </div>

                </div>


            </div>






        </section>
    )

}
export default MySkills;