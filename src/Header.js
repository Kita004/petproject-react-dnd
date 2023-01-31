import React from "react";

const Header = () => {
    return <header>
        <button>Home?</button>
        <div className="CRUD">
            <button>New</button>
            <button>Load</button>
            <button>Save/Edit</button>
            <button>Delete</button>
        </div>
        <button>Login/Logout</button>
    </header>
}

export default Header;
