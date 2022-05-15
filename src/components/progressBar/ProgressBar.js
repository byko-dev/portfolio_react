import React from "react";

const ProgressBar = ({value, description, children}) => {

    return (
        <div className="section_progress_bar">
            {children}
            <div className="container">
                <p>{description}</p>
                <div className="progressbar_container">
                    <div className="progressbar_complete" style={{width: `${value}%`}}>
                        <div className="progressbar_liquid"></div>
                    </div>
                    <span className="progress">{value}%</span>
                </div>
            </div>
        </div>


    )

}
export default ProgressBar;