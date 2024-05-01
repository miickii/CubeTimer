import React, { useState, useRef } from 'react';
import { useStopwatch } from "react-use-precision-timer";

const scrambles = [
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

const App = () => {
  const [scramble, setScramble] = useState(scrambles[Math.floor(Math.random() * scrambles.length)]);
  const [isActive, setIsActive] = useState(false);
  const [timerDown, setTimerDown] = useState(false);
  const [timer, setTimer] = useState(0);
  const [times, setTimes] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const timerRef = useRef(null);
  const stopwatch = useStopwatch();
  console.log(scrambles.length)

  const handleTouchStart = () => {
    setTimerDown(true);
  };

  const handleTouchEnd = () => {
    setTimerDown(false);
    if (isActive) {
      setIsActive(false);
      clearInterval(timerRef.current);
      stopwatch.stop();
      setTimes(prev => [...prev, parseFloat(timer)]); // Store the time as a float
      const randomScramble = scrambles[Math.floor(Math.random() * scrambles.length)];
      setScramble(randomScramble);
    } else {
      stopwatch.start();
      setIsActive(true);
      setScramble(""); // Clear previous scramble
      timerRef.current = setInterval(() => {
        const milliseconds = stopwatch.getElapsedStartedTime();
        setTimer((milliseconds / 1000).toFixed(2));
      }, 10);
    }
  };

  const calculateStats = (timesArray) => {
    const sortedTimes = [...timesArray].sort((a, b) => a - b);
    return {
      average5: timesArray.length >= 5 ? sortedTimes.slice(0, 5).reduce((a, b) => a + b, 0) / 5 : "N/A",
      average12: timesArray.length >= 12 ? sortedTimes.slice(0, 12).reduce((a, b) => a + b, 0) / 12 : "N/A",
      average50: timesArray.length >= 50 ? sortedTimes.slice(0, 50).reduce((a, b) => a + b, 0) / 50 : "N/A",
      average100: timesArray.length >= 100 ? sortedTimes.slice(0, 100).reduce((a, b) => a + b, 0) / 100 : "N/A",
      bestTime: sortedTimes[0] || "N/A",
      worstTime: sortedTimes[sortedTimes.length - 1] || "N/A",
    };
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <button onClick={() => setShowHistory(!showHistory)} className="absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow">
        {showHistory ? 'Hide History' : 'Show History'}
      </button>
      {showHistory && (
        <div className="absolute bottom-16 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold">History & Statistics</h2>
          {times.length > 0 ? (
            <ul>
              <li>Average of 5: {calculateStats(times).average5}</li>
              <li>Average of 12: {calculateStats(times).average12}</li>
              <li>Average of 50: {calculateStats(times).average50}</li>
              <li>Average of 100: {calculateStats(times).average100}</li>
              <li>Best Time: {calculateStats(times).bestTime}s</li>
              <li>Worst Time: {calculateStats(times).worstTime}s</li>
            </ul>
          ) : <p>No times recorded.</p>}
        </div>
      )}
      <div className="text-xl mt-4 px-5">{scramble}</div>
      <div 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="flex flex-col justify-center items-center w-full h-full"
      >
        <div className={`text-4xl font-mono ${timerDown ? 'text-green-500' : 'text-black'} select-none`}>
          {timer}s
        </div>
      </div>
    </div>
  );
};

export default App;

