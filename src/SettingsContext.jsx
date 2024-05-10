import React, { useContext, useState, useEffect, createContext } from 'react';
import algsets from './data/algsets.js';

const zblsScrambles = [
    "F' R' D' L2 F2 D' F2 D F2 L2 F2 U F2 R2 D R' F R U B2 R' U",
    "L' B U' L2 D B2 D L2 D2 U B2 R2 U' L2 U B' R B' L B' U R' U'",
    "B U' B' R2 U B2 L2 D2 R2 D F2 D' F2 U F2 U' R F' D2 L2 B' L' B' L",
    "L' F R' F2 U2 F2 R2 D2 L2 D2 R2 F2 R2 F2 R' F' L2 F' L' B' R' B U",
    "L D L B2 R2 U2 F2 U' R2 B2 U2 B2 D R2 B2 U B' R' B' F2 R' B2 D U'",
    "B' D B R2 F2 U B2 L2 D' L2 D' L2 D' L' D B D2 F2 R' B R",
    "R D L' U B2 U F2 U' B2 U F2 U L2 F' L' F2 U' F' D' U' R' U'",
    "F D L R2 D F2 D R2 D' B2 F2 L2 D L2 F2 D B L2 U B' R D B' L' F'",
    "B' U R B2 D B2 L2 U L2 D' U' B2 R2 B2 U' L' F D B' D F' L U",
    "R D' R U' F2 U L2 B2 D R2 D2 B2 L2 R2 U2 F' R U2 F D U' R U2",
    "B D R' L2 U' L2 U' F2 L2 D2 R2 D' R2 D' F2 U' R' F R2 D2 B D2 F' D' B'",
    "L' U F' U2 B2 U2 L2 B2 L2 F2 U R2 U2 F2 U2 F2 R' U' R' U B2 U' F' L U2",
    "F D' B' L2 B2 L2 R2 U L2 U' R2 B2 L2 D U' F' D R U R' D2 B D",
    "B' U B L2 F2 D' F2 D R2 U' R2 U2 F2 U' B2 U F L' F L U' B2 F' L2 U'",
    "L' D F L2 F2 D R2 D2 B2 U' B2 L2 U2 R2 U' R2 U2 B' L' U' B U2 B U2 R2",
    "F' R' B' R2 U2 F2 R2 D L2 F2 U' B2 D2 F2 L2 U' L2 F L F2 R D2 U' L2 F",
    "L U' R U F2 D2 R2 D' F2 U F2 D' F2 U' R' F' U F U' L' U'",
    "F D' L' U L2 U' F2 D' B2 D F2 D' B2 D2 R' F2 D' L D F' R U",
    "F D' B' F2 U' R2 F2 D' L2 F2 D' R2 U F2 U' F2 U' B' D U' F R U' R'",
    "R' F' R L2 U2 F2 R2 U B2 D' R2 D2 L2 U B2 U' B D R' B L2 U' F R2 U'",
    "B' L' F2 U F2 U L2 R2 B2 D' R2 U R2 D' B U' L F' L B2 L R2 D'",
    "B' R' B U B2 D F2 U' B2 U F2 D' R2 D L2 U' L B' L D' F R' F' R2 U2",
    "R' U' R D' F2 D2 B2 L2 U' B2 U L2 D2 L2 U' R2 B L' B' R2 D F' R2 F' U'",
    "F' R' F U F2 R2 B2 D' L2 D B2 R2 U2 R2 D2 U2 L' B L D2 R'",
    "B R F' D' R2 D2 B2 R2 U2 F2 U' R2 U' F2 L' B L' U F L F' D2 F'",
    "L' B L D2 F2 D B2 U' B2 D B2 L2 F2 L2 F2 D2 B' R' F2 L2 U2 R2 B' F' U",
    "F D B' F2 D' R2 D' B2 L2 F2 U R2 D R2 U2 B' D' F' R' F2 L2 R' B' R2 U2",
    "R' F D' F2 L2 F2 L2 U2 L2 D2 U R2 U' B2 D' R' U' F' R' F2 R F2",
    "B' U R' U2 F2 U R2 D' R2 U' L2 D' L2 U B2 U' L' D' L2 D' B' F2 U2",
    "F R F' U' R2 F2 D2 L2 D B2 R2 U' B2 L2 U' F' U2 F U' L F L' R' U2",
    "F R' D L2 U2 B2 U L2 U B2 D L2 D2 R2 U' R2 U' F' U B2 R F' U2 F",
    "L U' F' U' L2 U2 F2 U' F2 U' L2 F2 L2 U R2 U' B' R D B L2 R F' L'",
    "R' B' D2 B2 F2 D B2 U' L2 U' B2 U2 F2 L' B R' B L R' B' R' U'",
    "L' U B' R2 B2 D' B2 F2 L2 U' F2 U L2 U' L2 U R2 B' L U F2 R' F2 U R",
    "F' L F D2 R2 U' B2 F2 L2 B2 D2 F2 U B2 F2 U' F' D' F2 U' B2 U L' F U'",
    "F' D' R' L2 B2 L2 D L2 U2 L2 R2 D' B2 D2 L' F2 D' F U B R' B U' R2",
    "F D' R' L2 U2 L2 R2 F2 U' L2 B2 U F2 L2 U R U L' D U F L' U' F2 U'",
    "L' U' B R2 D B2 D' B2 U2 R2 U' F2 D2 F' D2 L' D L B' F' L U2",
    "L B R U F2 D L2 U' B2 F2 L2 D L2 R2 U' L' D B' R' B' U2 L2 B' F2 U",
    "B R' B' D F2 U' F2 U F2 R2 F2 L2 D B2 D2 L' B U2 F' U2 F2 L' R2 D'",
    "B R B U B2 U2 B2 R2 D L2 D2 F2 D' F2 L2 R2 U2 B' L2 R' B' R U2 R' F'",
    "F L' B' L2 B2 D2 U' R2 F2 L2 F2 D R2 B2 R2 F U2 L F' L R2 B2 U L' U'",
    "R' F R' F2 D' R2 B2 U' B2 R2 U' F2 U2 B2 D' B' U' B' R2 U2 F'",
    "L' U' B F2 R2 U L2 B2 U F2 L2 U L2 D2 L2 U' F' U B2 D2 B' U2 L'",
    "R F D' U R2 U F2 L2 U' F2 R2 U2 B2 U' B U F' U' L B L B2 R' U'",
    "L U' F' U2 R2 D' R2 B2 D' F2 U B2 U' L2 R2 D U' B' D R' B L2 R' F' L'",
    "B L B' F2 R2 D B2 U' B2 U F2 U' F2 U F2 D F' D R2 U' L D B' F2 L'",
    "L' B L D R2 F2 D' F2 R2 U' L2 U B2 D' R2 F' R' F2 R U2 B F",
    "R F' R B2 L2 D2 B2 U R2 U2 F2 U B2 D' B2 R' F2 U R2 U' R2 F' U2 R'",
    "B R U D2 R2 B2 R2 U R2 U B2 U' L2 U2 L D R B' L2 F' U L' U",
    "L' D' R' U' B2 D L2 F2 R2 B2 D B2 D2 F2 U' R' F U' F' L' B2 U' R2 U R'",
    "F' L F' B2 D' R2 F2 U F2 R2 U L2 B2 D' R' F D2 L' U2 R B'",
    "F' D' B' L2 D2 R2 F2 U2 B2 D' F2 U R2 D' B2 D' B' D' R' F' U' R D' U",
    "R D' R' L2 B2 D2 B2 R2 D2 R2 D' B2 D' L2 F2 L' U L R2 F' R F' D U",
    "L F R U2 R2 U' L2 U R2 U' L2 F2 U' F2 R' F' L' U F R' F' R U",
    "L F R' L2 R2 B2 U R2 U' B2 U B2 U L2 F' D F2 L' R U'",
    "L F L D' B2 U' L2 U' R2 D L2 U' B2 U' L2 F2 U' F' U2 R U2 R' U' F U",
    "B' L U' D' F2 D' R2 U R2 U R2 D2 B2 L2 U' B2 L' U2 B' U B' R' B' U2 R2",
    "L B' D' F2 L2 F2 L2 U' R2 B2 R2 D U F2 R2 D' L' F L D' B F' L' R2 F2",
    "F' D' R F2 D' F2 R2 B2 R2 U L2 U2 R2 B2 D B2 U' L' B2 D L2 R' D' L2 F'",
    "B R F' L2 U2 B2 L2 D' L2 D F2 U' F2 U2 L' U' B2 U2 L2 F U' R' B'",
    "F' U L F2 D L2 U R2 D' F2 D B2 F2 R2 U' L2 B' R' D2 R2 B L' F' R2",
    "L' B R' D L2 B2 U' L2 U2 F2 L2 B2 L2 D' B2 U' R' U' F' L' U2 L F L B",
    "R F' R' F2 R2 B2 L2 D L2 B2 D B2 D B2 D2 B' R B F U2 F2 R2 U2 R",
    "F' U' F U' F2 U' L2 U2 L2 F2 U' R2 D R2 F' U2 F2 R2 D' R2 F'",
    "B D' R' F2 U F2 D' L2 F2 U2 F2 U' F2 L2 D2 B' R' U' B U' R' U' R' B",
    "R D R' D B2 L2 U' L2 D' R2 U R2 B2 U' R2 U' B' U' B2 R' B' U B D' R'",
    "F' R' F2 L2 R2 U R2 F2 U' F2 U R2 U2 L2 R' U B L' F' L' B' F2 U2",
    "B' L' B' F2 D' B2 D L2 D L2 U2 F2 R2 U R2 D' B' L R' F R B F' U'",
    "F' D' F B2 D2 B2 R2 U' B2 D' R2 D F2 D2 L2 U' F D R2 B L B L B2 R2",
    "F U' B' U2 R2 U F2 U' R2 U F2 U' R2 F2 U' B D2 R B' R' D2 F' U2",
    "F' L' B' U R2 D L2 D2 R2 B2 U R2 F2 D2 L' D' R2 B' L2 U' F U",
    "L U' L' F2 D' B2 F2 R2 B2 U' F2 D F2 R2 U' R' B2 R2 U B2 U' R",
    "L B R' U2 F2 U' R2 D2 B2 L2 R2 D' R2 U2 B D2 R F L' D' R' F2 U F2 R'",
    "F' L' D F2 R2 D2 B2 D2 U R2 F2 U' F2 U F2 U F' D' F L' F2 U2 F' U2",
    "F' L B' U2 B2 R2 U2 F2 D' B2 D B2 U2 B2 U2 B' L D' B R D' B L D2",
    "L' F' L B2 D' B2 R2 B2 D' F2 U B2 D2 B2 U F2 R' B' R2 B L' D2 R F L",
    "F U F L2 R2 B2 D' B2 L2 B2 U2 R2 D R2 D2 U2 L' D2 B D' B R2 F2",
    "R' U' F L2 R2 D' R2 B2 U F2 R2 U2 B2 L2 U L2 F L2 R' B L R2 U2 L U'",
    "F R' U F2 U F2 U' F2 L2 R2 D' B2 D L2 U' R2 U' F' R F' R' U R F U'",
    "F U' F' B2 L2 F2 U' F2 L2 U' B2 D2 U' B2 D F' D' B2 F D F' U2",
    "B R D' B2 F2 L2 B2 U R2 D B2 R2 D U' F2 R' B' R' D B R' U L2 B' U",
    "L' B' L D' R2 F2 D' B2 U L2 B2 U' B2 D B2 L2 U' B' D2 L' D' F L' F",
    "L U F D U2 F2 D' L2 U L2 F2 U' L' B L F' L' B' U2",
    "L U R F2 R2 D L2 R2 U L2 D' U' R2 F2 R2 U L' F' R B2 U F' U F2",
    "F' R' U B2 L2 F2 D2 B2 F2 D L2 U B2 D' L2 U L' U2 F' L U F2 D R U",
    "F D' B' D F2 U B2 D2 F2 U' R2 D' B2 R2 B2 L2 U F' D U' B R U R' D2",
    "F' U' R D' F2 D F2 U R2 U' F2 U' R2 U L2 U R' U' L' R' F' L' F2 R U2",
    "F D' B F2 R2 D' R2 B2 U' B2 U F2 L2 U' L2 B' D F U' L' U L F2 U'",
    "L F L' D' L2 D B2 D' B2 R2 B2 F2 U R2 U2 F' L' D' B2 D2 R F' U' R",
    "F' R B D' B2 D U' B2 R2 D2 R2 U L2 U2 L' U B' R' F L' U' F2 L'",
    "F D' R' D' B2 R2 D F2 L2 U F2 D' F2 U F2 U R' U' R' F' D' R D",
    "B' R U' R2 U2 R2 F2 U' R2 U R2 U2 B2 U' F2 U B' R' U2 R' U2 R U2",
    "F' R' F2 U L2 F2 U' R2 B2 R2 U R2 D L2 R' F R2 B' R' U2 B R' U'",
    "L F' U F2 U' B2 R2 U2 L2 U B2 U' B2 L2 D' L2 F2 R' U' B R' D2 L",
    "B' L F' U' F2 D R2 F2 D' F2 D L2 U B2 L2 U F' L' R2 B F L' U2 L U'",
    "B D' R F2 D B2 U' R2 F2 D F2 D' R2 D L2 R2 B D L2 D' L B U L2",
    "L' F L U2 F2 D' L2 U L2 D2 F2 D R2 B2 U' B' L R2 U' L' R' B' R D2 U2",
    "L B' R D2 B2 L2 U B2 D' R2 U L2 U' F2 D' U2 L' D2 F U' L R' D2 R2",
    "B L B' D' U2 L2 D B2 L2 U' F2 L2 D2 L2 F' D U' B U' L' B2 R2 B U2",
    "R' D' B' F2 R2 U2 F2 U' R2 B2 D B2 D' F2 D B D' L2 D F' L2 D R U",
    "R' U' R' U' B2 R2 D2 B2 U R2 D2 F2 U L2 U' B2 F' D R2 D2 F' R U R2 U2",
    "F R' U' B2 D' L2 D B2 R2 U2 R2 U2 R2 F2 U' F' R U2 B' R2 B R' U2",
    "L D F D F2 R2 B2 R2 D' R2 U R2 U' L2 U F2 L2 R' F' R F D' L' U2",
    "B D L' B2 D L2 F2 D2 R2 U B2 U2 R2 B2 D L' D' B2 R F' U' B U2 F U'",
    "L F L F2 L2 U2 B2 U' L2 U B2 D B2 D2 F2 U' L' F L' B' D' R D' B U",
    "L B D' U B2 U' L2 U' B2 L2 U' B2 L2 F2 R2 U' L D' B2 R' U2 R' B' L' U",
    "L U R D B2 D' R2 U R2 D' L2 U L2 D' B2 U F U2 F' D2 U' R' U L' U'",
    "F' U F D L2 U2 F2 L2 U' F2 U' L2 U' R2 U R2 F' R D2 L B2 L' D F'",
    "F' U R' D2 L2 D2 R2 U L2 U R2 D' F2 D R2 U' R' F' L U' L2 U L' F2",
    "F' U F L2 R2 D2 R2 D F2 R2 D' R2 U F2 D2 F' D' U' L' F U L' U2",
    "L' D L' D' R2 U2 R2 F2 U F2 U2 L2 U F2 L U R2 B' D2 L R2 F D2",
    "B R D' F2 D' B2 U2 B2 L2 B2 D' B2 D L2 D2 R2 U2 F' R B' R2 F' R' F2 U'",
    "B L' F' L2 U2 L2 D B2 U' B2 F2 U' F2 D B' L2 U L' U2 F U2 L2",
    "L' F D' U' R2 D R2 D2 L2 B2 L2 B2 R2 D' F2 R2 B' R U2 B2 D' B' L F2 L2",
    "L' B L' D R2 B2 U B2 D' L2 D L2 B2 U F2 R2 U' R F' D2 F' U' R2 U' L",
    "B U' F U' F2 U' F2 U2 F2 U F2 U F2 U2 F2 U F' R U R' B' F' U F",
    "L B' R B2 F2 R2 D F2 R2 D' B2 R2 U' F2 D' L' F D2 L' U2 L D' B D",
    "R B' D' R2 F2 U' F2 D2 R2 U L2 U' L2 R2 D' R2 B2 L' B' L2 U R' U2 L' U'",
    "F' U B R2 D2 L2 B2 U F2 U2 L2 U' F2 D' U' B2 L' D' L2 F' D B' L2 R2 F2",
    "F U R' F2 U' L2 B2 U' L2 F2 R2 U2 R2 D' R' U' F' U' L' U2 L U'",
    "F D B' R2 B2 U' B2 U' L2 U F2 U L2 U' R2 F' D L U2 L' U B' L2 D' U'",
    "R D' R' D F2 U' F2 R2 U' L2 U B2 R2 U L2 F' D F' D' U2 R D U2 R2 U",
    "R' F U' F2 D R2 D R2 U' F2 R2 U' L2 U L2 R2 B' R D2 F' L2 B R' U'",
    "L D' L' U2 F2 D2 B2 R2 U2 R2 U B2 D L2 B' L' D' B R' B' D' L' R'",
    "B D F' U L2 D R2 D' L2 F2 U' R2 U F2 U' R2 U2 F' D' U B' L F L' U'",
    "F' U B' U2 B2 L2 D L2 D' L2 U B2 U B2 U2 L2 U' F U B2 R U' R' U B",
    "B' D' F' D' F2 R2 D2 B2 R2 U' L2 D B2 L2 U L' U F' U B' F' L2 D'",
    "L' B' R' F2 R2 U' L2 B2 D2 R2 F2 D' R2 D F2 D F' L B' L2 R2 U' R' F' R'",
    "F L' D2 F2 U' L2 D B2 D' B2 U' R2 B2 U' R F' L' R2 B' R B R2 F2 U",
    "L' B L D F2 D' B2 D' L2 B2 L2 U L2 U' R2 F2 L' B' U' L' R2 B' L2 U2",
    "L D F R2 D F2 L2 U2 B2 F2 R2 F2 U' R2 F2 R' U2 R' U L F U2 F'",
    "B' R' D R2 D F2 D' B2 U F2 L2 U L2 U' B' R U R' U' F R2 F'",
    "L' D L' D2 F2 L2 B2 U2 F2 U' F2 D R2 U' F2 U' F2 R' U' R2 B2 F' L' F U'",
    "F R B R2 D' B2 D' B2 U2 F2 D F2 U2 F' R' B' R' U2 B' U' B' U2 R'",
    "L' F' R2 U B2 U2 R2 U' B2 U2 R2 U' B2 L2 U2 R B' L B' L' R' F L",
    "L' F U L2 U R2 U2 B2 U R2 F2 U F2 L2 U F2 L' D L' U2 L2 F' U' L U2",
    "F D' R' D2 F2 U' B2 U' R2 D B2 U2 B2 D R2 B2 R D R2 U2 F U2 F R F",
    "F U' R L2 U' F2 D B2 D L2 F2 U2 B2 U' L2 U' R U R F' R F R' F' U2",
    "R' D' R D F2 U' R2 D L2 D F2 L2 D2 R2 D U' B' L B' D' F U F U'",
    "L' B U L2 B2 U' L2 U L2 D L2 D2 L2 B2 U' R' D2 R D' L2 B' L F2 U",
    "F' D F' L2 F2 D F2 D' L2 D' B2 L2 D U L2 U2 L' F L D' U2 F U' B2 U2",
    "F R B' D2 R2 D' F2 D R2 D' B2 U' L2 D2 B2 U2 R' U F R2 B L2 R2 F2",
    "B D' R U R2 U' B2 D R2 U2 R2 F2 D2 U' B2 L2 B' U' R' B2 D2 U' R' B L'",
    "R' U' L F2 R2 U L2 F2 L2 B2 R2 D' L2 D B2 D U2 R' U R D' L' U R' U'",
    "L' U L' R2 F2 D' B2 R2 F2 U2 L2 D L2 U' L2 B2 L' U F' L D' F D2 R2 F'",
    "R B R D' F2 D' F2 D2 F2 L2 D F2 U2 R2 U' F2 L' B F' D' R' D' F' R'",
    "R D R L2 D' B2 L2 D' R2 U L2 U L2 U F2 R U2 B U' B D' B2 R' U",
    "F R' U' D R2 B2 L2 D L2 D2 R2 U' L2 D U' F' D2 F' L2 D' R U' F' U2",
    "B R U F2 R2 U B2 D R2 U' B2 D L2 U B2 U' L' D' L D' R B' F2 U'",
    "F D' B U B2 D' U2 R2 U' R2 B2 U2 B2 R2 U2 B' D B U B D R' F' R U'",
    "R' U B' F2 U2 L2 U' B2 D F2 U' B2 L2 U' R2 U2 L B F' L' F L2 D' B2",
    "B D' L R2 F2 U' L2 D' B2 R2 D2 B2 L2 U' L2 R2 D2 L' U F U2 F2 L2 B' R2",
    "B L' B R2 D B2 U' B2 U L2 F2 U2 L2 R2 D' R2 B' D' B' L B2 R2 U2",
    "F' R D' B2 L2 D U L2 B2 D' L2 B2 L2 R2 U F2 L' U' R F2 L2 F L' F2 U2",
    "B' D' L' R2 U' R2 D F2 U' L2 D F2 L2 D2 R F2 L B' U2 F U F2 R2 U'",
    "F' U' L' U L2 D R2 F2 D2 B2 U' L2 B2 D L2 U' F' L2 F R' F2 R U2 L2",
    "B R' U L2 D L2 U' L2 D2 F2 D L2 R2 B2 U' B2 R' U2 B' U2 B' R2 B R2",
    "F' U' F' U L2 D R2 U' F2 D2 L2 U B2 F2 R2 U' L2 R' U' L2 R2 D' L2 R U",
    "R U F' D L2 U' F2 R2 B2 L2 D2 L2 U B2 F2 L' F' L' B F2 R' B R2 U2",
    "R D' R B2 U B2 D L2 D' B2 U B2 U R2 D L2 R' D B2 D' U' B2 U'",
    "L F R F2 R2 D R2 F2 U' B2 D B2 R2 D' B2 D' R' B2 R B2 U F' L' U'",
    "F D' B' D' F2 U F2 D' B2 U' L2 U' L2 D F2 D' L2 F' D L' B' L' R2 D F2",
    "B U' F' U' B2 U' B2 L2 U' L2 B2 U' B2 L2 B' L' F U2 F2 L2 F2",
    "R U' R B2 U R2 U R2 U' B2 R2 U R2 U2 R2 F' U' F2 U R U' R' F' U'",
    "R U B' F2 D2 L2 U' R2 U' B2 R2 U2 L2 D B2 U' B' R2 U2 R2 U' R' U",
    "R U L F2 U F2 U' F2 L2 D' B2 U B2 L2 U' F' U' F D F2 L' U2 R' U2",
    "R' B' L F2 L2 D R2 U' F2 D2 U F2 U' B2 R2 U' B2 R B L R' B R2 U2 B",
    "L' B U2 L2 D' L2 D L2 U L2 B2 R2 D' R2 U B U F2 U' F2 L2 F' L' U2",
    "F' D' B R2 B2 D B2 U' B2 F2 U' L2 B2 U R2 B' R2 D' B' R2 D R' F' R",
    "F' D B D2 B2 U' B2 L2 D F2 L2 U L2 U' F2 D B' D' F R U2 R' U",
    "R F' L' D2 L2 B2 D L2 D F2 D R2 F2 U B2 D L' F U' L2 B R' U L2 U2",
    "L' D F U L2 B2 D' F2 D F2 U2 B2 L2 D' B2 U' F R D' R B2 U L' U F2",
    "F' U F R2 F2 L2 D R2 D' L2 U' L2 B2 L2 U2 F2 U' F' R2 F' U2 L' B' L",
    "F R' B F2 U L2 U2 L2 U2 B2 U F2 D' R2 F2 L' B' L' F' D B' D F2 U'",
    "R D' B U B2 U R2 U' B2 U' R2 U B2 U R2 B' L F U F' L' D R' U",
    "B L' F L2 D F2 D B2 R2 F2 D2 F2 U' B2 L2 U' B' L U L2 F U' L2 U'",
    "L F' U' B2 R2 U B2 U' B2 R2 U' F2 U B2 U F' U2 R U L' B2 R' U'",
    "L D' L B2 U' L2 U B2 U' B2 L2 U2 R2 U' R D B2 L2 F U' F' U2 F2 U'",
    "B D' B' U2 F2 U F2 D L2 D2 B2 L2 U' B2 D' L2 B' R' U R2 D B U2",
    "L' D' R U2 B2 U' B2 D F2 D' R2 D' F2 U2 B2 R2 F' R' D2 F' L' F' U' B2",
    "B L U' L2 D2 R2 D' B2 U B2 D' R2 U2 B' R B L U2 B' R' U",
    "B' U' F' R2 D' F2 U F2 U R2 D B2 U' B2 U2 L' B L' B' L2 F U' B",
    "B U R B2 F2 D' R2 D L2 D2 L2 B2 U' B2 U2 L2 R B L' D2 L F' D L2 R'",
    "F L U D2 L2 D U2 B2 D F2 L2 B2 D R' F' D2 B R B F R' U'",
    "F' U F' U2 F2 D F2 L2 D' L2 F2 D2 B2 D' F2 U2 R' F' R F' D F' D2 B2 U'",
    "B' R' F' R2 F2 U2 F2 U F2 U2 R2 U R2 U' R2 F2 U' R' B F2 L F' L' F2 U2",
    "L' B' L U F2 L2 D2 U' F2 L2 R2 U L2 B2 L' U2 B U2 L B' D' B U2",
    "B U F B2 U' L2 F2 D' B2 D R2 U R2 U2 R2 B2 U' F' D' B L F2 L U2 L2",
    "F U F' D' F2 U L2 F2 U' L2 U' L2 F2 L2 F' L' D' U2 L D L F D",
    "R' U B' F2 R2 U L2 B2 U' L2 D' R2 D2 R2 D' F2 U' R D' R' F2 U B R U",
    "L' U' R B2 U2 B2 D L2 U L2 D F2 D R2 U R2 B' D2 F' L2 F' D' L R' U'",
    "B' U B L2 U' B2 R2 D2 F2 D R2 D' R2 F2 D' B' D2 L F L' F D B' U",
    "L D' F' L2 U' R2 F2 U' B2 U B2 U F2 L2 D2 R2 F D F L' U R U2 R' U'",
    "B L F L2 R2 D R2 U F2 R2 D' R2 U L2 U L2 U' F' L2 F' U2 L B' U2",
    "L' F' U R2 D L2 B2 U2 L2 D' B2 U R2 U2 B2 F' L R2 D2 R D2 U2 R U",
    "R' D' R B2 L2 D L2 U' B2 D R2 F2 U L2 R2 B2 R' F L2 F' L2 F D R",
    "B R D' R2 U L2 D' F2 D2 R2 B2 R2 F2 U R2 U F2 L' D L U F2 R' B' U",
    "R B U' B2 D B2 D' B2 U' L2 R2 D' F2 R2 D L2 B' U' R U R' U' R2 U",
    "R' D R D2 L2 D2 R2 F2 U L2 B2 U F2 D' U' L' R' F' D2 L' D' R",
    "R U' F' B2 U L2 R2 U' F2 U' L2 R2 D2 R2 D' L2 F' D2 R2 U B' F U2 R' U2",
    "F' R F D' B2 D L2 U' B2 L2 U' B2 L2 U B F' D' B D B' R' U' F U2",
    "B' R' B' R2 D L2 D' R2 D L2 B2 U B2 D' B2 U2 F' L F' L' B' F2 R' B",
    "B R' B L2 D' F2 D' B2 U2 R2 U L2 U' L2 U' B' F L' B U F' D2 F2 U2",
    "F' L' B' U' B2 U B2 U' B2 U' B2 U2 B2 U2 L' B' L U2 L U F U",
    "F' L U' R2 F2 U' F2 U F2 R2 D R2 D L2 B2 L2 U F' U' F D2 F2 L' F U",
    "B U' F L2 U' L2 U L2 U' R2 D2 L2 B2 D2 R2 U' L' D F D' F' L B' F'",
    "R D' R' D R2 B2 F2 D' B2 L2 B2 D F2 R2 U2 L' B L R B' U' B2 R2",
    "L B' U R2 D R2 F2 U' R2 D B2 D2 U R2 U' B2 R2 B' L2 U R U L R' U2",
    "L U F' U' R2 U2 R2 F2 U F2 U2 F2 U' F2 U F R2 U2 R' U' R' U L' U2",
    "B U R' D' B2 F2 U' F2 D2 B2 U' F2 D' F2 U2 R' B' U' F' R2 U F R2 U'",
    "R' F R' U2 F2 L2 D U2 R2 U' B2 U' R2 F2 U' F2 R' U' R2 D' L2 F' R",
    "L' F' U' B2 D2 B2 U' R2 D B2 D' B2 D L2 D' F' D2 R2 F R' B' L B' R'",
    "R D' F' U F2 D2 R2 F2 L2 D' L2 F2 D2 U' F' D R' U F2 U F2 U",
    "L B U' B2 R2 U' B2 L2 D' F2 U L2 U' F2 U2 B' L' F' R' F R F U'",
    "B' R' D' B2 R2 D B2 D' L2 R2 F2 U' B2 D' B' L B D' R2 D' B F2",
    "L' D' R' B2 D' B2 R2 B2 D2 L2 U' L2 R' D B D' B' L U' R",
    "R' D B R2 D B2 D' B2 L2 D F2 D' L2 U B2 U' R' B' U B2 R' D' R U R2",
    "F' U L' B2 R2 D2 B2 R2 U' B2 L2 D2 L2 D' R2 B2 U L F R U R U R U'",
    "B L' U F2 U R2 D' B2 F2 L2 D' B2 D2 L2 F2 D' F U' F2 L2 D L U B' R2",
    "F U' B' F2 D2 U L2 D2 F2 R2 B2 U2 R2 U' B2 U' L' D F2 D' F2 L B' F' U'",
    "R' F L D R2 F2 R2 D2 F2 R2 D' L2 U F2 R2 U R B L' B L2 D2 F' R2 U'",
    "L' D F' D' L2 D' B2 L2 U' B2 U B2 L2 U' F2 D2 L' U B U L B2 D' L'",
    "B L' D2 R2 U B2 D L2 D2 F2 R2 F2 R2 D' U' F L' B' F2 L' U' L F' U2",
    "L' F' R U R2 U F2 R2 D L2 B2 U' B2 U2 B2 L2 R' F' D U2 F D' U2 L F'",
    "L' D F D' B2 D R2 F2 U' B2 L2 U2 R2 U' F2 D F2 L U' L' B' R2 F D L",
    "F' R B D L2 B2 R2 F2 R2 D R2 U' R2 D2 U' L' U' F2 L R' F D2 B F2 U'",
    "B D B U2 B2 U B2 R2 D L2 B2 D' F2 U R2 F L' U' L' B' F R2 U B U'",
    "B' L D' L2 R2 D B2 U L2 D2 B2 F2 D B2 D L B U2 F' L' U2 F' L2 F2 U'",
    "L' B' D' U2 F2 D L2 D F2 R2 U B2 D B2 U' B' L2 F' L D R2 D' L2 U'",
    "B' D F' D' F2 L2 R2 D' R2 U R2 B2 F2 U2 F' L' U' L' D B' R2 D F U'",
    "B R' F D' L2 D2 B2 D' B2 U2 L2 F2 L2 U F2 U F' R2 U B U2 L' R' B' L",
    "R' B' R' D F2 D' R2 B2 U2 B2 U' B2 U' L2 B2 U2 R' B R U' R U2 R' U",
    "L' D' L U' L2 D L2 R2 B2 D' B2 L2 U' L2 U' F R' F' L' B D L B' U R2",
    "R B R' F2 U B2 D B2 U' F2 U B2 D' B2 L2 U' F' R B' U' R' U' F2 U F",
    "B L' R2 U B2 R2 U F2 U R2 D B2 U' R2 F2 L' B2 U2 R2 U' R2 B",
    "R' D' F' R2 D' B2 D' R2 U L2 R2 U R2 D F2 U2 L' D L' U' F' D R U2",
    "R F' R' F2 U B2 L2 B2 R2 F2 D L2 D' B2 D R' U B2 U2 L2 U F U R'",
    "B L U' D' L2 U L2 F2 D R2 U' R2 F2 U' F2 U2 L' B2 F R' F' R B U'",
    "B' L U' R2 D F2 L2 D' B2 D2 F2 L2 D L2 B2 R2 F U2 L U' R B2 D2 B R'",
    "B' R U' R2 D R2 F2 R2 B2 R2 D' B2 L2 D' R2 D F' L' D' L F' D' B' U",
    "L' D L' R2 F2 D2 L2 U R2 B2 F2 D L2 D2 L2 F' R' D B2 F' L2 R D L2 U2",
    "L' B' L R2 U2 B2 U B2 R2 U2 R2 U B2 R2 U R2 U L' B' D L' F' L D' L",
    "L' F' D B2 L2 U' B2 L2 D L2 U F2 U2 F2 U' L2 R' F' R D2 B2 F L U",
    "R B' D R2 U' R2 D' L2 U2 F2 L2 D' L2 U' F2 U L' B' R B2 L' R2 U B U'",
    "B' D R' U L2 B2 D' L2 R2 U R2 U2 R2 F2 R' D' U R' B U2 F' U F U'",
    "R' B' U' D' B2 D L2 U' L2 U' B2 U' R2 U2 R2 U' R' B U R2 F' U' F",
    "R' D' L R2 B2 U' B2 L2 D R2 F2 U L2 D B2 R' D F2 U F' L' D2 B2",
    "B D' R D U L2 B2 U' L2 U L2 U' L2 B2 L' U2 R U2 R' U L' B",
    "L' U' L D' L2 U L2 U L2 U B2 D' U' R' B R B D2 L2 F2 U F2",
    "L' D F' D' R2 U2 F2 U' R2 U2 F2 U R2 U L2 R U R D' B L2 D L R2 U",
    "L' F' R' L2 R2 U2 F2 D' R2 F2 U L2 F2 D2 F2 U R' F U B' U B U' L",
    "L' F R' F2 D' L2 U L2 U' F2 L2 D2 F2 L2 D R2 B U B2 R' U F' U' L'",
    "R U F B2 F2 D R2 B2 L2 B2 D2 R2 D R2 B2 U2 F' R B' U2 R2 B U' R'",
    "B' U' F' U F2 R2 D2 L2 U F2 D' B2 U2 L2 U R' B R' D' U2 B' U F' R2 F2",
    "B R U' B2 R2 U' L2 D2 R2 F2 D' F2 L2 U L2 D' L R B' L B' R2 U2 B U",
    "L B' U D2 R2 B2 L2 R2 U' B2 L2 U' L2 R2 F2 U2 B' L' F2 U2 F2 D' L2 D",
    "L B R' L2 B2 U' B2 D L2 F2 U' R2 B2 U2 B2 D2 L' U' L' D R' B' L' U",
    "R F D' U F2 D' R2 U' R2 U F2 D' L2 R2 B2 U' R2 U2 B' D L2 F R' U'",
    "R U' R' L2 F2 U B2 U2 B2 L2 U L2 D' B2 D R D2 B R' B L F2 L2 U",
    "R D R D' L2 D' B2 D L2 U R2 F2 D U R D' U' F R2 F' U R' U2",
    "R U F U' B2 U2 L2 U B2 U B2 U' L2 F' U' R' F' L F U2 L' U'",
    "L D F' R2 F2 D L2 F2 L2 B2 U L2 D' R2 D F' U B2 D' F' U2 L' U2",
    "L' U' L' D' B2 U B2 D' B2 L2 D2 U R2 F2 U' R' F' R' U R' F2 R' U R2 U2",
    "B U' B' F2 U R2 B2 U B2 U' B2 L2 U' B2 L2 D B' D2 U B' L2 U F' U2",
    "B' D B D B2 F2 R2 D' B2 D' R2 F2 L2 R2 D' R' U2 F2 D' B D' L F2",
    "R F R' D2 F2 U' L2 F2 L2 F2 D' L2 B2 U' B2 D' R F' U L' B L U' R' U2",
    "F' L B' F2 R2 F2 U R2 D B2 D' R2 B2 U' R2 U' B' R2 D F D' L' R2 U F",
    "B' D' B' D' L2 U F2 L2 B2 D2 L2 U' R2 D L2 U2 B' R D U2 B U2 R' B U'",
    "L' B' D L2 B2 L2 D F2 L2 U' B2 U' B2 U R2 U2 B' L2 F2 R' B L U2 R' U2",
    "L F' U' F2 U' F2 U2 L2 D L2 D' B2 U B2 U' L' F L' R2 U' L U R2",
    "R B L' D' L2 U L2 U' L2 B2 U B2 D U' L' U' L' U2 L2 U' L' B' R'",
    "L' B L B2 R2 B2 F2 U L2 U L2 U' B2 D' B2 L' F L2 U B' L F R2",
    "R F L' B2 R2 B2 D' F2 L2 U' L2 U2 L2 F2 U' B2 D F' U' L2 F L R' U2 F'",
    "L' D R' F2 R2 U' F2 D R2 U' B2 U2 F2 D' U' L F' U' R' D' B2 U' F L2 U2",
    "F' D' L' U2 F2 D F2 L2 D L2 R2 B2 D L2 D L' B D2 L R2 U F2 L' F U'",
    "R F' R U' F2 U' R2 F2 U2 B2 D' L2 D B2 R2 U2 F' U' F2 U' R F U R' U",
    "B' D L D L2 D' B2 F2 D F2 D B2 U2 F2 D2 R' U' F R2 D L U' R' B' D'",
    "R' B R D R2 F2 U2 R2 D' R2 U' L2 F2 D R B2 R' D' R' U' B' U R2 U",
    "F U R L2 U R2 U' R2 U R2 U' R2 B2 D' B2 L2 U2 F' R U2 B' R' B R2 U",
    "R' B R' B2 U B2 D' R2 D R2 U R2 U2 R2 U' R' F' U2 B' F R' F' U' F U",
    "L' U B U2 B2 U B2 U B2 L2 D F2 R2 D' L2 U2 B U' L2 R' F D' L' F R",
    "R' B U R2 U' R2 U' R2 U R2 U' B2 D2 F2 D F' R2 F' R D B2 U B' R2",
    "L D F U' B2 D' L2 D2 F2 L2 F2 L2 D F2 D2 B2 F U' L' U L F2 D' L' U2",
    "L' D B F2 R2 D F2 L2 U' B2 L2 F2 L2 D2 F2 U B' R2 D R' F2 U B2 R' D2",
    "L' U F U' R2 B2 D' U2 F2 L2 D2 B2 L2 D2 L B2 F L D U2 F2 D' L R",
    "F' R D' R2 B2 U R2 U R2 U R2 B2 U F2 L2 U' L F' L' R U' L' U L U'",
    "F U' F R2 D' L2 D L2 R2 F' U B2 R' D F' R B2",
    "F' U' L' D' R2 B2 R2 D R2 F2 U F2 D' R2 U' L2 R' D F L' B2 F2 R",
    "R' D F' L2 D L2 D2 R2 D' R2 F2 D2 F2 U F2 U' F' D' R2 U R' F' U2 F U'",
    "F' R' F L2 U' R2 D' U2 L2 U2 R2 B2 U L2 U2 B2 R F2 R F R U F R U2",
    "B U' R U R2 U' L2 D' B2 F2 R2 U' B2 L2 U' B' L2 F' R2 D2 F' R' U B'",
    "B U B' U F2 D2 B2 L2 U L2 B2 D L2 D' L2 U R' U2 R D2 F2 U' B U B'",
    "F R F D2 F2 U' B2 R2 F2 L2 D R2 B2 D2 B2 F' R' F R' F U2 F R U'",
    "L F' L D2 L2 F2 D F2 D' F2 U' B2 D B2 F2 U' L' D R2 D' B' L D2 R2",
    "F D' F' R2 D R2 U' L2 F2 U2 F2 U' F2 U F2 R2 D L' F L' F' R2 U2 F D",
    "L' U B' L2 B2 L2 U2 R2 F2 U B2 R2 U' B2 U' L' D' R2 B2 D' B L2 U'",
    "F' U' B' D' R2 B2 U' F2 L2 B2 F2 U2 F2 R2 U R2 U R' F' U B' R2 B2 U'",
    "F' L B U' B2 L2 B2 F2 D2 F2 U F2 R2 D2 R2 D' U' R' F' U R' B' L R' U'",
    "F' D F' U L2 R2 D L2 D' B2 U2 R2 U F2 L2 R' F' D' R U2 F U F2",
    "B' U' F R2 F2 U' L2 U' R2 D' L2 D2 B2 F2 R' U' L2 D' F' U R B'",
    "R U' F' U F2 D2 B2 L2 D F2 U L2 D' R2 F2 U B D L2 F2 D' R F' U2"
  ]
