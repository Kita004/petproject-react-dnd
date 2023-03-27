import React from "react";
import {Outlet} from "react-router-dom";

const Layout = ({header}) => {
    return <div className="App">
        {header}
        <Outlet />
    </div>
}

export default Layout;
