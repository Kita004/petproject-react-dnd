import React from "react";

const Header = ({createCharacter}) => {
    return <header>
        <button disabled>Home?</button>
        <div className="CRUD">
            <button disabled>New</button>
            <button disabled>Load</button>
            <button onClick={() => createCharacter()}>Save/Edit</button>
            <button>Delete</button>
        </div>
        <button disabled>Login/Logout</button>
    </header>
}

export default Header;
