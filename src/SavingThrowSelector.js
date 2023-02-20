import React from "react";
import * as formulas from "./utils/formulas";

const SavingThrowSelector = ({stats, statStates, charLevel}) => {
    return <div id="savingThrowSelector">
        <table id="savingThrowTable" className="characterTable">
            <tbody>
            {stats.map(stat => {
                return <tr key={stat + "Row"}>
                    <td><input id={stat + "savingCheckbox"} type="checkbox"/></td>
                    <td>Save:</td>
                    <td id={stat + "saving"}>{formulas.calculateStatMod(statStates[stats.indexOf(stat)]) + formulas.calculateProficiency(charLevel)}</td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
}

export default SavingThrowSelector;
