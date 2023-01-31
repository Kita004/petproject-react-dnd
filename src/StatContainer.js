import React from "react";

const StatContainer = ({statStates, stats}) => {
    return <div id="statContainer" className="container">
        <table id="statContainerTable" className="characterTable">
            {stats.map( stat => {
                    return <tbody>
                    <tr>
                        <td>{stat}</td>
                        <td>
                            <input id={stat + "container"} type="number" min="1" max="20" placeholder={statStates[stats.indexOf(stat)].toString()}/>
                        </td>
                    </tr>
                    </tbody>
                }
            )}
        </table>
    </div>
}

export default StatContainer;
