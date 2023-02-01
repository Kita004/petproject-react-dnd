import React from "react";

const StatContainer = ({statStates, stats}) => {
    return <div id="statContainer">
        <h2>Stats</h2>
        <table id="statContainerTable" className="characterTable">
            <tbody>
            {stats.map( stat => {
                    return <tr key={stat + "Row"}>
                        <td>{stat}</td>
                        <td>
                            <input id={stat + "container"} type="number" min="1" max="20" placeholder={statStates[stats.indexOf(stat)].toString()}/>
                        </td>
                        <td>**Insert Calculation**</td>
                    </tr>
                }
            )}
            </tbody>
        </table>
    </div>
}

export default StatContainer;
