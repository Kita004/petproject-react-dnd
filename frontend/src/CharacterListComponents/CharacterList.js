import React from "react";
import CharacterListItem from "./CharacterListItem";

const CharacterList = ({characterList, setUserCharacters, setCharacterStates}) => {
    return <div id="characterList">
        {characterList?.length !== 0 ?
            <ul>
                {characterList.map( character => {
                    return <CharacterListItem
                        character={character}
                        userCharacters={characterList}
                        setCharacterStates={setCharacterStates}
                        setUserCharacters={setUserCharacters}
                    />
                })} </ul> :
            <p>"You don't have any Characters yet!"</p>
        }

    </div>
}

export default CharacterList;
