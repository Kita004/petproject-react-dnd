import React from "react";
import api from "./utils/api";

const Header = ({user, userCharacters, buildCharacter, setCharacterStates}) => {

    const saveCharacter = async () => {
        const newChar = await buildCharacter();

        let updatedUser = {...user, characters: [...userCharacters, newChar]}
        await api.put("/users/" + user.id, updatedUser);
    }

    const loadCharacter = async (id = 1) => {
        try {
            const res = await api.get("/characters/" + id);
            setCharacterStates(res.data);
        } catch (e) {
            if (e.response) {
                console.log(e.response.data);
            } else {
                console.log("ERROR: " + e);
            }
        }
    };

    return <header>
        <button disabled>Home?</button>
        <div className="CRUD">
            <button disabled /* trigger menu for choosing method */>Create</button>
            <button onClick={() => loadCharacter()}>Load</button>
            <button onClick={() => saveCharacter()}>Save</button>
            <button disabled>Delete</button>
        </div>
        <button disabled>Login/Logout</button>
    </header>
}

export default Header;
