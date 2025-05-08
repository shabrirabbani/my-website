import React from "react";

function NavItem(props) {
    return (
        <a href={props.href} className='flex flex-row py-3 items-center group' onClick={props.onClick}>
            <div className={props.active ? 'mr-4 text-surface-600 transition-all group-hover:text-primary-100' : 'mr-4 text-surface-200 transition-all group-hover:text-primary-100'}>{props.num}</div>
            <div className={props.active ? 'w-16 h-0.5 bg-surface-600 mr-4 transition-all group-hover:w-16 group-hover:bg-primary-100' : 'w-8 h-0.5 bg-surface-100 mr-4 transition-all group-hover:w-16 group-hover:bg-primary-100'}/>
            <div className={props.active ? 'transition-all text-surface-600 group-hover:text-primary-100' : 'transition-all text-surface-100 group-hover:text-primary-100'}>{props.name}</div>
        </a>
    )
}

export default NavItem