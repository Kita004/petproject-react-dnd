import React, { useEffect, useState } from "react";
import api from "./utils/api";

import StatSelector from "./StatSelector";
import StatContainer from "./StatContainer";
import BasicInfoSelector from "./BasicInfoSelector";
import SavingThrowSelector from "./SavingThrowSelector";
import Header from "./Header";
import SkillsSelector from "./SkillsSelector";
import RollPopupButton from "./RollPopupButton";
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CharacterSheet from "./pages/CharacterSheet";

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

    const [STR, setSTR] = useState(null);
    const [DEX, setDEX] = useState(null);
    const [CON, setCON] = useState(null);
    const [INT, setINT] = useState(null);
    const [WIS, setWIS] = useState(null);
    const [CHA, setCHA] = useState(null);

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

    const [charId, setCharId] = useState(null);
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

    const setCharacterStates = (character = null) => {
        const charStats = character.stats;

        setCharId(character.id);
        setCharName(character.name);
        setCharClass(character.charClass);
        setCharSubClass(character.subClass);
        setCharRace(character.race);
        setCharLevel(character.level);
        setCharBackground(character.background);
        setCharAlignment(character.alignment);

        // setCharSKills

        setSTR(charStats.strength);
        setDEX(charStats.dexterity);
        setCON(charStats.constitution);
        setINT(charStats.intelligence);
        setWIS(charStats.wisdom);
        setCHA(charStats.charisma);
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



    // render
    return(
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route exact path="/" element={<Home />} />
                <Route path="/character-sheet" element={
                    <CharacterSheet
                        basicInfoComp={
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
                        }
                        statsComp={
                            <StatContainer
                                stats={stats}
                                statStates={statStates}
                                changeState={changeState}
                            />
                        }
                        savingThrowComp={
                            <SavingThrowSelector
                                stats={stats}
                                statStates={statStates}
                                savingThrowStates={savingThrowStates}
                                charLevel={charLevel}
                            />
                        }
                        skillsComp={
                            <SkillsSelector
                                stats={stats}
                                statStates={statStates}
                                classDetail={classDetail}
                                raceDetail={raceDetail}
                            />
                        }
                    /> } />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />}/>
            </Route>
        </Routes>);
}

export default App;
