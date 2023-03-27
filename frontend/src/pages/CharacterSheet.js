import React from "react";

const CharacterSheet = ({basicInfoComp, statsComp, savingThrowComp, skillsComp}) => {
    return <div className="character-sheet">
        <div className="container">
            <div className="left-side">
                {basicInfoComp}
                <h2>Attributes</h2>
                <div id="attributesContainer" className="container attributes">
                    {statsComp}
                    {savingThrowComp}
                </div>
            </div>
            {skillsComp}
        </div>
    </div>
}

export default CharacterSheet;
