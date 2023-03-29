import React from "react";
import MethodMenu from "./MethodMenu";
import CharacterList from "../CharacterListComponents/CharacterList";

const Home = ({user, userCharacters, setUserCharacters, setCharacterStates, setCreationMethod, setRandomNums}) => {
    return <div id="home-page" className="main-content">
        <h1>Welcome to the Homepage!</h1>
        {user ? <>
                <MethodMenu
                    setCreationMethod={setCreationMethod}
                    setCharacterStates={setCharacterStates}
                    setRandomNums={setRandomNums}
                />
                <CharacterList
                    characterList={userCharacters}
                    setCharacterStates={setCharacterStates}
                    setUserCharacters={setUserCharacters}
                />
            </>
            :
            <div>
                <h2>Register!</h2>
                <button disabled>Let' Go!</button>
            </div>
        }
    </div>
}

export default Home;
