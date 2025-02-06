import React from "react";
import '../globals.css';
import SidebarWithoutPic from "../components/SidebarWithoutPic";
import Topnav from "../components/Topnav";

export default function UserProfileLaayout( {children} : {children: React.ReactNode} ) {
    return (
        <>
            <SidebarWithoutPic />
            <Topnav />
            {children}
        </>
    )
}