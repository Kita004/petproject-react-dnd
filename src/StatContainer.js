import React, {useState} from "react";
import * as formulas from "./utils/formulas"

const StatContainer = ({statStates, stats, changeStat}) => {

    return <div id="statContainer">
        <table id="statContainerTable" className="characterTable">
            <tbody>
            {stats.map( stat => {
                    return <tr key={stat + "Row"}>
                        <td>{stat}</td>
                        <td>
                            <input onChange={e => changeStat(stat, e.target.value)} id={stat + "container"} type="number" min="1" max="20" defaultValue={statStates[stats.indexOf(stat)]}/>
                        </td>
                        <td>{formulas.calculateStatMod(statStates[stats.indexOf(stat)])}</td>
                    </tr>
                }
            )}
            </tbody>
        </table>
    </div>
}

export default StatContainer;
