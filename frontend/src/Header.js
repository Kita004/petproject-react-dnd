import React from "react";
import api from "./utils/api";
import {useNavigate} from "react-router-dom";

const Header = ({user, setUser, userCharacters, setUserCharacters, buildCharacter, setCharacterStates}) => {
    const nav = useNavigate();

    const fetchUser = async (id = 1) => {
        try {
            const res = await api.get("/api/users/" + id);
            setUser(res.data);
            setUserCharacters(res.data.characters);
        } catch (e) {
            if (e.response) {
                console.log(e.response.data);
            } else {
                console.log("ERROR: " + e);
            }
        }
    }

    const saveCharacter = async () => {
        const newChar = await buildCharacter();

        let updatedUser = {...user, characters: [...userCharacters, newChar]}
        await api.put("/api/users/" + user.id, updatedUser);
    }

    const loadCharacter = async (id = 1) => {
        try {
            const res = await api.get("/api/characters/" + id);
            setCharacterStates(res.data);
        } catch (e) {
            if (e.response) {
                console.log(e.response.data);
            } else {
                console.log("ERROR: " + e);
            }
        }
    };

    const deleteCharacter = async (id = 2) => {
       await api.delete("/api/characters/" + id)
    }

    const logoutUser = () => {
        setUser(null);
        setCharacterStates();
        nav("/");
    }

    return <header>
        <button onClick={() => nav("/")}>Home</button>
        <div className="CRUD">
            <button disabled={!user} onClick={() => nav("/method-menu")}>Create</button>
            <button disabled={!user} onClick={() => loadCharacter().then(() => nav("/character-sheet"))}>Load</button>
            <button disabled={!user} onClick={() => saveCharacter()}>Save</button>
            <button disabled={!user} onClick={() => deleteCharacter()}>Delete</button>
        </div>
        {user ?
            <button onClick={() => logoutUser()}>Logout</button> :
            <button onClick={() => /*fetchUser()*/ nav("/login")}>Login</button>
        }
    </header>
}

export default Header;
