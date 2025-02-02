import React from "react";
import Image from "next/image";

function ExperienceItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all rounded-lg hover:bg-surface-200/70 hover:scale-105 cursor-pointer text-surface-600 hover:text-on-background">
            <div className="basis-1/4 mr-2">
                <Image src={props.logo} alt="Company Logo" width={100} height={100} className='object-contain object-top bg-surface-600 rounded-lg p-2' />
            </div>
            <div className='basis-3/4'>
                <a href={props.href} target="_blank" rel="noopener noreferrer" className='font-semibold transition-all hover:underline text-on-background'>{props.title} | {props.company} </a>
                <div className='mb-2'>{props.startDate} - {props.endDate}</div>
                <div className=' mb-4 text-justify'>{props.description}</div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2 text-on-background'>
                    {props.skills ? props.skills.map(function(object, index){
                        return <div key={object} className='bg-surface-400 py-1 px-3 rounded-full text-xs'>{object}</div>
                    }) : ""}
                </div>
            </div>
        </div>
    )
}

export default ExperienceItem