import React from "react";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return <div>
        <h1>Header Goes here</h1>
        <Outlet />
        <h1>Footer Here?</h1>
    </div>
}

export default Layout;
