import React from 'react';
import { Link } from 'react-router-dom';
import '../style/SidebarItem.css'
function SidebarItem({selected,Icon,title,path}) {
    return (
        <Link to={path} className={`sidebaritem ${selected && 'selected'}` }>
            <Icon className='sidebarItemicon'/>
            <h2 className='sidebarItemtitle'>{title}</h2>
        </Link>
    );
}

export default SidebarItem;