const zbllScrambles = [
    "R U' R' U' R2 U F2 D R2 B2 U B2 D' F2 U' F2 U' R' F2 R' F2 U' R'",
    "L U' L' F2 D' F2 R2 U F2 U L2 R2 U R2 D' F2 U' F2 L' F2 D R' D R' U",
    "R' D' F D F2 D' L2 U L2 U' F2 U' F' D F' U F R U'",
    "B R' B' D B2 D' B2 L2 D' F2 L2 U L2 B2 L2 U R' F' L F' R2 D2 U2 L' U2",
    "B' D B' U F2 R2 D2 R2 F2 U B2 D' U' B' D' R2 D R2 B U2",
    "F' D' F U' L2 U L2 U' L2 U F2 U2 L2 F2 L2 F2 U' F' D2 F' U' F D' F",
    "B' R B R2 D R2 D' U' F2 D2 U' L2 U F' L F L U' L D2 F2 U'",
    "F D L' D' F2 R2 D' F2 L2 B2 U R2 U' R2 U' L' D' B2 D B2 F'",
    "B R D' B2 L2 U' F2 R2 D' R2 D R2 U' R2 U L2 U2 R' B2 R B R U' R' U2",
    "L' F' L2 D2 L2 F2 R2 U' B2 U' B2 R2 U' F' L U2",
    "L D B U2 F2 U' F2 D R2 D' R2 U R2 U' R2 U2 B' D' L'",
    "F' L U' B2 L2 U' F2 D F2 R2 D F2 D' L2 R2 U2 F' D' F L' F U2",
    "L D L' F2 D2 B2 D L2 D' R2 D' B2 D' F2 U R2 U L' D' L' U'",
    "B L B' U R2 F2 R2 U' F2 U' B2 L2 D2 B2 U' R2 U' B L' B2 F2 R' B F2 U'",
    "R D L D' R2 U' R2 B2 D' L2 B2 D R2 U2 F2 R2 U' L' U R' U' R D' R'",
    "L F' D' L2 B2 D2 F2 U R2 U' R2 U2 R2 U F2 D' F' D' B2 D F2 L' U2",
    "R' U R L2 F2 L2 D F2 U L2 B2 U B2 D' F2 D U' R' U R2 U2 R U2 R'",
    "F' D L B2 U R2 D' F2 D R2 D2 F2 U L2 R' F2 U' L2 D R2 F' U2",
    "L D F' D2 L2 D' R2 D R2 U2 L2 F2 D F2 D' F2 D2 L' U' F U2 F U F U'",
    "F R U L2 U B2 D' L2 D2 L2 B2 L2 R2 U R2 U' R' U' F U' F2 U F2",
    "B' U' R' L2 U2 L2 D' B2 U R2 U2 L2 U' F2 L2 U' R' B2 U2 B' U2",
    "B L F' B2 R2 U F2 D' F2 U F2 U' R2 B2 D U' L' D L2 B' L F L' U'",
    "F R F L2 U' L2 U L2 U R2 U R2 F2 R2 F2 U2 F' D B' R B' D' F' R2 U'",
    "R F D' U2 F2 D' L2 U' L2 D2 R2 U2 F' R2 F R F U' F'",
    "R' D R D R2 D L2 D' L2 R2 D2 F2 U F2 U2 R' D' F2 D F2 R U'",
    "R' B F2 U L2 U' F2 D F2 D2 F2 R2 U' B2 R' U R' B' R",
    "R U' L U2 F2 U' B2 D' R2 U L2 F2 D L2 U' L2 F2 R' D' L' D' B2 U R2",
    "R U F' D F2 L2 U B2 L2 U R2 F2 U F2 U' F2 R2 F' U' R' U2 R' U' R",
    "F U' B' U R2 U' B2 D B2 D2 B2 U' L2 U' F2 U2 B' U' F U' F' U' F'",
    "R F L' F2 D B2 D' R2 F2 U2 F2 U' R2 F2 U' L F' U R2 B U' B' R U2",
    "R' D' F' L2 D L2 B2 D B2 D' B2 U B2 U' F2 U' F' D U R U'",
    "R F R' U2 R2 D B2 L2 U B2 R2 U F2 R2 U2 R' F' R' U' B L2 B'",
    "R' U' F D R2 U2 R2 U R2 U R2 F2 D' U' F2 L' F' L' U2 L2 F' U2 R",
    "F D R' U' R2 D' L2 D' B2 D L2 D R2 U2 F2 U' F2 L' U L F2 R D' F' U2",
    "F' D' F D F2 D F2 D2 B2 L2 U' L2 U' B2 U2 F' D U2 F U F' U F",
    "F U' F D B2 R2 U B2 U' L2 U2 L2 B2 U' L2 U2 B' U L2 R2 B2 D' U F'",
    "B' D' R' D2 F2 D R2 U2 B2 F2 D' F2 D' F2 U L' U F2 U L' U' B' U2",
    "R F D R2 F2 U B2 D' L2 U B2 U B2 U' F2 U' F' U B R2 B U' R' U'",
    "B U' B' R2 D B2 D' R2 U R2 B2 U2 B2 U F' U B2 F R2 U",
    "F U' F' L2 D' L2 D U F2 U' F2 L2 U2 L2 F2 L' F' U2 F U2 L U' F2",
    "F R' U R2 U' R2 U' R2 F2 D2 L2 D L2 D F2 R' F' U B U B' U2",
    "R D' F' R2 U' L2 D' B2 D L2 U2 F2 R2 U' F' U F2 R2 F R2 D R'",
    "F' D' F D' R2 D L2 D2 L2 B2 R2 U' L2 F2 D L2 U F' D F U2",
    "B' R D' R2 D B2 U B2 R2 D B2 U2 B2 U' R' U2 R B' D' R' B2",
    "L U B' R2 F2 R2 B2 U R2 D' L2 D R2 U B' U' L' B U' B'",
    "B D R F2 R2 F2 D B2 D' R2 U R2 F2 R2 F2 R' F2 U F2 D' L2 U2 B' U'",
    "B' U L F2 D' R2 B2 D B2 D' B2 U F2 U L2 B2 D2 L' B2 U' R' U R B'",
    "B' L B' D L2 F2 D F2 D' L2 U L2 D' L2 U' B2 U' B' L' B U2 L' U' L U2",
    "B U' L' U2 B2 R2 U' R2 D B2 D' B2 U F2 R' D R2 D R' B F2 U'",
    "L D' L R2 D' L2 U2 L2 R2 D' L2 F2 D B2 U' B2 R' U' R2 D' U R F2",
    "L B' L' U' F2 L2 D L2 U2 L2 B2 D R2 D' L2 U F2 L' F' R' U2 L D2 R' U'",
    "B D' B D' R2 D B2 L2 U L2 D' B2 R2 D U' B' D B' U'",
    "R' F' D' R2 B2 R2 D' R2 D2 F2 R2 D U2 R2 D2 L' U2 B' L' B' D F' R2 U",
    "L D' F' D2 R2 D' R2 U2 L2 B2 U R2 B2 U' L2 D U' F' U' F2 D' F2 D L' U",
    "R' F' R U R2 F2 U2 F2 U' F2 D R2 D' F2 R2 U2 F' D' L' U' L D U2 F' U'",
    "R' U F U' R2 F2 R2 U' F2 U R2 F2 U' R2 U2 R2 U' F' U' R U2 R U' R'",
    "R F D F2 L2 U' F2 U L2 D F2 R2 U R2 D' L2 D' F' R B' L2 B R2",
    "R' B U2 B2 R2 B2 L2 U F2 U' L2 U2 L2 D L2 B' R U' B' U2 B U",
    "F R B' L2 U R2 U L2 U' R2 U' F2 L2 U2 L2 F2 R' F R B L2 R' F2 U'",
    "L F' U L2 D F2 D' L2 F2 L2 U L2 U' L2 U' R' F' L' F R F'",
    "R F D' R2 U' L2 U B2 U' F2 U' F2 L2 R2 D' F' D' U2 F D U2 F2 R' U'",
    "R B' R U F2 L2 U B2 U' L2 D2 B2 L2 F2 U B2 R' B R' F' L2 F U2",
    "L' D B' U L2 U' B2 D B2 D F2 D B2 L2 B2 F' L' U' L2 D L2 R2",
    "R' B R D' L2 U2 F2 U' R2 D2 B2 U B2 U L2 U' B' D B' D2 U' R B' R",
    "R' F D B2 F2 U B2 U' L2 D F2 U' F2 U' R2 U' B' D L2 D R2 U' F2 R U",
    "F R' D R2 U L2 U' R2 U L2 D' U' R2 F' L F R' F' L' U2",
    "B' D' B D F2 U F2 L2 U L2 U' B2 U F2 U' L2 U' B' D U F' R2 D' B' F'",
    "B R' B' D2 L2 U L2 U2 L2 U' L2 F2 D F2 D U' L' D B2 D' B' R B' L U",
    "L B' D' R B' F2 D2 U2 B2 F2 D2 U2 B' R' D B L' U'",
    "B' R B L2 U' B2 R2 D F2 U2 B2 D' U2 B2 R2 U2 R' B2 R B' U' B' R'",
    "F' R' U F2 L2 U B2 F2 L2 U L2 D' U2 L2 D' F2 U2 R' U' L' F2 L' F",
    "F' L' B L2 U2 F2 D' B2 D' F2 D B2 D F2 U2 L2 B' L F' R U2 R' F2 U'",
    "L' F L F2 D' F2 D R2 U' R2 F2 U2 F2 U' R2 U' L' U R2 U' F' L U2",
    "R F D' F2 U' B2 R2 B2 L2 F2 U R2 B2 U F2 U' F' U' L2 F' U' B R U2",
    "B L' U' F2 R2 U F2 L2 D R2 F2 D' F2 R2 U2 B2 U2 L' B' U' B' U' B",
    "B L' D U' F2 R2 D B2 D2 F2 R2 U2 R2 F2 U2 R' U' R' F2 L' U' B' U",
    "F' D' F' L2 U2 L2 U L2 F2 U2 F2 U L2 U2 F2 U' F' D F U2",
    "L' D' F' B2 F2 U L2 D F2 D' R2 D' F2 L2 B2 R2 U2 F' R2 D' F' D2 U' B2 L'",
    "L B U2 R2 U' B2 D F2 D B2 R2 U2 R2 F2 U' R2 B' L U' L2 U L2 U2",
    "B L F' D L2 D' B2 U2 B2 U' F2 U B2 R2 B2 F' L' B R2 B U' B U'",
    "L' B' L' D F2 D' B2 D F2 D' B2 L2 F' L' U B U2 L U F U2",
    "B' U L U2 R2 D' F2 D U L' U' R U' R U2 B U",
    "B' U L U R2 D2 F2 D' L2 F2 R2 B2 R2 D R2 U L' B R2 D2 F' D2 F2 R2",
    "F' L B D L2 F2 U' F2 U F2 D L2 D2 B2 U' L' U' L R2 B L' U F",
    "B U L' B2 D R2 U F2 U' R2 D B2 U' L2 D L2 D2 L' B' L U' L2 U2 L U2",
    "R' U' R' U B2 U' F2 D L2 D' F2 U' B2 D' U R' U R' D R2 U",
    "L' F' L U' B2 D' B2 D B2 U' L2 U L2 B2 L' F L F' L' U' L U2 F",
    "F' U F U F2 U R2 F2 U R2 U' F2 U F2 U F2 U' R' F U2 F' U2 R' F'",
    "R U' F' U' R2 D2 L2 B2 D L2 D F2 U' F2 R2 U2 F' D' U F' D U R' U'",
    "L' B D L2 U2 R2 U R2 F2 U L2 F2 L2 B2 U2 F' D' U2 F' D B F' L' U2",
    "B' D' B' D2 B2 R2 U2 R2 U' B2 F2 L2 D' B2 U F2 R2 B' D B U' B U B' U'",
    "L B' L' R2 U B2 U' B2 U2 B2 L2 R2 D F2 L' D' F2 D B F2 L'",
    "L' B L' U2 R2 D' R2 U' B2 U R2 D' F2 L2 F' D2 R2 F' L' F L'",
    "B' U L' B2 U B2 L2 D F2 U' F2 U' F2 U2 F2 U' L' U' L2 D' L2 U' B U",
    "F' D' B' D B2 U2 L2 U' B2 U L2 B2 L2 U' B2 U2 B' D L2 D' L2 F U",
    "R' D F U' R2 U F2 U R2 F2 U' R2 U F2 U F' D' F' U2 F R",
    "R U' L' R2 D' F2 U' F2 U' B2 D L2 U' L' U2 F2 R F2 R2 U2 R'",
    "R' F' U F2 R2 D2 B2 D' B2 D' R2 U L2 U' L2 D U' F' U F2 D' F2 R U'",
    "B R' U' L2 F2 L2 U' R2 F2 D L2 D R2 U2 B2 F' R2 D L2 R' B U' B2 U",
    "F U F' L2 U B2 U2 B2 F2 R2 D R2 U' B2 D R2 U2 F' U' F' D2 B2 D U2",
    "R' D L' D' L2 D2 F2 U' F2 R2 U2 B2 L2 U B2 R2 U2 L' D' R U'",
    "B R' D' L2 D L2 R2 U F2 L2 U' L2 F2 R' B' R U' R'",
    "R B R' L2 U' F2 D' B2 D' B2 D2 F2 U' L2 R' U2 R B' R' U2 R",
    "L' D' L B2 U B2 U B2 U2 B2 U' L' D U2 L U L' U L",
    "L' U R U R2 D' F2 D L2 D' F2 D R2 U' R' U' L2 U2 L' U'",
    "B' U' B L2 D R2 F2 D' L2 U L2 F2 L2 R2 B' U B R2 U' R2 U'",
    "R D' F' L2 U2 F2 R2 U' F2 U' B2 D2 F2 R2 B2 U F' D B2 R' F U' F' U2",
    "F' L F' R2 U L2 B2 R2 B2 U2 L2 D' L2 D L2 U F' L' F' R2 F2 U'",
    "F L B D' L2 U2 B2 D B2 D B2 U' R2 U2 F2 L' F' U' L D B2 D' B' L'",
    "B L' U B2 D R2 D R2 D2 B2 U' L2 U F2 U2 F' L' B' L F' L' U",
    "F U L F2 L2 U' L2 D F2 D' F2 U F2 U' L' U' F' U'",
    "R U L U2 R2 F2 U' F2 U F2 R2 U2 L' U' R' U2",
    "B' D' F' D' F2 D' R2 F2 U' B2 D R2 D' L2 U2 L2 B' L2 R2 D' F' U B'",
    "F R U' B2 L2 D' L2 F2 D' F2 U L2 U' L2 D2 B' U B D' B2 R' F' U'",
    "B' L F' U F2 L2 D' B2 U R2 D' R2 B2 U' L2 F' U' F2 D F2 L' B U2",
    "R' U B U' R2 D2 L2 B2 D2 U' L2 U R2 U' L2 B' U' F U' F U R U'",
    "F' L' B' L2 D' B2 U R2 D2 L2 F2 D R2 D B2 D B' L F R U2 R' U'",
    "B U' L' U2 L2 F2 U F2 D' L2 D L2 U' L' F' U B' U' F",
    "R' U' L' B2 D' B2 U R2 U' R2 U' L2 U' L' D R' D' F2 R2",
    "F L' B2 U L2 B2 U' L2 U' R2 D2 F2 U' B' R' U2 B2 L F U' R2 U2",
    "F R' F' R2 D2 B2 D' F2 U2 R2 D' F2 U' L2 F2 R2 F' R' U2 R' U2 F' R'",
    "B U' R D2 R2 U F2 L2 U' L2 D F2 D' L2 U F2 U R' D2 R2 F' L' F L' B'",
    "L F' R' L2 F2 U F2 D' R2 U' F2 U2 R2 U' L2 U' B2 U' F' R F' L' F2 U2 F",
    "L F' R L2 B2 U2 L2 U' B2 R2 F2 L2 D2 F2 D' R2 U2 L' U R2 F R U F2",
    "L' B D L2 F2 D F2 U' F2 U F2 D2 L2 B' U L U F U2 F'",
    "L' U' B' U' F2 L2 U' F2 U' R2 B2 D2 R2 B2 U' B' U F2 D' B2 D F2 L U",
    "L' F D R2 D B2 D2 F2 R2 D R2 U' R2 U' F2 U B' D' L2 R2 U F2 L",
    "R' U R B2 U' R2 D L2 R2 D L2 U' B2 D2 R' U' R' U2 R2 U",
    "B U' B R2 U2 R2 U B2 D' R2 D B2 R2 U R2 U' F' U B2 F R2 U2",
    "F' R B' U2 B2 L2 U B2 F2 L2 U' L2 F2 U R2 F' D2 R' D' B R' U R'",
    "R' D' B L2 U2 L2 D' L2 B2 U2 B2 D L2 F2 U2 F2 U' B' R' D R' B2 U' B2 R'",
    "F L F' D' B2 D F2 D2 R2 U R2 U' B2 D2 F' L' U F' U F U2 F'",
    "B R U' D2 B2 U' R2 U' R2 D B2 U' R2 D' B2 U' F2 L F' U2 B R2 F' U2 L2",
    "L U' R' D R2 D' F2 R2 U2 L2 R2 B2 R2 D' B2 U R' U' L U'",
    "B' U' F' U' R2 U' B2 D2 B2 R2 U' B2 D B2 U' F' U2 F2 U' B U' F2 U'",
    "F' U' R' L2 R2 U2 L2 U L2 U L2 U R' F L F' U F U' L'",
    "F' U' R' F2 R2 U R2 D R2 D' R2 F2 U' F2 R2 U' R' U F R U' R'",
    "B U B U R2 F2 U L2 U' L2 D2 R2 B2 U' R2 D' F' D2 F' R2 U L2 B' U'",
    "B L F2 U' F2 L2 B2 D2 F2 R' B' F2 D L D B2",
    "R' B D' U' B2 D' R2 U B2 U' R2 U2 B2 R2 D2 B' R' U2 B2 D B2 U2 R2 U'",
    "L' D' L' D2 F2 R2 D R2 B2 U B2 U2 B2 R2 B2 U2 R' B2 R' U R2 D2 F2",
    "B R U L2 D' L2 D F2 L2 F2 U2 F2 R2 D2 R2 U L2 R' B2 R F2 R' U2 B",
    "L' D' F D2 B2 U2 B2 U' F2 U F2 U' F' U' F' D2 F D L",
    "F' D R' U B2 U B2 R2 D' U' F2 R2 F2 U F2 R2 U' R' U' F2 R2 F2 R' U F'",
    "B R D B2 D' R2 D' F2 U L2 D2 R2 D' R2 B' U' B F2 U' R B' U'",
    "R' D R' U B2 D R2 D' F2 U F2 R2 U' B2 R2 U R' D' R2 U' R' U'",
    "F' L' D U' F2 R2 U B2 U' L2 U B2 U L2 U2 R2 U L' F L' U L",
    "L B' R' U2 R2 D F2 U2 F2 U' B2 D' L2 U B2 U2 R' B L' U B U B' U'",
    "F' R' F' D2 L2 U L2 D' F2 U' L2 R2 D2 L2 U' F' R F' D' F2 U' R' U2",
    "R' B U2 B2 R2 D' R2 F2 D' B2 L2 U' R2 D2 F2 U B U L2 B U F' R' U2",
    "R D' L' B2 D' U2 F2 U F2 R2 F2 L2 F2 D' F2 L' B2 R' D' B2 R U",
    "L D' R L2 U L2 D L2 D' B2 U B2 U2 R' U L2 D U' L' U'",
    "R U L' D' R2 D L2 U F2 D' L2 U B2 U' L2 F2 U' L' U' R2 U R",
    "F D' L' B2 U R2 D F2 R2 D2 F2 L2 D U2 L2 U' R' D2 U F U' B' L2 B' U",
    "F' D L R2 U B2 U R2 U' R2 U' B2 U' L' U R2 D' F",
    "R B' U' L2 U' R2 D F2 U L2 U2 R2 D' U' B' R F' R F U2 R U2",
    "B D R L2 D' L2 F2 U F2 U' R2 D U2 L2 U R' U' F R2 D U' L2 D",
    "R' F L' R2 D F2 D R2 D B2 D2 F2 D' L2 U L2 R' U F U2 L2 U L F' U2",
    "L F U' D' F2 R2 D R2 U2 R2 B2 D' L2 U2 F2 U L2 B2 L' B D' L' D B' F",
    "F' U' F' U' F2 L2 D' L2 D' R2 D B2 U' B2 U2 L2 U' B' D2 U R2 D' L2 F U2",
    "L U B' F2 D F2 D2 B2 F2 D F2 L2 D' L2 D' B' U2 F' R2 F U L' U",
    "R D L' F2 D' L2 R2 U' F2 U F2 U2 B2 R2 U' L' D' U R2 U2 R",
    "R' B D L2 B2 U R2 U B2 D' L2 U B2 D B2 U' B2 L' U' L U F2 U' B R",
    "F' R' F D B2 L2 U L2 R2 F2 D F2 R2 D' F' R F' R' B2 R F2 U'",
    "L' U' L D' B2 U2 B2 U B2 U' B2 L2 U L2 U' L' U L' D L2",
    "L B R L2 F2 R2 U' R2 B2 U' F2 U L2 F2 D F2 D2 R' B U' B2 U B2 L' U2",
    "R' F R L2 U' L2 B2 L2 D F2 D L2 B2 D2 U2 F' L' R2 U2 B' U' L",
    "R D B' U' B2 U' F2 D L2 D' L2 B2 D2 F2 D B2 U R' B' U' L B' U' L'",
    "F R U2 B2 D' F2 D B2 F2 U2 R' F2 U2 F R' U R",
    "B' U' L' U2 B2 L2 R2 D R2 U B2 U' B2 U' L' U' R' U' F2 R B",
    "R U' F B2 D B2 D L2 U' F2 U L2 D F2 U2 L2 U' F U F2 D F2 U R' U",
    "R' F' L' D2 F2 U F2 R2 D2 R2 U F2 R2 D L2 D2 L2 R F L' D2 B2 F2 R2 U'",
    "R' D' L' U B2 D2 B2 L2 U B2 U F2 D2 R2 U' B2 U2 L' D L F2 L D R",
    "R' B U R2 U2 B2 U' B2 U R2 U R2 U2 R2 U R2 U2 R' D B' L U L' D' B2",
    "F' R F' R2 U2 R2 U' R2 F2 U2 F2 U' R2 U2 F2 U' F' R' U' F U' F' U2 F",
    "B U F D2 B2 R2 B2 D' F2 D' B2 D F2 D' B2 U2 F' L2 U B' U2 F U' F'",
    "R' D F' R2 U R2 D' R2 U' B2 R2 D' L2 U' R2 B' L2 R' D' B D U' B' U2",
    "B' L' F U R2 U2 R2 B2 D F2 D L2 B2 U2 F2 U F' L D2 U2 L' D2 U2 B U'",
    "F L U F2 D' L2 D F2 L2 D L2 B2 U R2 B2 U' L' F2 U2 F U'",
    "F' L' B R2 B2 U R2 D' F2 D R2 B2 L2 R2 U L2 U' L' F' L' B' L F2 U",
    "B L U2 F2 D F2 U' L2 D' U2 L2 F2 U' F2 U2 L' B2 U2 B R' U R",
    "B' U' R B2 D' L2 D B2 R2 U' F2 U R2 U R' B R U' R' U'",
    "B L' D U R2 U' R2 B2 D' L2 D R2 D' F2 R2 U F2 L' B' R U R2 U R'",
    "B R D2 B2 U B2 L2 D L2 U' R2 B2 U R2 D2 R' B R' B R U2 B",
    "L' F' D' L2 D L2 B2 D' R2 U F2 L2 U F2 U' L2 U2 F' U R2 F U B' L'",
    "F L F' D R2 D' L2 D B2 L2 U L2 D L2 R' F' L' B2 F R' F2 U'",
    "R U B' U' B2 L2 U' R2 U2 B2 U' B2 U' L2 R2 U B' R' U L U L' U2",
    "F' R D' U R2 U F2 U' B2 R2 U' L2 B2 U' F2 U R' B2 F U B U B U'",
    "B D' F' U2 R2 U R2 U L2 R2 D R2 B2 U R2 F2 U F' U B F2 R2 U R2",
    "B' R U2 B2 L2 D2 B2 U' F2 U' R2 B' D' B F2 R' B",
    "B' U B U2 B2 U R2 F2 U' F2 D F2 U L2 F2 R' U B' U' B R' U'",
    "B L' D F2 D L2 D' L2 D F2 D' L2 F2 D' F2 L' B R F2 R' B2",
    "L B' D' B2 R2 U F2 D L2 D' L2 D L2 F2 D' R2 U' L' U' L D2 B L' U'",
    "B' L' B R2 D' R2 U B2 L2 U L2 B2 U' F2 L2 U' R2 F' R U2 L' D2 R B' U2",
    "L' U R' F2 U L2 U F2 R2 U R2 U' R2 U' F2 L2 U' L' D2 R' D2 F2 U' R",
    "B' R D L2 D B2 U' L2 U R2 D' B2 U' B2 U' L' D F2 U' R B' U'",
    "B' L F2 D R2 D' F2 R2 F2 U F2 U' F2 L' U' R2 U B U2",
    "F' R B L2 U2 L2 D B2 R2 F2 R2 U2 B2 D' L2 U2 F' U2 B' U' F R F U",
    "F U B F2 D L2 U B2 D2 B2 D' L2 U' L2 U' F2 U B' U B' U B U2 F'",
    "B' R' F L2 D' L2 B2 U2 B2 U B2 U2 L2 D' L2 U2 L U2 L' B2 F' R' B R' U",
    "R D F' R2 B2 L2 B2 D' L2 B2 U F2 R2 U F2 U F' U' B' U' R2 B' D' U' R'",
    "L D B R2 B2 U2 F2 D F2 L2 D2 R2 U L2 F2 U2 B R' B2 F U R2 D' F'",
    "R U' L' B2 D R2 D L2 F2 D R2 U' L2 U2 L2 B2 U' L' D' B2 L' U2 B2 R'",
    "F' D L F2 D R2 D' R2 F2 U2 B2 D L2 D' L2 B2 U2 L' D' R' F2 R F U",
    "R' B' U F2 R2 U2 B2 L2 D' R2 U R2 U R2 D2 F2 U' B' L' B L' B L2 F2 R'",
    "L' F' D' L2 D U F2 D' L2 D L2 F2 L2 F2 U2 F' L U2 L' U L U'",
    "B' D B' D' R2 D' F2 D' L2 F2 R2 D' B' U' L2 D' U' L2 B' U",
    "R B' R' D F2 D2 B2 F2 L2 U' F2 U L2 U' B2 R' B U' R' U' R U2 R'",
    "F D F D B2 L2 U L2 D2 R2 B2 L2 U' F2 L2 F' D2 F U2 F' D F'",
    "L' U' F U' F2 D R2 F2 R2 F2 D L2 F2 U L2 U' R' U B2 F D' F2 U'",
    "B D B' F2 R2 U' L2 D B2 L2 R2 D' B2 U B2 U' B D' B' U B' U' B U'",
    "R' B' U L2 F2 U F2 U B2 R2 F2 D2 R2 U2 F2 U B' D2 U' B D2 F2 R U",
    "B' L' B L2 D2 R2 F2 D R2 D L2 U2 B2 U2 B' U L U' B U2",
    "B R B R2 U F2 D' B2 D B2 L2 D F2 R2 U' R' D' U2 B U2 B' R D U",
    "B U' B' R2 B2 R2 U2 R2 D R2 D' F2 U F2 U2 R2 B' F' U' B' U' F U'",
    "F' L' U' R2 U R2 B2 D B2 L2 U F2 R2 U F2 L' F R2 U R U R",
    "R B L B2 D' R2 U R2 B2 D L2 U' L2 U' L' B' R' U F' U F",
    "R' D R F2 D' R2 D2 R2 D' F2 U R2 U' R2 B2 R' D' B2 R B2 U' R'",
    "R D F D F2 R2 U' F2 L2 D B2 U' F2 U2 R2 U' F' U' B R' D R2 B",
    "F' D F' D L2 D' B2 U' F2 U R2 U' L2 F2 U L2 D' B2 F D F2 D' U F' R2 U'",
    "F' R F U' R2 U B2 U R2 U R2 U' B2 U2 R2 U' R' U' R U' F' R' F U'",
    "L U' B' D B2 D F2 U F2 U2 L2 D' L2 U' L' U L D' U' B' U L'",
    "F' L U D L2 F2 D F2 D2 L2 U' L2 U2 B2 U' B2 L2 F' R2 F L' F' R2 F2 U",
    "L U R L2 D B2 U' L2 U' L2 R2 U R2 U' R2 U' L' D' L2 U' R' B2 R2 U'",
    "L' F' D2 R2 U' B2 R2 D2 L2 U' L2 F2 U L2 U L2 B L' B' U2 L2 F' L2 U",
    "F D R' D' F2 R2 B2 L2 U2 R2 D' B2 D F2 L2 U2 L' B U' B L D2 F U2",
    "B U' B' U' B2 D L2 U' L2 U' L2 U2 L2 U' F' L2 F D' B' U' B'",
    "L D' L' D R2 U' L2 D' L2 F2 L2 U2 B2 U R2 U2 R' D L2 D' U R' F2",
    "F' R F' U B2 D2 R2 U R2 U F2 D' L2 U2 B2 U' L' U2 B L' B D2 L2 U'",
    "R U' B L2 F2 R2 D' L2 U R2 U R2 U2 B2 R2 U B' R' U' L F2 L'",
    "B U' B D' B2 R2 D B2 L2 D F2 U2 L2 D' L2 U' B' U B' U2 F U' F'",
    "F R B D L2 D R2 D' L2 D R2 D2 U' B' U2 R' U' F' U2",
    "L' B' R' U R2 F2 U2 R2 F2 U' F2 R2 U F2 U' R2 U' B L B' R' F2 R2 B U2",
    "B' U' F B2 R2 U' R2 D F2 U' R2 U L2 F2 U2 F2 R2 B' D F U2 L2 U B2",
    "R D L D R2 U R2 F2 U L2 D' B2 U' L2 U' F2 L' D' R2 U R' U2",
    "L B L F2 U L2 D' B2 R2 F2 L2 U' F2 R2 U' L' B' L' F2 U' L2 U'",
    "R D' B F2 U' F2 D R2 D' R2 U R2 U' R2 U B' U' R' U' R D R'",
    "R' B' R U2 R2 B2 F2 D F2 D B2 D' F2 L2 D F' R B R' D2 F' R2 U",
    "F R' D' F2 U' F2 U' L2 U2 F2 D F2 U' R2 U2 L2 U2 R' F L' F L U2 F U",
    "R' B' D' U' B2 R2 D R2 B2 D R2 U R2 B2 U2 F2 U' B' U' F' R2 F' U R U2",
    "L' U R B2 F2 D F2 U' F2 U F2 D2 R2 U' F2 U F2 R' D' L F2 R' B2 R' U'",
    "L D F' U' L2 R2 D R2 U2 L2 U' F2 U R2 U' L' U L2 B D2 R2 D' L2",
    "B U B' F2 U2 F2 D' R2 B2 U' F2 L2 B2 U' F' R2 F U' F2 U",
    "R' D' R' L2 D' L2 U' F2 U2 L2 D B2 D2 B2 L2 U' F2 R2 U' R' D R",
    "F' D' F U' L2 D' B2 U' L2 U' B2 U L2 B2 D F' D F U' F U F' U'",
    "R' B R U L2 U' F2 U2 L2 U L2 U F2 U L2 U' B' U B U R' B' R U2",
    "R B' D2 L2 B2 D B2 L2 U2 F2 L2 R2 D B2 U2 F' D L2 F D F' R U2",
    "L U' R' F2 U' F2 U F2 L2 R2 U2 L2 U L2 U2 R' U' L2 U2 L' U'",
    "R B U B2 D' L2 F2 U2 B2 R2 U2 F2 D' U' B' R' B' U B U'",
    "L B' R D R2 U2 F2 D B2 L2 U' R2 D F2 U L2 U' L' U L D U2 R' B L'",
    "L' D L F2 U2 F2 L2 R2 D R2 D2 L2 D F2 U F2 L' U' F2 D' U' F2 L' U2",
    "B U' L' U' B2 L2 B2 L2 D' B2 D L2 B2 U L2 U' L2 B' L B2 U' R' U2 R",
    "F' L' U' D' F2 R2 U' B2 F2 R2 U F2 U L2 U' L2 F' L' R2 F D2 L D2 R2",
    "R B R B2 U R2 F2 D' L2 U' F2 U2 F2 U R2 U L U L' D R' B' R' F2 U'",
    "F U F L2 U F2 D R2 B2 U R2 F2 U R2 D F' D2 F D2 R2 U' F'",
    "B R F' D' F2 U' L2 R2 B2 L2 U' F2 R2 D' B2 F2 R2 F' L2 R' U B' F U F'",
    "B L' B R2 F2 D F2 R2 D L2 D' R2 U L2 U B2 U' B' L B' U' R2 B2 U2",
    "B R' F D' U' R2 F2 R2 U' B2 D L2 F2 U F' L' B' R2 F' D2 F2 U' F",
    "R' D' L D' R2 U' B2 D2 L2 U' L2 F2 U2 B2 U R2 F2 U' L' F2 U F2 D R' U2",
    "R U' F U2 B2 R2 B2 R2 D R2 D' F2 U F2 U F' U2 R' U' B' U B U2",
    "B' D' F D2 B2 D' R2 U' R2 B2 D' R2 U' F2 R2 F' D B2 U B' R2 U R2",
    "L' B' L U R2 U L2 U' L2 F2 U' B2 U B2 D2 F D L D' L' U F R2 U2",
    "B L D2 L2 D R2 U F2 R2 D2 B2 L2 D' B2 U L' B' U L2 U' L2",
    "R B L U' L2 U' F2 U2 B2 R2 D' R2 B2 U F2 L2 U' L' B' L' R' U L U",
    "R' D' L R2 B2 L2 U R2 U F2 U F2 U2 F2 U2 L' U' L2 D2 R F2 U2",
    "L' B' R U' F2 L2 D L2 U' F2 U' F2 U2 F2 U' R' U L' B2 L B L U'",
    "L' F' U' R2 B2 L2 R2 D L2 U B2 U R2 U' F U' B2 F U' F' U L U2",
    "R F' L D R2 U' F2 U' L2 B2 L2 D' L2 U L2 U' B' D B F2 L' U F R",
    "R' B' L F2 D L2 D L2 D2 L2 U2 B2 R' B L' B2 D' F' L2 F'",
    "F R' F L2 D R2 D2 R2 B2 D' B2 R2 D L2 R2 F' U R2 U' R' F' U",
    "B R' F U L2 F2 D R2 B2 F2 D' F2 U R2 U' L2 F R2 B U B' U' R' B' U",
    "R' F L' D' R2 U L2 U2 R2 F2 L2 R2 U R2 D L2 F' L' F R F2 U2 F' U",
    "F R' U' R2 D' L2 B2 D R2 B2 D B2 U' F2 U' R2 U' R' F' L U2 L' U",
    "L' D L' D' R2 F2 D F2 D L2 F2 L2 R2 U R2 D' R2 U R' U' F2 R U' B2 L",
    "L B L D2 B2 U' F2 U' F2 U B2 F2 D2 F2 L' B' U' R' U L' U' R U'",
    "R U L' U' R2 D R2 D L2 D' R2 D F2 U F2 U2 F2 U' R' D' L' B2 R2 U F2",
    "R' U L' U2 R2 U2 F2 D' F2 U R2 U2 L2 U' L' D U' L D' R2 U R'",
    "B U' F' L2 F2 U B2 L2 U' R2 U F2 D2 F2 R2 D B2 F' U B' D' F' D' U'",
    "F U R' U' F2 R2 F2 U2 F2 R2 F2 U' R2 U' R' F' U",
    "L' F' D' U F2 D' L2 B2 U' B2 R2 D' B2 U2 R2 D B' L' F U2 L2 B L2 U'",
    "L B' D' F2 L2 D B2 U' F2 U2 R2 U R2 U R2 U2 B' U' R' U L' U' R U'",
    "R' D' B' F2 U2 R2 B2 F2 D F2 D2 L2 B2 R2 F2 U R' F2 R B D F2 U' R",
    "F U' R' U2 R2 D' R2 B2 L2 D' L2 B2 U R2 U' R' U2 R' D R U' F'",
    "R' F L' F2 R2 U' F2 D L2 D2 F2 L2 U2 B2 R2 F' U' R F' D' L' R' F2",
    "L' B R' B2 R2 U2 L2 F2 L2 U' R2 D' R2 U' R' B' L B' U B U",
    "F' R B' D2 F2 U F2 L2 D' L2 D F2 U' B2 U F L F2 U' B2 D2 B F U' R",
    "R' F R B2 U L2 R2 D' F2 D L2 F2 L2 D2 L' D' F' D L' F2 R2",
    "B D F' D2 R2 U' B2 D' B2 D B2 U2 B2 L2 B' L2 U' R2 D B' F",
    "L' D L' D2 B2 U L2 D L2 D' B2 D L2 D L' U' F2 D' U' F2 L' U'",
    "L' U' B' U L2 B2 L2 F2 U2 R2 F2 U R2 U L2 F' D' R2 F' D' F L' U'",
    "F' U R' B2 L2 U' L2 B2 D' B2 D' B2 U2 R2 B2 L' D B2 F2 U2 F2 R' F'",
    "L D B R2 B2 R2 U' L2 U2 B2 L2 D2 R2 U' L2 F' L2 F' D B U B' L' U2",
    "R D F U F2 D B2 L2 D' F2 D F2 L2 B2 F2 D' F' D' U2 F U F' U2 R'",
    "L' F D' F2 R2 D R2 F2 D L2 U R2 D' L2 D R2 F' L' U L2 U' L2 U2",
    "L' U B' U B2 U' B2 R2 D2 L2 D' F2 D' R2 U L2 U2 B' L U L' U2 L U'",
    "B D' F' U R2 F2 U F2 U2 F2 D' L2 D' R2 D' U' F' U2 F2 R2 U R2 B U",
    "L' B' L' F2 D' R2 D' L2 U2 F2 L2 D R2 F2 R2 D' R' B' L2 R2 F' R' F2 R2",
    "R F L' U B2 U' L2 U B2 U2 B2 L2 D L2 F2 U' R F D' L' U' F' U' F' R'",
    "R' U' L F2 L2 D' B2 L2 U2 L2 U' B2 U' L2 D R2 U' L' U R F2 R U' R U2",
    "F' L U B2 U R2 B2 L2 D' L2 U' F2 R2 U B2 R' D L2 D' L' R' F U2",
    "L F R' F2 U2 R2 D' F2 D F2 U' R2 U' F2 R2 U' R' U2 R U' R' U' F' L'",
    "F U R' U' R2 U R2 U' R2 U R2 U F2 D' F' D F' U2 R F' U'",
    "B R B' F2 D B2 L2 R2 U' R2 D L2 B2 U F2 D2 B2 U B' U' F2 U F2 R' B'",
    "R' B U' R2 D' B2 D B2 U B2 U L2 F2 U2 B2 D2 B' R' B' L2 B R2 U'",
    "L' D R' U' L2 B2 D' R2 U B2 F2 L2 D' B2 R2 U L' U' L2 U' B2 F2 L U",
    "B L F' D L2 U B2 R2 D R2 D' R2 U R2 B2 U2 L' F' L B' L2 F2 L' U'",
    "B' U' L U' B2 L2 R2 U' F2 U L2 D' B2 R2 U L' U B' L' F2 L B2",
    "F R U' B2 R2 U' R2 D B2 D' B2 U B' R' F' R B' R' U2",
    "L F' R' F2 R2 U R2 U F2 R2 F2 U2 F2 R' F U' R' U2 L' R",
    "F R D' U' R2 D B2 U' B2 U R2 U' R2 U R2 U' R' U' F' U'",
    "L B' U' R2 D R2 U R2 U' R2 B2 D' B2 U B2 L' U' L B' L' U2",
    "L U F' U' B2 R2 D' R2 B2 U F2 L2 U L2 U2 F' L2 F' U' F L U'",
    "L F R2 B2 U2 B2 U' B2 R2 U2 R2 U' B2 U2 R' U2 R' U' F' L'",
    "L' F R' U2 B2 F2 D L2 U' F2 D' R2 B2 U B' D' B' R F' L2 U' L",
    "F D R U' R2 U F2 D' F2 U R2 F2 D F2 U' R' D' R2 F' R2 U R2 U2",
    "B' D F B2 F2 U F2 L2 B2 D2 B2 U L2 B2 D B' F' D' B2 U' F U' F R2",
    "F' U R U' R2 U F2 U B2 F2 D L2 U' L2 U B2 U' R' D' R2 F2 U F' U",
    "F' R' U' R2 D F2 R2 F2 R2 D F2 U L2 D2 R2 U' B2 R' F U2 B L' B' L U'",
    "F' D B' L2 F2 U R2 B2 D' U2 B2 D2 U R2 U R2 B' U' F2 D' U F U'",
    "B' U' B' L2 U L2 B2 U B2 U' L2 U L2 D' U B' U B' D U' B' U'",
    "B' D R B2 D L2 D2 R2 U' R2 U' B2 D L2 U2 B2 R' U L2 D' B U2",
    "L' B' D B2 U' B2 U B2 L2 U2 L2 U' B' U' B D' B' U2 L U",
    "B L B L2 B2 F2 D' B2 U F2 U B2 U2 B2 D' F2 U2 B R' F' L2 B R' F' D2",
    "R' F L' D2 L2 F2 R2 D' L2 D2 F2 L2 D R2 B2 U' R' F' L' B2 F2 R2 U",
    "B R L2 F2 D R2 D R2 D2 F2 L2 U2 B' U B U R' B' U2",
    "R' D B D' B2 U' R2 U' B2 F2 U2 F2 U F2 U L' U B D' U' L B2 F2",
    "R U' R' D R2 F2 U B2 D' L2 D L2 F2 U L2 B2 L' R' U' R' U' L U2",
    "R U' B' U F2 L2 B2 F2 R2 U B2 U2 F2 D' B2 D L' D F2 U2 B' R2 U2",
    "B U' B F2 D B2 D' R2 U L2 D' L2 U2 R2 F2 R2 U2 F' R' D2 F' D2 F R' U'",
    "F R' B' F2 D L2 U R2 U' B2 F2 R2 U' R2 F2 U2 F' L U2 L D2 R' F U2",
    "R' B U2 L2 D' U2 L2 D' B2 U B2 R2 U' R2 U' B' U' B D2 U' B' R",
    "B' U' F' U' L2 D' R2 B2 R2 D L2 U' F2 U2 F2 U' F' U F U2 B F'",
    "B' L F' L2 D2 L2 F2 R2 U L2 B2 U F2 R2 D' F' D' B2 D F2 L' B",
    "L F' D2 L2 R2 U L2 U2 F2 U2 F2 R2 D' R2 U' L2 B' D' L2 R2 U F2 L' U",
    "F D' R' L2 R2 F2 D' B2 D2 B2 R2 B2 R2 D' F2 R' D F2 U' F U",
    "B U' F L2 F2 D' L2 B2 U' B2 D' B2 F' U' F2 D2 B L2 F2 U'",
    "B U' R' F2 D' B2 L2 D F2 D' L2 D F2 R2 U' F2 L' U R' U' L' U2 B'",
    "R' U L U' F2 U' F2 U F2 R2 U2 R2 U2 R2 U2 L' U' R2 U R2 U' R'",
    "R' U F' U2 R2 D' L2 B2 D2 R2 F2 U F2 U2 R' D' L2 F' R2 U",
    "B' L F R2 D' L2 D' R2 D' L2 D' F2 U F2 D2 F' D L' U' L2 D' L2 B U'",
    "B D F' L2 F2 U2 B2 U F2 U B2 U' F2 U' B2 F' L2 U' L2 D' B U'",
    "F' L B U B2 U L2 U2 L2 F2 U R2 U' B2 D' F2 U2 L' B' U L2 U' L U' F",
    "R' U L U2 F2 U' L2 F2 L2 R2 D L2 D2 L2 B2 L' D U' L D' U R'",
    "L U' F U2 L2 D' B2 D L2 D R2 D2 L2 B2 U L' D F L U2 L",
    "L B U' D2 R2 U F2 D2 L2 U B2 D' L2 R2 U' R2 D U' B' U F L2 F L' U'",
    "B' U' R' D2 B2 D R2 D' F2 U' L2 U2 L2 B2 U' F2 U' F L B' D2 F2 R F R'",
    "F D F U2 F2 L2 U' F2 U F2 U L2 U2 F2 U' F' D' F' U'",
    "L B L F2 L2 U B2 D' B2 D' R2 D2 F2 R2 U' B2 D L' B' L F' R2 D2 F' L2",
    "L B' R D' L2 D' B2 D2 L2 U B2 R2 D R2 B2 U' R' B D2 L' U' L D2 L'",
    "R U' B R2 F2 R2 U' B2 U R2 F2 U L2 U' R2 B' U R' F' L2 F U",
    "R U' B' U2 B2 L2 U L2 D' B2 D B2 U' B' U R' U2",
    "B D R L2 D' R2 B2 D2 F2 D' F2 R2 D2 L2 F2 R' D' U2 R' U R' U' B'",
    "L D F' B2 U' F2 U L2 U' F2 L2 U B2 R2 D2 F D F2 D' U F2 U' L' U2",
    "B L' D' F2 R2 U' B2 R2 D2 B2 D' L2 D B2 U2 R' F' R' U R' D2 L' F2",
    "L F U' R2 B2 D B2 R2 D2 R2 D' R2 U2 F2 U' F2 R F' R' F' D' L' U F U2",
    "F' R D' U2 F2 D' F2 R2 U' R2 D B2 D B2 U' R' U R' U R U2 F",
    "B' R F U L2 D2 F2 U L2 D B2 L2 D L2 F2 L' F' D L' F' U2 B F'",
    "F' D' F U B2 U' L2 U L2 U B2 L2 U2 L2 U' F' D F U2",
    "B L' B' R2 U' F2 U B2 U' F2 U B2 R' B L B' R' U'",
    "B L' F L2 D' B2 L2 B2 U B2 D' B2 L2 D' L2 U F D R D' B R F2 D2 U",
    "R' B' U' D B2 L2 R2 U2 B2 R2 D B2 D L2 F2 D B' R' U2 B R' B' U2 R2",
    "L F U' R2 F2 U2 R2 U' R2 U' F2 R' U2 R' U' F' L' U2",
    "L F' D' U R2 D2 R2 B2 U' F2 U' R2 B2 U' R2 B2 F' L2 U B U B' L U",
    "R' U B' D B2 U' L2 B2 D2 R2 F2 D R' U' R' U B2 U B' R U2",
    "R U' F B2 D' F2 D' L2 U L2 B2 D2 B2 U' B2 U' R' U R U2 F R'",
    "L' D L F2 R2 B2 U R2 U2 R2 D' B2 D' R2 D F2 U' L' U' F2 D' U' F2 L' U",
    "L U F' U2 L2 F2 U2 F2 U' F2 L2 F2 U L2 F' L2 U2 L B' U B U'",
    "L' D R' B2 R2 D' B2 L2 U' F2 L2 U' L2 F2 D2 B2 L' B2 R D U L'",
    "F' R F' U F2 D' L2 D B2 U' L2 B2 L2 U B2 R' U R U F' R' F U2",
    "R U' R' L2 D R2 D' B2 R2 D' R2 B2 L2 R2 U R2 U' R' U R' U",
    "F L' D' U' B2 R2 U' L2 B2 D F2 U2 F2 L2 F2 U' L' F2 R D2 R' U2 F U",
    "R' U' R U2 R2 D F2 R2 U' B2 U2 L2 U' B2 U2 R' U L2 R2 D L2 R' U2",
    "F D' F U2 L2 D B2 D' L2 F2 U R2 U2 F2 U' F' D F'",
    "L' U' R' U L2 U' F2 D F2 R2 D2 L2 U B2 D' U' R' U' R' D2 L F2 R",
    "L B R U' F2 U L2 U' L2 U' F2 L2 U2 L2 U' B' U' B R' B' U L' U2",
    "L' U F' D2 F2 D' L2 F2 U2 F2 U L2 U R2 U2 R2 U' F' U2 F' U F2 D' F' L",
    "F U' F' U2 R2 D R2 F2 U2 R2 B2 D' B2 D2 B2 R2 U' B' F' U' F' U' B",
    "B D R' U' L2 D B2 D2 L2 U L2 B2 D L2 R' D' B L2 B2 U R2 F2 R2",
    "R' U L F2 U2 L2 U B2 U' B2 D2 L2 R2 U' F2 D' F2 R' U L2 R U' L U' R'",
    "R' D' B L2 U B2 L2 U' L2 U B2 U' F2 D' F2 L2 B' D U R U L' B2 L",
    "F' R' U2 B2 R2 D' F2 U B2 F2 U' F2 D' B2 L2 U2 F' U F' R' F",
    "L' F' L D' F2 R2 B2 R2 D' F2 U R2 U' L2 D2 R2 B2 L' F L U B' R2 B'",
    "B' U R U' F2 U B2 U' F2 U B2 D R' U' R D' R' B U'",
    "B D B D' F2 U' B2 U R2 U L2 D2 L2 F2 U' B2 U' B' L2 D' B L2 U' B",
    "F L B F2 U F2 R2 D U2 B2 U L2 D R2 U2 L D' B' U F' U2 L R2 U",
    "B R' B' L2 U' R2 U2 F2 L2 B2 L2 U F2 L2 U2 R2 U2 R' F U R' D F U' F'",
    "R' D B' D' R2 D B2 U' L2 U2 L2 U' L2 U' L2 B' D' R2 U B U' B' R'",
    "F R B U2 L2 B2 U B2 L2 D' F2 L2 D2 B2 U' F' R' B R2 F2 U",
    "R' F R U L2 D' R2 F2 D L2 U' F' L2 F R F' L2 R B2 U'",
    "B' R B' U F2 D L2 F2 U2 R2 U' L2 B2 U2 F2 R2 F' D' R' D F' R2 B2 U2",
    "R' D' F' U' R2 U R2 U' B2 U' L2 D2 F2 L2 D' L2 F' D' L2 F D' B2 U2 R' U'",
    "F U' R' F2 L2 D L2 D2 L2 U B2 D L2 F2 D U' L' U' B2 U L R' U' F' U'",
    "R D L U' F2 U' F2 U' R2 F2 D R2 D' B2 D L2 B' L' D' R' U' L' B' U2",
    "R' D' B' F2 R2 U2 B2 R2 D2 B2 U' F2 U' B2 L2 B' U R2 U' L' B2 L D2 R'",
    "L F U F2 D F2 L2 D L2 D' L2 U L2 U2 L' B' R2 B L F' L' U'",
    "L' D' L B2 L2 U L2 U' L2 U L2 U' B2 D' B2 U2 L U' L' R' U' B2 R D2",
    "B' L U' L2 U R2 D B2 F2 L2 U B2 U' R2 U R2 F' R2 F' U' L U2 B U'",
    "R' U L U2 R2 U' R2 U2 R2 F2 D R2 D' F2 R' U' R' U L' U' R",
    "F U F' B2 U B2 U2 F2 L2 U' R2 U L2 D L2 B' D2 U' L2 D R2 F' U2",
    "L U' B U R2 F2 U' F2 U' F2 U2 R2 B2 L2 B2 U' B' L2 U2 F2 U' F2 L U",
    "F' U F R2 D' L2 R2 D2 L2 F2 U L2 U' F2 U' R2 B' U' B' R2 U'",
    "R U R' F2 U2 F2 D R2 B2 U2 B2 U R2 U' R2 U' R' U R2 D' R U'",
    "F R' U' L2 B2 U2 B2 U' B2 D F2 U' B2 U' L2 D' F2 L' D2 F' D' R F2 L' U2",
    "F R D B2 D F2 U' B2 U F2 D2 R' F' R U' R2 U2 R U2",
    "L U L' U' L2 U2 B2 U' B2 D L2 U L2 U' L' U L2 D' L U2",
    "L' U' R' F2 U' R2 B2 D' L2 U' B2 U2 B2 L2 U' R2 F2 R' D' L' B2 R F2 R",
    "F R' D' U' R2 D B2 U B2 D R2 D F2 U B' L' B D2 F' R F2 U2",
    "B' U R F2 D' L2 D L2 U' L2 U L2 F2 R' U' B U'",
    "B D L' U B2 U2 L2 R2 U' R2 D' F2 U' L2 U2 F2 U' R' U' L2 R2 U' B F2",
    "L' D' R' D2 L2 U2 L2 B2 D' R2 U2 L2 D' F2 U' R' D' R2 U R2 D2 L' U'",
    "L U' L' R2 B2 L2 U' B2 U2 L2 U B2 U2 L2 U B2 U2 R' B2 R' U R B2 U' R'",
    "R' B D B2 D' B2 U B2 U2 R2 U B2 U2 B' R2 U2 F R2 F' R'",
    "B R D' B2 D' R2 U L2 F2 D F2 D' F2 R2 D2 R2 U2 R' D L2 D' R2 B' U2",
    "L F' L' U L2 R2 D' B2 D R2 U' F2 U2 F2 U L' U F U' F2 L' F' U'",
    "F' U R' U' R2 U R2 F2 U2 L2 B2 U' L2 F2 U' R D2 F' D F R2 U' F U'",
    "F R F' R2 U F2 L2 D B2 D' L2 U2 R2 F2 R2 U L' U L2 F L' F U' R2",
    "R' B' L' B2 D2 B2 U' L2 D R2 U' L2 R2 B2 U F2 R' F U2 B' D2 F R' U2",
    "R' F' U F2 D' F2 U F2 D2 R2 D' F2 U F2 U R2 U' F' R U B U2 B' U'",
    "L U L F2 U' L2 D R2 U' R2 F2 D' F2 U L2 D2 R' B2 R D2 F2 U' L' U2",
    "B U' F R2 U' R2 D' F2 U F2 U2 L2 B2 R2 D U' B' D F L2 B2",
    "R' F' D U2 F2 U F2 L2 D' B2 U2 F2 R2 D' F2 U2 B' U2 F U B' U' R'",
    "F U' B' U2 B2 L2 D' R2 B2 D R2 F2 R2 U' B2 U' R2 B' D2 F' R2 U' B'",
    "L' U F R2 B2 R2 B2 U R2 D' F2 D2 U' B2 D' F' L R' F2 R U",
    "B L' U' L2 R2 D' F2 U F2 U F2 R2 D2 L2 D F2 U' R' D F2 R D R' B U'",
    "L' B L' F2 D' B2 D' L2 U F2 R2 U' F2 U2 R2 U' B2 U' B' R B2 R B' R2 U",
    "F' U' F B2 U R2 F2 U' L2 U' F2 D B2 D' B2 U' B' D' B2 U' B' R2",
    "B U R' D2 B2 U R2 U' B2 D' F2 D2 F2 R2 U' B2 U2 R' U' B' R U' R' U'",
    "L' B' R U B2 U' F2 D' F2 U L2 B2 U' B' R' B' L B' L2",
    "L D F R2 U' B2 R2 F2 D2 F2 D B2 R2 D' B2 U' L' U2 F2 U F U2 F2 U",
    "B U L R2 U2 R2 U' L2 U R2 U' L2 U' R2 U2 L' U' B' R' U R U'",
    "R F D B2 U' B2 U B2 R2 F2 L2 U B2 L2 F' D B2 D' F2 R' U2",
    "R' B' U R2 F2 D' F2 D2 L2 D' L2 D' F2 D2 L2 F' R' F' U2 R2 B' R2 U'",
    "B D R' D L2 D2 L2 B2 U' L2 F2 U' L2 U2 B2 U' R' D2 U' R U2 R2 D B'",
    "B' U' L D B2 R2 D' L2 U' L2 U' R2 U2 B2 L2 B' L U R B2 F2 R' U'",
    "B' U' F B2 D' B2 D' R2 B2 D2 B2 U R2 D2 R2 U' R2 F' U F2 D B F2 U'",
    "B' D' L' D' F2 R2 D' L2 U' R2 D2 B2 F2 U' F2 D2 R' B U L' U' B2 D' R' U",
    "L F' R' D' R2 F2 U' R2 U L2 B2 U R2 F2 D2 F L F' D2 R' B L D2 F",
    "B' R F R2 D2 B2 D B2 U2 F2 D B2 L2 B2 F2 U2 F' D2 R B F' U R2 F",
    "B D' F' L2 U' L2 U B2 D L2 D' B2 D F2 R2 U F' D R2 D' R2 U B'",
    "F L U R2 U F2 U2 F2 R2 U R2 U2 R2 F2 U F2 U' L' U' L U' L' U2 F'",
    "R D' R B2 R2 D L2 D' L2 U L2 U' L2 R2 B2 R' D R' U2",
    "B U F B2 R2 U R2 U2 R2 F2 D F2 U2 R2 U F2 U2 B' D' F L2 R2 B2 U'",
    "L F' L' D' L2 D L2 B2 F2 D' R2 D F2 L' F L B2 L2",
    "B' U F U' L2 B2 D2 R2 D B2 L2 F2 U2 F2 U F2 R2 F' U' B U'",
    "B D F' L2 D B2 D' F2 U R2 U B2 R2 F2 D2 F2 R2 F' D' R2 U R2 U2 B' U'",
    "R' F' D' F2 U' R2 D' L2 U2 F2 U F2 U L2 U R2 F' R2 F' D2 F R' U2",
    "R' F' U R2 B2 D' F2 L2 D2 F2 L2 F2 D' B2 U2 R' F' R U' B U' B' R'",
    "L B L' U' L2 F2 L2 D R2 B2 U B2 D' R2 U' L2 F' L' B' L F' L2 U'",
    "L' D L B2 D' R2 D R2 U' R2 U R2 B2 L' D' L U2",
    "R F R' D R2 D' F2 L2 R2 D2 U R2 U L2 R2 U' L' F' L F D2 R2 F R2 U",
    "L F R U2 F2 L2 D2 L2 F2 R2 U2 F' L' F R' B2 R2 F' U'",
    "F R' B' D' R2 D B2 R2 U L2 U R2 U' L2 R2 U' R2 F' U B2 R' B U' R U",
    "L' F L' B2 D2 R2 U' B2 U' L2 D' L2 F2 D' L2 U' F' D F' D2 U' L F' L",
    "R D' L' D F2 D B2 D' F2 R2 D' L2 U' L2 U2 L2 U' L' D U2 L' U L R U'",
    "L F' R' U2 B2 D B2 R2 U2 L2 D F2 D' F2 U L2 U2 R' F R' U R U L' U2",
    "B R D2 L2 U' R2 D R2 F2 D R2 B2 U F2 D R' B R' D2 F2 R B2 U2",
    "B' U' L D L2 D F2 R2 U F2 R2 U' F2 R2 D2 L2 U2 L' D U' L D' U2 B U2",
    "R F L D2 R2 U2 B2 F2 U L2 B2 L2 F2 U2 R2 U L' D' R' B' R2 U' L D2 R'",
    "B' U' L B2 L2 R2 U' R2 D B2 D' B2 U L2 B2 L' U B U'",
    "R B' R D' F2 D B2 R2 D B2 L2 B2 L2 U F2 D' U L' U' L' U' R B' R'",
    "R D' B D R2 D' F2 R2 U R2 U F2 U2 R2 B' D B U' B' R'",
    "R U B U' L2 U' B2 U2 B2 U B2 U B2 U2 L2 B' U' B U2 B' U' R'",
    "B R F R2 U' B2 R2 D B2 U' L2 D' F2 U2 B2 L2 B' D L2 R2 U' F2 R' B' U2",
    "R' U' F' U2 F2 D' F2 L2 U' F2 D2 B2 R2 U' B2 U F' U2 F R' D' F' R2",
    "F U L' U2 L2 F2 D F2 D' F2 U L2 U L2 F2 U' F' U F' U2 F2 L' U' F' U'",
    "R B' U' F2 L2 F2 L2 D' L2 D L2 U' F2 L2 R2 D L2 F' D L2 F D F' R",
    "L' U B L2 R2 D F2 D2 R2 D F2 D2 R2 D' F2 L2 R2 U2 R' B' R' U2 B' U L",
    "L' U' L F2 D R2 U' B2 U B2 R2 U F2 U L2 U' F2 U' R' D2 R F2 U' L",
    "B' D F' D' B2 U' F2 D B2 U R2 D2 L2 U R2 U B L2 D R2 U2 B U F2 U'",
    "F' L' U D' R2 D2 L2 D R2 D B2 D B2 U2 F' R2 F L' F' R2 F2 U2",
    "R' U' F' U F2 L2 D' B2 U B2 D' B2 U2 B2 L2 B' D' B D' U F' U R'",
    "L U L' R2 D' R2 D' F2 U L2 U L2 D2 F2 U' F2 L' D L2 U L' F2 U'"
]

