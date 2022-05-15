import React from "react";
import photo from "../../assets/photo12.jpg";
import CardBox from "../../components/cardBox/CardBox";
import {SiSpring} from "react-icons/si";
import {FaReact} from "react-icons/fa";

const AboutMe = () => {

    return (
        <section className="container_about" id="about">

            <h2>About me</h2>
            <h4>Get to know</h4>


            <div className="about_me_section">
                <div className="image_container">
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

                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                    <button className="button2">Let's talk</button>
                </div>
            </div>
        </section>)
}
export default AboutMe;