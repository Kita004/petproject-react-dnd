import React, {useState} from "react";
import * as formulas from "./utils/formulas"

const BasicInfoSelector = ({statStates, classOptions, classDetail, alignmentOptions, raceOptions, backgroundOptions, charName, charLevel, setCharLevel, charClass, setCharClass, charSubClass, charRace, setCharRace, charBackground, setCharBackground, charAlignment, setCharAlignment}) => {
    const MAX_LEVEL = 20;
    let hitDie = classDetail ? classDetail.hit_die : 9000;

    let charP = formulas.calculateProficiency(charLevel)
    let charI = formulas.calculateWithProficiency(formulas.calculateStatMod(statStates[1]), charP)

    const handleOnChange = (e, cb) => {
        const newState = e.target.value;
        cb(newState);
    }

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
                    <select name="raceSelect" id="raceSelect" className="basicInfoSelect" value={charRace} onChange={e => handleOnChange(e, setCharRace)}>
                        <option value="-">--RACE--</option>
                        {raceOptions.map(race => {
                            return <option key={raceOptions.indexOf(race)} value={race.index}>{race.name}</option>
                        })}
                    </select>
                </td>
            </tr>
            <tr>
                <td>Class:</td>
                <td>
                    <select name="classSelect" id="classSelect" className="basicInfoSelect" value={charClass} onChange={e => handleOnChange(e, setCharClass)}>
                        <option value="-">--CLASS--</option>
                        {[...classOptions].map(CLASS => {
                            return <option key={[...classOptions].indexOf(CLASS)} value={CLASS.index}>
                                {CLASS.name}
                            </option>
                        })}
                    </select>
                </td>
                <td>Sub-class:</td>
                <td>
                    ** To be Implemented **
                </td>
            </tr>
            <tr>
                <td>Level:</td>
                <td><input type="number" min="1" max={MAX_LEVEL} defaultValue={charLevel} onChange={e => handleOnChange(e, setCharLevel)}/></td>
                <td>Proficiency:</td>
                <td>{charP}</td>
            </tr>
            <tr>
                <td>Background:</td>
                <td>
                    <select name="backgroundSelect" id="backgroundSelect" value={charBackground} onChange={e => handleOnChange(e, setCharBackground)}>
                        <option value="-">--BACKGROUND--</option>
                        {backgroundOptions.map(bg => {
                            return <option key={backgroundOptions.indexOf(bg)} value={bg.index}>{bg.name}</option>
                        })}
                    </select>
                </td>
                <td>Alignment:</td>
                <td>
                    <select name="alignmentSelect" id="alignmentSelect" value={charAlignment} onChange={e => handleOnChange(e, setCharAlignment)}>
                        <option value="-">--ALIGNMENT--</option>
                        {alignmentOptions.map(alignment => {
                            return <option key={alignmentOptions.indexOf(alignment)} value={alignment.index}>{alignment.name}</option>
                        })}
                    </select>
                </td>
            </tr>
            <tr>
                <td>Hit Dice:</td>
                <td>{charLevel}/{classDetail ? hitDie : 9000}</td>
                <td>Max HP:</td>
                <td>{formulas.calculateMaxHP(hitDie, charLevel, formulas.calculateStatMod(statStates[2]))}</td>
            </tr>
            <tr>
                <td>Initiative:</td>
                <td>{charI}</td>
                <td>Armor Class:</td>
                <td>** +9000 **</td>
            </tr>
            </tbody>
        </table>
    </div>
}

export default BasicInfoSelector;