// Create context
const SettingsContext = createContext();

const loadSettings = () => {
    const settings = localStorage.getItem('appSettings');
    return settings ? JSON.parse(settings) : null;
};

const saveSettings = (settings) => {
    localStorage.setItem('appSettings', JSON.stringify(settings));
};

const initializeSubsets = () => {
    const subsets = {};
    Object.keys(algsets).forEach(algset => {
        subsets[algset] = [];
    });
    return subsets;
};

export const useSettings = () => useContext(SettingsContext);

export const SettingsProvider = ({ children }) => {
    const [settings, setSettings] = useState(() => {
        const savedSettings = loadSettings();
        return {
            ...savedSettings,
            solves: savedSettings?.solves || [],
            timer: 0,
            timerRunning: false
        } || {
            useInspection: true,
            displayMilliseconds: true,
            soundEnabled: true,
            averages: {
                avg25: false,
                avg50: false,
                avg100: false
            },
            scramble: "D U' B' U' F' U B2 F2 U2 L' R D2 R' L R D2 U2 F2",
            currCase: null,
            currSolutions: null,
            prevSolutions: null,
            showPrevSolutions: true,
            algset: "3x3x3",
            subsets: initializeSubsets(),
            algsetData: algsets,
            algsInOrder: false,
            solves: [],
            timer: 0,
            timerRunning: false
        }
    });

    useEffect(() => {
        saveSettings(settings);
        //console.log("Saved settings");
    }, [settings]);

    const [currCaseIndex, setCurrCaseIndex] = useState(null);

    const aufChange = {"U U": "U2", "U U'": "", "U U2": "U'", "U' U": "", "U' U'": "U2", "U' U2": "U", "U2 U": "U'", "U2 U'": "U", "U2 U2": ""};

    const updateTimer = (time) => {
        setSettings(prev => ({...prev, timer: time}));
    }
    const addSolve = (time, scramble) => {
        setSettings(prev => ({...prev, solves: [...prev.solves, {time: time, scramble: scramble}]}));
    };

    const deleteLastTime = () => {
        setSettings(prev => ({...prev, solves: prev.solves.slice(0, -1), timer: 0}));
    };

    const resetSolves = () => {
        setSettings(prev => ({...prev, solves: [], timer: 0}));
    };

    const toggleSetting = (setting) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            [setting]: !prevSettings[setting],
        }));
    };

    const toggleAverage = (avg) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            averages: {
                ...prevSettings.averages,
                [avg]: !prevSettings.averages[avg]
            }
        }));
    };

    const setScramble = (scrambleData) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            currCase: scrambleData.currCase,
            scramble: scrambleData.scramble,
            currSolutions: scrambleData.solutions,
            prevSolutions: prevSettings.currSolutions
        }));
    };

    const setAlgset = (algset) => {
        setSettings(prevSettings => ({
            ...prevSettings,
            algset,
            practiceModeActive: false
        }));
        setScramble(getRandomScramble(algset, settings.subsets[algset], true));
    };

    // const toggleSubset = (subset) => {
    //     const newSubsets = settings.subsets.includes(subset) 
    //             ? settings.subsets.filter(s => s !== subset)
    //             : [...settings.subsets, subset];

    //     setSettings(prevSettings => {
    //         return {
    //             ...prevSettings,
    //             subsets: newSubsets
    //         };
    //     });
    //     setScramble(getRandomScramble(settings.algset, newSubsets, true));
    // };

    const toggleSubset = (subset) => {
        const currentSubsets = settings.subsets[settings.algset] || [];
        const newSubsets = currentSubsets.includes(subset) 
            ? currentSubsets.filter(s => s !== subset)
            : [...currentSubsets, subset];

        setSettings(prevSettings => {
            return {
                ...prevSettings,
                subsets: {
                    ...prevSettings.subsets,
                    [settings.algset]: newSubsets
                }
            };
        });
        setScramble(getRandomScramble(settings.algset, newSubsets, true));
    };

    const resetSubsets = () => {
        setSettings(prevSettings => {
            return {
                ...prevSettings,
                subsets: {
                    ...prevSettings.subsets,
                    [settings.algset]: []
                }
            };
        });
        setScramble(getRandomScramble(settings.algset, [], true));
    }

    function generateScramble() {
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
    }

    const addAufScramble = (scramble, aufIndex) => {
        const aufs = ["U'", "U2", "U"];
        let moves = scramble.split(" ");
        let lastMove = moves.pop();

        if (aufs.includes(lastMove)) {
            lastMove = aufChange[lastMove + " " + aufs[aufIndex]];
            moves.push(lastMove);
        } else {
            moves.push(lastMove);
            moves.push(aufs[aufIndex]);
        }
        
        return moves.join(" ");
    }

    const addAufSolutions = (solutions, aufIndex) => {
        const invAufs = ["U", "U2", "U'"];
        let newSolutions = [];

        for (let solution of solutions) {
            let moves = solution.split(" ");
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

        return newSolutions;
    }

    const getRandomScramble = (algset = settings.algset, selectedSubsets = settings.subsets[settings.algset], resetOrder = false) => {
        if (!algset) return { scramble: "", solutions: [] };
    
        if (algset === "3x3x3") {
            return { scramble: generateScramble(), solutions: [] };
        }
    
        if (selectedSubsets.length === 0) {
            selectedSubsets = Object.keys(settings.algsetData[algset]); // Use all subsets if none selected
        }

        let subsetIndex = 0;
        let caseIndex = 0;

        if (settings.algsInOrder) {
            if (currCaseIndex && !resetOrder) {
                subsetIndex = currCaseIndex[0];
                const currSubset = selectedSubsets[currCaseIndex[0]]
                caseIndex = (currCaseIndex[1]+1) % settings.algsetData[algset][currSubset].length;

                if (caseIndex === 0) subsetIndex = (currCaseIndex[0]+1) % selectedSubsets.length;

                setCurrCaseIndex([subsetIndex, caseIndex]);
            } else {
                setCurrCaseIndex([0, 0]);
            }
        } else {
            // Select next alg from random subset and case
            subsetIndex = Math.floor(Math.random() * selectedSubsets.length);
            const num_cases = settings.algsetData[algset][selectedSubsets[subsetIndex]].length;
            caseIndex = Math.floor(Math.random() * num_cases);
        }

        const subset = selectedSubsets[subsetIndex];
        const nextCase = settings.algsetData[algset][subset][caseIndex];
    
        let scramble = nextCase.scrambles[Math.floor(Math.random() * nextCase.scrambles.length)];
        let solutions = nextCase.solutions;
        const aufIndex = Math.floor(Math.random() * 4);

        //console.log("Subset: " + subsetIndex + ", Case: " + caseIndex);
        if (aufIndex < 3) {
            scramble = addAufScramble(scramble, aufIndex);
            solutions = addAufSolutions(solutions, aufIndex);
        }

        return {
            currCase: {algset: algset, subset: subset, caseIndex: caseIndex},
            scramble: scramble,
            solutions: solutions
        };
    };

    const updateScramble = () => {
        setScramble(getRandomScramble());
    }

    return (
        <SettingsContext.Provider value={{
            settings,
            toggleSetting,
            toggleAverage,
            updateScramble,
            setAlgset,
            toggleSubset,
            resetSubsets,
            setScramble,
            addSolve,
            deleteLastTime,
            resetSolves,
            updateTimer
        }}>
            {children}
        </SettingsContext.Provider>
    );
};
