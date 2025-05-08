import React from "react";
import ProjectItem from "./project-item";

const Projects = (props) => {
    return (
        <div data-section id='projects' className='mb-16'>
            <h2 className='mb-8 font-bold tracking-widest text-2xl underline text-surface-100   '>Projects</h2>
            <div className='grid grid-cols-1 gap-4'>
                {props.data.map(function(object, index){
                    return <ProjectItem
                        key={object.name}
                        name={object.name}
                        stars={object.stars}
                        lib={object.framework}
                        description={object.description}
                        href={object.href}
                        photo={object.photo}
                    />
                })}
            </div>
        </div>
    )
}

export default Projects