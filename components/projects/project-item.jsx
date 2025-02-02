import Image from 'next/image'

function ProjectItem(props) {
    return (
        <a href={props.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col transition-all bg-surface-200 hover:scale-105 brightness-75 hover:brightness-100 hover:z-10 rounded-lg">
            <Image src={props.photo} width={1000} height={1000} className='rounded-t-lg' alt='image'/>
            <div className='p-5'>
                <h1 className="mb-4 text-xl subpixel-antialiased">{props.name}</h1>
                <div className="text-surface-600 text-xs">{props.description}</div>
                <div className='text-surface-600 mt-4 flex flex-row items-center justify-between'>
                    <div className='text-xs font-medium tracking-widest uppercase'>
                        {props.lib}
                    </div>
                </div>
            </div>
            
        </a>
    )
}

export default ProjectItem