import React from "react";
import * as formulas from "../utils/formulas";
import {useNavigate} from "react-router-dom";

const MethodMenu = ({setCharacterStates, setCreationMethod, setRandomNums}) => {
    const nav = useNavigate();

    const prepareCharacterCreation = (method) => {
        setCharacterStates();
        switch (method) {
            case "standard":
                setCreationMethod("standard");
                break;
            case "random":
                setCreationMethod("random");
                setRandomNums(formulas.rollRandomStats());
                break;
            case "point":
                setCreationMethod("point");
                break;
                //TODO: create default route for error message ?
        }
        nav("/character-creation");
    }

    return <div id="method-menu-page" className="main-content">
        <h2>Create a Character!</h2>
        <button onClick={() => prepareCharacterCreation("standard")}>Standard Array</button>
        <button onClick={() => prepareCharacterCreation("random")}>Random Rolls</button>
        <button disabled onClick={() => prepareCharacterCreation("point")}>Point Buy</button>
    </div>
}

export default MethodMenu;
