import React from "react";

const Header = ({createCharacter}) => {
    return <header>
        <button disabled>Home?</button>
        <div className="CRUD">
            <button onClick={() => createCharacter()}>New</button>
            <button disabled>Load</button>
            <button disabled>Save/Edit</button>
            <button disabled>Delete</button>
        </div>
        <button disabled>Login/Logout</button>
    </header>
}

export default Header;
