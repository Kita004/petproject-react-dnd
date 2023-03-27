import React from "react";
import * as formulas from "../utils/formulas";
import {useNavigate} from "react-router-dom";

const MethodMenu = ({setCreationMethod, setRandomNums}) => {
    const nav = useNavigate();

    return <div id="method-menu-page" className="main-content">
        <h2>Create a Character!</h2>
        <button onClick={() => {setCreationMethod("standard"); nav("/character-creation")}}>Standard Array</button>
        <button onClick={() => {setCreationMethod("random"); setRandomNums(formulas.rollRandomStats());nav("/character-creation")}}>Random Rolls</button>
        <button disabled onClick={() => {setCreationMethod("point"); nav("/character-creation")}}>Point Buy</button>
    </div>
}

export default MethodMenu;