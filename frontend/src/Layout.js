import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

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