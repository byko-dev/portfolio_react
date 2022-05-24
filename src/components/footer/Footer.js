import React from "react";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {FaTwitterSquare} from "react-icons/fa";

const Footer = () => {

    return (<footer className="section_footer" id="footer">
        <div className="circle_footer"></div>
        <div className="container_footer">
            <div className="footer_icon">

                <a target="_blank" href="https://www.linkedin.com/in/byko-dev/"><BsLinkedin /></a>
                <a target="_blank" href="https://github.com/byko-dev"><BsGithub /></a>
                <a target="_blank" href="https://twitter.com/bykodev"><FaTwitterSquare /></a>
            </div>

            <p>Developed by<a target="_blank" href="https://github.com/byko-dev"> byko-dev</a> 2022</p>


        </div>

    </footer>)
}
export default Footer;