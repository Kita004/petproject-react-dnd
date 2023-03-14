export function calculateProficiency(level) {
    return Math.floor(2 + (level - 1) / 4);
}

export function calculateMaxHP(hitDice, level, conMOD) {
    let baseHP = hitDice + conMOD

    if (!hitDice) {
        return
    }

    if (level == 1) {
        return baseHP
    }
    return baseHP + (level * (hitDice / 2 + 1) + conMOD);
}

export function calculateWithProficiency(stat, proficiency) {
    return stat + proficiency;
}

export function calculateStatMod(stat) {
    if (stat) {
        return Math.floor((stat - 10) / 2);
    } else {
        return null
    }
}

export function roll(die) {
    return Math.floor(Math.random() * die) +1;
}

export function rollRandomStats() {
    const DICE_VALUE = 6
    const DICE_AMOUNT = 4

    const STAT_AMOUNT = 6

    const statsRolled = []

    for (let i = 0; i < STAT_AMOUNT; i++) {
        const tempRolls = []
        const statValue = 0

        for (let j = 0; j < DICE_AMOUNT; j++) {
            tempRolls.push(Math.floor(Math.random() * DICE_VALUE) + 1)
        }

        tempRolls.sort(((a,b)=>a-b))
        statsRolled.push(tempRolls.slice(1).reduce((acc, curr) => acc + curr, statValue))
    }
    return statsRolled
}
