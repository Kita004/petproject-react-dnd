const selects = document.getElementsByClassName("statSelect");

const handleStatChange = (e) => {
    const statId = e.target.id;
    const statName = e.target.name;
    const statValue = e.target.value;
    const valueToRepair = document.getElementById(statId).value;

    removeOption(statId, statValue);
    repairOption(valueToRepair);
    // changeState from App.js
    // changeState(statName, statValue);
};

const removeOption = (statId, statValue) => {
    // if statement so that default value does not remove default option
    if (statValue !== "-") {
        for (let i = 0; i < selects.length; i++) {
            if (selects[i].id !== statId) {
                for (let j = 0; j < selects[i].length; j++) {
                    if (selects[i][j].value === statValue) {
                        selects[i][j].style.display = "none";
                    }
                }
            }
        }
    }
};

const repairOption = (statToRepair) => {
    for (let i = 0; i < selects.length; i++) {
        for (let j = 0; j < selects[i].length; j++) {
            if (selects[i][j].value === statToRepair) {
                selects[i][j].style.display = "block";
            }
        }
    }
};
