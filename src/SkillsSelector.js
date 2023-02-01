import React from "react";

const SkillsSelector = ({stats, skills}) => {
    return <div id="skillSelector">
        <h2>Skills</h2>
        <table className="characterTable" id="skillsTable">
            <tbody>
            {Object.entries(skills)
                .map(([key, value]) => {
                return <tr key={key + "Row"}>
                    <td><input id={key + "Checkbox1"} type="checkbox"/></td>
                    <td><input id={key + "Checkbox2"} type="checkbox"/></td>
                    <td>{key.charAt(0).toUpperCase() + key.slice(1)} |<i>{value}</i></td>
                    <td>**Insert Calculation**</td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
}

export default SkillsSelector;
