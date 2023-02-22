import React from "react";
import * as formulas from "./utils/formulas";

const SavingThrowSelector = ({stats, statStates, charLevel, savingThrowStates}) => {
    return <div id="savingThrowSelector">
        <table id="savingThrowTable" className="characterTable">
            <tbody>
            {stats.map(stat => {
                let statMod = formulas.calculateStatMod(statStates[stats.indexOf(stat)]);
                let proficiency = formulas.calculateProficiency(charLevel)
                let classSavingThrow = savingThrowStates[stats.indexOf(stat)];

                return <tr key={stat + "Row"}>
                    <td><input id={stat + "savingCheckbox"} type="checkbox" checked={classSavingThrow} readOnly={true}/></td>
                    <td>Save:</td>
                    <td id={stat + "saving"}>{classSavingThrow ? statMod + proficiency : statMod}</td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
}

export default SavingThrowSelector;
