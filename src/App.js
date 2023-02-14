import {useEffect, useState} from "react";
import api from "./utils/api";

import StatSelector from "./StatSelector";
import StatContainer from "./StatContainer";
import BasicInfoSelector from "./BasicInfoSelector";
import SavingThrowSelector from "./SavingThrowSelector";
import Header from "./Header";
import SkillsSelector from "./SkillsSelector";
import DiceRoller from "./DiceRoller";



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

    const [classOptions, setClassOptions] = useState(new Set())

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
    const [proficiency, setProficiency] = useState(0)
    const [initiative, setInitiative] = useState(0)


    // const basicInfoStates = [charName, charLevel, charClass, charRace, charBackground]

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
        const valueToRepair = document.getElementById(statId).value;


        removeOption(statId, statValue);
        repairOption(valueToRepair);
        changeStat(statName, statValue);
    }

    useEffect(() => {
        fetchCharacter();
        fetchDndAPI();
    }, [])

    const fetchCharacter = async () => {
        try {
            const res = await api.get('/character')
            setCharacterInfo(res.data)
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
            // fetch DnD classes for Class Select
            const resClass = await api.get('https://www.dnd5eapi.co/api/classes')
            setClassSelectOptions(resClass.data.results)
        } catch (e) {
            if (e.response) {
                console.log(e.response.data)
            } else {
                console.log("ERROR: " + e)
            }
        }
    }

    const setClassSelectOptions = (classes) => {
        for (let cl of classes) {
            setClassOptions(prevState => new Set(prevState).add(cl.name))
        }
    }

    const setCharacterInfo = (character) => {
        setCharName(character.name)
        setCharClass(character.class)
        setCharSubClass(character.subClass)
        setCharRace(character.race)
        setCharLevel(character.level)
        setCharBackground(character.background)
        setCharAlignment(character.alignment)

        setProficiency(formulas.calculateProficiency(character.level))
        setInitiative(formulas.calculateWithProficiency(formulas.calculateStatMod(statStates[1]), proficiency))
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

                        charName={charName}
                        charClass={charClass}
                        charSubClass={charSubClass}
                        charRace={charRace}
                        charLevel={charLevel}
                        charBackground={charBackground}
                        charAlignment={charAlignment}

                        setCharLevel={setCharLevel}
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
                        />
                    </div>
                </div>
                <SkillsSelector
                    skills={skills}
                />
            </div>
            <DiceRoller />
            {/*<StatSelector*/}
            {/*    stats={stats}*/}
            {/*    nums={nums}*/}
            {/*    handleOptionChange={handleStatChange}*/}
            {/*/>*/}
        </div>
    );
}

export default App;
