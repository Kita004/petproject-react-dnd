import React from "react";

const BasicInfoSelector = ({charName, charLevel, charClass, charSubClass, charRace, charBackground, charAlignment}) => {
    const MAX_LEVEL = 20;
    const CLASSES = ["artificer", "bard", "barbarian", "cleric"]
    const RACES = ["human", "dwarf", "elf"]
    const BACKGROUNDS = ["spy", "entertainer", "charlatan"]
    const ALIGNMENTS = ["CE", "CN", "CG"]

    return <div id="BasicInfoSelector">
        <h2>Basic Info</h2>
        <table className="characterTable" id="basicInfoTable">
            <tbody>
            <tr>
                <td>Name:</td>
                <td>
                    <input type="text" id="charName" defaultValue={charName} disabled/>
                </td>
                <td>Race:</td>
                <td>
                    <select name="raceSelect" id="raceSelect" className="basicInfoSelect" defaultValue={charRace} disabled>
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
                    <select name="classSelect" id="classSelect" className="basicInfoSelect" defaultValue={charClass}>
                        <option value="-">--CLASS--</option>
                        {CLASSES.map(CLASS => {
                            return <option key={CLASSES.indexOf(CLASS)} value={charClass}>
                                {CLASS}
                            </option>
                        })}
                    </select>
                </td>
                <td>Sub-class:</td>
                <td>
                    **To be Implemented**
                </td>
            </tr>
            <tr>
                <td>Level:</td>
                <td><input type="number" min="1" max={MAX_LEVEL} defaultValue={charLevel} disabled/></td>
                <td>Proficiency:</td>
                <td>**Insert Calculation**</td>
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
                    <select name="alignmentSelect" id="alignmentSelect">
                        <option value="-">--ALIGNMENT--</option>
                        {ALIGNMENTS.map(alignment => {
                            return <option key={ALIGNMENTS.indexOf(alignment)} value={alignment}>{alignment}</option>
                        })}
                    </select>
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
            </tbody>
        </table>
    </div>
}

export default BasicInfoSelector;
