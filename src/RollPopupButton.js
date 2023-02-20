import React from "react";
import Popup from 'reactjs-popup';
import * as formulas from './utils/formulas';

const RollPopupButton = ({stat=0, dieName="1d", dieValue=20}) => {
    return <Popup trigger={<button>{dieName + dieValue}</button>}>
        <div>
            {formulas.roll(dieValue) + "+" + formulas.calculateStatMod(stat)}
        </div>
    </Popup>
}

export default RollPopupButton;
