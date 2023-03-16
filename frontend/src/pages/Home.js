import React from "react";
import * as formulas from "../utils/formulas";
import {useNavigate} from "react-router-dom";

const Home = ({setCreationMethod, setRandomNums}) => {
    const nav = useNavigate();

    return <div>
        <h1>This is The Homepage!</h1>
        <h2>Create a Character!</h2>
        <button onClick={() => {setCreationMethod("standard"); nav("/character-creation")}}>Test Standard</button>
        <button onClick={() => {setCreationMethod("random"); setRandomNums(formulas.rollRandomStats());nav("/character-creation")}}>Test Random</button>
        <button disabled onClick={() => setCreationMethod("point")}>Test Point</button>
    </div>
}

export default Home;
