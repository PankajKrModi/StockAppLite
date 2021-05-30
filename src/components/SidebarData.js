import React from 'react';
import * as AiIcon from "react-icons/ai";

export const SidebarData = [
    {
        title: 'DashBoard',
        path: '/',
        icon: <AiIcon.AiFillDashboard/>,
        className:'nav-text'
    },
    {
        title: 'Users',
        path: '/users',
        icon: <AiIcon.AiOutlineUser/>,
        className:'nav-text'
    },
    {
        title: 'Documents',
        path: '/documents',
        icon: <AiIcon.AiFillBook/>,
        className:'nav-text'
    },
    {
        title: 'Application',
        path: '/application',
        icon: <AiIcon.AiOutlineAppstore/>,
        className:'nav-text'
    }
] 