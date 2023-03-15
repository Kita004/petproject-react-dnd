import { useEffect, useState } from "react";
import api from "./utils/api";

import StatSelector from "./StatSelector";
import StatContainer from "./StatContainer";
import BasicInfoSelector from "./BasicInfoSelector";
import SavingThrowSelector from "./SavingThrowSelector";
import Header from "./Header";
import SkillsSelector from "./SkillsSelector";
import RollPopupButton from "./RollPopupButton";

function App() {
    const [user, setUser] = useState(null);
    const [userCharacters, setUserCharacters] = useState([]);

    const stats = ["STR", "DEX", "CON", "INT", "WIS", "CHA"];
    const standardNums = [8, 10, 12, 13, 14, 15];

    const [classDetail, setClassDetail] = useState(null);
    const [raceDetail, setRaceDetail] = useState(null);

    const [classOptions, setClassOptions] = useState([]);
    const [alignmentOptions, setAlignmentOptions] = useState([]);
    const [raceOptions, setRaceOptions] = useState([]);
    const [backgroundOptions, setBackgroundOptions] = useState([]);

    const [STR, setSTR] = useState(10);
    const [DEX, setDEX] = useState(10);
    const [CON, setCON] = useState(10);
    const [INT, setINT] = useState(10);
    const [WIS, setWIS] = useState(10);
    const [CHA, setCHA] = useState(10);

    const statStates = [STR, DEX, CON, INT, WIS, CHA];

    const [STRsaving, setSTRsaving] = useState(false);
    const [DEXsaving, setDEXsaving] = useState(false);
    const [CONsaving, setCONsaving] = useState(false);
    const [INTsaving, setINTsaving] = useState(false);
    const [WISsaving, setWISsaving] = useState(false);
    const [CHAsaving, setCHAsaving] = useState(false);

    const savingThrowStates = [
        STRsaving,
        DEXsaving,
        CONsaving,
        INTsaving,
        WISsaving,
        CHAsaving,
    ];

    const [charName, setCharName] = useState("");
    const [charLevel, setCharLevel] = useState(1);
    const [charClass, setCharClass] = useState("");
    const [charSubClass, setCharSubClass] = useState("");
    const [charRace, setCharRace] = useState("");
    const [charBackground, setCharBackground] = useState("");
    const [charAlignment, setCharAlignment] = useState("");


    useEffect(() => {
        fetchUser();
        fetchDndAPI();
        fetchClassDetail();
        fetchRaceDetail();
    }, []);

    useEffect(() => {
        fetchClassDetail();
    }, [charClass]);

    useEffect(() => {
        fetchRaceDetail();
    }, [charRace]);

    const fetchClassDetail = async () => {
        try {
            const resClassDetail = await api.get(
                "https://www.dnd5eapi.co/api/classes/" + charClass
            );
            setClassDetail(resClassDetail.data);
            setSavingThrowStates(resClassDetail.data.saving_throws);
        } catch (e) {
            if (e.response) {
                console.log(e.response.data);
            } else {
                console.log("ERROR: " + e);
            }
        }
    };

    const fetchRaceDetail = async () => {
        try {
            const resRaceDetail = await api.get(
                "https://www.dnd5eapi.co/api/races/" + charRace
            );
            setRaceDetail(resRaceDetail.data);
        } catch (e) {
            if (e.response) {
                console.log(e.response.data);
            } else {
                console.log("ERROR: " + e);
            }
        }
    };

    const fetchUser = async (id = 1) => {
        try {
            const res = await api.get("/users/" + id);
            setUser(res.data);
            setUserCharacters(res.data.characters);
        } catch (e) {
            if (e.response) {
                console.log(e.response.data);
            } else {
                console.log("ERROR: " + e);
            }
        }
    }

    const fetchCharacter = async (id = 1) => {
        try {
            const res = await api.get("/characters/" + id);
            setCharacterStates(res.data);
        } catch (e) {
            if (e.response) {
                console.log(e.response.data);
            } else {
                console.log("ERROR: " + e);
            }
        }
    };

    const fetchDndAPI = async () => {
        try {
            // fetch classes for Class Select
            const resClasses = await api.get(
                "https://www.dnd5eapi.co/api/classes"
            );
            setClassOptions(resClasses.data.results);

            // fetch alignments for Alignment Select
            const resAlignments = await api.get(
                "https://www.dnd5eapi.co/api/alignments"
            );
            setAlignmentOptions(resAlignments.data.results);

            // fetch classes for Class Select
            const resRaces = await api.get("https://www.dnd5eapi.co/api/races");
            setRaceOptions(resRaces.data.results);

            // fetch Backgrounds for Background Select
            const resBg = await api.get(
                "https://www.dnd5eapi.co/api/backgrounds"
            );
            setBackgroundOptions(resBg.data.results);
        } catch (e) {
            if (e.response) {
                console.log(e.response.data);
            } else {
                console.log("ERROR: " + e);
            }
        }
    };

    const setCharacterStates = (character) => {
        setCharName(character.name);
        setCharClass(character.charClass);
        setCharSubClass(character.subClass);
        setCharRace(character.race);
        setCharLevel(character.level);
        setCharBackground(character.background);
        setCharAlignment(character.alignment);
    };

    const setSavingThrowStates = (savingThrows) => {
        let savingThrowNames = [];

        // get names from Array of Objects
        for (let st of savingThrows) {
            savingThrowNames.push(st.name);
        }

        // set all states to false, beforehand
        for (let stat of stats) {
            changeState(stat + "saving", false);
        }

        // set state to true according to condition
        for (let stat of stats) {
            if (savingThrowNames.includes(stat)) {
                changeState(stat + "saving", true);
            }
        }
    };

    const changeState = (statName, statValue) => {
        switch (statName) {
            case "STR":
                setSTR(statValue);
                break;
            case "DEX":
                setDEX(statValue);
                break;
            case "CON":
                setCON(statValue);
                break;
            case "INT":
                setINT(statValue);
                break;
            case "WIS":
                setWIS(statValue);
                break;
            case "CHA":
                setCHA(statValue);
                break;
            case "STRsaving":
                setSTRsaving(statValue);
                break;
            case "DEXsaving":
                setDEXsaving(statValue);
                break;
            case "CONsaving":
                setCONsaving(statValue);
                break;
            case "INTsaving":
                setINTsaving(statValue);
                break;
            case "WISsaving":
                setWISsaving(statValue);
                break;
            case "CHAsaving":
                setCHAsaving(statValue);
                break;
            default:
                throw new Error("Error with switch case, ran into default");
        }
    };

    const buildCharacter = async () => {
        const newChar = {
            "name": charName,
            "level": charLevel,
            "charClass": charClass,
            "subClass": charSubClass,
            "race": charRace,
            "background": charBackground,
            "alignment": charAlignment,
            "stats": {
                STR, DEX, CON,
                INT, WIS, CHA
            }
        };
        return newChar;
    };


    const createCharacter = async () => {
        let newChar = await buildCharacter();
        // let allChars = [...userCharacters, newChar];
        // setUserCharacters(allChars);
        // setUser({...user, characters: allChars});
        // console.log(updatedUser.characters);

        let updatedUser = {...user, characters: [...userCharacters, newChar]}
        await api.post("/users/" + user.id, updatedUser);
    }

    const updateCharacter = async (id) => {

    }

    // render
    return (
        <div className="App">
            <Header
            createCharacter={createCharacter}
            />
            <div className="container">
                <div>
                    <BasicInfoSelector
                        statStates={statStates}
                        classOptions={classOptions}
                        classDetail={classDetail}
                        alignmentOptions={alignmentOptions}
                        raceOptions={raceOptions}
                        backgroundOptions={backgroundOptions}
                        charName={charName}
                        charClass={charClass}
                        charSubClass={charSubClass}
                        charRace={charRace}
                        charLevel={charLevel}
                        charBackground={charBackground}
                        charAlignment={charAlignment}

                        setCharName={setCharName}
                        setCharLevel={setCharLevel}
                        setCharClass={setCharClass}
                        setCharRace={setCharRace}
                        setCharAlignment={setCharAlignment}
                        setCharBackground={setCharBackground}
                    />
                    <h2>Attributes</h2>
                    <div
                        id="attributesContainer"
                        className="container attributes"
                    >
                        <StatContainer
                            stats={stats}
                            statStates={statStates}
                            changeState={changeState}
                        />
                        <SavingThrowSelector
                            stats={stats}
                            statStates={statStates}
                            savingThrowStates={savingThrowStates}
                            charLevel={charLevel}
                        />
                    </div>
                </div>
                <SkillsSelector
                    stats={stats}
                    statStates={statStates}
                    classDetail={classDetail}
                    raceDetail={raceDetail}
                />
            </div>
            {/*<div>*/}
            {/*    <h2>Dice Roller</h2>*/}
            {/*    <RollPopupButton*/}

            {/*    />*/}
            {/*    <button>2</button>*/}
            {/*    <button>3</button>*/}
            {/*</div>*/}
        </div>
    );
}

export default App;
