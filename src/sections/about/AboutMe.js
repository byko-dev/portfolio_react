import React from "react";
import photo from "../../assets/photo12.jpg";
import CardBox from "../../components/cardBox/CardBox";
import {SiSpring} from "react-icons/si";
import {FaReact} from "react-icons/fa";
import Button from "../../components/button/Button";

const AboutMe = () => {

    return (
        <section className="container_about" id="about">

            <h2>About me</h2>
            <h4>Get to know</h4>

            <div className="about_me_section">
                <div className="image_container" data-aos="zoom-in">
                    <img src={photo} />
                </div>
                <div className="content_container_about">
                    <div className="card_boxes_section">
                        <CardBox title="Frontend"
                                 description="I am experienced with creating frontend application particularly in reactjs library.">
                            <FaReact fill="#61DBFB" />
                        </CardBox>
                        <CardBox title="Backend"
                                 description="I have experience in creating server-side applications in the concept of rest api and mvc.">
                            <SiSpring fill="green" />
                        </CardBox>
                    </div>

                    <p>I enjoy being challenged and engaging with projects that require me to work outside my comfort and
                        knowledge set, as continuing to learn new languages and development techniques are important to me.
                        Flexible and adaptable to demands of changing work environments, team player and also independently responsible.
                        I love to challenge in programming competitions like a hackathon and take part in meetings about it and web security.</p>
                    <Button filled={true} size={"big"} onClick={() => window.location="#contact"}> Let's Talk </Button>
                </div>
            </div>
        </section>)
}
export default AboutMe;