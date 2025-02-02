import React from "react";

function EducationItem(props) {
    return (
        <div className="group flex flex-row mb-4 p-5 transition-all bg-background hover:bg-surface-200/70 rounded-lg cursor-pointer">
            <div className='mr-2 text-surface-600 text-xs basis-1/4'>{props.startDate} {checkEndDate(props)}</div>
            <div className='basis-3/4'>
                <div target="_blank" rel="noopener noreferrer" className='font-medium transition-all'>{props.subject} ({props.degree})</div>
                <div className='text-surface-600 mb-4'>{props.university}</div>
                <div className='text-surface-600'>{props.description}</div>
            </div>
        </div>
    )
}

function checkEndDate(props) {
    if (!props.endDate) {
        return '';
    } else {
        return ('- ' + props.endDate); 
    }  
}

export default EducationItem