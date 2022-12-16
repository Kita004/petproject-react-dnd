import React from "react";

const BasicInfoSelector = () => {
    const classes = ["artificer", "bard", "barbarian", "cleric"]
    const races = ["human", "dwarf", "elf"]
    const backgrounds = ["spy", "entertainer", "charlatan"]
    const MAX_LEVEL = 20;

    return <div className="container" id="BasicInfoSelector">
        <div>
            <label htmlFor="charName">Name: </label>
            <input type="text" id="charName"/>
        </div>
        <div>
            <label htmlFor="charLevel">Level: </label>
            <input type="number" max={MAX_LEVEL} min="1"/>
        </div>
        <div>
            <label htmlFor="classSelect">Class: </label>
            <select name="classSelect" id="classSelect" className="basicInfoSelect">
                <option value="-">--CLASS--</option>
                {classes.map(charClass => {
                    return <option key={classes.indexOf(charClass)} value={charClass}>
                        {charClass}
                    </option>
                })}
            </select>
        </div>
        <div>
            <label htmlFor="speciesSelect">Race: </label>
            <select name="speciesSelect" id="speciesSelect" className="basicInfoSelect">
                <option value="-">--RACE--</option>
                {races.map(race => {
                    return <option key={races.indexOf(race)} value={race}>{race}</option>
                })}
            </select>
        </div>
        <div>
            <label htmlFor="charBackground">Background: </label>
            <select name="backgroundSelect" id="backgroundSelect">
                <option value="-">--BACKGROUND--</option>
                {backgrounds.map(bg => {
                    return <option key={backgrounds.indexOf(bg)} value={bg}>{bg}</option>
                })}
            </select>
        </div>
    </div>
}

export default BasicInfoSelector;
