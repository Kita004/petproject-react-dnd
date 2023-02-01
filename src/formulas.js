const formulas = () => {
    function calculateProficiency(level) {
        return level / 4;
    }

    function calculateMaxHP(hitDice, level, conMOD) {
        return level * (hitDice / 2 + 1) + conMOD;
    }

    function calculateWithProficiency(stat, modifier) {
        return stat + modifier;
    }

    function calculateStatMod(stat) {
        return Math.floor((stat - 10) / 2);
    }

    function roll(die) {
        return Math.floor(Math.random() * die) +1;
    }
}

export default formulas;
