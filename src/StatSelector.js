import React from "react";

const StatSelector = ({stats, nums, handleOptionChange}) => {
    return <div id="statSelector" className="container">
            {stats.map(stat => {
                return <div className={stat + "container"}>
                    <select id={stat + "select"} name={stat} className="statSelect" onChange={handleOptionChange}>
                        <option value="-">--{stat}--</option>
                        {nums.map(num => {
                            return <option value={num}>{num}</option>
                        })}
                    </select>
                </div>
            })}
        </div>
}

export default StatSelector;
