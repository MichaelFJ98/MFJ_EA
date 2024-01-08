import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
//default layout of the website (navbar always rendered.)
function Layout(){
    window.sessionStorage.setItem("Shoppingcart", JSON.stringify([]));

    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    );
}

export default Layout