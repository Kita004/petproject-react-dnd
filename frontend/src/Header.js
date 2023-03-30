import React from "react";
import api from "./utils/api";
import {useNavigate} from "react-router-dom";

const Header = ({user, setUser, charId, userCharacters, setUserCharacters, buildCharacter, setCharacterStates}) => {
    const nav = useNavigate();

    // const fetchUser = async (id = 1) => {
    //     try {
    //         const res = await api.get("/api/users/" + id);
    //         setUser(res.data);
    //         setUserCharacters(res.data.characters);
    //     } catch (e) {
    //         if (e.response) {
    //             console.log(e.response.data);
    //         } else {
    //             console.log("ERROR: " + e);
    //         }
    //     }
    // }

    const saveCharacter = async () => {
        const newChar = await buildCharacter();

        let updatedCharacters = setUserCharacters([...userCharacters, newChar]);
        let updatedUser = {...user, characters: updatedCharacters};

        await api.put("/api/users/" + user.id, updatedUser);
    }

    const updateCharacter = async (id) => {
        const updatedChar = await buildCharacter();
        const newState = userCharacters.map(char => {
            if (char.id == id) {
                return updatedChar
             } else {
                return char;
            }
        })
        setUserCharacters(newState);

        await api.put("/api/characters/" + id, updatedChar);
    }

    const logoutUser = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('characters');

        setUser(null);
        setCharacterStates();

        nav("/");
    }


    return <header>
        <button onClick={() => nav("/")}>Home</button>
        <div className="CRUD">
            {charId ?
                <button disabled={!user} onClick={() => updateCharacter(charId)}>Save</button> :
                <button disabled={!user} onClick={() => saveCharacter()}>Save</button>
            }
        </div>
        {user ?
            <button onClick={() => logoutUser()}>Logout</button> :
            <button onClick={() => nav("/login")}>Login</button>
        }
    </header>
}

export default Header;
