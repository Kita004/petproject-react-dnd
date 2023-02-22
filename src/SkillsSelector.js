import React from "react";
import * as formulas from './utils/formulas';

const SkillsSelector = ({stats, statStates}) => {
    const skills = {
        "acrobatics": "dex",
        "animal handling": "wis",
        "arcana": "int",
        "athletics": "str",
        "deception": "cha",
        "history": "int",
        "insight": "int",
        "intimidation": "cha",
        "investigation": "int",
        "medicine": "wis",
        "nature": "int",
        "perception": "wis",
        "persuasion": "cha",
        "religion": "int",
        "sleight of hand": "dex",
        "stealth": "dex",
        "survival": "wis"
    }

    return <div id="skillSelector">
        <h2>Skills</h2>
        <table className="characterTable" id="skillsTable">
            <tbody>
            {Object.entries(skills)
                .map(([key, value]) => {
                    let skillName = key.charAt(0).toUpperCase() + key.slice(1);
                    let skillStat = formulas.calculateStatMod(statStates[stats.indexOf(value.toUpperCase())]);

                    return <tr key={key + "Row"}>
                        <td><input id={key + "Checkbox1"} type="checkbox"/></td>
                        <td><input id={key + "Checkbox2"} type="checkbox"/></td>
                        <td>{skillName} |<i>{value}</i></td>
                        <td>{skillStat}</td>
                    </tr>
                })}
            </tbody>
        </table>
    </div>
}

export default SkillsSelector;
