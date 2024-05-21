const generateScramble = () => {
    const moves = ['U', 'D', 'L', 'R', 'F', 'B'];
    const modifiers = ['', "'", '2'];
    const generatedScramble = [];
  
    let previousMove = "";
  
    for (let i = 0; i < 24; i++) {
      let currentMove = moves[Math.floor(Math.random() * moves.length)];
      
      // Ensure that the current move is not the same as the previous move
      while (currentMove === previousMove) {
        currentMove = moves[Math.floor(Math.random() * moves.length)];
      }
      
      const modifier = modifiers[Math.floor(Math.random() * modifiers.length)];
      generatedScramble.push(currentMove + modifier);
      previousMove = currentMove;
    }
  
    return generatedScramble.join(' ');
};
const aufs = ["U'", "U2", "U"];
const invAufs = ["U", "U2", "U'"];
const aufChange = {"U U": "U2", "U U'": "", "U U2": "U'", "U' U": "", "U' U'": "U2", "U' U2": "U", "U2 U": "U'", "U2 U'": "U", "U2 U2": ""};

export const addAUF = (aufIndex, scramble, solutions=null) => {
    let newScramble = '';

    // Add AUF to scramble
    let moves = scramble.split(" ");
    let lastMove = moves.pop();

    if (aufs.includes(lastMove)) {
        lastMove = aufChange[lastMove + " " + aufs[aufIndex]];
        moves.push(lastMove);
    } else {
        moves.push(lastMove);
        moves.push(aufs[aufIndex]);
    }
    newScramble = moves.join(" ");

    // Add AUF to solutions
    let newSolutions = [];
    if (solutions) {
        for (let solution of solutions) {
            moves = solution.split(" ");
            let firstMove = moves.shift();
    
            if (invAufs.includes(firstMove)) {
                firstMove = aufChange[invAufs[aufIndex] + " " + firstMove];
                moves.unshift(firstMove);
            } else {
                moves.unshift(firstMove);
                moves.unshift(invAufs[aufIndex]);
            }
    
            newSolutions.push(moves.join(" "));
        }
    }

    return [newScramble, newSolutions]
}

export const getRandomAlg = (algset, selectedSubsets, algIndex, algsetData, getNewAlgIndex=false) => {
    if (!algset) return [{index: null, scramble: generateScramble(), solutions: null}, null];

    if (algset === "3x3x3") {
        return [{index: null, scramble: generateScramble(), solutions: null}, null];
    }

    const subsetIndex = algIndex ? algIndex[0] : Math.floor(Math.random() * selectedSubsets.length);
    const subset = selectedSubsets[subsetIndex];

    const caseIndex = algIndex ? algIndex[1] : Math.floor(Math.random() * algsetData[algset][subset].length);
    const nextAlg = algsetData[algset][subset][caseIndex];

    let scramble = nextAlg.scrambles[Math.floor(Math.random() * nextAlg.scrambles.length)];
    let solutions = nextAlg.solutions;
    const aufIndex = Math.floor(Math.random() * 4);

    //console.log("Subset: " + subsetIndex + ", Case: " + caseIndex);
    if (aufIndex < 3) {
        [scramble, solutions] = addAUF(aufIndex, scramble, solutions);
    }

    let newAlgIndex = null;
    if (getNewAlgIndex) { // Means that algs in order is toggled, and we want to update new caseIndex
        const newCaseIndex = (algIndex[1]+1) % algsetData[algset][subset].length;
        const newSubsetIndex = newCaseIndex === 0 ? (algIndex[0]+1) % selectedSubsets.length : algIndex[0];

        newAlgIndex = [newSubsetIndex, newCaseIndex];
    }

    const alg = {index: {algset: algset, subsetIndex: subsetIndex, caseIndex: caseIndex}, scramble: scramble, solutions: solutions};
    
    return [alg, newAlgIndex];
};