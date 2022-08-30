import React from 'react'

function About(props) {
    return (
        <div id="about">
            <div className="about">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempore eos error dolorem aliquid minus provident vero consequatur voluptate,
                </p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About
