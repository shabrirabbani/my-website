import React from "react";

const About = (props) => {
    return (
        <div data-section id='about' className='mb-16 group'>
            <div className='text-surface-200 text-justify'>
                {props.data.about.map(function(paragraph, index){
                    return <div key={index} className='mb-6'>{paragraph}</div>
                })}
            </div>
        </div>
    )
}

export default About