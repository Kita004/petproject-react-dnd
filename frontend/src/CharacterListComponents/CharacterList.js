import React from "react";
import CharacterListItem from "./CharacterListItem";

const CharacterList = ({characterList, setUserCharacters, setCharacterStates}) => {
    return <div id="characterList">
        <ul>
            {characterList ?
                characterList.map( character => {
                    return <CharacterListItem
                        character={character}
                        setCharacterStates={setCharacterStates}
                        setUserCharacters={setUserCharacters}
                    />
                }) :
                <li>"You don't have any Characters yet!"</li>
            }
        </ul>
    </div>
}

export default CharacterList;
