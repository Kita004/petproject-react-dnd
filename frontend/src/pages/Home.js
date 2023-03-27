import React from "react";
import * as formulas from "../utils/formulas";
import {useNavigate} from "react-router-dom";

const Home = ({user, setCreationMethod, setRandomNums}) => {
    const nav = useNavigate();

    return <div className="home">
        <h1>Welcome to the Homepage!</h1>
        {user ? <div>
            <h2>Create a Character!</h2>
            <button onClick={() => {setCreationMethod("standard"); nav("/character-creation")}}>Standard Array</button>
            <button onClick={() => {setCreationMethod("random"); setRandomNums(formulas.rollRandomStats());nav("/character-creation")}}>Random Rolls</button>
            <button disabled onClick={() => {setCreationMethod("point"); nav("/character-creation")}}>Point Buy</button>
        </div> :
            <div>
            <h2>Register!</h2>
            <button disabled>Let' Go!</button>
        </div>
        }
    </div>
}

export default Home;
