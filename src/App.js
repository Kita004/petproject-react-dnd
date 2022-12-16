import {useState} from "react";
import StatSelector from "./StatSelector";
import StatContainer from "./StatContainer";
import BasicInfoSelector from "./BasicInfoSelector";

function App() {
    const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
    const nums = [8,10,12,13,14,15]

    const [STR, setSTR] = useState('');
    const [DEX, setDEX] = useState('');
    const [CON, setCON] = useState('');
    const [INT, setINT] = useState('');
    const [WIS, setWIS] = useState('');
    const [CHA, setCHA] = useState('');

    const statStates = [STR, DEX, CON, INT, WIS, CHA]

    const selects = document.getElementsByClassName('statSelect');

    const [STRmod, setSTRmod] = useState(0)
    const [DEXmod, setDEXmod] = useState(0)
    const [CONmod, setCONmod] = useState(0)
    const [INTmod, setINTmod] = useState(0)
    const [WISmod, setWISmod] = useState(0)
    const [CHAmod, setCHAmod] = useState(0)

    const modStates = [STRmod, DEXmod, CONmod, INTmod, WISmod, CHAmod]

    const classes = ["artificer", "bard", "barbarian", "cleric"]
    const races = ["human", "dwarf", "elf"]
    const backgrounds = ["spy", "entertainer", "charlatan"]

    // const selectsRef = useRef(null);
    // const selects2 = selectsRef.current;

    // useEffect(() => {
    //     selectsRef.current = document.querySelectorAll('.statSelect');
    //     console.log(selects2);
    // }, [selects2]);

    // const removeOptionWithRef = (e) => {
    //     if (e.target.value !== "-") {
    //         selects2.forEach(select => {
    //             if (select.id !== e.target.id) {
    //                 console.log(select);
    //             }})}
    // }

    const handleStatChange = (e) => {
        const statId = e.target.id;
        const statName = e.target.name;
        const statValue = e.target.value;
        const valueToRepair = document.getElementById(statName).textContent;

        removeOption(statId, statValue);
        repairOption(valueToRepair);
        changeStat(statName, statValue);
    }

    const removeOption = (statId, statValue) => {
        // if statement so that default value does not remove default option
        if (statValue !== "-") {
            for (let i = 0; i < selects.length; i++) {
                if (selects[i].id !== statId) {
                    for (let j = 0; j < selects[i].length; j++) {
                        if (selects[i][j].value === statValue) {
                            selects[i][j].style.display = "none";
                        }}}}}
    }

    const repairOption = (statToRepair) => {
        for (let i = 0; i < selects.length; i++) {
            for (let j = 0; j < selects[i].length; j++) {
                if (selects[i][j].value === statToRepair) {
                    selects[i][j].style.display = "block";
                }}}
    }

    const changeStat = (statName, statValue) => {
        const modValue = Math.floor((statValue-10)/2);
        switch (statName) {
            case "STR":
                setSTR(statValue)
                setSTRmod(modValue)
                break
            case "DEX":
                setDEX(statValue)
                setDEXmod(modValue)
                break
            case "CON":
                setCON(statValue)
                setCONmod(modValue)
                break
            case "INT":
                setINT(statValue)
                setINTmod(modValue)
                break
            case "WIS":
                setWIS(statValue)
                setWISmod(modValue)
                break
            case "CHA":
                setCHA(statValue)
                setCHAmod(modValue)
                break
            default:
                throw new Error("Error with switch case, ran into default")
        }
    }


    // render
    return (
        <div className="App">
            <StatSelector
                stats={stats}
                nums={nums}
                handleOptionChange={handleStatChange}
            />

            <StatContainer
                stats={stats}
                statStates={statStates}
            />

            <div className="modifierContainer">
            {stats.map(stat => {
                return <div id={stat + "mod"}>{modStates[stats.indexOf(stat)]}</div>
            })}
            </div>

            <BasicInfoSelector
                classes={classes}
                races={races}
                backgrounds={backgrounds}
            />
        </div>
    );
}

export default App;
