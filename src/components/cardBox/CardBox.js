import React from "react";

const CardBox = ({children, title, description}) => {

    return (
        <div className="container_card_box">
            <div className="description_box"></div>

            <div className="description_content" >
                <h4>{title}</h4>
                <h5>{description}</h5>
            </div>

            <div className="icon_box" data-aos="fade-right" > {children} </div>
        </div>
    )

}
export default CardBox;