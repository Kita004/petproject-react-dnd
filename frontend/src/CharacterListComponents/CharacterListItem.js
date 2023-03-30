import React from "react";
import api from "../utils/api";
import {useNavigate} from "react-router-dom";

const CharacterListItem = ({userCharacters, character, setCharacterStates, setUserCharacters }) => {
    const nav = useNavigate();

    const loadCharacter = async (id) => {
        try {
            const res = await api.get("/api/characters/" + id);
            setCharacterStates(res.data);
            nav("/character-sheet");
        } catch (e) {
            if (e.response) {
                console.log(e.response.data);
            } else {
                console.log("ERROR: " + e);
            }
        }
    };

    const deleteCharacter = async (id) => {
        try {
            setUserCharacters(userCharacters.filter((char) => char.id != id));

            // nav(0);
            await api.delete("/api/characters/" + id)
        } catch (err) {
            if (err.response) {
                console.log(err.response.data);
            } else {
                console.log("ERROR: " + err);
            }
        }
    }


    return <li>
        Lv. {character.level}
        |
        {character.charClass} <i>{character.subClass}</i>
        {character.race}
        |
        {character.name}
        |
        <button value={character.id} onClick={e => loadCharacter(e.currentTarget.value)}>Check</button>
        <button value={character.id} onClick={e => deleteCharacter(e.currentTarget.value)}>Delete</button>
    </li>
}

export default CharacterListItem;
