import React, {useState} from "react";
import * as formulas from "./utils/formulas"

const StatContainer = ({statStates, stats, changeState}) => {

    return <div id="statContainer">
        <table id="statContainerTable" className="characterTable">
            <tbody>
            {stats.map( stat => {
                    return <tr key={stat + "Row"}>
                        <td>{stat}</td>
                        <td>
                            <input onChange={e => changeState(stat, e.target.value)} id={stat + "container"} type="number" min="1" max="20" defaultValue={statStates[stats.indexOf(stat)]}/>
                        </td>
                        <td>{"Mod: " + formulas.calculateStatMod(statStates[stats.indexOf(stat)])}</td>
                        <td>+ <input type="number" placeholder={"Ability Score Improvement"} disabled/></td>
                        <td>** Race Bonus **</td>
                    </tr>
                }
            )}
            </tbody>
        </table>
    </div>
}

export default StatContainer;
