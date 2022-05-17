import React from "react";
import myPhoto from "../../assets/me.png";
import {BsLinkedin, BsGithub} from "react-icons/bs";
import {FaTwitterSquare} from "react-icons/fa";
import Button from "../../components/button/Button";
const Home = () => {

    return (<section>
            <div className="home_container" id="#">

                <div className="home_header">
                    <h3>Hello, I'm </h3>
                    <h1>Kacper Nowak <span> #bykodev </span></h1>
                    <h4>Junior fullstack web developer</h4>
                </div>

                <div className="buttons_group">
                    <Button filled={false} size={"big"}> Download CV </Button>
                    <Button filled={true} size={"big"} onClick={() => window.location="#contact"}> Let's Talk </Button>
                </div>

                <div className="home_content">
                    <div className="vertical_icons">
                        <a target="_blank" href="https://www.linkedin.com/in/byko-dev/"><BsLinkedin /></a>
                        <a target="_blank" href="https://github.com/byko-dev"><BsGithub /></a>
                        <a target="_blank" href="https://twitter.com/bykodev"><FaTwitterSquare /></a>
                    </div>

                    <div className="photo_background">
                        <img src={myPhoto}></img>
                    </div>

                    <a href="#footer">Scroll down</a>
                </div>
            </div>

            <ul className="circles">
                {Array.apply(0, Array(10)).map(function (x, i) {
                    return <li key={i} />;
                })}
            </ul>
        </section>)
}
export default Home;