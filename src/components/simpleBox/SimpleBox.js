import React from "react";

const SimpleBox = ({title, description, link, children}) => {

    return (
        <div data-aos="fade-right" className="container_simple_box">
            {children}
            <h3>{title}</h3>
            <h5>{description}</h5>
            <a href={link} target="_blank">Send a message</a>
        </div>
    )

}
export default SimpleBox;