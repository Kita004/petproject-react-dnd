import {useEffect, useState} from "react";
import api from "./utils/api";

import StatSelector from "./StatSelector";
import StatContainer from "./StatContainer";
import BasicInfoSelector from "./BasicInfoSelector";
import SavingThrowSelector from "./SavingThrowSelector";
import Header from "./Header";
import SkillsSelector from "./SkillsSelector";
import RollPopupButton from "./RollPopupButton";



function App() {
    const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
    const nums = [8,10,12,13,14,15]
    const skills = {
        "acrobatics": "dex",
        "animal handling": "wis",
        "arcana": "int",
        "athletics": "str",
        "deception": "cha",
        "history": "int",
        "insight": "intimidation",
        "investigation": "int",
        "medicine": "wis",
        "nature": "int",
        "perception": "wis",
        "persuasion": "cha",
        "religion": "int",
        "sleight of hand": "dex",
        "stealth": "dex",
        "survival": "wis"
    }

    const [classOptions, setClassOptions] = useState([])
    const [classDetail, setClassDetail] = useState(null)
    const [alignmentOptions, setAlignmentOptions] = useState([])
    const [raceOptions, setRaceOptions] = useState([]);


    const [STR, setSTR] = useState(8);
    const [DEX, setDEX] = useState(10);
    const [CON, setCON] = useState(12);
    const [INT, setINT] = useState(13);
    const [WIS, setWIS] = useState(14);
    const [CHA, setCHA] = useState(15);

    const statStates = [STR, DEX, CON, INT, WIS, CHA]

    const selects = document.getElementsByClassName('statSelect');

    // const [STRmod, setSTRmod] = useState(0)
    // const [DEXmod, setDEXmod] = useState(0)
    // const [CONmod, setCONmod] = useState(0)
    // const [INTmod, setINTmod] = useState(0)
    // const [WISmod, setWISmod] = useState(0)
    // const [CHAmod, setCHAmod] = useState(0)
    //
    // const modStates = [STRmod, DEXmod, CONmod, INTmod, WISmod, CHAmod]

    const [charName, setCharName] = useState('')
    const [charLevel, setCharLevel] = useState('')
    const [charClass, setCharClass] = useState('')
    const [charSubClass,setCharSubClass] = useState('')
    const [charRace, setCharRace] = useState('')
    const [charBackground, setCharBackground] = useState('')
    const [charAlignment, setCharAlignment] = useState('')

    const handleStatChange = (e) => {
        const statId = e.target.id;
        const statName = e.target.name;
        const statValue = e.target.value;
        const valueToRepair = document.getElementById(statId).value;


        removeOption(statId, statValue);
        repairOption(valueToRepair);
        changeStat(statName, statValue);
    }

    useEffect(() => {
        fetchCharacter();
        fetchDndAPI();
        fetchClassDetail();
    }, [])

    useEffect(() => {
        fetchClassDetail();
    }, [charClass])

    const fetchClassDetail = async () => {
        try {
            const resClassDetail = await api.get('https://www.dnd5eapi.co/api/classes/' + charClass)
            setClassDetail(resClassDetail.data)
        } catch (e) {
            if (e.response) {
                console.log(e.response.data)
            } else {
                console.log("ERROR: " + e)
            }
        }
    }

    const fetchCharacter = async () => {
        try {
            const res = await api.get('/character')
            setCharacterStates(res.data)
        } catch (e) {
            if (e.response) {
                console.log(e.response.data)
            } else {
                console.log("ERROR: " + e)
            }
        }
    }

    const fetchDndAPI = async () => {
        try {
            // fetch classes for Class Select
            const resClasses = await api.get('https://www.dnd5eapi.co/api/classes')
            setClassOptions(resClasses.data.results)

            // fetch alignments for Alignment Select
            const resAlignments = await api.get('https://www.dnd5eapi.co/api/alignments')
            setAlignmentOptions(resAlignments.data.results)

            // fetch classes for Class Select
            const resRaces = await api.get('https://www.dnd5eapi.co/api/races')
            setRaceOptions(resRaces.data.results)
        } catch (e) {
            if (e.response) {
                console.log(e.response.data)
            } else {
                console.log("ERROR: " + e)
            }
        }
    }

    const setCharacterStates = (character) => {
        setCharName(character.name)
        setCharClass(character.class)
        setCharSubClass(character.subClass)
        setCharRace(character.race)
        setCharLevel(character.level)
        setCharBackground(character.background)
        setCharAlignment(character.alignment)
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
        // const modValue = Math.floor((statValue-10)/2);
        switch (statName) {
            case "STR":
                setSTR(statValue)
                // setSTRmod(modValue)
                break
            case "DEX":
                setDEX(statValue)
                // setDEXmod(modValue)
                break
            case "CON":
                setCON(statValue)
                // setCONmod(modValue)
                break
            case "INT":
                setINT(statValue)
                // setINTmod(modValue)
                break
            case "WIS":
                setWIS(statValue)
                // setWISmod(modValue)
                break
            case "CHA":
                setCHA(statValue)
                // setCHAmod(modValue)
                break
            default:
                throw new Error("Error with switch case, ran into default")
        }
    }

    // render
    return (
        <div className="App">
            <Header />
            <div className="container">
                <div>
                    <BasicInfoSelector
                        statStates={statStates}
                        classOptions={classOptions}
                        classDetail={classDetail}
                        alignmentOptions={alignmentOptions}
                        raceOptions={raceOptions}

                        charName={charName}
                        charClass={charClass}
                        charSubClass={charSubClass}
                        charRace={charRace}
                        charLevel={charLevel}
                        charBackground={charBackground}
                        charAlignment={charAlignment}

                        setCharLevel={setCharLevel}
                        setCharClass={setCharClass}
                    />
                    <h2>Attributes</h2>
                    <div id="attributesContainer" className="container attributes">
                        <StatContainer
                            stats={stats}
                            statStates={statStates}
                            changeStat={changeStat}
                        />
                        <SavingThrowSelector
                            stats={stats}
                            statStates={statStates}
                            charLevel={charLevel}
                        />
                    </div>
                </div>
                <SkillsSelector
                    skills={skills}
                />
            </div>
            <div>
                <h2>Dice Roller</h2>
                <RollPopupButton

                />
                <button>2</button>
                <button>3</button>
            </div>
            {/*<StatSelector*/}
            {/*    stats={stats}*/}
            {/*    nums={nums}*/}
            {/*    handleOptionChange={handleStatChange}*/}
            {/*/>*/}
        </div>
    );
}

export default App;
