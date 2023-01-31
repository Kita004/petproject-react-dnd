import React from "react";

const SavingThrowSelector = ({stats}) => {
    return <div id="statSelector" className="container">
        <table id="savingThrowTable" className="characterTable">
            <tbody>
            {stats.map(stat => {
                return <tr>
                    <td><input id={stat + "savingCheckbox"} type="checkbox"/></td>
                    <td>Save:</td>
                    <td id={stat + "saving"}>**Insert Calculation**</td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
}

export default SavingThrowSelector;
