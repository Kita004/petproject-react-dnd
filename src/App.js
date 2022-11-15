import {useState} from "react";
import StatSelector from "./StatSelector";
import StatContainer from "./StatContainer";

function App() {
    const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
    const nums = [1,2,3,4,5,6]

    const [STR, setSTR] = useState('')
    const [DEX, setDEX] = useState('')
    const [CON, setCON] = useState('')
    const [INT, setINT] = useState('')
    const [WIS, setWIS] = useState('')
    const [CHA, setCHA] = useState('')

    const statStates = [STR, DEX, CON, INT, WIS, CHA]

    const selects = document.getElementsByClassName('statSelect');

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
        switch (statName) {
            case "STR":
                setSTR(statValue)
                break
            case "DEX":
                setDEX(statValue)
                break
            case "CON":
                setCON(statValue)
                break
            case "INT":
                setINT(statValue)
                break
            case "WIS":
                setWIS(statValue)
                break
            case "CHA":
                setCHA(statValue)
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
            <div>
            {statStates.map(state => {
                return <div className="container">{state/2}</div>
            })}
            </div>
        </div>
    );
}

export default App;
