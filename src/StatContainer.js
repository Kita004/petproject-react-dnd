import React from "react";

const StatContainer = ({statStates, stats}) => {
    return <div id="statContainer" className="container">
        {stats.map(stat => {
            return <div id={stat}>
                {statStates[stats.indexOf(stat)]}
            </div>
        })}
    </div>
}

export default StatContainer;