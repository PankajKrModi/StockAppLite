import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import * as IoIcon from "react-icons/io";
import * as AiIcon from "react-icons/ai";

import { SidebarData } from './SidebarData';
import './navbar.css';
import { IconContext } from 'react-icons/lib';


function Navbar(){

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className='navbar'>
            <Link to='#' className ='menu-bars'>
                <AiIcon.AiOutlineBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar?'nav-menu active':'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='navbar-toggle'>
                <Link to='#' className ="menu-bars">
                     <AiIcon.AiOutlineClose/>
                </Link>
                </li>
                {SidebarData.map((item,index)=>{
                    return(
                        <li key = {index} className={item.className}>
                            <Link to={item.path}>
                              {item.icon}
                              <span>{item.title}</span>  
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    )
}
export default Navbar;