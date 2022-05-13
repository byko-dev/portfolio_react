import React from "react";
import myPhoto from "../../assets/me.png";
import {BsLinkedin, BsGithub} from "react-icons/bs";
import {FaTwitterSquare} from "react-icons/fa";
const Home = () => {

    return (
        <div className="home_container" id="#">

            <div className="home_header">
                <h3>Hello, I'm </h3>
                <h1>Kacper Nowak <span> #bykodev </span></h1>
                <h4>Junior fullstack web developer</h4>
            </div>

            <div className="buttons_group">
                <button className="button1"> Download CV </button>
                <button className="button2"> Let's Talk </button>
            </div>

            <div className="home_content">
                <div className="vertical_icons">
                    <a href="https://www.linkedin.com/in/byko-dev/"><BsLinkedin /></a>
                    <a href="https://github.com/byko-dev"><BsGithub /></a>
                    <a><FaTwitterSquare /></a>
                </div>

                <div className="photo_background">
                    <img src={myPhoto}></img>
                </div>

                <p>Scroll down</p>
            </div>

            <ul className="circles">
                {Array.apply(0, Array(10)).map(function (x, i) {
                    return <li key={i} />;
                })}
            </ul>
        </div>
    )
}
export default Home;