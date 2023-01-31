import React from "react";

const BasicInfoSelector = () => {
    const MAX_LEVEL = 20;
    const CLASSES = ["artificer", "bard", "barbarian", "cleric"]
    const RACES = ["human", "dwarf", "elf"]
    const BACKGROUNDS = ["spy", "entertainer", "charlatan"]

    return <div className="container" id="BasicInfoSelector">
        <h2>Basic Info</h2>
        <table className="characterTable" id="basicInfoTable">
            <tr>
                <td>Name:</td>
                <td>
                    <input type="text" id="charName" placeholder="Code The Cool"/>
                </td>
                <td>Race:</td>
                <td>
                    <select name="raceSelect" id="raceSelect" className="basicInfoSelect">
                        <option value="-">--RACE--</option>
                        {RACES.map(race => {
                            return <option key={RACES.indexOf(race)} value={race}>{race}</option>
                        })}
                    </select>
                </td>
            </tr>
            <tr>
                <td>Class:</td>
                <td>
                    <select name="classSelect" id="classSelect" className="basicInfoSelect">
                        <option value="-">--CLASS--</option>
                        {CLASSES.map(charClass => {
                            return <option key={CLASSES.indexOf(charClass)} value={charClass}>
                                {charClass}
                            </option>
                        })}
                    </select>
                </td>
                <td>Sub-class:</td>
                <td>

                </td>
            </tr>
            <tr>
                <td>Level:</td>
                <td><input type="number" min="1" max={MAX_LEVEL} placeholder="20"/></td>
                <td>Proficiency:</td>
                <td>+5</td>
            </tr>
            <tr>
                <td>Background:</td>
                <td>
                    <select name="backgroundSelect" id="backgroundSelect">
                        <option value="-">--BACKGROUND--</option>
                        {BACKGROUNDS.map(bg => {
                            return <option key={BACKGROUNDS.indexOf(bg)} value={bg}>{bg}</option>
                        })}
                    </select>
                </td>
                <td>Alignment:</td>
                <td>

                </td>
            </tr>
            <tr>
                <td>Hit Dice:</td>
                <td>20/6</td>
                <td>Max HP:</td>
                <td>9999</td>
            </tr>
            <tr>
                <td>Initiative:</td>
                <td>+5</td>
                <td>Armor Class:</td>
                <td>42</td>
            </tr>
        </table>
    </div>
}

export default BasicInfoSelector;
