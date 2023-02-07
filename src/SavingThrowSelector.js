import React from "react";

const SavingThrowSelector = ({stats}) => {
    return <div id="savingThrowSelector">
        {/*<h2>Saving Throws</h2>*/}
        <table id="savingThrowTable" className="characterTable">
            <tbody>
            {stats.map(stat => {
                return <tr key={stat + "Row"}>
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
