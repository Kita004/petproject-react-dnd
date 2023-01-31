import React from "react";

const DiceRoller = () => {
    return <div id="diceContainer">
        <h2>Dice Roller</h2>
        <div className="container">
            <button>d4</button>
            <button>d6</button>
            <button>d8</button>
            <button>d10</button>
            <button>d12</button>
            <button>d20</button>
        </div>
    </div>
}

export default DiceRoller;
