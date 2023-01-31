import React from "react";

const StatSelector = ({stats, nums, handleOptionChange}) => {
    return <div id="statSelector" className="container">
        <table className="characterTable" id="statTable">

        </table>
            {stats.map(stat => {
                return <tr>
                    <td>
                        {stat}
                    </td>
                    <td>
                        <select id={stat + "select"} name={stat} className="statSelect" onChange={handleOptionChange}>
                            <option value="-">--{stat}--</option>
                            {nums.map(num => {
                                return <option value={num}>{num}</option>
                            })}
                        </select>
                    </td>
                    <td>**insert calculation**</td>
                </tr>
            })}
        </div>
}

export default StatSelector;
