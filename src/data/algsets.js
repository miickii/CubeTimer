const algsets = {
    "3x3x3": {

    },
    "OLL": {
        "OLL": [
            {
                "scrambles": [
                    "R' U B U B2 R2 U' R2 B2 U' L2 F' D' F D2 F' D2 L B' L R",
                    "L' D L R2 B F2 D2 B' L2 F' D2 F' R' B R' U L' B' D' B2 L U'",
                    "R D' L' F2 U2 L2 B2 R2 F2 R D2 U2 B' D2 F L F L U2 L' D' R'"
                ],
                "solutions": [
                    "R U2 R2 F R F' U2 R' F R F'",
                    "R U B' R B R2 U' R' F R F'",
                    "U R U' R2 D' r U' r' D R2 U R'",
                    "r U R' U R' r2 U' R' U R' r2 U2 r'"
                ]
            },
            {
                "scrambles": [
                    "R B R' U B2 R2 U L2 D' L2 U' L2 F2 L D L' D' L2 R' B R'",
                    "L F' D' U2 B L2 D2 R2 U2 F R2 D' L B2 R B R' B F2 U2 F'",
                    "R' F' R U L2 U F2 D2 B2 D B2 L D F2 U F' L F L2 F U"
                ],
                "solutions": [
                    "F R U R' U' F' f R U R' U' f'",
                    "F R U R' U' S R U R' U' f'",
                    "U r U r' U2 R U2 R' U2 r U' r'",
                    "R' U2 r U' r' U2 r U r' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R U B R2 D R2 D F2 U' B2 F2 D2 U' B' L' B' L B2 R' B U",
                    "L U L F2 R2 D2 B2 R2 D2 R2 F2 L2 B' F R U' B U' F R2 F2 U2",
                    "F D' F' L' U2 R D2 F2 R' B2 U2 R' B L2 U2 F' L' R' U B' R2 D'"
                ],
                "solutions": [
                    "U' f R U R' U' f' U' F R U R' U' F'",
                    "r' R2 U R' U r U2 r' U M'",
                    "r' R U R' F2 R U L' U L M'",
                    "U F U R U' R' F' U F R U R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "R' D F U2 R2 B2 L2 D' L2 B2 R2 U F' D' R B L F' L F L2 B'",
                    "F D F' R2 U R2 D L2 R2 D U2 L B' L D R U' F' U F R",
                    "L U' R U' L2 U' L2 U L2 R2 D2 L2 D' F D' L' R U' F' L F L'"
                ],
                "solutions": [
                    "U' f R U R' U' f' U F R U R' U' F'",
                    "M U' r U2 r' U' R U' R2 r",
                    "U F U R U' R' F' U' F R U R' U' F'",
                    "U' f R U R' d' l' F R U R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "B' U B U' L2 D' U2 R2 D' F2 U F2 U2 R' B R2 D2 F D2 R D2 U'",
                    "B' L D' U2 L2 B2 U' L2 U' R2 U' R2 U R' D R' D L' R B F2",
                    "F R' F B2 L2 U2 R2 F2 R2 U2 L' D2 F L' F R"
                ],
                "solutions": [
                    "r' U2 R U R' U r",
                    "U2 l' U2 L U L' U l",
                    "U2 R' F2 r U r' F R",
                    "F R U R' U' F' U' F R U R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "F L F D R2 F2 L2 B2 U' L2 D2 F2 R F2 L B' D2 L U2 B2 L",
                    "B' L' B2 L2 R2 F2 U2 R2 U2 R' F L F L2 B2 R B",
                    "F R D' R2 D' L2 D R2 D' B2 R2 U2 L' D2 L' F2 R U2 F'"
                ],
                "solutions": [
                    "r U2 R' U' R U' r'",
                    "U2 l U2 L' U' L U' l'",
                    "U2 R U R2 F R F2 U F",
                    "U' x' D R2 U' R' U R' D' x"
                ]
            },
            {
                "scrambles": [
                    "R F' R' U L2 D2 B2 D' B2 D' L2 F2 U2 B' F D R' D2 F D B U",
                    "R U' F R2 F2 D' L2 F2 U2 R2 U' F2 L' D' B F' D2 B F2 R' U'",
                    "L' D B D' B2 L2 D F2 U' L2 D R2 U F' D' B' D' R2 B' L' R2 U2"
                ],
                "solutions": [
                    "r U R' U R U2 r'",
                    "F R' F' R U2 R U2 R'",
                    "L' U2 L U2 L F' L' F",
                    "U2 l U L' U L U2 l'"
                ]
            },
            {
                "scrambles": [
                    "R' F' L' U' B2 D F2 R2 D' B2 U R' F' R F' L' U2 F R U2",
                    "R B R D' B2 D L2 U' L2 U R' U B' R' U F' U F U'",
                    "R' F R2 U R2 D' F2 D F2 U' F' R U R B' R' B U"
                ],
                "solutions": [
                    "U2 r' U' R U' R' U2 r",
                    "l' U' L U' L' U2 l",
                    "R U2 R' U2 R' F R F'",
                    "F' L F L' U2 L' U2 L"
                ]
            },
            {
                "scrambles": [
                    "R D F R L2 D2 L2 D' F2 L2 U R2 U2 L2 R' D' U' L B D L' R U",
                    "F' D' B' L2 F D2 F' R2 F' D2 F2 U2 B' R' F' U' R B2 L' B' L' D",
                    "R F R' U' B2 U R2 U R2 U' B2 R F' U' L' U R' U' L"
                ],
                "solutions": [
                    "U R U R' U' R' F R2 U R' U' F'",
                    "U' L' U' L U' L F' L' F L' U2 L",
                    "U2 R' U' R U' R' U R' F R F' U R",
                    "r' R2 U2 R' U' R U' R' U' M'"
                ]
            },
            {
                "scrambles": [
                    "L' U R' U2 F2 D F2 D' F2 U F2 R2 B' R D R2 B L2 U L'",
                    "F D' F L2 F2 U2 B2 R2 F2 D' L2 D L2 B D2 R' B R F' R2 D F'",
                    "B D B D2 F2 R2 F2 D R2 D' R2 F' R2 D' R' F D2 B2 U2 L' U2"
                ],
                "solutions": [
                    "R U R' U R' F R F' R U2 R'",
                    "U2 L' U' L U L F' L2 U' L U F",
                    "R U R' y R' F R U' R' F' R",
                    "R U R' y' r' U r U' r' U' r"
                ]
            },
            {
                "scrambles": [
                    "R' U' B' R2 D2 F' D2 B' D2 L2 D2 F2 L' B D B2 L B' F2 R' U2",
                    "R' B' D R2 F2 U2 R2 F2 D' U' L2 F2 U B F2 L F2 L R2 B L2 R'",
                    "F L F' L2 R2 D B2 U2 R2 D L2 D U' F' L2 F D F' L F'"
                ],
                "solutions": [
                    "r' R2 U R' U R U2 R' U M'",
                    "M R U R' U R U2 R' U M'",
                    "U F' L' U' L U F U F R U R' U' F'",
                    "U2 r U R' U R' F R F' R U2 r'"
                ]
            },
            {
                "scrambles": [
                    "L' F' R' L D2 F2 L' B2 R U2 B2 R F' D' B2 D L2 U' L' U'",
                    "F L' B U R2 F' U2 B L2 B' L2 U2 F U' B2 L' B' D B D' L2 F'",
                    "R B R' D2 R2 D L2 U' F2 D R2 U F L' R2 U2 F' L' B' D2 U'"
                ],
                "solutions": [
                    "F R U R' U' F' U F R U R' U' F'",
                    "U' M' R' U' R U' R' U2 R U' M",
                    "U' r R2 U' R U' R' U2 R U' R r'",
                    "U M U2 R' U' R U' R' U2 R U M'"
                ]
            },
            {
                "scrambles": [
                    "F L' B' U' L2 D' F2 R2 D F2 L2 U' B' L2 R' F L' F2 R2 U' F R'",
                    "R' D R U2 F2 D B2 L2 D' F2 U B2 R D' U' F' U F R U",
                    "L D' R2 F' U2 R2 U2 F' R2 F L' U' L D B U' B' U' L'"
                ],
                "solutions": [
                    "r U' r' U' r U r' F' U F",
                    "F U R U2 R' U' R U R' F'",
                    "F U R U' R2 F' R U R U' R'",
                    "r U' r' U' r U r' y' R' U R"
                ]
            },
            {
                "scrambles": [
                    "R F' D R2 U' F2 U R2 U' F2 R2 D' U F' R' F U R U' R' F'",
                    "F R' F R2 B2 D B2 R2 D L2 F2 U' F2 L' B2 L' D2 F2",
                    "R F' D R2 D' L2 D R2 D' L2 F R' F U R U' R' F'"
                ],
                "solutions": [
                    "R' F R U R' F' R F U' F'",
                    "R' F R U R' F' R y' R U' R'",
                    "r' U r U r' U' r y R U' R'",
                    "l' U l U l' U' l y' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F' U R' F2 U2 R2 U B2 F2 D F2 D' B' U B L' D' L' B2 R' F'",
                    "L D F D' L2 R2 F2 D' L2 U L2 F2 D L R F U' F' R2 U R",
                    "R D R2 D2 L2 B' L2 D2 R2 F' D' R2 U L' U' L R F U2 F'"
                ],
                "solutions": [
                    "U2 l' U' l L' U' L U l' U l",
                    "r' U' r R' U' R U r' U r",
                    "r' U' M' U' R U r' U r",
                    "U2 R' F' R L' U' L U R' F R"
                ]
            },
            {
                "scrambles": [
                    "F D R F2 L2 U' F2 R2 D2 U' R2 F2 D2 L U' L D2 F2 R2 U' F'",
                    "R' B' D' B2 U B2 D F2 U' B2 D' B2 U F' D2 B2 F' U B' U2 R' U'",
                    "B' D' B' L2 D' F2 D' F2 D2 L2 B2 U B' F R F' D B R' U R U"
                ],
                "solutions": [
                    "r U r' R U R' U' r U' r'",
                    "r U M U R' U' r U' r'",
                    "U2 R' F R U R' U' F' R U' R' U2 R",
                    "U2 l U l' L U L' U' l U' l'"
                ]
            },
            {
                "scrambles": [
                    "R F' L' F U2 L2 B D2 R2 F R2 D2 L' U L' U2 R' U L U2",
                    "B' R' U' B D2 L2 B' U2 L2 B' D2 F' R' B' U B2 U' B'",
                    "B' D R2 B2 U2 L' F2 L' B2 F D2 B2 L' U F L' B D' B2 R"
                ],
                "solutions": [
                    "R U R' U R' F R F' U2 R' F R F'",
                    "U2 F R' F' R2 r' U R U' R' U' M'",
                    "f R U R' U' f' U' R U R' U' R' F R F'",
                    "R' F R U' M' U2 r' U' F' U R"
                ]
            },
            {
                "scrambles": [
                    "B L' D' B2 U' B2 U' R2 U' F' U2 F R2 D B' U2 L B' U2",
                    "B R' U F2 U' F2 R2 D' F2 D' B L' D2 F' R F' U2 R2 B'",
                    "B' R' B F R2 F D2 B L2 B' D2 F2 R' B U2 B' U2"
                ],
                "solutions": [
                    "r U R' U R U2 r2 U' R U' R' U2 r",
                    "U R U2 R2 F R F' U2 M' U R U' r'",
                    "U2 F R U R' d R' U2 R' F R F'",
                    "U2 F R U R' U y' R' U2 R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "L' B' D R2 F2 R2 F2 D' L2 R2 U2 L2 F2 R' B' D2 L' F2 L B2 L",
                    "F' R' F L2 D F2 L2 D' F2 R2 U B' U' B' R' U' L' F L' U",
                    "L' U F' L2 B D2 U2 L2 B' D2 F U2 L2 R' B L F U' F' U R' U"
                ],
                "solutions": [
                    "M U R U R' U' M' R' F R F'",
                    "r' R U R U R' U' r R2 F R F'",
                    "r' U2 R U R' U r2 U2 R' U' R U' r'",
                    "R' U2 F R U R' U' F2 U2 F R"
                ]
            },
            {
                "scrambles": [
                    "R B U B2 U' R2 F2 L2 D2 L2 F2 R2 U' B R' F' L' U' L F U'",
                    "L' B L U' F2 L2 D B2 L2 F2 U R2 U L' B' L U'",
                    "L' U' R' B2 D2 L2 F2 U F2 D' U' F2 R2 F' L' B U R B F2 U R2"
                ],
                "solutions": [
                    "M U R U R' U' M2 U R U' r'",
                    "r U R' U' M2 U R U' R' U' M'",
                    "M' U M' U M' U M' U' M' U M' U M' U M'",
                    "M' U2 M U2 M' U M U2 M' U2 M"
                ]
            },
            {
                "scrambles": [
                    "B' D' F R2 U2 F2 R2 F2 U' R2 D' F2 D F' D' F U' F' D2 U' B",
                    "F L B F2 U2 L2 F2 U B2 R2 D R2 B U' F' U2 R2 F L' R2 F'",
                    "F' R B2 L2 B U2 B' D2 F R2 U2 F' U' L D2 U B' R' B' F"
                ],
                "solutions": [
                    "U R U2 R' U' R U R' U' R U' R'",
                    "U F R U R' U' R U R' U' R U R' U' F'",
                    "R U R' U R U' R' U R U2 R'",
                    "R' U' R U' R' U R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "F' R B' D F2 U R2 U' F2 D B2 D2 B R' F R U B2 U' B2 R'",
                    "F D L R2 F2 U F2 U' F2 U' R2 U L' U' R' U' R D' U' F' U",
                    "L' B' L' F2 R2 D' R2 F2 D2 R2 D' L U2 L2 F D F2 R2 D2 L' U"
                ],
                "solutions": [
                    "R U2 R2 U' R2 U' R2 U2 R",
                    "f R U R' U' f' F R U R' U' F'",
                    "R U2 R2 U' R2 U' R2 U2 R",
                    "R' U2 R2 U R2 U R2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B U F R2 U' F2 U B2 U' F2 U B2 R2 F' U' B'",
                    "R B U' D B2 R2 U B2 U' R2 U B2 D' R F R B' R' F'",
                    "B' L D L2 D' F2 U' B2 D2 F2 D B2 U' R U2 R' D L B F2"
                ],
                "solutions": [
                    "R2 D R' U2 R D' R' U2 R'",
                    "U2 R2 D' R U2 R' D R U2 R",
                    "U R U R' U' R U' R' U2 R U' R' U2 R U R'",
                    "R U R' U R U2 R2 U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "B U' R D L2 U B2 U' L2 D2 R2 F2 R U' R2 D R2 U2 B'",
                    "R U' F' D' L2 F2 U' F2 U2 L2 U2 F' D F2 R2 U' R2 U' R'",
                    "F' R' U F2 U2 F2 D B2 U B2 U2 R2 U2 R' U R2 D' R2 U' F"
                ],
                "solutions": [
                    "r U R' U' r' F R F'",
                    "U2 l' U' L U R U' r' F",
                    "U' x' R U R' D R U' R' D' x",
                    "L F R' F' L' F R F'"
                ]
            },
            {
                "scrambles": [
                    "R B D2 L2 D R2 U' R2 D2 L2 B2 D' B R2 B' U' B R U'",
                    "R B' L U2 F D2 U2 B' U2 R2 B D2 F' L B R' F L F2 L' F' U'",
                    "B U L U F2 D' B2 D F2 D' B2 D U' L' U' B' U'"
                ],
                "solutions": [
                    "U F' r U R' U' r' F R",
                    "R' F R B' R' F' R B",
                    "F R' F' r U R U' r'",
                    "U' x' R U' R' D R U R' D' x"
                ]
            },
            {
                "scrambles": [
                    "F' D L' D R2 F2 D L2 F2 R2 F2 D2 U' R F' U' B2 U B' R2 B U'",
                    "F R' B2 R2 F' U2 F U2 F' L2 F2 R B D' B2 D' F L2 F' R2 F2",
                    "F' D B' D2 F2 D R2 U' R2 U R2 D' U F' U' F' D2 B D' F U"
                ],
                "solutions": [
                    "U R U2 R' U' R U' R'",
                    "R' U' R U' R' U2 R",
                    "U2 L' U' L U' L' U2 L",
                    "U2 L' U R U' L U R'"
                ]
            },
            {
                "scrambles": [
                    "F L F R F' U2 F D2 U2 B' D2 F U2 L2 U2 R' U B' U' B F2 U' F' L'",
                    "F U L' D R2 D' R2 B2 D2 L2 U' F2 U R' U2 L' U2 B2 R' U F'",
                    "L' B' R U R2 D' B2 L2 D U' F2 L' B2 R' B' R B2 R'"
                ],
                "solutions": [
                    "R U R' U R U2 R'",
                    "U' R' U2 R U R' U R",
                    "R U' L' U R' U' L",
                    "U2 L U L' U L U2 L'"
                ]
            },
            {
                "scrambles": [
                    "B' D' R D R2 F2 R2 U2 L2 B2 F' D2 L2 U' R' U' R2",
                    "R' B' R D B2 L2 U L2 B2 F2 R2 D' R' B R' B2 F2 D' B2",
                    "F' L B' F2 U2 B2 L2 F2 D' L2 B2 R2 U B' D B2 F2 U' L' F"
                ],
                "solutions": [
                    "r U R' U' M U R U' R'",
                    "U2 M' U M U2 M' U M",
                    "M U M' U2 M U M'",
                    "U' M' U' M U2 M' U' M"
                ]
            },
            {
                "scrambles": [
                    "B D F L2 F' L2 F D2 B D2 F2 D2 F' R' D R2 B U2 R U' B",
                    "R B' R' D B2 L2 U L2 D' B2 R2 U' R B F R2 F' R' U'",
                    "B' U' B' D' B2 U' B2 U R2 U' B2 D F' L2 F2 U2 L F L' U2 F'"
                ],
                "solutions": [
                    "M U R U R' U' R' F R F' M'",
                    "r2 D' r U r' D r2 U' r' U' r",
                    "U R U R' U' R U' R' F' U' F R U R'",
                    "U2 R' F R F' R U2 R' U' F' U' F"
                ]
            },
            {
                "scrambles": [
                    "R U F' L2 B2 L2 F2 D' R2 D R2 B2 R2 B' F' R' U2 R B U' R' U",
                    "L U F' D F2 U' F2 L2 D F2 R B' R' F2 D' L2 D' L' F U2",
                    "F' U L' U B2 D2 R2 F2 D' R2 D' B2 L' D' U' L D F2 U2 F' U"
                ],
                "solutions": [
                    "U' r' D' r U' r' D r2 U' r' U r U r'",
                    "M U' L' U' L U L F' L' F M'",
                    "U2 F R' F R2 U' R' U' R U R' F2",
                    "R2 U R' B' R U' R2 U R B R'"
                ]
            },
            {
                "scrambles": [
                    "F U B D' B2 U2 B2 L U2 L' D2 F2 D2 L' U' L' U' L D L2 F U B'",
                    "R' D' R' D L2 R2 U' F2 U2 L2 F2 R2 B2 R D2 F D' F' R U L2",
                    "R' B' U' R2 D L2 D2 B2 L2 U2 R2 F2 D' R U' R' U' R2 B R U2"
                ],
                "solutions": [
                    "R' U' F U R U' R' F' R",
                    "U2 S' L' U' L U L F' L' f",
                    "U' F R' F' R U R U R' U' R U' R'",
                    "U S R U R' U' f' U' F"
                ]
            },
            {
                "scrambles": [
                    "R F' U' D' L2 D R2 U' R2 F2 D R2 U R D2 F2 U' F' L D F2 U",
                    "R' B D L2 R2 U' B2 U R2 D L2 F2 D' L B D' L D L' B2 R",
                    "B' U' F B2 U R2 U2 R2 U R2 U R2 F' U B2 U R' U2 R B"
                ],
                "solutions": [
                    "S R U R' U' R' F R f'",
                    "R U B' U' R' U R B R'",
                    "U2 L U F' U' L' U L F L'",
                    "R d L' d' R' U l U l'"
                ]
            },
            {
                "scrambles": [
                    "B U L' D' U' F2 D B2 D' F2 D B U L2 F' L F L2 U'",
                    "R U' F' U2 B2 U B2 L2 D L2 D' L2 R2 F D F' D2 B' L2 D2 R U'",
                    "R' B' F2 D2 F2 R2 B2 U2 F2 L' F U L' B' U F R'"
                ],
                "solutions": [
                    "R U R' U' R' F R F'",
                    "F R U' R' U R U R' F'",
                    "U2 L' U' L U L F' L' F",
                    "U' r' U' r' D' r U r' D r2"
                ]
            },
            {
                "scrambles": [
                    "R' U R' B2 R2 F2 D B2 L2 U' R2 U' B L B L2 B' U2 B2 D' B U2",
                    "B' U L F2 D R2 D2 R2 D B2 U F' U F U2 B2 F2 L' U2 B U'",
                    "R' U' B R2 U2 R2 U2 R2 U R2 B2 R2 U' B' L' R B2 L2 B U' B' L'"
                ],
                "solutions": [
                    "U2 R U R' U' B' R' F R F' B",
                    "U2 R U R2 U' R' F R U R U' F'",
                    "F R U R' U' R' F' r U R U' r'",
                    "U2 R U R' U' x D' R' U R U' D x'"
                ]
            },
            {
                "scrambles": [
                    "L' F B2 R U2 B2 F2 R2 U2 F2 U2 B L F2 L B2 F' D2 L'",
                    "F' U' B L2 B L2 D2 B2 F U2 B' F2 D2 R B R2 F' R F2 U' F",
                    "F' U R' F2 D' F2 R2 B2 U2 L2 U' B2 D' B' D B2 U2 L2 B' R' F U'"
                ],
                "solutions": [
                    "R U2 R2 F R F' R U2 R'",
                    "f R U R' U' f' R U R' U R U2 R'",
                    "U' R' U2 R l U' R' U l' U2 R",
                    "U' R U2 R' U' R U' R' U2 F R U R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "R D R F' U2 F' L2 D2 B L2 B' F2 R' B' U' B2 D' B' R2 B R'",
                    "F' L U L2 D' L2 U' R2 F2 D2 F2 R2 D L' F2 U' F' L' U L",
                    "L F' L B2 R2 U' B2 D B2 U R2 D2 B2 F L2 B' U2 B U"
                ],
                "solutions": [
                    "U2 L' U' L U' L' U L U L F' L' F",
                    "R' U' R U' R' U R U l U' R' U x",
                    "U2 R U R' F' R U R' U' R' F R U' R' F R F'",
                    "R' U' R U' R' U R U R y R' F' R"
                ]
            },
            {
                "scrambles": [
                    "R U R' F2 L2 U' L2 D F2 D' F2 U F2 L' B' R2 B' R2 B2 L U2",
                    "R F' L' B2 D' B2 U B2 R2 U R2 U' B' U' B' D L F R' U",
                    "L' F L U2 B U2 B' R2 F R2 F' U2 L' F' U' L F U' R U R' F'"
                ],
                "solutions": [
                    "F R U' R' U' R U R' F'",
                    "F R' F' R U R U' R'",
                    "R' F R F' U' F' U F",
                    "U' R U2 R' F R' F' R2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "L' F U F U' F' L U' F' R' F R' D' R2 U' L2 U' R2 D2 L2 D' R2",
                    "L' B' R D B2 D L2 F2 U2 L2 D2 B' L B' F R' F' R2 B U2",
                    "F U F U F2 U F2 U2 F2 U2 F2 R U' R' F' L' U L F' U"
                ],
                "solutions": [
                    "R U R' U R U' R' U' R' F R F'",
                    "L' U' L F L' U' L U L F' L' U L F' L' F",
                    "R' U2 r' D' r U2 r' D R r",
                    "U2 R U R' U R U2 R' U F R U R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "R' B' R' D2 L2 D' R2 D L2 D' R2 D' R B U' F' U F R",
                    "L D' B R2 B2 D R2 U2 L2 F2 D R F L B' D' F R2 U' B R",
                    "B' D' B' L' U R2 U' L2 U R2 U' L' B F R F' D B R' U' R"
                ],
                "solutions": [
                    "U L F' L' U' L U F U' L'",
                    "U' R U R' F' U' F U R U2 R'",
                    "U' R B' R' U' R U B U' R'",
                    "F R U R' U' R U R' U' R U' R' U' R U R' F'"
                ]
            },
            {
                "scrambles": [
                    "B' L' F' D' B2 D' U' R2 D B2 D' R2 B' D2 L2 U L D R2 D' B U2",
                    "F D' B D2 F2 D F2 D B2 U' R2 U' B D F' R U B U' B' R'",
                    "B' U L' B2 D2 L2 U L2 D B2 L2 U' F D' L2 B2 U' L2 F L' B"
                ],
                "solutions": [
                    "U R' F R U R' U' F' U R",
                    "U' f R' F' R U R U' R' S'",
                    "U' F R U R' U' F' R U R' U R U2 R'",
                    "R r D r' U r D' r' U' R'"
                ]
            },
            {
                "scrambles": [
                    "R B' R' D L2 D' L2 R2 U L2 U' L2 R' B2 U B' U' R' U2",
                    "L' B D L2 U' L2 D' B2 U B2 U' B2 U2 B U L B L U L' U' B'",
                    "R' D R' F2 U B2 U' F2 U' B2 R2 U R2 F R' F' R2 D' R U2 R' U'"
                ],
                "solutions": [
                    "U2 R U R' U R U2 R' F R U R' U' F'",
                    "U' L F' L' F L F' L' F L' U' L U L' U' L",
                    "R U' R' U2 R U y R U' R' U' F'",
                    "f R U R' U' f' U' R U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B D B' D2 F' D2 B L2 F' R2 F R2 F D' B2 U' R' U R U B U",
                    "B' U F' D' F2 R2 B2 D2 L2 D2 U' F' D B2 R2 B L U2 L F U'",
                    "L' D' L' D' L2 B2 U' L2 B2 L2 U' F2 U B R B F2 D L2 R2 D' R2"
                ],
                "solutions": [
                    "R' U' R U' R' U2 R F R U R' U' F'",
                    "U R' F R F' R' F R F' R U R' U' R U R'",
                    "M U F R U R' U' F' M'",
                    "L' U L U2 L' U' y' L' U L U F"
                ]
            },
            {
                "scrambles": [
                    "B' U' R U R2 D' F2 D F2 U' R' D R' D' R' U B",
                    "B D' R' D U B2 U' L2 R2 D2 U' R2 D2 R D U L D' L R2 B'",
                    "F L D' F' D2 B' F L2 F L2 B F' D' L' B' F' R' U' R U B"
                ],
                "solutions": [
                    "f' L' U' L U f",
                    "U2 F' U' L' U L F",
                    "U R' U' F' U F R",
                    "B' U' R' U R B"
                ]
            },
            {
                "scrambles": [
                    "F U L' U R2 U' L2 U R2 U' R2 B' R' B L' R' U' F'",
                    "F' U R F B2 U2 R2 F2 L2 D L2 F2 R2 U' B' U B' U' F' R' U' F",
                    "R' F R' D' U2 L2 F2 L2 U' R2 U' F2 L' F' L' D B2 F2 R2"
                ],
                "solutions": [
                    "f R U R' U' f'",
                    "U2 F U R U' R' F'",
                    "U2 r U x' R U' R' U x U' r'",
                    "U' L d R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "R' F' D2 U2 B2 F2 D2 U2 B2 F' R F U R U' R' F'",
                    "L U' L' U' B2 L2 U B2 U' B2 U B2 L2 B' L' B' U2 L' U' L' U",
                    "B L' D' L D B2 U2 B2 L2 U' F2 U B' F' L' D F2 D' L' U2 F'"
                ],
                "solutions": [
                    "F R U R' U' F'",
                    "U2 f U R U' R' f'",
                    "U2 F' L' U' L U F",
                    "F R2 D R' U R D' R2 U' F'"
                ]
            },
            {
                "scrambles": [
                    "B' L D' L2 R2 D' L2 R2 U2 L2 F2 R2 U' B' F' U' F' U' B' U' L' B",
                    "L' D' R F2 U B2 D' L2 R2 F2 R2 U' R D' U F U' F' L' F2 D'",
                    "R F' R' F R2 F R2 F' R2 F' U2 L' U' L U2 R' F R' U R2"
                ],
                "solutions": [
                    "R' U' R' F R F' U R",
                    "U F R U R' y' R' U R U2 R'",
                    "U2 r' F' L' U L U' F r",
                    "U' F R U R2 U' R F' U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L D' B' D2 F2 D F2 U R2 D U2 R U2 R U' B' D L2 U' L U",
                    "F L D L2 D' R2 D L2 U' F2 L2 D' U R D' R2 D R' B2 L F'",
                    "F' D F' R2 F2 U2 F2 U' R2 U' F2 U' R' F' R D' F U2 F'"
                ],
                "solutions": [
                    "F' L' U' L U L' U' L U F",
                    "R' U' R' F R F' R' F R F' U R",
                    "R' U' l' U R U' R' U R U' x' U R",
                    "U2 B' R' U' R U R' U' R U B"
                ]
            },
            {
                "scrambles": [
                    "B U L U2 L2 U' B2 D' F2 R2 U2 B2 D' L F' R' D2 L R B' L U'",
                    "B' L' D B2 L2 U2 F L2 D2 L2 F U' R F2 L' B U' R2 U B2 U",
                    "L' D' L U2 L2 D L2 U' L2 D2 R2 D' R2 F' D' F2 L' F' U L' U2"
                ],
                "solutions": [
                    "F R U R' U' R U R' U' F'",
                    "R U2 R' U' R U R' U2 R' F R F'",
                    "U2 f U R U' R' U R U' R' f'"
                ]
            },
            {
                "scrambles": [
                    "B R' F' L2 F' R2 B' D2 R2 D2 B' L2 D2 L D2 R B F' R F'",
                    "B' D' L' R2 B2 D' R2 D B2 U R2 U' L D B U B' U2 B U",
                    "R' U F U2 F2 D' F2 D R2 U' R2 U2 F' L' U' L R F U2 F' U"
                ],
                "solutions": [
                    "U2 r U' r2 U r2 U r2 U' r",
                    "l U' l2 U l2 U l2 U' l",
                    "R B' R2 F R2 B R2 F' R",
                    "U2 R' F R' F' R2 U2 B' R B R'"
                ]
            },
            {
                "scrambles": [
                    "L' U' F D' B2 D' F2 D B2 D' F2 D2 F' U L2 U2 F U2 F' L'",
                    "F U L' R2 B2 L2 D' L2 D2 F2 L2 D F2 R D R B2 L F2 U2 F' U2",
                    "L' D F R2 D2 B2 U R2 D B2 F2 D2 U2 F' D' F' U F' D' B2 L"
                ],
                "solutions": [
                    "r' U r2 U' r2 U' r2 U r'",
                    "U2 R' F R2 B' R2 F' R2 B R'",
                    "U' R U2 R' U' R U' R' F R U R' U' F'",
                    "U2 l' U l2 U' l2 U' l2 U l'"
                ]
            },
            {
                "scrambles": [
                    "R' U F D R2 D U' L' B2 L U L B L' D2 R' F'",
                    "F U R D' L2 B2 R2 U2 L2 F2 D2 F2 U F U' F2 D F' U' R F' U2",
                    "L' D' F' B U2 F' L2 U2 F R2 B2 F' U2 L' U L' U F2 D' L U"
                ],
                "solutions": [
                    "f R U R' U' R U R' U' f'",
                    "U2 F U R U' R' U R U' R' F'",
                    "U' R' U' R' F R F' R U' R' U2 R",
                    "U2 f' L' U' L U L' U' L U f"
                ]
            },
            {
                "scrambles": [
                    "R' D R D' R2 U L2 R2 B2 D B2 L2 F' U' R' U' F U R2 U2 R' U' y'",
                    "L' B' R B2 D' R2 F2 U R2 D R2 U' L2 R B L' U' L2 U' L2 y'",
                    "L' U B U' F2 D R2 D' R2 B2 D' R2 B2 R' F' R F' U' L2 U2 B' L y'"
                ],
                "solutions": [
                    "R U R' U R d' R U' R' F'",
                    "R' U' R U' R' U F' U F R",
                    "R' U' R U' R' d R' U R B",
                    "R U R' U R U' y R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "L' B U B2 U R2 F2 D2 F2 R2 U B2 L B' L U L'",
                    "B R' B' U F2 D2 B2 U' F2 D' R2 D' U2 B' R B' U2 L' B L B'",
                    "B' R B' U' L2 F2 R2 U L2 B2 D R2 D2 L' F2 L D2 U B2 U'"
                ],
                "solutions": [
                    "r' U' R U' R' U R U' R' U2 r",
                    "U2 l' U' L U' L' U L U' L' U2 l",
                    "U r' U2 R U R' U' R U R' U r",
                    "U' l' U2 L U L' U' L U L' U l"
                ]
            },
            {
                "scrambles": [
                    "B' D' R' D2 F2 D B2 U L2 B2 D' B2 L' U F L' R2 B' F D2",
                    "L B' U F2 R F2 U2 R' U2 R U' F2 R' F' U2 F' U2 B L'",
                    "R' B U' R2 D2 B2 D' U F2 D B2 L2 U' F' U2 B F2 L2 R U2"
                ],
                "solutions": [
                    "r U R' U R U' R' U R U2 r'",
                    "U' r U2 R' U' R U R' U' R U' r'",
                    "U' r U r' R U R' U' R U R' U' r U' r'",
                    "F' L' U' L U L' U L U' L' U' L F"
                ]
            },
            {
                "scrambles": [
                    "B' U R D U2 R2 U B2 U2 F2 D2 U2 B' L B' D F2 R U2 B U",
                    "F' D' L' U L2 D F2 D2 B2 U2 R2 U' R U R2 B2 D2 F' U'",
                    "B D' R U' F2 D B2 L2 D2 L2 D B' F2 R U2 B2 D B' U B U2"
                ],
                "solutions": [
                    "R U2 R2 U' R U' R' U2 F R F'",
                    "U R' F R U R U' R2 F' R2 U' R' U R U R'",
                    "r U2 R2 F R F' U2 r' F R F'",
                    "U r U2 R' U' R2 r' U R' U' r U' r'"
                ]
            },
            {
                "scrambles": [
                    "L U' L' U2 L2 B2 D F2 D' B2 L2 U2 F D2 U R U' B R' D2 F'",
                    "B' L B' F' U2 L2 U2 B' U2 L2 U2 F L2 U' L' B2 L2 B' U L U' B2",
                    "B L' U' L2 D F2 D' U2 L2 U' B2 U B L R' B' U' R U' B R U2"
                ],
                "solutions": [
                    "r U r' U R U' R' U R U' R' r U' r'",
                    "F R U R' U' R F' r U R' U' r'",
                    "r' U' r U' R' U R U' R' U R r' U r",
                    "U f R U R' U' f' F R U R' U' R U R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "B' L' D' L2 D R2 D' L2 R2 D B2 L U' L' B2 L F R B F'",
                    "R' F U R2 U' B2 U' F2 U' B2 F2 U F' D2 F D2 R2 U R U'",
                    "B' D' R' D' B2 U2 F R2 B2 F' R2 B F' U' F D R' U' R2 D"
                ],
                "solutions": [
                    "R U R' U' M' U R U' r'",
                    "M' U M' U M' U2 M U M U M",
                    "R U R' U' r R' U R U' r'",
                    "M' U M' U M' U M' U2 M' U M' U M' U M'"
                ]
            }
        ]
    },
    "PLL": {
        "Ua": [
            {
                "scrambles": [
                    "R U L' U R2 B2 U2 R2 U R2 U B2 R U2 R U L R' U",
                    "F' R B D R2 U' B2 L2 F2 U' R2 F2 R2 B' L2 R' D2 U B' U' R' D2",
                    "R F' D2 L2 F2 U2 L2 D2 U' R2 U B2 R U2 R F U R' U"
                ],
                "solutions": [
                    "U2 R2 U' R' U' R U R U R U' R",
                    "R U' R U R U R U' R' U' R2",
                    "M2 U M U2 M' U M2",
                    "U2 M2 U M' U2 M U M2",
                    "U2 R U R' U R' U' R2 U' R' U R' U R",
                    "U' R2 U' S' U2 S U' R2"
                ]
            }
        ],
        "Ub": [
            {
                "scrambles": [
                    "B' L B2 D' U B2 D U' L' B' F U' B2 U' B2 F'",
                    "L D' L' B D F2 D L2 B2 F2 R2 U' F2 U' B' R2 D B2 F2 U' L' D L'",
                    "F' L D U F2 U R2 B2 L2 D' F2 D' U' L' U2 B2 L' R F'"
                ],
                "solutions": [
                    "R' U R' U' R' U' R' U R U R2",
                    "U2 M2 U' M U2 M' U' M2",
                    "M2 U' M' U2 M U' M2"
                ]
            }
        ],
        "H": [
            {
                "scrambles": [
                    "F' U F' L2 D' B2 U R2 U' F2 R2 D' L2 B' U' B' F2 R2",
                    "B' L' U D B2 R2 D U B2 L2 D2 F2 L B' F2 D L2 B2 F2 R2 U'",
                    "R D F' D B2 U B2 L2 R2 F2 D' R U2 B2 D B D L' R D2"
                ],
                "solutions": [
                    "M2 U' M2 U2 M2 U' M2",
                    "M2 U M2 U2 M2 U M2"
                ]
            }
        ],
        "Z": [
            {
                "scrambles": [
                    "L B L' U' B2 F2 D R2 D' B2 F2 L2 U2 L U' B' R' U L' R",
                    "R U R' L2 R2 D2 B2 L2 U F2 U' F2 U' L D' L D B2 L2 R2 U'",
                    "F U' R' U2 L2 D F2 D' L2 U' F2 L2 F2 R U F' U2 L2 U L2 U'"
                ],
                "solutions": [
                    "M' U' M2 U' M2 U' M' U2 M2",
                    "U M' U M2 U M2 U M' U2 M2",
                    "U M2 U' M2 U' M' U2 M2 U2 M'",
                    "M2 U M2 U M' U2 M2 U2 M'"
                ]
            }
        ],
        "Aa": [
            {
                "scrambles": [
                    "L' F' U D L2 B2 U F2 D U2 L2 F2 U2 B' R' B2 R' D2 U L U L2",
                    "B' L' U R2 U B2 U' R2 U' L2 D2 F2 D2 L' U F U' B U F' U'",
                    "L' U R D L2 U B2 U' L2 D2 R2 F2 R U' R2 D L R2"
                ],
                "solutions": [
                    "l' U R' D2 R U' R' D2 R2 x'",
                    "U x' R2 D2 R' U' R D2 R' U R' x"
                ]
            }
        ],
        "Ab": [
            {
                "scrambles": [
                    "R B U' L2 D' R2 D L2 D' R2 D U R' F R B' R' F'",
                    "F U F' U2 L2 U B2 D R2 D' B2 U F' U' F U' L2 U F2",
                    "B L' F L2 U R2 B2 D B2 D' R2 B' L F U2 F' U' F' L2"
                ],
                "solutions": [
                    "x R2 D2 R U R' D2 R U' R x'",
                    "U x' R U' R D2 R' U R D2 R2 x"
                ]
            }
        ],
        "E": [
            {
                "scrambles": [
                    "B' U F' U2 F R2 U2 B U2 B' R2 B' U F U' B U B F'",
                    "B U R' L2 U' B2 U L2 D' R2 U F2 U' R' U R D R' U2 B'",
                    "B' R D2 R2 B2 U2 R2 D2 L2 B2 D2 F' L B L' B2 F2 D2 F R'"
                ],
                "solutions": [
                    "x' R U' R' D R U R' D' R U R' D R U' R' D' x"
                ]
            }
        ],
        "Ga": [
            {
                "scrambles": [
                    "F' L F L2 U B2 U B2 U' B2 U' L2 F' L' B F2 U2 B' F' U2 y",
                    "F' R U D2 L2 B D2 B' L2 D2 B L2 B' U' R' D B L2 B' D' F y",
                    "R F' L' U2 B2 D F2 D' B2 D F2 D' U' B' U' B2 L' B' L2 F R' y"
                ],
                "solutions": [
                    "R2 u R' U R' U' R u' R2 y' R' U R",
                    "R2 U R' U R' U' R U' R2 D U' R' U R D'"
                ]
            }
        ],
        "Gb": [
            {
                "scrambles": [
                    "F L B F D2 F' L2 U2 F D2 B' R2 F' U' F U' F' L' U2 F' U'",
                    "R' F R2 D B2 U' B2 R2 U2 R2 U2 B R B' D' R2 U' F' U'",
                    "B' L U' R2 U2 L2 D R2 B2 D U' B2 U R D B' D B2 R' B' L U"
                ],
                "solutions": [
                    "U F' U' F R2 u R' U R U' R u' R2",
                    "R' U' R y R2 u R' U R U' R u' R2",
                    "R' U' R U D' R2 U R' U R U' R U' R2 D"
                ]
            }
        ],
        "Gc": [
            {
                "scrambles": [
                    "B' R' U F' U2 B L2 B' R2 B L2 B2 D2 R' B' L' B' U' L' U y'",
                    "F' D' B L2 B' L2 B D2 F' D2 B R2 D F2 U' B2 L2 F U F' y'",
                    "F R U B2 L2 D' F2 D2 F2 D' L2 B2 R2 B' R B U2 R U2 F' y'"
                ],
                "solutions": [
                    "R2 u' R U' R U R' u R2 y R U' R'",
                    "R2 u' R U' R U R' D x' U2 r U' r'",
                    "U2 R2 F2 R U2 R U2 R' F R U R' U' R' F R2",
                    "R2 U' R U' R U R' U R2 D' U R U' R' D"
                ]
            }
        ],
        "Gd": [
            {
                "scrambles": [
                    "F U L' B2 U L2 U' R2 U L2 U2 B2 L2 F' D2 L D L U L y",
                    "B U' L D2 R2 U' B2 F2 D L2 U2 R' F U2 F' D B L2 F2 y",
                    "F' L' U' L2 B D2 R2 F R2 B' D2 U B L' B' L' F U L' y"
                ],
                "solutions": [
                    "R U R' y' R2 u' R U' R' U R' u R2",
                    "R U R' U' D R2 U' R U' R' U R' U R2 D'"
                ]
            }
        ],
        "Ra": [
            {
                "scrambles": [
                    "F U F L2 F2 U' F2 U L2 U' F2 D U2 F' D' F U2 L2 U L2 U'",
                    "B U L D L2 B2 U' B2 U B2 F2 D2 U' R D' R2 U' F2 D2 U' B",
                    "L' B U2 B2 U R2 U2 R2 U B2 U B' U L D L' B L D' U'"
                ],
                "solutions": [
                    "R U R' F' R U2 R' U2 R' F R U R U2 R'",
                    "R U' R' U' R U R D R' U' R D' R' U2 R'",
                    "U' L U2 L' U2 L F' L' U' L U L F L2"
                ]
            }
        ],
        "Rb": [
            {
                "scrambles": [
                    "F U' L' D2 F2 D B2 D' R2 U R2 U' L U R' D2 U B2 R U F'",
                    "R' F L U F2 D F2 U' L2 B2 U R2 B2 L U' R' F L' R U L R",
                    "B D B' R2 D' B2 U' L2 B2 R2 B2 F2 U' B' F2 D' B' U' F2"
                ],
                "solutions": [
                    "R' U2 R U2 R' F R U R' U' R' F' R2",
                    "R' U2 R' D' R U' R' D R U R U' R' U' R"
                ]
            }
        ],
        "Ja": [
            {
                "scrambles": [
                    "B D' R' B2 F2 D F2 D2 U L2 D U2 L2 B' U R' U R2 U2 B2",
                    "F U' B U2 F2 U B2 U F2 U' B2 U2 F' U B' U' F' U F U'",
                    "B' L' B' L2 F U2 R2 U2 B' U2 F R2 D2 R D R2 D' B' F D2 F"
                ],
                "solutions": [
                    "R' U L' U2 R U' R' U2 R L",
                    "U2 L' U R' z R2 U R' U' R2 U D",
                    "U x R2 F R F' R U2 r' U r U2 x'",
                    "U' L' U' L F L' U' L U L F' L2 U L"
                ]
            }
        ],
        "Jb": [
            {
                "scrambles": [
                    "F' U F' U' F2 D R2 D' R2 U R2 B U' B' R2 U'",
                    "R' F B2 D B2 U B2 L2 U' L2 B2 R' D' R2 U' F' R U R' U'",
                    "R' B' L2 B2 U' B2 D L2 U' F2 U B F2 U' B' D' B R U"
                ],
                "solutions": [
                    "R U R' F' R U R' U' R' F R2 U' R' U'"
                ]
            }
        ],
        "Na": [
            {
                "scrambles": [
                    "R' U B R B2 L R F2 R' B2 F2 R2 B' U' R2 B2 L' B2 U2 R'",
                    "R' D R' U R2 D B2 D' B2 D2 F2 L' U' L D F2 U'",
                    "L U' L' F2 R2 U' B2 D' F2 D B2 F2 L U L' R2 F2"
                ],
                "solutions": [
                    "R U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R'",
                    "z D R' U R2 D' R U' D R' U R2 D' R U' z'",
                    "z U R' D R2 U' R D' U R' D R2 U' R D' z'"
                ]
            }
        ],
        "Nb": [
            {
                "scrambles": [
                    "R' B D' R2 U2 F R2 F' U2 B R2 B2 R2 U B' D B U2 B U' R U",
                    "F L' B' U2 R U2 B2 F2 L D2 L' F2 L2 F' L B' L2 U",
                    "F' U R D' B2 D L2 U' L2 U R2 U L U' R U2 L' F U'"
                ],
                "solutions": [
                    "z D' R U' R2 D R' U D' R U' R2 D R' U z'",
                    "R' U R U' R' F' U' F R U R' F R' F' R U' R",
                    "R' U R U' R' F' U' F R U R' U' R U' f R f'",
                    "z U' R D' R2 U R' D U' R D' R2 U R' D z'"
                ]
            }
        ],
        "Y": [
            {
                "scrambles": [
                    "R' F R L2 F2 L2 F2 U L2 U L2 U' F2 L' F' L' B' U2 B F2",
                    "L' U' R U' B2 D B2 U' B2 D L2 D2 B2 L' U L2 R' U' L2 U' L2 U'",
                    "R' F' R2 U R2 D' F2 D F2 U' F D' F U F' D R"
                ],
                "solutions": [
                    "F R U' R' U' R U R' F' R U R' U' R' F R F'",
                    "F R' F R2 U' R' U' R U R' F' R U R' U' F'"
                ]
            }
        ],
        "F": [
            {
                "scrambles": [
                    "F' L' D' B2 D2 R' F2 L D2 L' D2 R2 U' F2 D' B2 L' F2 U' F' U2",
                    "R' F' L D2 R2 B2 U B2 D' R2 F2 U' R F R' D' F2 R U' L'",
                    "L' B D L2 F2 D F2 D2 L2 B2 U B L2 F U' F' U' L'"
                ],
                "solutions": [
                    "R' U' F' R U R' U' R' F R2 U' R' U' R U R' U R",
                    "U R' U2 R' d' R' F' R2 U' R' U R' F R U' F"
                ]
            }
        ],
        "T": [
            {
                "scrambles": [
                    "B U L' D2 R2 U' B2 D2 L2 U' F2 U L' F2 D U2 R D' B' F2",
                    "R F' L B U2 F' U2 R2 B' D2 F D2 F' L' R2 F R'",
                    "B' U B L2 D L2 U B2 R2 U F2 R2 F U' F' L2 B2 L2 B2"
                ],
                "solutions": [
                    "R U R' U' R' F R2 U' R' U' R U R' F'"
                ]
            }
        ],
        "V": [
            {
                "scrambles": [
                    "L' D L' D B2 D2 B2 D B2 R2 B2 L2 U' L' D' L F2 y'",
                    "L' D' F' D2 B' R2 B D2 U2 F2 D U' F' U F2 U2 F L y'",
                    "R B' U D F2 R2 D B2 U R2 D2 F2 L2 B R B' R2 U R2 B R2 y'"
                ],
                "solutions": [
                    "R' U R' d' R' F' R2 U' R' U R' F R F",
                    "z D' R2 D R2 U R' D' R U' R U R' D R U' z'",
                    "U2 L' U L' U' y' R' F' R2 U' R' U R' F R F",
                    "R' U R U' x' U R U2 R' U' R U' R' U2 R U R' U' x",
                    "R' U R' U' R D' R' D R' U D' R2 U' R2 D R2"
                ]
            }
        ]
    },
    "ZBLS": {
        "1": [
            {
                "scrambles": [
                    "F U L' R U2 B2 L' B2 L U' R U' L U R F' R2 U' R'",
                    "L' U F' R2 U2 B2 D F2 D R2 U' R2 U' F R2 F L2 F' U2 B' L' U2",
                    "L' B' R U' B2 U B2 U B2 U2 B2 R2 U' R B2 L F' L' B' L F U'"
                ],
                "solutions": [
                    "U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F' U' B U' F2 L2 U B2 D B2 U L F' L' B' R2 U2 F2 R U R'",
                    "L' D F' R2 B2 U B2 D' R2 D F D' L2 F L' F' R' F R U F U'",
                    "F' R' U R U F' D B2 D B' L B L2 U' L2 F2 U' B2 D R2 U D"
                ],
                "solutions": [
                    "U R U R' U2 M' U R U' r'",
                    "U R U R' U2 R' F R F'",
                    "R' U' F U R2 U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "F' U R' F2 R F2 R' F2 R' F2 L R' D' F' D L' R2 F R' U2 y",
                    "R' B' U B2 D B2 D' B2 R2 D' U2 R2 U2 F D' F L F2 D2 U' B' R",
                    "B' R' F' R2 U R2 U R2 U' F R F R' F2 R2 F R B U'"
                ],
                "solutions": [
                    "M' U R U' r'",
                    "R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "R' F R' B D2 B D2 B R2 F' U2 R2 B R' B U2 B' U R' U",
                    "B' R' B' D2 B' U2 B' U2 F2 U2 B' D2 R' D' R D R B2 U2 B' U' F2",
                    "F R D U2 L2 U2 L2 B2 D' B2 D' R2 D L' D R B R' D' L R F' y"
                ],
                "solutions": [
                    "M U R U' R' U' M'",
                    "U S' R U' R' S",
                    "U2 R U' B U' B' R'"
                ]
            },
            {
                "scrambles": [
                    "L' F' D R B2 R F2 R' B2 R F2 R2 D' B F L' B' L2 U2 y'",
                    "F' L F D' R2 D' F2 U F2 L2 U2 L2 D2 R' U2 R' F' U' L' U' F",
                    "F U F' U' F2 U' F2 L2 R2 D B' R D' L2 R F2 U' F U'"
                ],
                "solutions": [
                    "U2 R' F R F' R U2 R'",
                    "U R B U' B' R'",
                    "U R' F R F2 U F",
                    "U2 F2 r U r' F",
                    "y' U2 R2 F R F' R"
                ]
            },
            {
                "scrambles": [
                    "F U F' R2 F2 L2 U' L2 U L2 F' U2 R' F' U R2 D B2 D' U'",
                    "B' R' F R2 D B2 D L2 U' F2 D2 F' U B' L R2 F L' U2 F2 R2",
                    "L' U F' L2 D' B2 D' B2 L2 D2 L2 D2 F L U' R U L B L' R' U'"
                ],
                "solutions": [
                    "R' F R2 U R' U' F'",
                    "U2 R U' R' U' R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "B' D' L B2 D2 R2 D2 B' U2 F' R2 B D' U' F R' B' L D L D2 F",
                    "R D B2 R2 F D2 R2 B' R2 D2 F' R U' R D' U B' R' B U'",
                    "B' R U2 B2 U' F2 U L2 D' B2 F' R B L2 F' U2 R U' R'"
                ],
                "solutions": [
                    "R' U' F U R U' F'",
                    "U F' L' U' L F",
                    "U2 R U2 B U B' U' R'"
                ]
            },
            {
                "scrambles": [
                    "F L B' D R2 D F2 D' R2 D' B R' D2 R' D2 F L' R2 F U2",
                    "B' U' R B2 R2 B2 U B2 U' B2 U' B2 R2 B' R' B' U B2 U' B' U2 y",
                    "F R' B' U2 B2 R2 B2 D' U' R2 D U' B' D2 R U R' D2 R F' U' y'"
                ],
                "solutions": [
                    "M' U R U' r2 U2 R U R' U r",
                    "y R' F' R U2 M' U' M",
                    "U2 R' F R F' U2 R' F R F'"
                ]
            }
        ],
        "2": [
            {
                "scrambles": [
                    "F' R' U' F2 U L2 D R2 B2 U' F2 U' R' D L D F' L U2 F D U' y'",
                    "R' B' D' F2 U F2 D R2 U2 R2 U' B U' L' U' L U R y'",
                    "L U' R' F2 R2 U2 F2 D2 L B2 D2 L' U2 B' U2 R U2 R' B U' L' y'"
                ],
                "solutions": [
                    "y U' L' U L"
                ]
            },
            {
                "scrambles": [
                    "B L' F2 U' L2 U' L2 U2 F2 L B' U2 L' U' L B U B' y'",
                    "F U F2 R' D2 L' U2 L2 F2 R' D R F2 L' D2 U2 R F U y",
                    "R' D' F R2 D R2 D R2 U B2 D' U' F D2 U L D2 B2 F' R' F' U y"
                ],
                "solutions": [
                    "U R' D' r U' r' D R",
                    "U' R2 D r' U r D' R2"
                ]
            },
            {
                "scrambles": [
                    "B U B' R2 F2 D L2 D' F2 R2 U' B' R B' R' F D2 F D2 F2",
                    "B D' B U2 B2 L2 U B2 U B2 U' L2 B D B' U' R' F R F'",
                    "F U' F' R2 F' R2 F R2 F L2 B2 R2 B' L B' U' L R' F R U2 F'"
                ],
                "solutions": [
                    "F R' F' R",
                    "r U R' U' M"
                ]
            },
            {
                "scrambles": [
                    "L B' U F' L F' L' F' U' R2 F' B L' B2 R2 D' R2 D B2 U'",
                    "F U' L' D' U2 R2 D B2 U L2 F2 R2 B2 R D L' U2 F' D R F2 U2",
                    "B D' L' R' U2 R D2 F2 R' F2 R' U2 R D' B' L' U2 L F' U2 F U2"
                ],
                "solutions": [
                    "U' R' D' r U r' D R",
                    "U' F2 r U r' U F"
                ]
            },
            {
                "scrambles": [
                    "R D' B2 D2 B L2 F2 L2 D2 F L2 F' L F' D2 B R F2 D' R2 U y",
                    "R B' R B2 D' R2 U2 L2 D R2 U B2 U B' R2 B' D2 L B2 D2 R B y'",
                    "B R' U' F' U2 F2 D2 B' R2 D2 R2 B D' R B2 R2 D' B R B2 F' U2"
                ],
                "solutions": [
                    "U' r U' r' U r U r'",
                    "U2 R2 B' R' B R'",
                    "U2 l R U' R' U l'"
                ]
            },
            {
                "scrambles": [
                    "L' B' L' D L2 U L2 D F' R' D2 B' L2 F' U2 F' L2 F2 L2",
                    "R D F' B' L2 D2 B' R2 B' D2 B L2 U' B D' U R' D2 F' L F D2",
                    "L' B' D' B U' B' U D B2 L F R2 F L2 B2 D2 L2 F' R2 F'"
                ],
                "solutions": [
                    "R U2 R D r' U' r D' R2"
                ]
            },
            {
                "scrambles": [
                    "F R' D' F2 L2 D F2 D' F2 U2 L2 U' R' F R D F2 U' R F' U'",
                    "B D L B' D2 B2 U2 R2 F2 U2 F' U F' U' F R' D' R' D2 B2 y'",
                    "L' U R' D2 L2 D2 R2 D F2 R2 U F D' L' F U R' U y'"
                ],
                "solutions": [
                    "d' F R U R' F'",
                    "U2 R U R' U' R' F R F' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B L' B' F2 U' F2 L2 D' F2 D R2 U' B L2 B L D' B2 L' R2 U",
                    "F D' B' L2 U2 F' L2 F D2 U2 R F' R2 D' F2 U2 F2 U",
                    "F' L' D2 B2 L2 F2 U2 B2 R2 F2 U' F' U' L2 U F L U2 F U'"
                ],
                "solutions": [
                    "r U r' U2 M' U M"
                ]
            }
        ],
        "3": [
            {
                "scrambles": [
                    "R D' F' B2 U L2 B2 L2 D2 L2 U' B2 L' D R F U' L' D2 R2 B' L y'",
                    "R' U L R2 U' L2 U R2 U' L2 F2 L' F2 R U' L U2 L' U2 y'",
                    "B' R D R2 D' F2 R2 U' R2 D R2 U R2 F R2 D R2 D' F' D' R B y'"
                ],
                "solutions": [
                    "y L' U' L"
                ]
            },
            {
                "scrambles": [
                    "R' D R D2 F2 L2 R2 D R2 F2 R2 U' B R B U' R' U2 F2 U' F2 R' y",
                    "F' U L' R2 B2 D2 R2 U' L2 U' F' R2 B F2 R' B' D' L' R' F2 U' y",
                    "B' D' B' R2 F2 D2 L2 F' D2 B' R2 B U R U' B' F' R B D y"
                ],
                "solutions": [
                    "y' S' R' U' R S"
                ]
            },
            {
                "scrambles": [
                    "L' D R2 D B2 L U L' B D2 L B' U2 B L2 D2 R2 D2 F' L2",
                    "L U' R' L2 D2 F' D2 F D2 F L2 F2 L' U' R U R B' R' U B U2",
                    "F U' F' D' B2 D F2 D' B2 D F2 L2 U2 F' L U' F U' L U2 L U"
                ],
                "solutions": [
                    "R U' R' F' r U' r' F2"
                ]
            },
            {
                "scrambles": [
                    "L U F D2 B D2 B U2 R2 F' R2 U2 B2 U' L' R U R2 U2 R2 U' R' y",
                    "B U B' U B2 U B2 U B2 F' U' F U' B' L' B L U' B2",
                    "R' B' F2 B' R U2 B2 U2 F R' F2 U' R2 U L2 D2 R2 L2 B2"
                ],
                "solutions": [
                    "U R2 D r' U' r D' R2"
                ]
            },
            {
                "scrambles": [
                    "R F' D R2 B2 R2 D2 U B2 D2 F2 R2 U' B R D' L' R' F L' R' U",
                    "L' B L' B2 F2 U L2 B2 D' F2 R2 F2 D' F' L D' B2 U2 R B2 L2 B'",
                    "R F' U' B2 R2 F2 L2 R2 U F2 D2 F2 U L B' L2 R2 B' L F2 D2 U'"
                ],
                "solutions": [
                    "F' r U' r' F2 R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' R B D B2 D' B2 L2 D F2 U' R2 U B F2 R' B' L2 B2 F' U F",
                    "B' D' L2 U2 F' L2 D2 R2 B2 L2 B' L B D F L D' L D' B2 y",
                    "B' D R F U2 B' D2 B U2 R2 B R2 F' R B U' B2 D2 R' D R' B"
                ],
                "solutions": [
                    "U2 R' D' r U' r' D R2 U' R'"
                ]
            },
            {
                "scrambles": [
                    "F U B' R2 B' L2 B' L2 B' U2 F' L2 B2 L B2 L U F' U R",
                    "F U R' F D2 B' U2 L2 F' L2 F D2 U2 R D' F' D R U' F' R'",
                    "B R' F L2 F2 R U2 F U2 F2 U' B R2 B2 U2 B2 R2 D F2 B2 U2 R2"
                ],
                "solutions": [
                    "U' R' F R U R U' R2 F' R"
                ]
            },
            {
                "scrambles": [
                    "R B' R U F2 U R2 D' L2 U R2 F2 U R' D B2 R2 U R B' U y",
                    "R U' F U R2 D' L2 U B2 D' R2 U' B L' R D2 R' F L' R U",
                    "F D B' L2 D F2 D' F2 D F2 L2 D2 R' F2 L D F R' B' U' B2 R y'"
                ],
                "solutions": [
                    "R' F R2 U' M' U2 r' U' F'"
                ]
            }
        ],
        "4": [
            {
                "scrambles": [
                    "L' B' L U' R2 F2 U L2 U' L2 U2 F2 U L' R' F2 U R2 U' B L U'",
                    "F R B' R2 B' D2 L2 F D2 B' U2 F' U' B' U2 R U R2 U2 F' R'",
                    "R F' U L2 F2 U2 L2 U L2 U F2 L2 F U' F' R' U2 R F R'"
                ],
                "solutions": [
                    "R U R'"
                ]
            },
            {
                "scrambles": [
                    "L' U' L D2 B2 U2 R2 F2 U2 B U2 F2 R' B2 D2 L' B' L F2 U L",
                    "F' L' U' L2 U2 L2 U' L2 U' L' B U L U L' U' F U2 B' y",
                    "F' L F' U2 R D2 R' U2 L D2 L2 F2 U F' U2 F2 R' F2 U' F R2 y"
                ],
                "solutions": [
                    "R U R' U' F R U R' U' F'",
                    "R U y R U R' U' F'",
                    "S' R U R' S"
                ]
            },
            {
                "scrambles": [
                    "B' U R L2 B F D2 L2 F' D2 F D2 L' D2 L2 F U' F D2 L' F'",
                    "B R' B D2 B2 L' D2 R U2 R' B2 R F2 U F2 L2 F2 L B' U L R2",
                    "B' L' U R' U' B' D2 L2 F' U R L' B2 D2 B' R2 L2 F U2 L2 B'"
                ],
                "solutions": [
                    "R U R' F R U R' U' F'",
                    "U M U' R U R' M'"
                ]
            },
            {
                "scrambles": [
                    "R F L B2 D B2 R2 U2 B2 L2 D' F2 L' B D' B' R D2 B2 U2 F' R'",
                    "B' L R2 F2 R L D R F' D' L2 B U' B2 U' L2 D L2 U' B2",
                    "R F' D L2 F2 R2 U' F2 D' L2 F2 U B' U F2 L2 F U B' U R' U2"
                ],
                "solutions": [
                    "U F U R U' R2 F' R",
                    "R U R' U' r' U2 R U R' U r"
                ]
            },
            {
                "scrambles": [
                    "R F R' D' R2 B2 D L2 U' L2 B2 U R' B U B' U' F' U' R'",
                    "R' F D' L2 U L2 D F2 D' F2 D F2 U' F R2 F U F' U R'",
                    "L D F D' L2 R2 U' R2 D F2 R2 B2 U F' D' R' F L' F' U F' R y"
                ],
                "solutions": [
                    "U' F' U2 F U R U' R'",
                    "R U R' F U R U' R' F'",
                    ""
                ]
            },
            {
                "scrambles": [
                    "F D F' U L2 B2 U2 F2 R2 D2 F2 U' F D B2 D2 R' F' R2 U2 R' U'",
                    "L U' F' R2 B2 D B2 L2 U2 F2 U F2 L U R2 F U' B' U B U' y'",
                    "L D F R2 D F2 R2 D2 R2 F2 D L2 B2 R' B U' L' B L2 R' U"
                ],
                "solutions": [
                    "R U' R2 F R F' R U2 R'",
                    "R U' R' F2 r U r' F"
                ]
            },
            {
                "scrambles": [
                    "L F U' R2 F2 L2 U2 L2 U' F2 U F D2 R' D2 F L' U2 F R U'",
                    "R F' L U2 B2 L2 U B2 U L2 U2 B2 U' L F U2 R' F' U2 F U2",
                    "L B D F L2 F2 R2 U2 L2 F R2 F D F' D2 L U' L U2 F L U2"
                ],
                "solutions": [
                    "U2 r U' r' U' r U r'",
                    "R U' R' U2 R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "B L' B D' R2 D B2 R2 D L2 R2 F2 U F' R' F' L' R2 B2 U' R' U2",
                    "L' B R D' B2 L2 D F2 U' L2 U2 R2 B' D' B' R2 D2 L U R' B U",
                    "R U' R B2 D B2 R2 U' B2 D' L2 D L2 B' F2 R' F R B' U2 F2 U'"
                ],
                "solutions": [
                    "R' D' r U' r' D R2 U R'"
                ]
            }
        ],
        "5": [
            {
                "scrambles": [
                    "F' L F' U2 B2 U F2 U' B2 U F2 U L' F2 U F' U' F U",
                    "L D' L U2 L2 D2 U R2 B2 U R2 F2 U R' D' R2 U' L U L R'",
                    "F D B' F2 U2 B' F2 R2 F D' F2 R D R B R' B D'"
                ],
                "solutions": [
                    "U' R U R' U2 R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F U' B' U F2 R2 B2 L2 D F2 D2 B2 R2 B R' F L2 R U2 F2 y'",
                    "L' U' B L2 D2 B R2 D2 B' L2 F L' B' L2 U2 L' F' U F L",
                    "B L B F2 B' L2 B' R B' R D' B' L B2 R2 F2 D F2 D' L2 U L2"
                ],
                "solutions": [
                    "U' R U R' U R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "F U' R D' B2 D' B2 D' R2 D2 F2 L2 U2 L' R' F' R D L' U F R",
                    "F D L' R2 D' R2 F2 R2 F2 U B2 R2 F' D U' L' D' F' U R2",
                    "R' D' R U2 F2 L2 U' F2 U F2 U' L2 F' U' F' U R' D R F U F2"
                ],
                "solutions": [
                    "U2 R U' R' U2 R U' R' U R' F R F'",
                    "R U' R B2 r' U' r B' R2"
                ]
            },
            {
                "scrambles": [
                    "R' U' L' B2 L' U2 B2 L' D2 B2 D2 U2 R D' F2 L B' L B2 R' B U'",
                    "B L F D R2 B2 F2 D' F2 U R2 U' F' L F' U L' F L2 U2 B' y",
                    "B' R' F' U2 B2 F2 R2 D' R2 D' B2 D2 R B F' U R2 B' R2 B"
                ],
                "solutions": [
                    "U' r U R' U' R2 r' U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F R' D' L' F2 L' F2 L2 F2 L2 U2 F' D B D' L' D B' F2 R U' y",
                    "F' D F U' D' F2 L' U' L' U L2 F' B2 L2 U' R2 F2 D' L2 D' R2 U",
                    "B' D' B L2 D2 F D2 R2 B R2 B' L2 D U2 R' U R U B U2 y2"
                ],
                "solutions": [
                    "y' U r' U R U' R' U' r",
                    "r U' r' U' r U r' F' r U' r' F2"
                ]
            },
            {
                "scrambles": [
                    "R' U R' U2 B2 D' R2 D B2 R2 U R2 F' L2 F' L2 F2 R' U R2 U2",
                    "R F U F' U2 F' U2 R2 F R2 U2 F2 U F' U2 R' F2 L F L' F",
                    "B L' U B2 R2 D U' R2 U B2 F2 L B D2 B R2 B2 L' B' F U'"
                ],
                "solutions": [
                    "U' F R U R' U' F' R U2 R'",
                    "U R U' R' U' R' F R F' R U R'"
                ]
            },
            {
                "scrambles": [
                    "L D B' R2 D2 B' L2 U2 B2 U2 L F' L2 D2 F2 D' F2 U R2 L2 F2 U y'",
                    "L' B L' R2 F D2 F' L2 R2 B2 U2 B' U2 L' B L U' B' U' R B' R' y",
                    "L' B R' U2 D2 L F' L F2 R U2 L F2 B2 U' F2 U' F2 U L2"
                ],
                "solutions": [
                    "R' D' R U R' D F R F'"
                ]
            },
            {
                "scrambles": [
                    "B U' L D2 R B2 R' D2 L2 F2 L' U2 L2 F' U B' F2 R' F2 R U2 F",
                    "B U' F' U2 R U2 B2 L2 R B2 L' R2 U2 F U' F2 L' U F U' B' F",
                    "F' D' L D2 F2 D' R2 B2 U R2 F2 U' B' L U B D L2 U2 F U'"
                ],
                "solutions": [
                    "U' r U' r' U2 r U r' U' R U' R'"
                ]
            }
        ],
        "6": [
            {
                "scrambles": [
                    "L' U' R U' L2 U' B2 U F2 U' B2 U F2 L U R' U' L U' L y'",
                    "F L' D' B2 U L2 R2 F2 D' L2 D F2 L2 F' D' F' U' R2 B2 L F' U2 y2",
                    "L F R L2 D U L2 F2 U2 B2 R2 F2 D L F' U R2 F U' F R' F' y'"
                ],
                "solutions": [
                    "y F2 R U R' U' F2"
                ]
            },
            {
                "scrambles": [
                    "F D F D2 R2 F2 U2 F2 R2 D F2 U F D' R B2 F' R' B2 R B2",
                    "L' B' R U R2 U F2 R2 U F2 U R2 F' R F' U2 R' B L2 F2 L' U' y'",
                    "B D F U2 R2 U' R2 U' R2 U2 R2 U F' D' B' F' U R' F2 R F"
                ],
                "solutions": [
                    "y U L' U' L U' L F' L' F",
                    "F R U' R' U' R U R' F2 U F"
                ]
            },
            {
                "scrambles": [
                    "R' U R' F' L2 B' R' U R U F2 D L2 F L2 F U2 R2 B' R2 L2 F",
                    "B' U F' U2 L2 U2 R' U2 L' U2 R B F R B2 U F' L' F R'",
                    "R' U' B' U' B2 L2 D R2 D' R2 F D' L2 F' U F U' B' R U2"
                ],
                "solutions": [
                    "U2 R' F' U' F U R2 U' R'",
                    "R U R' U' R U R' U' F' U' F"
                ]
            },
            {
                "scrambles": [
                    "L' F L U B2 R2 U' R2 U' B2 L2 F2 D2 L' U L2 F2 U L F U' L",
                    "B' D' L' F2 D F2 R' F2 B' R2 L2 F' R F D L2 U' L2 D2 R2 L2 B2 y'",
                    "L D B F' U2 F R2 U2 F R2 F' U2 B' R' F D' L' R2 U' F' U' R'"
                ],
                "solutions": [
                    "U' R' F R F' R U2 R2 F R F'",
                    "R2 D r' U' r D' R' U R'"
                ]
            },
            {
                "scrambles": [
                    "L F' L F' R2 F D2 B' D2 L2 F2 U2 F2 L' U2 L F R' U2 R2 U",
                    "F' L U F2 U2 B2 R2 D' R2 B2 U2 L' F2 L U' F L' F2 U2",
                    "B' D' F' D2 B' L2 U2 F L2 F' D2 B R D B' U2 B2 U R B' R B"
                ],
                "solutions": [
                    "U' r U' R' U R U r'"
                ]
            },
            {
                "scrambles": [
                    "R U L' R2 L U' R' B2 D' L F' L' D' F2 L2 F L2 F D2 B2 R2 U2 y",
                    "F D' R U' R2 U R2 U' R2 U' R2 U' B U B' U' R' F' U' F D F' y",
                    "B' R' F R' U2 L' U2 R D2 R' D2 F2 D' B R' D U F2 R2 D F' R' y"
                ],
                "solutions": [
                    "U2 y' R' F' U' F U2 R",
                    "U' R' F2 R U' F U' R U2 R' F2",
                    "U2 F' L' U' L U2 F",
                    "U R U R2 F R F' r U' r' U' r U r'"
                ]
            },
            {
                "scrambles": [
                    "L' B' D U D' B L F' L2 U' L2 U' F' L2 F2 L2 U' F2 U' L2 U F2",
                    "L F L D' L2 U' L2 D2 R2 F2 R' F2 R2 D' L' U' F' U' L' U'",
                    "L' D B' L2 D2 R2 U2 R2 F2 R2 F2 R2 D2 B D' B D' F D B' L U'"
                ],
                "solutions": [
                    "R' D' F r U2 r' F D R"
                ]
            },
            {
                "scrambles": [
                    "F' D F B2 D' L2 D' U2 B2 U L2 B R B' D B2 R' U B L2 D y",
                    "R' F' D' U2 F2 D L2 D' R2 D' B2 R2 B D L' F L' B' R' B R2 U2",
                    "B' L R2 L' F' U D2 B L' U B2 U2 B' U2 F L2 D2 B2 U2 F2"
                ],
                "solutions": [
                    "U M' U M U2 r U R' U M",
                    "U R U R D r' U' r D' R2 U' R U R'",
                    "U R U' R' d' L' U L2 F' L' F"
                ]
            }
        ],
        "7": [
            {
                "scrambles": [
                    "L B' L' D B2 D R2 U F2 U2 L2 U' L F R' F2 L' D R' D U2 y'",
                    "R' U F U2 F2 U2 F' U2 F U2 F' U2 F2 L' U' L F R B U2 B' y",
                    "B' L' D B2 L2 D2 F R2 B' L2 U2 B' F' D' L B L U F U' F L'"
                ],
                "solutions": [
                    "U' R U2 R' U2 R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' F' U' B L2 B D2 B' D2 L2 U L' U F2 U F2 U2 B' L2 F y'",
                    "B U' B' L2 F' R2 U2 L2 D2 B' R2 D2 R' U' R F R F' R U2",
                    "F' U B' R2 D2 B' L2 B D2 F' D2 F' D2 R' B R' U2 L' U2 L U' F"
                ],
                "solutions": [
                    "U' R U2 R' U R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "F R' U F2 U' R2 U' R2 F2 U R2 D U' F' L2 B L2 F D' R' F' U",
                    "R U' F B2 L2 D2 B R2 D2 B U2 B U2 R' F' L' F L' R B' U' R'",
                    "F D' L' D U F2 L2 U R2 D B2 L' B L R2 U2 F R2 B' D' R2 U'"
                ],
                "solutions": [
                    "R U R' U R U' R2 F R F'",
                    "U R' F R F' R U' R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "B' L U F2 U' F2 R2 F2 U2 L2 U R2 U' R' B2 R' D2 B2 L U2 B U2",
                    "F' L' F' B2 L B2 L F2 L U2 R' B L' F U B2 U' B' R B2 F' y",
                    "B D F D' L2 D' B2 R2 U' F2 R2 F2 R' B' D B' F' L F L2 B'"
                ],
                "solutions": [
                    "F R' F' R U2 R U' R' U R U' R'",
                    "r' F' R2 U R' U2 R U' R2 F r"
                ]
            },
            {
                "scrambles": [
                    "B R F D F2 U' L2 F2 U L2 F2 D' F R2 B2 F R2 F R' U B' U' y'",
                    "L R L' B U B' R U B2 U R2 U' R2 U' B2 R2 U",
                    "B' U R U' R B' R2 L2 F R2 D' F D' B2 D' B2 D' B2 D2 R2 L2 F2"
                ],
                "solutions": [
                    "R' D' R U2 R' D F R F'"
                ]
            },
            {
                "scrambles": [
                    "L' U' B' L U2 F2 R2 B2 U2 F2 L' B2 D2 U' B R' B2 L B R2 U2 R'",
                    "B' R D L2 U2 R2 D B2 D U B2 L2 U2 R' F2 U' B2 D' U2 B' U F2",
                    "F' D R2 F' U2 R2 F L2 B2 U' R' F' U L2 F U R2 B L2"
                ],
                "solutions": [
                    "U R U' R' U R' F R F' R U R'",
                    "U' R B r' U r B2 U' R'",
                    ""
                ]
            },
            {
                "scrambles": [
                    "R U' R B2 D F2 R2 U' B2 U2 R2 F2 D2 B' D' B D L2 B' R2 U2",
                    "F' D L F2 D2 L2 B2 D' R2 D B2 L2 D2 L' D' F D U2 L F L' D'",
                    "R' U' L' U2 R2 D2 F' L2 D2 R2 D2 F U' L' F2 L2 U L' D2 B' L U y'"
                ],
                "solutions": [
                    "R' D' r U2 r' D F R F'",
                    "y' R2 F R F' U R U2 R' U R",
                    "F2 r U r' F R U R' U2 R U R'"
                ]
            },
            {
                "scrambles": [
                    "B' R D' L2 U F2 U F2 R2 U' L2 F2 L2 B L B L U2 F2 D' B R2",
                    "R D' L' B2 L2 B2 F2 L' B2 L D2 U' R' B2 D' B' D2 R' B F2 L2 R'",
                    "L' D' L' R' L B R L U' L' D B U2 B2 D2 F2 R2 U2 R F2 D2 y"
                ],
                "solutions": [
                    "M' U' M U2 r U' r'"
                ]
            }
        ],
        "8": [
            {
                "scrambles": [
                    "L D F U2 B L2 B L2 B2 D2 L2 B2 L U' L U' L' U L D L'",
                    "R' F L' R2 D2 L2 D' L2 B2 D' B2 L2 R F D' F L' R F R U' y",
                    "B' U' B U2 L2 F2 D' F2 L2 F2 D F2 U F' L2 F U' R' U R U y"
                ],
                "solutions": [
                    "y' U R' U2 R U2 R' U R"
                ]
            },
            {
                "scrambles": [
                    "B D F L2 F2 D F2 D' L2 F2 U2 F2 U L F' U F' L' U2 F' D' B' y'",
                    "R F' R' F2 U2 F' L2 R2 B2 F' R2 F R2 D L' R' F L B2 L2 R U' y'",
                    "F' D' R' F' L2 U2 B2 R2 D2 F2 R2 U F U' B2 R U' R' U' R D F"
                ],
                "solutions": [
                    "U y L' U2 L U' L F' L' F",
                    "r' U2 R2 U R2 F' U F r",
                    ""
                ]
            },
            {
                "scrambles": [
                    "L D' B D2 R U2 R U2 R' F2 R' D' L' D F2 D2 L' B' D L'",
                    "B' L B2 R' L' U R B U L' F2 R' D2 R F2 U2 L' B2 y'",
                    "L' B U' B2 U2 L2 B2 U' B2 L2 B U' F' U2 L2 F U L U'"
                ],
                "solutions": [
                    "B' R' U' R2 U R' B",
                    "U2 R U' R' F' U' F U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "L' B' L R2 F2 U B2 D' L2 F2 L2 D2 L' D' B2 L2 B L U' L F' U2",
                    "B' D R D2 R2 B L2 F' L2 D2 U2 B' D' R' D U L' R B L D2 R y",
                    "F' D' R F R2 D2 F2 U2 B2 R2 D2 B R' U2 L' U' R' B2 D' R' F"
                ],
                "solutions": [
                    "F R' F' R U' R U R' U' F' U' F",
                    "R2 D R' U' R r' U' r D' R' U R'",
                    "x' R2 U' R' U F' l' U R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "F D R F' R2 B U2 B D2 U2 B2 D2 B R' B' U' R' U2 R2 D' R U",
                    "F L' D F2 U' R2 F2 U' F2 D U L2 U2 L B2 D2 R2 U' L' F U",
                    "R D' B U L2 U' F2 L2 D2 U' B2 R2 U' F R2 D2 B L2 F' D R U'"
                ],
                "solutions": [
                    "r' U2 R2 U R2 U r",
                    "U2 r' D' r U r' D r2 U' R' U R U r'"
                ]
            },
            {
                "scrambles": [
                    "R' U' L' B2 D2 L' D2 L2 R B2 L R2 U' F' U2 L F L2 F R F'",
                    "R' U L F2 D R2 F2 L2 U B2 U' L F R U F' U F' U F U'",
                    "L U' B U B2 U R2 D' F2 U B2 U' F' D B' L R' B' U' B R'"
                ],
                "solutions": [
                    "U' r' F' r U r U' r2 F2 r F",
                    "r' U2 R U R' U r2 U' R' U' R U r'"
                ]
            },
            {
                "scrambles": [
                    "F' L' F L2 F2 R2 F2 D2 B' D2 L2 U2 F' R' U' B U' B' R2 F' L F y",
                    "L' D' U2 D L U' F R U R' L2 B2 D2 R2 B' D2 B' L2 F",
                    "F' L' F U' B2 U2 R2 U B2 F2 D' L2 D' F L F2 R B R2 F' U2 B2 y"
                ],
                "solutions": [
                    "U R U' R' d R' U R U' R' U R",
                    "r' U2 R2 U R' U' R' U2 r",
                    "R l U' R' U F' l' U2 R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' B' D' F L2 R2 F' U2 B D2 U2 B' R' U' R' D B L R' F' R F'",
                    "B R' D' L2 D' B2 D L2 R2 D' F2 D2 B' U2 L U' L2 B2 L R' U' B",
                    "R' U' F D2 F L2 D2 B F2 R2 U2 B R B' U B' R' U B' R"
                ],
                "solutions": [
                    "r U r' U' R U' M' U r'"
                ]
            }
        ],
        "9": [
            {
                "scrambles": [
                    "L' U' L' B2 D B2 D' B2 L2 D' L2 B2 U' R' D' B2 D' L2 F2 U2 R' y",
                    "B U B D' R2 U' B2 U' R2 U B2 U' F' U F U' R U' R D U' y",
                    "R' D B U B2 L2 U' B2 U' B2 U2 L2 B D' R2 B' R' F R' B F' U' y"
                ],
                "solutions": [
                    "y' U2 R' U R U R' U' R",
                    "U y' R' U' R U' R' U' R",
                    "R' D' R U' R' D R F' U' F"
                ]
            },
            {
                "scrambles": [
                    "L' F L B2 U L2 U L2 F2 U' F2 U2 R' B' R2 B' L' F D2 L U",
                    "B R' U2 L F' U L2 F2 R' F U2 R2 B' D2 R2 U2 D2 F R2 y'",
                    "L' B U B' D2 B2 D2 L2 U2 F' D2 R F R D' L2 R D' B L F2"
                ],
                "solutions": [
                    "F R U R' U' F' U' R' F R F'",
                    "M' U R2 r' U2 M' U r'"
                ]
            },
            {
                "scrambles": [
                    "L U B' U' L2 U2 F2 U' F2 U' L2 U' B L2 B2 F' R' D R B2 L U2",
                    "L B' R D2 L' F2 R' U2 L U2 R' F2 U R D B U' B' D B L2 y'",
                    "R' U F' R2 D2 F2 R2 B' F2 L2 B D2 R2 U R U B U2 F2 L B' F2"
                ],
                "solutions": [
                    "F R U R' U' F' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' F' L D' L2 D F2 U' F2 L2 U' L' U F U' B' U' B U' L y'",
                    "F' L B' D' L2 B2 D L2 D' L2 D L2 U B F L U' L' U L",
                    "L F U' F' D2 R2 F D2 F2 L2 U2 F2 L2 U B L2 F2 L2 U F2 U' L'"
                ],
                "solutions": [
                    "U' r U2 r' U' r U' r' U r U2 r'",
                    "U r U' r' U2 r U r' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F' D R' U' B2 U' F2 U B2 U F2 R F2 U2 F2 D' F U2 R U2 R'",
                    "B' L' B L2 U L2 B2 U' B2 U B' L R2 D' R' D B2 R' B' U' y",
                    "R' D' R' D R' U R F2 B D2 B L F' R2 F' R2 F2 L2 D2 F' R2 F' y"
                ],
                "solutions": [
                    "U' R U' R' d R' U' R",
                    "F2 r U r' U' r' F r U' F"
                ]
            },
            {
                "scrambles": [
                    "R D L' U' B' U' B2 L D' R D' F U2 R2 U' F2 D F2 L2 B2 L2 F2",
                    "F D B2 U2 R B2 R' B2 F2 D2 F2 D' L2 R D2 L2 U2 R' F' U2 y",
                    "R D U' B U2 B2 R B R' D' R' U2 B2 U B2 U B2 U2 B2 U2"
                ],
                "solutions": [
                    "R' F R2 U' R' U' r U2 r' U' F'"
                ]
            },
            {
                "scrambles": [
                    "L B' R L' R' U2 R2 U2 F2 L' B2 R U B U L2 B F2 D2 B D2 L'",
                    "R' U' F' R2 F2 R2 F R2 B' D2 F2 D F2 R F D B U' F' U F",
                    "F R B U2 B' R2 F2 R2 U2 L R' F' R' F L' R"
                ],
                "solutions": [
                    "U r U R' U' M R U' R'",
                    "R' F R U2 r U2 r' U2 F'"
                ]
            },
            {
                "scrambles": [
                    "B U R L2 U' B2 U' B2 U2 L2 U' B2 U2 R' F2 U' L U F L' B' F",
                    "B U' F' B' D2 L2 D2 F2 R2 F R2 F L B2 F2 R' U2 F' L2 B U' y",
                    "L' B L B2 U R2 U R2 U' R2 U B L U2 L' R U' L U' L' R'"
                ],
                "solutions": [
                    "U r U r' U2 M' U M R U' R'",
                    "U2 R U R' U' R' F R F' R U2 R2 F R F'",
                    "U2 R U R D r' U' r D' R' U R'",
                    "R' F2 R2 U' R' U' R' F' R2 U R' F2",
                    ""
                ]
            }
        ],
        "10": [
            {
                "scrambles": [
                    "L' D' R2 D2 F U2 F' U2 F' D2 B D B' D' R2 B' D L y",
                    "L B D' F2 D2 L2 D2 L D2 L D2 L F2 D B L R' D' L' R B2 L'",
                    "F' L' B' U' B2 U2 R2 B2 R2 U R2 B2 R' U B U' B' R' B' L F"
                ],
                "solutions": [
                    "U' R U R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "L B U' B R U B R' U2 R U' L U2 B2 D2 F2 R U2 L D2 L'",
                    "L U L' D' B2 U' R2 U' B2 D2 F2 L2 D B D' F R2 F' L' D' B' F2",
                    "F' D L' B2 L2 D' F2 R2 U2 R2 U2 B2 U' R' U' B2 R U R2 U2 F' y'"
                ],
                "solutions": [
                    "U F R' F' R U2 R U' R'",
                    "R U R' F' U F U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R F R' U' R2 U' R2 U2 R2 U' F2 U F R' U R' U F' U F U R' y",
                    "L U' F U2 B R2 D2 F' U2 L2 F D2 F' U' B U B' U' L U' B' L' y'",
                    "R F R B2 U R2 U' R2 U' B2 U2 R2 U F' U2 L' U2 L F R F' R' y'"
                ],
                "solutions": [
                    "F R' F' R U R' F R F' R U R'",
                    "r' D' r U r' D R r U R'"
                ]
            },
            {
                "scrambles": [
                    "F' U L' U2 L U' R' F R B' R2 B L2 B2 D2 B2 L' U2 L' B2 R B2",
                    "R' B L F2 R2 U2 L2 R2 B2 L2 F R2 U2 L F R2 D F2 D L2 B2 R",
                    "L B L' B R U' R2 L2 U2 L2 U R' F R2 D2 B2 U2 B D2 B' U2 F'"
                ],
                "solutions": [
                    "U2 R U' R' U r U' r' U' r U r'",
                    "R B' R' U' R U B U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R U' L' U2 L2 U' R2 U L2 U' R B2 F R' F' R B2 U' L U'",
                    "R' B' D B2 L2 F2 D U2 L2 B2 D U B U R D U' F R2 F' D' R",
                    "R' B' U L2 D' U2 B2 U' L2 U2 R' D' B R' B2 F2 D' B2 U'"
                ],
                "solutions": [
                    "R U R2 F R F' R U R'",
                    "U2 r U' R' U' R U r'"
                ]
            },
            {
                "scrambles": [
                    "B' L' F' R2 B2 F2 D R2 U2 F2 D2 U' R B F' R2 D U B R2 D L'",
                    "B' L F R2 F' L' F2 U2 F2 R2 F R' U2 B' R2 B2 U2 F2 U2 L2 F2 L2",
                    "R' U' B' L2 F2 D2 B2 F2 D L2 F2 R2 U F' R' B2 U' B' U F'"
                ],
                "solutions": [
                    "U' R U R' U' r U' r' U' r U r'",
                    "R' F' R U R U' R' F' r U r' F"
                ]
            },
            {
                "scrambles": [
                    "L D R' D2 L2 B L2 D2 R2 F2 R2 F' R B' U' R U B D' L' U",
                    "F' U' F L2 B2 D' R2 U' B2 D2 L2 D2 L2 B L B' L D2 F2 D' U'",
                    "L' U' B D L2 D' F2 D L2 D' U2 F2 U' L U L' U' F2 U2 B' L U2"
                ],
                "solutions": [
                    "U' r' D' r U' r' D r2 U' r' U' r U r'",
                    "U' F' U' F r U' r' U' r U r'",
                    "R' D2 r U' r2 D r D2 R",
                    "R' F R F' U2 R U R' U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "F' U' B' F2 D U R2 U B2 D U2 L B2 D2 R D' F2 D B F' U'",
                    "R U' F' U F2 D R2 D' F2 U L2 U' B' U B L2 F2 U R' U' F'",
                    "R' B' L2 B2 U2 L' U2 R B2 R' B2 L2 U F' U' B' F U' R2 U2 R'"
                ],
                "solutions": [
                    "r U' r' U' r U r' U2 R' F R F'",
                    "R U' R D r' U' r D' R' U' R'",
                    "R' D' R U M' U r' D R2 U R'"
                ]
            }
        ],
        "11": [
            {
                "scrambles": [
                    "B' R' B R2 U2 B2 D' L2 B2 U B2 L2 F2 L B D' B2 U2 F' L2 B' F' y",
                    "L B U2 F2 D' L2 F2 U2 F2 R2 U R' U2 L' B2 U R' B' L' F2 y",
                    "R' D R B2 R2 U2 R B2 U2 L D2 R' B2 U' R D L2 U2 R U2 R2 y"
                ],
                "solutions": [
                    "y' R U2 R2 U' R2 U' R'",
                    "R U2 R' U R U R' F' U' F",
                    ""
                ]
            },
            {
                "scrambles": [
                    "R F U' F' B' U' R B2 U F2 B U F2 U F2 L2 B2 D2 L2 U2",
                    "L U' F U2 L2 B2 L2 U2 F' D2 U2 F' D2 U' F' L' F' R2 F R' U' R'",
                    "L' F' U' F2 L2 F R2 B R2 U2 F U2 L2 U' L U R' D2 R"
                ],
                "solutions": [
                    "F' U r' F2 r U2 F"
                ]
            },
            {
                "scrambles": [
                    "R' U F R' F' B2 L2 D' F R' D' R' D' R2 U F2 U' L2 B2 R2 U'",
                    "F R' B' R2 F' R2 B2 D2 B' U2 F L2 B' D R2 D B2 F' U B' R' U",
                    "R' D F B F2 U2 B2 L2 B L2 F R B R2 U2 R2 B' U' B2 U2 R' D'"
                ],
                "solutions": [
                    "U' R U R' U' R U' R' U' F' U' F",
                    "R U' R' U R U' R2 F R F' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F U B' F2 U2 B' D2 B' L2 F2 D2 B2 R' U R2 U R2 U' B F' y'",
                    "R B' U' R U2 R' B2 R' B2 R2 B R B U R2 U B R' B2 R'",
                    "B' D' F' B2 D F2 D' F2 L2 U' L2 B2 R' D' R U F' D U' R' B U'"
                ],
                "solutions": [
                    "R U2 R' U' r U' r' U2 r U r'",
                    "r' U' R2 U' R2 U2 r F' U F",
                    "R U' R' U' R U' R2 F R F2 U' F"
                ]
            },
            {
                "scrambles": [
                    "L' B D' L' F2 U2 L' R2 F2 L' B2 U' F' L' D2 L2 B' D' L2 U2 R2",
                    "B' R B' F L2 B' F D2 F R2 B2 L' F D2 R' F' L' F U'",
                    "B U L2 F2 R' F' R D2 F' L2 U2 B R2 B' U2 B' y"
                ],
                "solutions": [
                    "R U R' U' R U' R' F' U' F"
                ]
            },
            {
                "scrambles": [
                    "R' D' B' R2 U B2 U' F2 R2 U2 F2 D2 F L' F2 L' B' D2 R' F D",
                    "R' U' L U2 L2 B D2 B' L2 U' F' U' L' U R F' U F",
                    "L U' R B U2 B L2 R2 F2 L2 F2 L' R' B R' U B2 U2 B' R' U'"
                ],
                "solutions": [
                    "F' L' U' L U' L' U L U' F",
                    "F' U r' F' r U r' F r F",
                    "R' D' r U r U R U' r2 D",
                    ""
                ]
            },
            {
                "scrambles": [
                    "B' L' B R2 U2 B' U2 B' L2 U2 B R2 F R B' L2 B F2 R' F' D2 U' y'",
                    "R' U' R D2 L2 D F2 L2 U2 F2 U L2 F' D2 U R' D' U' F' U2 R2",
                    "F' R' D' R2 B2 U' L2 D B2 F2 U F2 R2 B' R B' F2 L' D2 L' B2 U'"
                ],
                "solutions": [
                    "U' R U2 R' U F' U' F"
                ]
            },
            {
                "scrambles": [
                    "L' U' F R2 F' B2 U L D2 B L' U R2 F' R2 B2 R2 F' R2 L2 B D2 y'",
                    "B' U' L' B' D2 F U2 B U2 B2 R2 F R D2 L2 B' F2 U F L'",
                    "R U' R L2 R2 U B2 D R2 D U2 F2 U B U2 R' B D2 F2 L F2"
                ],
                "solutions": [
                    "F R' F' R U' R U' R2 F R F'",
                    "R U R' U2 R' F R F2 U' F",
                    "R U' R' U y r' F2 r2 U' r' F"
                ]
            }
        ],
        "12": [
            {
                "scrambles": [
                    "F L U' B L2 B' L2 D2 U2 B' U2 B D2 U L' F L' U2 L' U2 F2 U'",
                    "R' F' L F2 L2 R2 U' L2 R2 F2 D' L' F' U L D L' U' F2 R U2",
                    "B' U F' L2 U' B2 U2 L2 U' L2 U' B' F U B2 R U R' B2"
                ],
                "solutions": [
                    "R U' R' U R U' R' U2 R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L U L B2 U' L2 U L2 U' B2 L2 U' L' U B' L B2 L B U2 B2 U2 y'",
                    "L' U' F' D' L2 U L2 U' L2 U2 B2 R' U B L B' R B2 D U F y'",
                    "L F' R L2 U2 L2 R2 D' F2 D F2 L2 U2 R' U' L U L F2 R2 F' L' y'"
                ],
                "solutions": [
                    "R d' R U2 R' U2 F'"
                ]
            },
            {
                "scrambles": [
                    "F' R' U2 L2 B2 U F2 D' F2 U' R2 B2 L R U' L F2 D R2 D' F'",
                    "F U B U2 F2 U2 L2 B' U2 B L2 F2 U2 L' F L F2 L2 B' U2 F y'",
                    "B' D L' R2 D2 L2 D' L2 D' R2 B2 U2 B L B2 D' R U B R' B' R"
                ],
                "solutions": [
                    "R U' r' U R U' R' U' r U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R F U B2 R2 F2 L2 D2 R2 U L2 D B R' B L2 R' F D F2 R' U'",
                    "R' F L D2 F2 R2 D2 R F2 R' D2 L' B' R' F U' R U B U' R'",
                    "L U B R2 B2 L2 B2 D' B2 U B' F' R2 U F' R D U B2 L"
                ],
                "solutions": [
                    "R U M' U' M U2 M' U' r'",
                    "U2 R' F2 r U r' F R2 U R'"
                ]
            },
            {
                "scrambles": [
                    "B L' D F2 U2 B2 R' F2 D2 L' B2 L2 F' R2 D' L' F' L' B2 U' L B",
                    "F D R D2 R2 D' B2 D R2 F2 L2 F2 D F' R' B' R2 B U2 R2 U R' y",
                    "R' U L U B2 U2 F2 U B2 F' D2 F D2 U' R F2 L' U'"
                ],
                "solutions": [
                    "R U' R' U R U' R' U R' F R F'",
                    "U r U' R' U' R U r' U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "B' L' D' R' U2 R F2 R F2 D2 L' D' R U2 B' U' B2 L R' B L'",
                    "B' U R' L2 D2 R2 D2 F2 D F2 L2 U' B2 R' B2 L2 D' R D L2 B' U' y",
                    "R F L' F R2 F R2 U2 R2 F2 L2 F L' F2 R2 U2 F U2 R' U' F U2"
                ],
                "solutions": [
                    "R U R' U R' F R F' R U R'"
                ]
            },
            {
                "scrambles": [
                    "R' F' D U L2 D2 U B2 L2 F2 L2 U F R2 F' R2 U2 L2 U' R F' U2",
                    "R' B' R' B2 R2 D B2 D' R2 U' B2 R B2 F' U2 B' F R' U'",
                    "F U B F' B' U' F R' F' R L' U L' U' F2 U F2 U L2 U2 F2"
                ],
                "solutions": [
                    "U F' U2 F U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "L B' D L2 R2 D2 R2 F2 L2 F2 D' R2 B L' U2 R B' R' D2 L D2 U'",
                    "B' D L D' U2 R2 U' B2 D2 U' L F2 D F' R D B D' F' D U'",
                    "B' D R2 B' R2 U2 F' U2 F R' U F' U F R2 B R' D' B U"
                ],
                "solutions": [
                    "R' D' R U2 M' U r' D R2 U R'",
                    "R U2 R' U' M' U' M U2 r U' r'"
                ]
            }
        ],
        "13": [
            {
                "scrambles": [
                    "L' F U' B' U2 L2 B' L2 B L2 F' L2 U F U2 F' L R B' R' B y",
                    "F' L R2 L' F2 B L2 D' F' D R2 L2 U2 B' U2 R2 F2 B' R2 F y2",
                    "B R' F2 D' L2 D F2 L F' U' F U R U' L' B' U y"
                ],
                "solutions": [
                    "U y' R' U R U' R' U' R",
                    "R' D' R U R' D R F' U' F"
                ]
            },
            {
                "scrambles": [
                    "R' D' R2 U2 L' R2 F2 L2 R2 B' D F L2 F' L D' U' R' F'",
                    "L B F B2 U' B R F B2 U' F' U R B2 L' F2 R2 B2 L2 B2",
                    "L' B' L' B2 D2 R2 U B2 R2 B2 D2 B2 U' B' D2 R' F U2 R D B D"
                ],
                "solutions": [
                    "R' D' r U r' D R U R U' R'",
                    "R' F R F' U' R' F R F' R U R'"
                ]
            },
            {
                "scrambles": [
                    "R' U' L' D2 R2 F' D2 U2 L2 B F U2 F' L' U' R2 F2 L' B' F2 L2 R' y'",
                    "F U L R2 F2 R2 D U' R2 B2 D' B2 U L' U2 L2 R D' L2 U F' U2",
                    "B' L' B U2 L2 F' D2 B D2 U2 B F' L' D2 R' B F2 U F' D2 U F y"
                ],
                "solutions": [
                    "R2 D R' U R D' R2 F' U' F",
                    "U R U' R' U R U' R' U' y' R' U R"
                ]
            },
            {
                "scrambles": [
                    "F' D B' D2 L2 F D2 R2 B U2 B2 D L' B L' U' B U L2 B D2",
                    "F D' F L2 F2 U' L2 D F2 D' L2 F D F2 U2 L' U L U' F U",
                    "L D' B D2 F' D2 B' D2 F L2 U2 F L' U2 L' F' L' F2 U F2 D' y'"
                ],
                "solutions": [
                    "M' U' R U' r' U2 r U' r'"
                ]
            },
            {
                "scrambles": [
                    "R D' R L2 U R2 U' B2 D R2 B2 L2 F2 R D F D B R' B' D' F'",
                    "L' U B R2 U2 B' L2 F D2 R2 F' L2 R' U' L B' R' B2 U' B' U2",
                    "F L' U2 B' L2 D2 F' L2 U2 L2 R F L2 R' B L R2 U2 F'"
                ],
                "solutions": [
                    "M' U' R U R' U2 R U' r'",
                    "R U' R' U R' F R F' R U' R'",
                    "R U R' U R U' R' F' U' F"
                ]
            },
            {
                "scrambles": [
                    "B U F U2 L U F' R L B2 D B R' L2 U' F2 U' F2 D L2 D' y'",
                    "L B R U2 B R2 F L2 F' D2 F2 R2 U2 R' B' L U2 F2 R2 F R2 F'",
                    "F' L F L2 D' B2 D L2 D' F2 D U' L2 R' U B' U B L U R'"
                ],
                "solutions": [
                    "R' F R U2 r U' r' U2 F'",
                    "U2 r U2 r' U' r U r' U r U2 r'"
                ]
            },
            {
                "scrambles": [
                    "R' B' U R B2 R2 B U' F B R2 D2 F' U L' B2 L F2 D2 F2 B2 R'",
                    "B L' D' R2 F2 L2 U' R2 B2 F2 U R U' L' U2 R' B' U y",
                    "L F' L U R2 F2 U' R2 D2 U' B2 L2 U B R B2 R B2 R2 B D2 L2"
                ],
                "solutions": [
                    "R' F' r U R U2 r' F2"
                ]
            },
            {
                "scrambles": [
                    "B L D R2 D2 F' D2 B D2 F U2 L2 D L D2 R2 D' F D' L2 B' y",
                    "L F D F2 R2 B2 L2 U' R2 F2 R2 U2 L' D2 B' D2 R' B L2 R'",
                    "B' D B2 L2 F2 D2 R2 U2 B' R2 D2 L B2 F D2 F2 R F' D B"
                ],
                "solutions": [
                    "U2 R U R D r' U r D' R' U R'"
                ]
            }
        ],
        "14": [
            {
                "scrambles": [
                    "B' U' B2 D2 L2 F' L2 D2 B' L2 D F' L' U' L F2 D' L2 U2",
                    "R' B' R' B' L2 F' D2 B2 U2 B' R2 D2 B R' F2 U2 F' R' U2 F'",
                    "R D' B F2 D R2 F2 D F2 D' L2 F2 U2 F' U F2 D B2 D' R U L2"
                ],
                "solutions": [
                    "U' R U' R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "R F L F R' L' D2 B' D2 R F D2 B' U2 L2 U' B2 U2 D' R2 D' R2",
                    "B' L U B R2 F D2 R2 B2 U2 R2 F L' B2 L D R' D2 L B' R' F2 y",
                    "R B' L U2 B2 R2 D F2 D' L2 D2 U L' D F2 U R2 D L2 B' R' U2"
                ],
                "solutions": [
                    "R U R' U' R' F R F' R U R'"
                ]
            },
            {
                "scrambles": [
                    "R' F' L D2 F R2 B U2 B L2 B2 R2 F' D' L D' L F2 R' D2 R2 F'",
                    "R B' D' R2 D2 F2 D R2 D2 B2 U L2 U2 L U2 L' B' R' U2",
                    "B D' R' F2 U2 F U R2 D' B2 R' D' R' U2 D2 L2 U2 F' U2 F2 U2 B'"
                ],
                "solutions": [
                    "U' R' F R2 U R' U' R' F' R",
                    "r' D' r U' r' D r R U R'",
                    "U F R U R' D R2 U' R2 D' F'"
                ]
            },
            {
                "scrambles": [
                    "L F R2 L2 B2 R' B R' L2 F L U2 R2 B2 D B2 D' R2 U' L2 U2",
                    "F' L D' R2 D' R2 D2 L2 U' B2 L' B L U2 B2 L F U'",
                    "F' R' D F U2 D' R U' L' U B L' B2 U2 F R2 B R2 B' U2 B"
                ],
                "solutions": [
                    "R U R' U' F' U' F U R U R'",
                    "U2 r U R' U R U2 r' U R U' R'",
                    "R B r' U r B2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B' D B F' U2 L2 R2 B F D2 U2 R2 U' L U' L R2 U' F D' L2 B'",
                    "B R D R2 D R2 B2 D' F2 R2 U' L B' D' U' L' F' U2 F D' F",
                    "B' L' F' B L2 U2 L2 B' L2 D2 F U' R' F' U' B' D2 L' U2 B F U"
                ],
                "solutions": [
                    "M' U' R U' R' U R U R' U' M"
                ]
            },
            {
                "scrambles": [
                    "B R' F L2 U2 R2 B2 R D2 L' B2 R' D2 F' R' D2 L F D2 R' U2",
                    "F D L' B2 D' R2 D B2 L2 D' F2 D L' D' U' F L F L' U F y'",
                    "F' R' B' L2 F' R2 F2 L2 R2 U2 F D2 U' R' U' B2 U2 L' F' R' B2 U"
                ],
                "solutions": [
                    "F' r U' r' F2 U' R U R'",
                    "U' R U' R' U' r U' r' U' r U r'"
                ]
            },
            {
                "scrambles": [
                    "B' D' L F2 R B2 F2 R B2 L' D' U' F' U F' D2 B F2",
                    "B' U' R' D2 L2 F' U2 F' U2 F' D2 U2 B' D L B D F' D' L2 D' B2",
                    "B' R' F D2 F L2 F' D2 B2 D2 F L2 D2 U B2 L' D2 L U' B2 F2 R'"
                ],
                "solutions": [
                    "U2 R U R' U R U2 R2 F R F'"
                ]
            },
            {
                "scrambles": [
                    "F U' R B' D2 B D2 L2 B D2 F2 D2 F2 L B' U2 B2 R' U' L U2",
                    "F L' U' D L2 D F2 R2 D R2 F2 U F2 R' D2 L' B2 F R2 U R' F y'",
                    "F' D B' L' F2 U2 L R2 B2 L2 F2 R' D L F L' D R B' D' F2"
                ],
                "solutions": [
                    "U2 r U' r' U M' U2 R U r'",
                    "R' F R F' R U' R' U R U2 R2 F R F'",
                    "U2 r U' r' U2 r U r' U R U R'",
                    "U R2 D r' U r D' R2 U2 R U R'"
                ]
            }
        ],
        "15": [
            {
                "scrambles": [
                    "B' L B' U2 B' L2 B U2 L2 U2 L2 B L' B2 F' L F U2 B' U' y",
                    "L B U L2 U' L2 U L2 R2 D2 L2 D2 R' U' R' U2 B' L' U2 R U2 R'",
                    "F D L U L2 F' R F R' L2 U' L' D' F L2 F2 U F2 L2 F2 U2"
                ],
                "solutions": [
                    "R' D' R U' R' D R U R U' R'",
                    "R U2 R' U R U R' U R U' R'",
                    "R U R' U2 R U' R' U R U' R'",
                    ""
                ]
            },
            {
                "scrambles": [
                    "L' D B' L2 U2 L2 U' L2 U' L2 U B D' U L U' R U R'",
                    "R D U' L2 D' R' U' F' U F U2 B2 R' D2 L U2 L D2 R U2",
                    "R' B' U F D2 B' D2 F' D2 L2 U2 F U L2 D2 B2 R2 U B' U R' U2"
                ],
                "solutions": [
                    "R U R' U2 R U' R2 F R F'"
                ]
            },
            {
                "scrambles": [
                    "F U' R F2 R2 F2 U' F2 R2 U R2 U' F2 R' F' R' F L' R U' L U y'",
                    "R F L B D2 U2 L2 B' U2 B2 F' R2 B2 D F R' F2 D' F L' R' F2",
                    "F' R' U' D2 L2 F' D2 L2 B' D2 L2 D2 U' L2 U F D2 F' U R' F y"
                ],
                "solutions": [
                    "M U r U' r' U' M'",
                    "F D R U R U' R2 D' F'",
                    ""
                ]
            },
            {
                "scrambles": [
                    "F' U L' U2 L2 U2 B L2 B' U2 L' U F' L D' L D L2 F2",
                    "F' D' B' L2 U B2 F2 D' R2 D F L B' F D U R' F2 R F U'",
                    "R U' B F2 U R2 F2 D B2 D' F2 L2 B2 F D R2 B' L2 U' B2 U2 R' y'"
                ],
                "solutions": [
                    "R U2 R2 F R F' U' R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "L' U' F2 L2 D2 B2 U2 B R2 U2 B D2 U L' U L F' L F2 U' F'",
                    "R B' D' R D' F' D' L D L' F' D2 B R2 F U2 F R2 F2 R2 y'",
                    "F' D' F B2 R2 U' B2 D U L2 B2 D L2 B' F2 R2 D' L2 U R' F' R"
                ],
                "solutions": [
                    "F' U F U2 R U R'",
                    "U R' F R F' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "L U F' L2 D' B2 D L2 D' L2 U' B2 U L' D L' F' L' R' F2 R U'",
                    "L' D L' F U2 F2 L2 F' D2 B2 R' D B2 D F L F D' U L y'",
                    "F L D' R2 F2 L2 U B2 L2 F2 D2 L' F' R U' L R' F' L' U2"
                ],
                "solutions": [
                    "M U R U R' U' r U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' R U' R2 D2 F U2 B' R2 U2 B' D' U2 F' R2 D2 B R' B R F'",
                    "F U F2 R2 U2 R2 F2 R2 U2 R2 F' U F U2 F2 U2 L' U L U' F",
                    "L B R' U2 D2 L D2 L B' L' B D' R F' R2 U' D' L2 U D2 R2 B2"
                ],
                "solutions": [
                    "R' D' R U' R' D F R F'",
                    "U' R' F R F' R U R' U2 R U R'",
                    "y' R2 F R F' R U2 R' U R"
                ]
            },
            {
                "scrambles": [
                    "R' B' U B2 F2 L2 F2 D' L2 R2 U' F U' F D L B2 L D' B R'",
                    "L' R' L2 F' U2 L F R L2 U2 L2 U L2 D' B2 D y",
                    "L F U' L F2 L B2 R' D2 F2 U2 B2 L' F U2 F D2 L2 F' U L' U'"
                ],
                "solutions": [
                    "l U r U' r2 F r U2 l'",
                    "U R U' R D r' U r D' R' U' R'",
                    "r' U' R U M' U' R' F U R U' F'",
                    ""
                ]
            }
        ],
        "16": [
            {
                "scrambles": [
                    "R' U' R F' U2 L2 B' L2 U2 F U2 B U B' L' B R2 B' R2 B2 L",
                    "R' D R' B2 R D2 L U2 L2 U2 L2 U2 F2 D R U' L' U' L U y'",
                    "L' D' F' U2 R2 D' F2 D' F2 U' L2 D' B' D U B D' B2 U L' R2"
                ],
                "solutions": [
                    "r U r' U r U2 r' U' r U' r'",
                    "U M' U R U' r' U' R U R'",
                    "U F R' F' R2 U' R' U R' F R F'",
                    "F' U R U R' U R U2 R' F",
                    ""
                ]
            },
            {
                "scrambles": [
                    "B' U R' B2 F2 U B2 D' R2 D L2 D B D' L2 R B' R2 B2 U' F2 U",
                    "F U' B' R2 F' L2 B2 F' D2 B2 D2 L2 B2 D' L' F2 D2 B D' F' R2 U2 y",
                    "F' R U D2 B2 D' F2 U' L2 U' B2 D U' L' U R U2 B2 U L F U2"
                ],
                "solutions": [
                    "r U' r' U l' U2 R U' R' U2 l",
                    "U2 r' F' r U' r' F2 r2 U' r' U2 r U r'"
                ]
            },
            {
                "scrambles": [
                    "B' D R' F D2 B R2 B' D2 F' L2 B U' F' U' B' F L2 R' D' B U",
                    "L F' U D F2 D' L2 U L2 U' F2 U' L' U2 L U F2 U' F' L'",
                    "F' U' B L2 B' L2 D2 F U2 F' D2 B U2 L' U L F U' L' B' L U' y"
                ],
                "solutions": [
                    "R U R' U2 R U' R' U' F' U F"
                ]
            },
            {
                "scrambles": [
                    "F' L U L2 U' R2 D L2 R2 D' F2 D' U F L' R' B2 R F2 U",
                    "R' B' R' B' R2 B2 U L' B2 L B' R2 B' R2 U2 R2 U2 R2 B' R2",
                    "U L' U R' L F R F2 L2 F U2 F' U2 F' L2 F2 y'"
                ],
                "solutions": [
                    "U2 R' D' r U' M U' R' D R",
                    "U r U' r' U2 r U r' U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "R F' R' D F2 D' U' L2 R2 U B2 F2 L2 F' D' B R' U2 B' D' B2 U'",
                    "L U' R' U' B2 U B2 U2 L2 U L2 U F2 L D2 R B2 F L' F U' L'",
                    "L U R' F2 U2 R2 F2 L2 B2 D2 L2 F2 L D' F' R' D' F' L2 B2 R2 U'"
                ],
                "solutions": [
                    "R U' R' U2 F' U' F"
                ]
            },
            {
                "scrambles": [
                    "R D R U B2 R U2 B R2 D B' R' U R L' B2 U2 L2 U2 L U2 D2",
                    "F' L' B R2 U2 L2 F' L2 D2 U2 F R2 B2 U' B' U' B U' L' U' F",
                    "L' U L U2 L B2 R' D2 F2 D F D2 L D' L' R B2 L' U"
                ],
                "solutions": [
                    "F' U R U R' U' R' F2 R F'",
                    "U2 R U R' r U' r' U2 r U r'"
                ]
            },
            {
                "scrambles": [
                    "F' D' F U L2 U F2 L2 D2 F2 U R' D B D2 R' B D B' L2 R2",
                    "L' F' L F L' B U' L2 B L2 B2 L U' F2 D2 R2 D2 R2 F' R2 U2 F' y",
                    "B U' L B2 U' L2 U' B2 U2 L2 B2 L2 D B D' L' D B' L D' L2 B' y"
                ],
                "solutions": [
                    "U F U R U' R' F' R U R'",
                    "l R U' R' U l' U2 R U' R'",
                    "R' D' R U R' D R F R' F' R"
                ]
            },
            {
                "scrambles": [
                    "R' D R D2 L2 F2 R2 U R2 B2 R2 U' L' U' F L' B2 U F2 R F' R",
                    "F U' B' U2 F2 U' F2 U2 F2 U F2 D U' R' D' F2 U F U' B U2",
                    "F' R L' U' L U2 R2 F R' U' R2 F2 D' L2 U2 L2 F2 D"
                ],
                "solutions": [
                    "U' r U' R' U' M U2 r U r'",
                    "U R U2 R' r U' r' U2 r U r'",
                    "U R U2 R' F' L' U2 L F"
                ]
            }
        ],
        "17": [
            {
                "scrambles": [
                    "R' D F D2 B' D2 F' D2 F' D2 R2 B' R2 D' R U2 F' D2 B L' D2 F y",
                    "B' D F' B2 D R2 B2 U B2 D' R2 B2 D' B' L2 D F D F2 D2 B2 y",
                    "F' L D' B2 L2 R U2 R F2 R' U2 B L2 R2 F' R D L' U2 F"
                ],
                "solutions": [
                    "R U2 R' U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "B' R' U B2 R2 U2 B' R2 B' U2 B F R' B' R B2 F' U B U'",
                    "B' D' F R2 U R2 U' R2 F2 R2 U2 R2 U' R' B U' B' R F R D B",
                    "B' U B F2 U2 B2 R2 B2 U' L2 B2 D R' D B' D' F2 D2 L2 B' F2"
                ],
                "solutions": [
                    "U R U2 R' U' R U R' U R' F R F'",
                    "U' F R U R' U' F2 r U' r' F2",
                    "U' R U2 R' U' F' U' F R U R'",
                    "R U' R' U' F R' F' R U2 R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F L F L' U R2 F2 R2 B U2 B' L2 U F2 D' F2 B2 L2 F2 D",
                    "R' F' U2 F2 R2 D R2 D' R2 F2 U2 F R' B' R' B F R' F' U'",
                    "B' U R' L2 U' R2 U' R2 U L2 F2 U R U B U F2 L2 F' U L'"
                ],
                "solutions": [
                    "F' U' F U R U' R' U R U' R'",
                    "R U2 R' U r U' r' U' r U r'"
                ]
            },
            {
                "scrambles": [
                    "L D B D2 B2 U2 L' D2 F2 U2 R' B' D' L' B' F' U F U' B U2",
                    "R F' R B2 L2 U' F2 L2 U2 B2 D2 U' L' U F' L2 F' L' F' D U2",
                    "R B' U' B2 U2 R2 D' F2 D2 L2 D' R2 U2 R B2 D2 L' D2 B' R' U R'"
                ],
                "solutions": [
                    "R U2 R' F U R U' R2 F' R"
                ]
            },
            {
                "scrambles": [
                    "R' F' L D2 R2 F D2 F' D2 F' R2 F L D' L2 F2 L2 D L2 R",
                    "R D' B' F2 L' R' D2 R U2 L F2 D2 F' U2 B' D' U2 R F U F' R y'",
                    "B' D' F L2 D2 B2 D' R2 D' L2 U' F2 U F' D2 R' U R D' U' B U"
                ],
                "solutions": [
                    "R U R' U' F R' F' R2 U R'"
                ]
            },
            {
                "scrambles": [
                    "F' D' F' U' F2 L2 B2 F2 D' U2 F2 R2 D F U' F L' D2 B' U' B F R'",
                    "L U R' D' R2 B2 D2 U' R2 U F2 U' F R F' L B2 U",
                    "F D U2 R2 D2 F U2 F' D2 R2 F' U F D' U L F L' U F y'"
                ],
                "solutions": [
                    "R U' R' r U' R' U' R U r'",
                    "R U' M' U' R' U' R U r'"
                ]
            },
            {
                "scrambles": [
                    "R U L F2 R2 L' U2 B U B L' D' L F2 B2 R2 U R2 F2 U' R2 U' y",
                    "R' F R' L2 R2 F2 U2 F U2 F' U2 F U2 R' F L2 R2 U R' U' F'",
                    "R' D' B R2 B2 D F2 U' L2 F2 D2 R2 D2 B F' U' R F D R' B U"
                ],
                "solutions": [
                    "F' U2 F R U R' U2 R U' R'",
                    "y' M U' R' U2 R U' R' U R U2 M'",
                    "R U l' U R' U' R U R' U' l",
                    "B' R U' R U R' U' R2 U B"
                ]
            },
            {
                "scrambles": [
                    "L D' R' F R2 F U2 R2 D2 L2 U2 B L' B2 L' D' U2 L' R2 U R2",
                    "B U B' F R2 F' R2 B' R2 U2 B2 U2 F R B F' L' R' B' L U' R",
                    "B' R F R2 F2 D2 U' L2 D' B2 D U L F' L F D2 F U' B U2"
                ],
                "solutions": [
                    "r' D' r U2 r' D r2 U' R' U2 R U r'",
                    "F' r U' r' F2 R U2 R2 F R F'"
                ]
            }
        ],
        "18": [
            {
                "scrambles": [
                    "R D U' L' B2 L' D L' F2 L D' L2 B2 U2 B2 D' R2 U' R2 U2 y",
                    "B U' B L2 D2 R' B2 L' U2 R2 D2 F2 R' U' F' L' U' B U2 B U' F y",
                    "L' F' U L2 F2 D R2 D R2 D2 F2 L2 U' F L U2 F' U2 F"
                ],
                "solutions": [
                    "y' R' U2 R U R' U' R",
                    "R' F R F' R U' R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F R B2 D L F' L' D F' L D2 B2 U F2 R2 B2 D' L2 B2 R2",
                    "L F U L2 B2 D R2 D' B2 L2 U' R' F' R F L' U2 R U R' U'",
                    "L' U' R L2 B2 U2 B' D2 B' U2 F L2 F2 D L' D F R' B2 D F' D'"
                ],
                "solutions": [
                    "r U R' U R U r' U M' U2 R U r'",
                    "U' R2 D' r U' r' D r U R2 U' r'",
                    "R' D' R U2 R' D R r U' r' U2 r U r'",
                    "M' U2 r' F2 R U2 r U' r' U2 F",
                    "R U2 R' r U r' U2 r U R' U R r'"
                ]
            },
            {
                "scrambles": [
                    "L D' F D L2 U R2 U' L2 R2 U' R2 U2 L' D U B' D' B2 R B2 R",
                    "R' U' R F2 U F2 D L2 U2 L2 F2 U' R F L2 D' L' B2 L' F U2 y'",
                    "R D R' B2 R2 B D2 F L2 F L2 F' U' F2 U F D F R' U2 R' F y"
                ],
                "solutions": [
                    "R U' R' F' U' F U R U' R'",
                    "R U R' d' L' U L U' L' U L"
                ]
            },
            {
                "scrambles": [
                    "B D' L' U2 L2 B2 U' R2 F2 U' R2 B2 L D F2 D' F U' B' F U",
                    "B L' B' U F2 U' F2 L2 U2 L2 F2 L2 U' L F2 L2 U2 F' U2 L' U F",
                    "B R' U' F' U' R2 B R B' D2 L F2 D2 F D2 B' D2 R2 B U2"
                ],
                "solutions": [
                    "R U' R2 F R F' r U' r' U' r U r'",
                    "R' D R2 U2 r' U2 R U r D' R2",
                    ""
                ]
            },
            {
                "scrambles": [
                    "F' R' F' D F2 L2 D' B2 U B2 L2 U2 F' R F2 U R' U' R F' y",
                    "B' L F' D R D' R2 L D2 B' L' F2 L' F' B' U2 F U2 R2 F2 B'",
                    "R F D L B2 L' B2 R' B2 D2 R D2 R D' R2 D R' B2 R D' F' R'"
                ],
                "solutions": [
                    "R U' R' F' U F U R U R'",
                    "U R U' R2 F R F' U R U' R'",
                    "U R' F R F' R U' R' U F' U' F"
                ]
            },
            {
                "scrambles": [
                    "F R U F2 D B2 D U L2 D' B2 D R B L' B' R' D2 F R U y'",
                    "R D R F' U' R L B2 L2 U F' R L' U B2 L2 D R2 U F2 R2 y'",
                    "B' U' B D L2 U2 L2 B2 D' B2 U' B2 U2 B L' D U2 B2 D' B L U2 y'"
                ],
                "solutions": [
                    "R U R' d' r' F r2 U' r' F",
                    "R U R' F' L' U2 L U' F",
                    "R U' R D r' U' r D' R2 U' R U R'",
                    "U F2 r U r' U F R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "L F' L F' U2 L2 B D2 B R2 D2 B' F' L' F2 R' D2 R B' F'",
                    "F L D' R2 U2 R2 D B2 U B2 U' L2 U' F' U L' F U L2 U2 F2 L'",
                    "F U L R2 U2 R2 D' F2 D U L' U' R2 U2 R2 U' F' U y'"
                ],
                "solutions": [
                    "R' F R F' R U' R2 F R F'",
                    "R U R' U' R U2 R' F' U2 F"
                ]
            },
            {
                "scrambles": [
                    "R' D L R B L2 B' R U L' U B R B2 D' R2 D' L2 U' D",
                    "R' F' U' L2 D2 B2 R D2 L' D2 L' F2 U' L' U' B2 L R2 F' R U R y'",
                    "F' U R D2 U2 L2 B' L2 D2 U2 R2 F' R F R' F R2 U R' U' F' U'"
                ],
                "solutions": [
                    "F R' F' R2 U' R' U R U2 R2 F R F'",
                    "F R U R' U' F' R U2 R2 F R F'"
                ]
            }
        ],
        "19": [
            {
                "scrambles": [
                    "F' D B' D2 L F2 D2 R2 B2 R U2 B' D' U' B' R B L F2 L' F'",
                    "L' B R' B F U2 L2 F L2 D2 U2 B D' B' D' R B R2 B2 F' L",
                    "L' B R B2 D' R2 D' U2 L2 D F2 U' F U R' D' R' D2 R' U2 L' U' y"
                ],
                "solutions": [
                    "U R U2 R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R' B D' F L2 F2 R2 B R2 D2 F' R2 U B L2 U B2 R2 B' F' R U y'",
                    "B U R D2 F' L2 U2 F D2 F' U2 B2 L' B2 L U2 B' U F2 R F'",
                    "F R D R' B2 D2 B2 R' D2 R B2 D R D2 L B L' B' D2 R2 F'"
                ],
                "solutions": [
                    "U' l R U' R' U x U' R' U2 R U R'",
                    "U F R' F' R r U' R' U R U r'",
                    "F R' F' R2 U2 R' U2 R U R'"
                ]
            },
            {
                "scrambles": [
                    "L' B R' B2 R2 U R2 D2 R2 U' L2 F' U' L R2 D2 B R B' L2",
                    "B U' B' U2 L2 D2 R' B2 L2 U2 F2 R' F2 D F D2 F' R' D' F2 U' R'",
                    "R U' F' L2 D' B2 D L2 U2 B2 D' B2 U' B' D B' L2 B2 F2 R' F'"
                ],
                "solutions": [
                    "R' U R U' R2 F R2 U R' U' R F'",
                    "U' R U' R' U r U' R' U2 R U r'"
                ]
            },
            {
                "scrambles": [
                    "B' R' D B' D2 F' R2 U2 F R2 D2 B' R' U2 R U B' D' B U R'",
                    "B U' F U' F2 L2 U L2 B2 D F' R F2 D' F2 R' D R B U'",
                    "R' U F' B2 U2 F2 U R2 D2 U' B2 D' R2 B D' R2 F' R2 B U R' U2"
                ],
                "solutions": [
                    "U F R U R' U' F' R U R'"
                ]
            },
            {
                "scrambles": [
                    "L' F' R F R2 D2 F U2 F D2 R2 F' L2 R' D2 B L' F2 U' R' U2 F' y'",
                    "B R' U B U2 B' R2 B' U2 B' R2 F2 D' F' R D2 B D' R F2 U F",
                    "F' D L' F L2 D2 F U2 B' L2 B2 R2 F R' D U' B U F' U' B F' y"
                ],
                "solutions": [
                    "U R' F R F' R U' R' U2 R U' R'",
                    "F' U R U R' U' R' F R2 U R'",
                    "U R U2 r' U R U' R' U' M'"
                ]
            },
            {
                "scrambles": [
                    "B' U' F' U2 B R2 F2 L2 B D2 B L2 F' R' B U B U2 R' U'",
                    "L' F R B U2 F U2 F' U2 B' L2 R2 F2 R D F' L' U L F' D' L'",
                    "L' D' R D' L F' R D' F2 D' F' L B D2 B' R2 L2 D2 R2 L2 F R2 y"
                ],
                "solutions": [
                    "U R U2 R2 F R F'"
                ]
            },
            {
                "scrambles": [
                    "F R F' U2 B2 U' R2 U' R2 U2 B' U' B2 R B U' B U B'",
                    "B' R' F' B2 L2 B2 U F2 R2 U R2 D U' R D F' R' B U2 R' U",
                    "F' U B L2 U' L2 U L2 U B' F R' F R F2 U2 F"
                ],
                "solutions": [
                    "F' U' F U2 R U' R' U R U' R'",
                    "U' r U' R' U' R U r' U R U' R'",
                    "U R U2 R' U R U R' U2 R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "R F L F L D2 B R2 D2 R' B2 R' B2 U F2 D' F2 R2 U' B2 R2 L2",
                    "R' B' D2 B2 L' R' U2 B2 L' R' F' R2 F' R' B R' U' R' U2",
                    "L F' D' U L2 B2 U' B2 U' B2 D2 F2 R D R B' R' B' D2 F' L' U2"
                ],
                "solutions": [
                    "U2 R U R2 r U' M U2 r U' r'",
                    "R' U' F' U F2 R2 U R' U' R' F' R",
                    ""
                ]
            }
        ],
        "20": [
            {
                "scrambles": [
                    "L' D L' D2 F2 D' F2 D B2 L2 U2 R2 F2 L' D' R U R U' L U y",
                    "B L F' U R2 U L2 B2 L2 U' R2 U' R' U2 R' F' L' B R U R U2 y",
                    "D2 B' U' R2 U B' U D' B2 U' F2 R2 U2 D' R2 F2"
                ],
                "solutions": [
                    "y' U' R' U2 R U' R' U R y"
                ]
            },
            {
                "scrambles": [
                    "L B' U' L2 D B2 D' L2 U R2 D' R2 U F D F U' B F' L' R2 U2",
                    "L' U R2 L F U' R' U R2 F' U' R U2 R2 B2 D2 L' D2 B2",
                    "L' U F D2 B2 U' R2 U' R2 U' R2 U' B' U R2 D B D F' L' U2"
                ],
                "solutions": [
                    "R' F2 R U' F U R' F2 R"
                ]
            },
            {
                "scrambles": [
                    "L' F U F2 L' D2 B2 L F2 U2 B2 R U' L U L' U2 F' L F U' F' y'",
                    "R' U' B D2 L2 F2 U' L2 U' B2 D B2 F' D' B2 D B R2 U F R U' y",
                    "F' L D L' U2 F2 L2 D2 B2 R' B2 L' D L' F R' F' R F' U' F'"
                ],
                "solutions": [
                    "R' U' R' F R F' U R2 U' R'",
                    "U2 r U' R' U R U r' F' U' F",
                    "x R' U R U' R' U R U2 x' U' F",
                    "U2 R U' R' U F' r U' r' F2"
                ]
            },
            {
                "scrambles": [
                    "B' U D2 B' L2 B D2 F' U' B' D' F' R F' R' D B2 U2",
                    "R' B' R' B' L' D L' D2 R' F2 R2 F' R' U' F2 L2 D2 B2 L2 U' D L2",
                    "F' D L F2 L2 U2 L2 R' F2 D2 L D2 F' R F L2 D' L2 U' L2 F U2"
                ],
                "solutions": [
                    "r' D' r U r' D r2 U' r' U2 r U r'",
                    "U' R U' r' U r U2 r' U' r U R'",
                    "F D R2 U' R' U2 R U R2 D' F'"
                ]
            },
            {
                "scrambles": [
                    "F' D B' D2 F U2 L2 D2 U2 B L2 D2 U' B R2 U L' F L' R2 D' U' y",
                    "F R' F' U' L2 B2 D L2 F2 U R2 U L D L' F U2 F R2 U' R' y",
                    "B' L B L B2 L U2 L' U2 B2 U2 R B' R' B L' B' L' B R' U R y"
                ],
                "solutions": [
                    "U' R U' R' U R U' R' d R' U R",
                    "R' F2 r U2 R U' r2 F r F"
                ]
            },
            {
                "scrambles": [
                    "R' B' L' D2 R D2 L B2 R2 B2 R' B2 L B' R2 B L' U2 B' U R'",
                    "F D' L D' R2 U B2 R2 B2 D' U' R2 F2 R' F' D B R' B D2 F2 L'",
                    "B U L F U2 B L2 B' R2 B D2 B2 R2 U' B' U F L B' U' B U'"
                ],
                "solutions": [
                    "U' F' U' r U' r' F2",
                    "y U' L' U2 L2 F' L' F"
                ]
            },
            {
                "scrambles": [
                    "F' R' B' F2 R D2 U2 B2 L D2 B2 U2 R' F R B R F2 R' F R2 U' y'",
                    "L' U' L F' L2 B' R2 B2 L2 U2 F2 U2 F' L' B' L R2 F' U' F2 U F",
                    "F' D' R' D2 L2 F2 D2 R2 B U2 B U2 B U' L U' R' U L' D F U2"
                ],
                "solutions": [
                    "U' R U' R2 F R F' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F L' U L2 D2 L2 D F2 U B2 D B2 D2 R' F R' B2 R2 F' L' F U'",
                    "F L' U D' B2 U B2 U' B2 L2 R2 B' R2 B L2 D L R' F R F2 U' y",
                    "L U' B' F' R2 D2 F U2 B F2 R2 F' L' B2 R B2 U2 F2 L2 B' U B"
                ],
                "solutions": [
                    "U' R U' R2 F R F' U' R' F R F'",
                    "U R U' R2 F R F2 U' F"
                ]
            }
        ],
        "21": [
            {
                "scrambles": [
                    "R D' R B2 U2 D B2 U R' L2 U2 D L2 D' F2 L2 D L2 F2",
                    "F' D R F2 L2 B2 U' F2 D L2 D' F2 D2 B U R' D2 L2 F2 U2 R' D'",
                    "B L' U' F2 U F2 U B2 D R2 D R' B' L B2 U2 R2 U R' U'"
                ],
                "solutions": [
                    "U2 R U R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F R' U' L2 B2 D2 U2 L2 D2 F2 D B2 L D F' D2 L' B2 R2 D2 F R'",
                    "R' U' L U' R2 F2 D' L2 U2 B2 U' B L2 U2 L D R2 F L2 R' U'",
                    "F' L D' L2 F' U2 B U2 F L2 D2 F2 D' F R' F' L' U2 F R U"
                ],
                "solutions": [
                    "r U' R' U2 R U r'"
                ]
            },
            {
                "scrambles": [
                    "F U' L B2 U2 R F2 U2 B2 D2 R F2 R' U B' F L F L' B U F",
                    "B' U' R' B2 L2 U2 L2 D' L2 R2 F2 L2 D B' R D' B R' D U R' B",
                    "L' B R F D2 B L2 F U2 F' L2 D2 F' R B' L U2 R U' R' U'"
                ],
                "solutions": [
                    "U R' F R F' U' R U2 R'",
                    "U2 F' U' F R U R'",
                    ""
                ]
            },
            {
                "scrambles": [
                    "L D' L D2 B' F2 R2 F' L2 R2 B F' U' L' D U2 B U B2 U' L B' y'",
                    "B' U R' U' F2 R2 U L2 B2 D L B2 L U R' B",
                    "B' L' B2 U2 R2 D2 L2 U' L' U' R' F2 L2 F' D2 L B' L U2"
                ],
                "solutions": [
                    "U2 F R U R' U' F' U' R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F' L B' L2 D2 U2 R' U2 L D2 L' B2 R' F D2 L' B' F L2 F L'",
                    "B' R' U' F2 D B2 D' B2 F2 U' R2 U2 B2 L U B R' B' U2 L B' L2 y'",
                    "R' F' L D2 B U2 B' D2 B U2 B' L' F R F' L' U L U F U"
                ],
                "solutions": [
                    "U2 R U R2 F R F'",
                    "U2 R B' R B R2"
                ]
            },
            {
                "scrambles": [
                    "R' U B U2 R2 U R2 B2 D2 F2 U' F2 R U2 R' D2 R U' R B R",
                    "L' U F' U L2 U2 B2 D' B2 U2 L2 F2 U' R' F' R U' L U' B' R B",
                    "R' U B' L2 F2 D' F2 L2 D' U' R D R' D' U R D B U2 R U'"
                ],
                "solutions": [
                    "U F R' F' R2 U' R' U R U R'",
                    "U2 R U r' U R U' R' U' M'",
                    "r' U2 R' U R2 U' R U2 r"
                ]
            },
            {
                "scrambles": [
                    "R' D' F U2 L2 D2 B2 D' F2 D B2 U' F' D' F' R B' U B L2 U2",
                    "F D B' L2 R2 D2 F' U2 B' R2 U2 R2 B R' U R' U' B L2 B' D F2 y'",
                    "L' B R L R2 U2 L D2 R' F2 D' L2 R2 U B' L2 F L' U F"
                ],
                "solutions": [
                    "U R U' R' U2 R U' R2 F R F'",
                    "R U R' U' F' U F R U R'",
                    "U2 F' r U R' U' r' F2 R F'"
                ]
            },
            {
                "scrambles": [
                    "L' D' B' D2 L2 F U2 F' U2 F' L2 R2 D' L2 F U F L' U L F L'",
                    "L B D R D2 L D2 R' D2 U2 L' U' L B2 D' U' F D2 B' L2 U2 L'",
                    "R' F' R D2 R2 D2 L2 F2 D' L2 U B2 U' L' D F2 U2 L2 F U'"
                ],
                "solutions": [
                    "U2 F' r' F2 r2 U' r' F2",
                    "U R' F R F2 U' F R U2 R'"
                ]
            }
        ],
        "22": [
            {
                "scrambles": [
                    "F' D' L' D F2 U2 B' U F' U' B L2 U' L U L2 y'",
                    "R' F' U D2 L2 D L2 D F2 U R2 U2 R2 F' U2 R B L' U' L B' U' y'",
                    "R F U R2 U' R2 U' R2 F2 U2 R2 U2 L' F R' F' U2 L U' F' U"
                ],
                "solutions": [
                    "y' R' U R U2 R' U' R y",
                    "U2 R' F R F' R U R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L U' F' U2 F2 R2 U2 F2 R2 F2 U' L2 B' D B2 D B' L U' R2",
                    "F L D F2 D2 F2 D' R2 U' B2 R2 U R' D2 R F' L' B L B' F2 U'",
                    "L' F' D L2 U L2 D' U2 L2 U B2 F2 D F' U B2 U' R2 U2 L R2 U2"
                ],
                "solutions": [
                    "r U' r' U2 r U r'",
                    "F' L' U2 L F"
                ]
            },
            {
                "scrambles": [
                    "F' R F U' B' U' F' R' F U R2 B' L' B2 R2 L U2 L U2 F2 L'",
                    "F U F U L2 U' F2 D' L2 D U F2 U' L U L F U' F U F U2",
                    "B' L' U2 F L2 B' R2 B L2 F' L B2 U B2 R D' F2 R D B"
                ],
                "solutions": [
                    "U2 R U R' F' U' F",
                    "y' R' F' U F U R y"
                ]
            },
            {
                "scrambles": [
                    "R' F2 B2 L D F' D' R F R B2 U2 R L B2 D2 R B2 R",
                    "B L' D' U2 B2 L B2 L B2 L2 B2 L D L U2 L B' L' U L U y'",
                    "F' L' B U R2 U' L2 D F2 R2 D2 L2 U B' U2 B U2 B2 L F' R2 F2"
                ],
                "solutions": [
                    "U2 R' F R F2 U' F R U R'"
                ]
            },
            {
                "scrambles": [
                    "B U L U2 B2 L2 U2 F' U2 F2 R2 U2 B D' R' D2 R2 B U2 F' R2",
                    "F R' B U2 R2 D2 R2 F L2 U2 R2 F' U2 L D' F' D F' R B2 L'",
                    "R' U' F R F2 U2 F2 R F' R' U2 R B' R B2 U' B'"
                ],
                "solutions": [
                    "U2 F' r U' r' F2"
                ]
            },
            {
                "scrambles": [
                    "R' U' L R' F2 D2 L' D2 L R F2 L2 B' U B U R F' U2 L F",
                    "L F R' D2 F2 D F2 D R2 D' R2 F2 D2 F R' F' D' F' R2 F2 L' U",
                    "F D' R' F2 L2 F2 D R2 D B2 D' R F' R D' U R D"
                ],
                "solutions": [
                    "U2 R' F R F' R U R2 F R F'",
                    "r U' r' U2 y' R U R U' R' y"
                ]
            },
            {
                "scrambles": [
                    "L F' D B2 D L2 D L2 D F2 U2 R2 U' B' R2 F' L2 B L2 B U L' y",
                    "R' F' L F U B2 L2 B2 R U' L' B2 U2 L U2 D2 L2 D2 L B2 y",
                    "L U L2 D2 F' R2 F D2 B' L2 B L U' L F' L2 B' L F L2 y"
                ],
                "solutions": [
                    "U R U' R' U' R U' R' y' R' U' R",
                    "R2 U2 R2 F R F' R U2 R2"
                ]
            },
            {
                "scrambles": [
                    "B' R D B2 R' U2 B2 L U2 L' R2 B2 D L F' L2 B L B' D2 R2",
                    "B U R' L2 D2 L2 D R2 B2 D B2 U' R' B2 R' U2 R F' U' L' B' F",
                    "L' U L R2 D R2 D' F2 U R F' R U' B U' B' R2 F' y'"
                ],
                "solutions": [
                    "U' R U2 r' U r U2 r' U' r U R'",
                    "U' F R' F' R U2 r U' r' U r U r'",
                    "M' U R U' r' F2 r U r' U2 F"
                ]
            }
        ],
        "23": [
            {
                "scrambles": [
                    "F' U R F2 R2 D' B2 R2 F2 R' U' L2 R' F' L D L' F2 R",
                    "R B' L2 B2 U2 L U2 L U2 R' U2 R B L2 U R' U' R U' L' R'",
                    "B U' L' F2 U2 L2 F' L2 F2 U2 F U' L U' F L' U2 L B' U"
                ],
                "solutions": [
                    "U2 R2 U2 R' U' R U' R2",
                    "R U' R2 D' R U2 R' D R"
                ]
            },
            {
                "scrambles": [
                    "B' U' L D2 U2 R2 B' D2 L2 U2 F' R2 D' B R' D R B' R2 B' L y",
                    "F' D R' B F L2 F R2 F' L2 F2 R' D L B' F U' L2 B U' L",
                    "R B R D2 R2 D B2 U' L2 D' U' F2 D L B' D' R2 B2 L U2 B R"
                ],
                "solutions": [
                    "U F R' F' R U R U R'",
                    "R U R' F' U F R U R'"
                ]
            },
            {
                "scrambles": [
                    "B L F' D F2 D' L2 U L2 U F2 U' F' L F L' F2 U2 F' L' B' U'",
                    "L' D F' U2 F' D2 U2 F L2 F2 L2 F' D F' L U' L' U2 L' F U2 L",
                    "R' D F L2 D L2 F2 D' F2 U2 B2 F2 R' U2 R F D F' L' F2 D2 U"
                ],
                "solutions": [
                    "U2 R U R' U' R U' R' U R' F R F'",
                    "U2 R U2 R' U' R U' R2 F R F'"
                ]
            },
            {
                "scrambles": [
                    "B U' F D2 B F2 L2 U2 F' D2 B' L2 D F' R' B' D2 R' B2 F2 L2 F",
                    "B' U F' U B2 R2 U L2 U' F2 D2 F2 L' F' D F R2 B' U' F U'",
                    "F' L' U2 F R2 B R2 F' R2 B2 R2 U R2 U B U' B L R2 F"
                ],
                "solutions": [
                    "R U2 R' U r U' R' U' R U r'",
                    "R U2 R' F' U F U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "R B' U B' L U' F R2 U2 F L U D L2 B2 U2 D R2 B2 R2",
                    "R U' B U2 R2 F2 R2 U R2 F2 R2 U B' L R' F R' F L' R U2",
                    "B R U' R D F R2 F U D' L2 B U L2 D L2 U2 B2 U D2 F2 D2"
                ],
                "solutions": [
                    "U R U' R' U' R U' R2 F R F'",
                    "F' U' F U' R U' R' U R U' R'",
                    ""
                ]
            },
            {
                "scrambles": [
                    "F L B D2 L' U2 L2 D2 U2 B2 L' B2 R' B F L' F' R D2 F' U' R'",
                    "L' F' L F2 L2 F2 U F2 L2 U F2 U L F L2 F U2 F' U2 L",
                    "R D' F U2 F L2 D2 B' R2 D B' D U' L2 F' D F' R U2"
                ],
                "solutions": [
                    "M U2 R U R' U r U' R'",
                    "U2 r U' r' U r U r' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B L' D' L2 D2 L2 D L2 F2 D' L' B2 R B F2 R U R' U2",
                    "F D' L' U2 L2 U2 B L2 B' U2 F R' F' L' F R F' D F' U' y'",
                    "L F' R' B2 U2 R2 U R2 F2 L2 B2 D' F2 R' B L2 B' F' L F' L2 U'"
                ],
                "solutions": [
                    "U R' F R F' R U R' U2 R U' R'",
                    "F U R U' R' F' U' F' U' F"
                ]
            },
            {
                "scrambles": [
                    "R' U B' R2 U2 B2 U B2 U B2 U2 B' U2 R2 U2 R' F' U' F",
                    "R D' B F2 R U2 L' B2 U2 R' U2 R' F2 D F2 R2 D2 L B R' D U'",
                    "R D' B D' B2 U L2 D' L2 D' R2 D2 R2 B D L U' L' B' U B2 R'"
                ],
                "solutions": [
                    "U' R' F R F' U2 R U' R' U R' F R F'",
                    "U F R' F' R2 r' U R U R' U' M'",
                    "U' F2 r U r' U' r' F' r2 U' r' F2"
                ]
            }
        ],
        "24": [
            {
                "scrambles": [
                    "F L' F U L2 F2 D F2 D' L2 U L2 D' B' L2 U2 L' B D L2 U' F2",
                    "B L F2 D R2 U' R2 F2 D' L2 R U' L2 U L' R' B' y'",
                    "L F U' R2 D R2 D2 U' L2 U L2 U' F D2 U' R2 D' U' L' R2 U'"
                ],
                "solutions": [
                    "U' R U R2 F R F' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L F R B2 R2 D U2 B2 R2 F2 L2 U B L' B L2 D2 L F U y",
                    "R' D' F' D R2 U R F2 B2 L' B' L' U2 F' R2 F2 B2 U2 F' U2 L2 D2",
                    "R D' F' L2 F2 U' L2 D' B2 U2 L2 D F D2 R U R' B' R' D' R2 U' y"
                ],
                "solutions": [
                    "U' R U' R' U r U' r' U2 r U r'",
                    "F U R U' R' F2 U' F R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' R B' L2 F2 U' B2 U R2 D2 L2 B2 L2 F' R' F' L' R2 B L2 B' L'",
                    "R' F' D' F2 U2 B2 D F2 D' B2 D F2 U2 F R U2 R' F' R F' U2 F2",
                    "B' U L2 F2 R B' D B' D2 R B R2 F2 U' L2 U L2 U B2 y'"
                ],
                "solutions": [
                    "R U' R' U r U' R' U R U r'"
                ]
            },
            {
                "scrambles": [
                    "R B' U' B' L2 F2 R2 D2 L2 B' D B' R B F2 L' D F2 D' B'",
                    "F' U F L2 B2 L2 U2 F2 L D2 F2 L' F2 U F' R2 F R' F' U' F2 U y",
                    "L F U' F2 U' R2 D' F2 D U2 R2 U2 F' R F' R' F R2 F2 U L' U2 y"
                ],
                "solutions": [
                    "r U' r' U' r U r2 D' r U2 r' D r",
                    "r U R' U R U r' U' r U r'",
                    "r U' r' U' r U r' F' U2 F"
                ]
            },
            {
                "scrambles": [
                    "B U' R' F2 L2 U' R2 U' B2 R2 D' R2 B' L B L2 B' D' B2 R' y",
                    "F U F R2 D R2 D' R2 D F2 L2 U L B' U' R B' R' B' L U2 y",
                    "L F' U D2 F' L2 D2 F' U2 B2 F L2 B L' B2 R2 B F U' L' U2 F y"
                ],
                "solutions": [
                    "R U R' d R' U R U' R' U R",
                    "R U' R2 F' U' F U R2 U' R'",
                    "U F' r' F r F R U R'"
                ]
            },
            {
                "scrambles": [
                    "L F' U' F D2 L2 D2 F' D2 B' D2 U F L' U' R2 B' R B U2 R2 y",
                    "F D' L' R2 U2 L B2 D2 U2 F2 L B' U' B' D2 U R' D R' F' U' y",
                    "R B D' U2 R B2 L2 F2 L' D2 L' B2 U R' B2 U' R' D L2 B U2 R' y"
                ],
                "solutions": [
                    "y' M' U2 R' U' R U' r' U R",
                    "U r U' r' U2 r U r' R U2 R' U R U' R'",
                    "F' U' r U2 R' U' R U' r' U2 F",
                    "U2 R' F R y' R U2 R U R' U R2",
                    "U' R U' R' F' L' U' L U' F",
                    "U' F' U r' F r U r' F r U' F"
                ]
            },
            {
                "scrambles": [
                    "F' L B' U2 B U L' U B2 L B U B2 R2 B' U2 D2 R2 B' D2 L2 D2 y",
                    "L' F' D U2 L2 U2 L' U2 L' R' F2 L' F2 D' F' D R D' F L U F2",
                    "R' U B' U2 R2 U B2 U R2 U' B2 R2 B' U2 R' U B' R U' B U"
                ],
                "solutions": [
                    "F U R U' R' F' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' U' R B U2 B R2 U2 B' R2 U2 R2 B2 R' B' U R2 B' R' B2 L U",
                    "L F U F2 U' L2 B2 D' R2 B' D' L' D' L2 B2 R B U2",
                    "F' R' F' D' L2 R2 B2 U R2 D' R2 U L2 B R B' D' L R2 F' L' U'"
                ],
                "solutions": [
                    "R U' R2 D' r U M U R' D R",
                    "R U R' U2 F' r' F2 r U' F",
                    "U2 R U R' U' r U2 r' U' r U' r' U r U2 r'"
                ]
            }
        ],
        "25": [
            {
                "scrambles": [
                    "R U F B2 F2 U2 B2 U' B2 U' B2 U' L' F R2 F' L F R U'",
                    "R U' L F2 D' U2 L2 D' B2 L2 D2 U2 L' U' R U' R' U2 R U",
                    "R' B D F2 D F2 D' L2 D' L2 B2 U2 B F' U' F R U B U' B' U' y"
                ],
                "solutions": [
                    "R' F' R U R U' R' F",
                    "U' F' R U R' U' R' F R",
                    "R' U' R' U' R' U R U R"
                ]
            },
            {
                "scrambles": [
                    "L F' D R2 B2 U' F2 U2 R2 D' F2 U' L2 R' U2 R' U2 F' L' B' U2 B",
                    "B L U D2 R2 D' U' F2 U F2 R2 U B' R B D' F L' F U B' U'",
                    "F' D L D' R U' B' U B2 R' F' D L' U2 L2 U' D' F2 U R2 B2 R2"
                ],
                "solutions": [
                    "r U r' U2 r U R' U2 R U' r'",
                    "F2 r U2 R' U' r' F2 R F'"
                ]
            },
            {
                "scrambles": [
                    "F' U' L R2 D' L2 R2 U2 L2 F2 R2 D' R F2 L' F D' F2 D R",
                    "B' L U' L2 F2 D2 U2 R U2 R' B2 R' D L B2 D L F U B F U'",
                    "L D' L' R' L B' D B L D' B R U L2 U' B2 R2 D F2 B2 L2 U2"
                ],
                "solutions": [
                    "U' M' U R U' r' R U R'",
                    "U' R' F R F' R U R'"
                ]
            },
            {
                "scrambles": [
                    "L F D2 B2 U' R2 D' F2 D2 U' B2 L U L D F U2 L' U",
                    "B D B F' D2 B F2 R2 U2 F2 R2 U2 B' R' D' B R U' R' B' D2 B2",
                    "R B L' U B2 D F2 U F2 U' B' L' B D' R' B2 L2 B' U2 y'"
                ],
                "solutions": [
                    "U2 r U2 R' U R U' R' U2 R U' r'",
                    "r' U' R' U' R' U R U r"
                ]
            },
            {
                "scrambles": [
                    "F R' F' U2 R2 U2 R2 B' U2 B R' B' R U R U B U'",
                    "F D L R2 D R2 D' F2 U2 F2 U' F2 L2 B L B' U2 B' U' B D' F'",
                    "R' D' L B2 L2 R2 F2 U B2 U' B2 R' U' L R' D R F' U2 F U2"
                ],
                "solutions": [
                    "U' F' U F U R U' R'",
                    "L D R' F R F' D' L'"
                ]
            },
            {
                "scrambles": [
                    "B R' U2 R2 B L2 R2 F D2 R' F' L2 B' U R U' R2 U2",
                    "R B' U2 R B D' B' D2 R2 L2 F' B2 L2 F2 D' R2 F2 U2 B2 D' B2",
                    "F' L B' U2 B2 U' B2 D L2 D' L2 B U' L F D2 B' R B D2 U2"
                ],
                "solutions": [
                    "U2 r U' r' R U' R' U' r U' r'",
                    "U r U r' U R U M' U r'",
                    "U2 F' L' U' L U R U R' U' R' F R"
                ]
            },
            {
                "scrambles": [
                    "R' D B U' B2 U F2 D' F2 U F2 U' F D' U2 B D L2 F U' R' U'",
                    "B D B' R2 F R2 B U2 R2 B2 L2 B D' B' L' D' L' B2 R2 D' U B' y'",
                    "R' D R' F2 L2 D' R2 B2 R2 D B2 D2 B' D' B D' B2 L2 R F2 D' R y'"
                ],
                "solutions": [
                    "U' F' U' F U R U R'",
                    "R2 U R U' R' U F R2 F' R'"
                ]
            },
            {
                "scrambles": [
                    "R U F L2 U R2 U' L2 F2 U B' F R' B U' R' F R' F' U'",
                    "B D' B R D2 R' D2 L' B2 U2 L' R B' R' U B' D L' B' L' B' y",
                    "L B' R' B2 F2 U' F2 D2 R2 U2 R2 F D2 B2 R2 D' U R' U' B L"
                ],
                "solutions": [
                    "r U r' U2 r U R' U' R U2 r'",
                    "U R2 D r' U r D' R' U' R'"
                ]
            }
        ],
        "26": [
            {
                "scrambles": [
                    "B' R' B U2 F2 U2 L2 F U2 B' R2 U2 B2 U L U' L F D2 B2 R B",
                    "L' U' B' L2 B D2 F' D2 R2 B2 L2 B2 R2 U F' L U' L' F U2 L U",
                    "R' D' B' F2 U' R2 U' F2 D B2 D' R2 U2 F D2 L2 B' D2 B D R U"
                ],
                "solutions": [
                    "L E' L' U L E L'",
                    "U2 L E' L' U' L E L'",
                    "U2 R U' R' U' r U' R' U R U r'",
                    "r2 U2 R2 F R2 U2 r2 F"
                ]
            },
            {
                "scrambles": [
                    "L' U F L2 R2 D2 R2 U F2 U' L2 U' R B2 L U' L' R' F' L U'",
                    "F' U' B' U2 L F2 R2 D2 F2 L B2 L U B' L U' F R2 B U' y",
                    "R B' L U B U B' L' B' U2 R B' D L2 U B2 U' B2 L2 B2 D' R2"
                ],
                "solutions": [
                    "r U R' U2 R U r' U2 r U' r'",
                    "R' D' R U M' U' r' D R"
                ]
            },
            {
                "scrambles": [
                    "R' D' B U2 B' R2 F R2 F2 U2 F' U2 F2 D U R U R B' R' B U2",
                    "L' U R' B2 L2 F2 D F2 L2 D U B' D' B U' B2 L F R F' U'",
                    "R' B L' B2 F2 R2 B2 L' F2 U2 R' F2 R B' F' U' R' U' R' F' R"
                ],
                "solutions": [
                    "U R U' R' F R' F' R",
                    "U R U' M' U R' U' M",
                    "R2 U R' U' R' F R F' R'"
                ]
            },
            {
                "scrambles": [
                    "R F' U' L' U2 R B2 R' U2 L F2 R2 U2 F L2 D B L' F2 L' U' R",
                    "B R U' B' R2 U2 R2 B' U2 B2 D2 U2 L' U L F2 U' F' D' L B D'",
                    "L' D' R D2 B L2 F U2 L2 B D2 B2 D B L' F2 R' F2 L2 U B2"
                ],
                "solutions": [
                    "r U r' U2 r U' R' U2 R U' r'",
                    "R' D' R U' M' U r' D R",
                    "y' r U R U R U' R' U' r'"
                ]
            },
            {
                "scrambles": [
                    "B U' B L2 B2 U B2 D L2 F2 L2 B2 R2 F' R' U' R U R' F2 U R2",
                    "R F' D' B2 R F2 L' F2 R' B2 D B' F U B U' B R' U2 y'",
                    "F L B F D2 R2 D2 B2 L2 F' U2 B' U2 R' B U2 L' F U2 R' B"
                ],
                "solutions": [
                    "U R U' R' U' F' U F"
                ]
            },
            {
                "scrambles": [
                    "B R' U2 R2 B2 U R2 D2 F2 U' L2 U' F U2 L F2 L2 F' D2 U' R",
                    "F' L B' U2 R2 F L2 R2 U2 L2 R2 F2 L2 D' L2 R2 B2 U' L' B' L2 F y'",
                    "R' F' R' U2 L2 D' L2 U L2 D' F2 U2 R2 B' L2 B L D2 B2 F' R2"
                ],
                "solutions": [
                    "r U2 f R f' U2 r'",
                    "R' D' r U r' D R U' R U R'",
                    "U F R U' R' r U2 r' U' F'",
                    "R' D r2 U r' U' r U' r2 D' R",
                    "F2 R U' R2 F R2 U R' F2"
                ]
            },
            {
                "scrambles": [
                    "R U' F D' B2 U2 B2 D U' F2 L2 U2 L2 R' U2 R F2 U R' F' R' y",
                    "B L F' D2 B2 F R2 B D2 R2 D2 B' R2 U' L' B2 U2 L U2 B L' y",
                    "B' R U' R2 B2 D2 L U2 L F2 U2 L2 D2 U' B2 L' B L U2 R2 B R2 y"
                ],
                "solutions": [
                    "U R U R' U' y' R' U' R",
                    "F U' r U M U' R' U F'"
                ]
            },
            {
                "scrambles": [
                    "R F L2 B2 D' B2 R2 U R' B' D B U' L2 F' R' U'",
                    "B' L' D' L2 F2 U' L2 B2 L2 R2 U R2 F' U' F2 U R U2 R U2 L' B y",
                    "F' D U2 B' L2 R2 F D2 U2 F' U' R D B L2 F' D' R D' U'"
                ],
                "solutions": [
                    "r U2 R' U R U' r' U2 r U' r'",
                    "U R U R D r' U' r D' R2"
                ]
            }
        ],
        "27": [
            {
                "scrambles": [
                    "F L' D2 L F' B R2 B R' B2 D B2 D F2 L2 F2 D2 R2 U",
                    "F R F2 U' F2 R2 U R2 U' R' F2 U' B U' F U' B' U' y",
                    "R B' U L2 U' B2 U' L2 B2 U2 L2 B2 U2 R D' R D R' B R2 U'"
                ],
                "solutions": [
                    "R U' R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B D F' U2 F' U2 F R2 F2 U2 L2 R F' L2 B L2 U R D B R",
                    "F' R' B' U' B2 L2 B2 L2 D' B2 D R2 U2 B R' F2 L B' D' R2 B' F'",
                    "F R U' R2 U2 L2 F D2 F' R2 D2 B' L2 U' R2 U' F' U2 F' R2 U R'"
                ],
                "solutions": [
                    "R U' R2 F R F'"
                ]
            },
            {
                "scrambles": [
                    "L' F D' B D2 B2 L2 U2 F' U2 L2 B' D' F' L U2 B' R' B U' R2",
                    "F R' F L2 D' L2 F2 L2 D B2 D B2 U' B' U B L2 U R F'",
                    "L U' B' U2 L2 R2 U2 B D2 L2 D2 U2 B L' D F D' L2 U2 R' U2 R y"
                ],
                "solutions": [
                    "R U' R2 F R2 U R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "R' D R F2 L2 F2 U2 B2 U B2 U F2 D' L D2 B L B F2 R' B2 D'",
                    "B' F2 B L F L' F' U F' U F2 U F2 U2 F2 U' F2 y'",
                    "F' U' B' L2 U2 B2 L2 R2 B' L2 U2 F' L2 D F' R' F' D B R U'"
                ],
                "solutions": [
                    "U2 r U' r' U r U r' R U2 R'",
                    "R U' R2 U' F U R2 U' R' F'",
                    "R U' R' U R U R' U2 R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "B' D' R B2 L2 U' F2 L2 U B' R U R U B' R2 B",
                    "B' L B U2 B2 R2 U2 B D2 B D2 F U' B' U2 L' U R' D2 U B' R'",
                    "L D' R F2 U F2 D' L2 D L2 U' L2 U R' U' L2 D F U F U' L'"
                ],
                "solutions": [
                    "R' F2 r U' R U r' F2",
                    "R' D' R U' R' D R U R' F R F'",
                    "R' D' R U R' D R U' R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "F' U' R' D' F2 U L2 U2 R2 U L2 U2 L' D' R' B2 U' F' L' F2 U2",
                    "R' F' D' F2 U' F2 D' B2 D F2 D' B2 U B' L2 B D2 R U'",
                    "R F D' L2 R2 B' D2 B L2 R2 D F' U2 F R' U R2 U' F' R'"
                ],
                "solutions": [
                    "R U' R2 U' F U R U' F'",
                    "U2 R U R' U R U R2 F R F'"
                ]
            },
            {
                "scrambles": [
                    "R' D' B F B' D R' B D R2 D F D' R2 D2 R2 F2 U' R2 D B2 R2",
                    "R B D L2 D' R2 D' F2 D' F2 D' L2 D' L' R2 B L B R B R2",
                    "F U F U F2 U' L D F' D' F' L' D' L2 D R2 D' L2 D R2 U2"
                ],
                "solutions": [
                    "R U' r' U R U' R' U' M'"
                ]
            },
            {
                "scrambles": [
                    "R F R' F2 U2 R2 U' B2 D' L2 D B2 R F R2 F' U' F' U' R' U2",
                    "R' D' L F U2 F L2 F2 L2 F D2 R2 D2 L D R F L' R' U2 L R' y",
                    "L' F D2 F2 L2 F2 U2 F2 U2 F2 U2 F' L' B D2 F L F' R' D2 R' y"
                ],
                "solutions": [
                    "U' R U' R2 r U' M U2 r U' r'",
                    "R U' R' y R' F' R U2 M' U' M"
                ]
            }
        ],
        "28": [
            {
                "scrambles": [
                    "F D B' D L2 B2 F2 R2 U' L2 U' L2 U2 B U2 B' U F U2 B' R2",
                    "R B' U' F2 R2 U2 L2 R2 B' L2 U2 B' F2 D R U' L2 D2 F L2 D U'",
                    "B F' B2 U' B U' F U2 F' U2 F U2 B' U2 B U2"
                ],
                "solutions": [
                    "y' R' U R U' R' U R y"
                ]
            },
            {
                "scrambles": [
                    "F' L F B' U2 B R2 F' U2 B L2 B2 U' F R B2 U2 F D2 B' F'",
                    "F' R D' R2 D2 L2 F2 D' R2 U' B2 U' B2 F' D F D B2 D' R' F",
                    "R' D' F' D F2 D2 U' F2 U' R2 D R' B L F2 L F' U2 B' U'"
                ],
                "solutions": [
                    "F' U2 r U' r' F2",
                    "y r' F r2 U' r' F"
                ]
            },
            {
                "scrambles": [
                    "L' B' R' D2 R2 F D2 L2 B R2 D2 B' R2 U R U L2 B R' F' L' R y",
                    "L' F U D2 U' B2 D2 F2 R2 F2 D' F' D' B' D2 L R F' U2 F R y",
                    "F' D B2 R U2 R' U2 R B2 R' B2 D' U' F U2 R U' F' R F"
                ],
                "solutions": [
                    "R U R' d R' U2 R",
                    "R U R' r' D' r U' r' D r",
                    "F U R U' R2 F' R2 U R'"
                ]
            },
            {
                "scrambles": [
                    "L U R' L2 D2 B2 U2 R' F2 R2 U2 B2 R U' R' F' L' F R F' U F",
                    "R U' R F2 L2 U' L2 D L2 U F2 R2 B' F' L2 U F L U' L' B'",
                    "B R U L2 B' U2 B U2 L2 F' L2 D2 B R' D2 F2 L' F' U L' R' B'"
                ],
                "solutions": [
                    "R U2 R' U R2 D r' U r D' R2",
                    "R U R' F R U R' U' F2 U' F"
                ]
            },
            {
                "scrambles": [
                    "F U R' U' R D F' U R B' R B' D2 L2 B2 D B2 D' L2 D' B2 U",
                    "B' L' D' U' B2 R2 U' L2 F2 D L2 D R B' L D2 L U L2 F D2",
                    "B' U F2 R2 F2 R2 D2 B U2 B' U2 B U B' D2 U2 B R' F2 R F2"
                ],
                "solutions": [
                    "R U2 l U' R' U l'"
                ]
            },
            {
                "scrambles": [
                    "R F' U B2 L2 U L2 D' B2 D B2 U' B2 F R' F' U L' U2 L F",
                    "L' B' U' B' R2 D2 L2 F D2 B2 F R2 U' B' U' B U2 F2 L U F y'",
                    "F L U R2 U2 F' R2 U2 R2 F R U2 F R' F' L' U R' F' U2 y2"
                ],
                "solutions": [
                    "y L' U L U' F R U R' F'",
                    "R U2 R' U' F R U R' U' F2 U' F",
                    "R U' R' r U' R' U' R r' U' r U r'"
                ]
            },
            {
                "scrambles": [
                    "L' F R' D2 F2 D2 B R2 B L2 R2 F2 U2 L' U' R D' U R U2 B2 D'",
                    "R B' L U2 L' U2 L' B2 L U R' F' U' F U R B' U2 R'",
                    "R' B L U2 L' F' U R B R' F2 B' R F D2 B2 R2 F2 L2 U2 B2 L2"
                ],
                "solutions": [
                    "R U2 R' y' R' U2 R y",
                    "U2 R' F R F' r U' r' U2 r U r'"
                ]
            },
            {
                "scrambles": [
                    "F' U L U R2 U' F2 D B2 F2 D R2 U' R' B R2 U2 R' D2 L' U' L'",
                    "F' R D' B2 D F2 L' D R' F' D' R' U2 R2 L2 U D R2 F2 D' L2",
                    "R' B L' U2 L F2 R' F2 U2 R2 B' D' L F' L' D2 B2 D' B2 R"
                ],
                "solutions": [
                    "R U2 R2 F R F2 U2 F"
                ]
            }
        ],
        "29": [
            {
                "scrambles": [
                    "R B' U F2 U' F2 U' B2 U B2 F2 U' B' U' L2 D L' D2 L' F2 U' y",
                    "F' R U2 R2 U2 R2 F2 U F2 U' F2 U R F2 R' F' U' R' U' R U' y",
                    "B' R' F' R2 F2 L' D2 R D2 R' D2 L2 D R' D L' R2 F' R' B R' U' y"
                ],
                "solutions": [
                    "y' R' U' R U R' U' R",
                    "M' U R U' r' U R U' R'",
                    ""
                ]
            },
            {
                "scrambles": [
                    "R' B R B2 D2 F' U2 L2 F' U2 B2 U2 F L' F' L2 F' D2 F' U' R' U'",
                    "R' D L' F2 D2 F2 L' D2 L' B2 R' F' R F R' U' R2 B2 L2 F2 R y'",
                    "L' U F' B F2 R2 B2 R2 F' U2 B L2 R' D F' D' L2 R B2 L U2 y"
                ],
                "solutions": [
                    "U R' F R F2 U' F"
                ]
            },
            {
                "scrambles": [
                    "L' U' F' L2 U2 B L2 F L2 D2 B R2 D' R D F' R' D' F2 D' B2 F'",
                    "R U' F D' F2 U' F2 D' B2 R2 F2 U2 B' L B' F R' F' L U' F U",
                    "B U' L D' B2 D F2 D' B2 D F2 U L' B' F' U' B U2 B' F U'"
                ],
                "solutions": [
                    "U2 R U' R' F' U' F"
                ]
            },
            {
                "scrambles": [
                    "R B' L' U L2 U' B2 L2 U' L2 U2 B2 L2 B U B' L B L' U2 L R' U' y'",
                    "L' U F R' F2 U2 B2 U2 L F2 R2 B2 R F L2 D2 F U B F U L",
                    "R' D' F R D2 L' B2 L D2 R2 F2 R2 U' R' U2 F D U' F' U2 F R"
                ],
                "solutions": [
                    "U R2 D r' U' r D' R2 U' R U2 R'",
                    "F' r2 D2 r' U r D2 r' U2 r' F2"
                ]
            },
            {
                "scrambles": [
                    "R' B R' D2 L2 F' U2 B' U2 B D2 B' F R' D2 L' F L B' D2 R F'",
                    "R' D F2 D2 L2 U2 L2 F' L2 U2 R2 B U' R B2 R2 F L F' L2 F2",
                    "B' D' B' F' L2 R2 B U2 F' L2 B' L2 B2 D F2 D2 U L F2 L' B' U2"
                ],
                "solutions": [
                    "R' F R F' R' F R F'",
                    "x R' U R U' R' U R U' x'"
                ]
            },
            {
                "scrambles": [
                    "F U' F' U2 R U2 R' F2 U2 R U2 L R' F' L' R' U L' U' L F' R",
                    "L D F' R2 F2 R2 F2 D R2 D2 F2 R2 D' B' D' B' L' R D2 F' R F'",
                    "B' D F' R2 F2 D' U2 B2 L2 D2 B' R' F' L2 D F2 L2 D' L2 R D'"
                ],
                "solutions": [
                    "U' R U R' U' r U' r' U2 r U r'"
                ]
            },
            {
                "scrambles": [
                    "F' D' L' D2 U2 R2 U2 B' D2 B' F2 U2 F' U B F' L D' B' D' R2 D'",
                    "R F' R B2 F2 R2 U B2 U L2 U2 R2 D2 R F R' B F R B U2 F2",
                    "L B D B R' B' D' F B' L' U' B' R F2 U2 B L2 F' L2 F'"
                ],
                "solutions": [
                    "R' F R F' U R U R' U2 R' F R F'",
                    "U2 R U' R' U' R' F R U R U' R2 F' R",
                    "R U' R2 D' r U' r' D F R F'"
                ]
            },
            {
                "scrambles": [
                    "R U F' D2 B L2 U2 B' D2 F R2 B2 L' B' L U' R' F R B' R' F'",
                    "F L' F L2 U' L2 U F2 D B2 F2 U R U' B F R B D L' D2",
                    "L' B D B2 D2 F2 R2 B2 D B2 U' B2 U' F' D2 L B' L2 F' R' F2 R"
                ],
                "solutions": [
                    "M' U' M U2 r U' R' U R U' r'"
                ]
            }
        ],
        "30": [
            {
                "scrambles": [
                    "F' L B' R B2 R2 U2 L2 U2 R2 B2 R' B L2 B' U B L U F U'",
                    "F U B' D B2 D F2 L2 U' L2 F2 D2 B' U' B F U' B' U F2 U' y",
                    "L F' D F D2 B U2 B2 U2 B U2 L2 D2 R F' D2 B2 L B' D F L'"
                ],
                "solutions": [
                    "R U R' U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "R' D R' U R2 B2 U' B2 U' L2 U' R2 U2 L' B2 R2 F' L' D F D' F'",
                    "R' F U D2 B D2 F2 R2 F2 U2 F' D2 U' L B D F2 U' L2 D R2",
                    "F D R B2 U2 F D2 F' U2 F D2 B' F' U' B' U' R' D' U F' U y'"
                ],
                "solutions": [
                    "U' F R' F' R2 U R'"
                ]
            },
            {
                "scrambles": [
                    "R U R' D' F2 U L2 U' L2 F2 U' F2 U' F U' F' D R' F R U2 F2",
                    "L' D F' L' F2 D2 B2 R' D2 U2 R U F' D U' B2 D2 R' F L R",
                    "L D B' F L2 B2 D2 L2 U2 F' L2 D2 R2 U F D' B2 R2 U' L' R2 U2"
                ],
                "solutions": [
                    "U2 F' U F R U R'",
                    "R U R' F U R U' R2 F' R"
                ]
            },
            {
                "scrambles": [
                    "F' U F' U2 L2 D' B2 U' F2 D B2 R2 B' U' B2 D R' B U2 R' U2",
                    "R' U' R F' R2 D2 L2 F' L2 F L2 F' D2 R' B R' F L U L' B' U'",
                    "B U B' R2 U' F2 U L2 D2 R2 B2 R D' R' B R2 D' L2 R2 U y'"
                ],
                "solutions": [
                    "R U r' U' R U R2 r"
                ]
            },
            {
                "scrambles": [
                    "B U F B D2 B D2 L2 U2 R2 B2 F' L2 D F' D R2 U' L' U2 L F",
                    "B' D' F' D' F R D B U B2 D' B2 U' R' F2 B2 D F2 L2 D B2 y'",
                    "B L' B L' F2 R2 F2 L' F2 D2 R D2 L F L2 F R2 B2 U R' U"
                ],
                "solutions": [
                    "x U R' U' R U R' U' l"
                ]
            },
            {
                "scrambles": [
                    "F' R' B U2 F' U2 F U2 B2 R B' D2 L' D2 B2 U' F U",
                    "F' L U' B2 U F2 U' B2 U F2 L' F R U2 B U' B' R' U'",
                    "B R B2 U2 B' R' F R2 D' F D' L2 D2 F2 U B2 U' R2"
                ],
                "solutions": [
                    "R U R' U r U' r' U' r U r'"
                ]
            },
            {
                "scrambles": [
                    "B R B2 U' B2 L2 D2 R' F R' D R2 D L2 R' B' U",
                    "B' U R D2 L' F2 D2 L' D2 R U2 B2 F2 D' F2 D L R2 U2 B F2",
                    "L' B L' D R2 F2 D R2 D' F2 R2 D F' D2 F L B' L' F2 L2 U2"
                ],
                "solutions": [
                    "U2 R' F R F' R U' R' U2 R U R'"
                ]
            },
            {
                "scrambles": [
                    "R B U' F2 L' F2 L2 B2 R' D2 F2 R' F2 D R2 D' B R2 F2 U' F' R y'",
                    "R B U' B2 D2 F2 D' B2 D F2 D' B2 D' R B R2 U' F' U F U2",
                    "L U' B U2 L2 B2 U' B2 U2 B2 U' B U2 L' B' F R B R' U2 F' U' y'"
                ],
                "solutions": [
                    "R U R' U' R' D' r U r' D R2 U R'",
                    "r U R' U' R U r' U2 M' U M",
                    "U' F' U2 r' F r2 U' r' F2",
                    ""
                ]
            }
        ],
        "31": [
            {
                "scrambles": [
                    "R F' U' B' U2 B' R2 B L2 U2 F' L2 B' D L' D2 B D' U2 F' L2 F' y",
                    "L' D' B D F2 R2 D L2 R2 F2 L2 U L' F' U' B' F D L D' U'",
                    "B R' F' L2 F2 L2 F2 D U' F2 D2 U F' L F D L F' L R B' U2 y'"
                ],
                "solutions": [
                    "R U' R' U y' R' U R y"
                ]
            },
            {
                "scrambles": [
                    "B' D L' U F2 D2 B2 U' B2 U R' B D2 F2 D' B R2 B R' U R'",
                    "L' F D F' D2 B' L2 F L2 F' L2 F' U' B' U2 B2 L' D L' F2 L",
                    "L D B R2 U2 R2 F R2 U2 B' R2 F' L B' L2 U' L D' L2 B L U' y"
                ],
                "solutions": [
                    "r U' r' U M' U R U r'"
                ]
            },
            {
                "scrambles": [
                    "R' B' D U2 F U2 F' D2 U2 R2 F' R2 D R2 U' R' U B U2 R U",
                    "R F R B2 R2 B2 U2 B2 R2 F2 D' L2 F' D B R B R F2 R' U2",
                    "F U L' R2 B2 L2 F2 L D2 R D2 R' B' D2 F D B' F' L' R2 F L' y"
                ],
                "solutions": [
                    "U' R' F R F' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R B' R L2 D2 L2 F2 R2 F R2 D2 B2 R' D2 R D F D B' R2 y'",
                    "R' F' U' F2 R2 D B2 D' R2 F2 U' F R F2 D2 B' D2 F2 y",
                    "L' F' D' L2 U B2 U2 B2 L2 B2 U2 B2 F' L F L2 D F2 U2 F' L U"
                ],
                "solutions": [
                    "U' R' F R F' U' R' F R F'",
                    "F2 r U r' U2 F R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L U' L' U2 L2 B2 R F2 D2 R2 F2 R' B2 U L F' U' F L2 U'",
                    "F' D' R' U F2 D B2 U B2 U2 R2 U' R2 F D' U R F2 D U F2",
                    "R' B U' B2 D' B2 L2 U' F2 L2 U2 F' U F L U2 L' B' U R' U'"
                ],
                "solutions": [
                    "R U2 R' U' F R' F' R"
                ]
            },
            {
                "scrambles": [
                    "R F U R2 F2 U' R2 U R2 U F2 U2 F' R' F2 D' B L2 B' D F2",
                    "L' F' D U' B2 D' F2 U B2 D' B2 R2 U' F' L' D2 R U2 R2 D2",
                    "F' R' U F2 R2 B' R2 B U2 B2 D2 F' L B' U2 B D L D B2 F2"
                ],
                "solutions": [
                    "R U2 R2 D' r U' r' D R"
                ]
            },
            {
                "scrambles": [
                    "R' F' L D2 B2 L2 D' B2 F2 U' R2 D' F2 L' D' R' U R F2 D F' U2",
                    "B L' F2 U' B2 U F2 U' B2 U L B' U' R U2 R' F' U' F",
                    "L B' D' U R2 U B2 D U2 L2 U L2 B' L' U2 R U' R' B U2 B' U"
                ],
                "solutions": [
                    "F' U F R U2 R'",
                    "R' F' R U R U' R' U2 F"
                ]
            },
            {
                "scrambles": [
                    "F' R' B2 L' U2 L2 D2 L D' R2 B' D F2 B2 R2 L' D2 R L' U2 y'",
                    "R U F R2 B' R2 B R2 B' R2 B U2 F' L U' R' U F2 L' F' U2 F'",
                    "B D' R F R' F' U' D R U2 B' U R F D2 R2 L2 F U2 F' L2 F'"
                ],
                "solutions": [
                    "r U' R' U' M U' r U r'"
                ]
            }
        ],
        "32": [
            {
                "scrambles": [
                    "R U L U' L2 B2 F2 U B2 U B2 U2 R' U' L D' U2 L D'",
                    "L' U F U F2 D F2 U' F2 D R2 D2 L D R2 D' L' F U' L",
                    "F' D F' B' F D2 B' L2 F L2 U2 B' U' F U B' F2 D F U' y"
                ],
                "solutions": [
                    "U R U' R' U R U' R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' U' B L2 U2 B2 U B2 U2 B2 U' B2 U' F' L' F U' L' R B2 R' y2",
                    "F' R B' D L2 U B2 U' L2 D2 B2 D' L' B2 D' B2 D2 R' F R B' R' y",
                    "B' L' D U2 F2 L2 D2 B U' B2 D' R' F R2 U2 F L2 B D2 B' L2 D2 y"
                ],
                "solutions": [
                    "U R' F R F' d R' U' R",
                    "U2 F' U r' F' r U' F",
                    "U2 R' F R F2 r U' r' F2"
                ]
            },
            {
                "scrambles": [
                    "F' U R L D2 F2 U2 L D2 L D2 R D2 B' L U F U2 B' U",
                    "F D L R' B2 L2 F2 D2 F2 D2 R U2 L U R U' R' F U' F D F'",
                    "L D L U' L' U' B' U B D' L U2 F2 U2 L2 U F2 L2 U F2 U"
                ],
                "solutions": [
                    "U2 R U r' U R U R' U' r U' R'",
                    "R U' R2 F2 r U r' F R2 U R'",
                    "U R U' R' U R U' r' U R U' R' U' M'"
                ]
            },
            {
                "scrambles": [
                    "F U' F' L2 F2 L2 F2 U' B2 R2 U' R2 U B R' B' F2 R' F2 R' B2 U2",
                    "B' U B U2 L F2 U2 F2 U2 L' R2 B2 U L2 D L B' L U' B2 R2",
                    "R D' F' U R2 U B2 U2 R2 F2 D' B2 L2 B' D' B2 L2 B' F' U2 R' U"
                ],
                "solutions": [
                    "U2 R U' f R f' U R'",
                    "U' F R' F' R U' R U R'",
                    "U' r U r' R' F R F' r U' r'",
                    "r U' R2 U' R U' R' U2 R2 U r'",
                    ""
                ]
            },
            {
                "scrambles": [
                    "F' L' D L2 F2 U2 F2 U' F2 L2 U2 L2 R' F' R F D F2 D2 L' F y",
                    "F' L' F' U2 F2 U2 F2 U' F2 U' F2 U2 L U' L' U' F U' L U F",
                    "F U' R D' F2 U' F2 L2 F2 L2 U' R2 U' R' D R B2 U2 R F'"
                ],
                "solutions": [
                    "U R U' R' U R U' R2 F R F'"
                ]
            },
            {
                "scrambles": [
                    "F' L B F R2 B R2 F D2 F' D2 B' D2 U R2 D L U B U2 L' D",
                    "F D' L' D2 L2 D2 R2 U2 L D2 L D2 R F' L2 F R U2 L D F'",
                    "F' D' B U' R2 U B2 U R2 B2 U2 R2 U' B' L' B' L U' B' D U F"
                ],
                "solutions": [
                    "U2 F R' F' R2 U R' U R U' R'",
                    "U2 R U2 R' U2 R U' R2 F R F'",
                    "R U R' U F' U F R U R'",
                    ""
                ]
            },
            {
                "scrambles": [
                    "R B R B' U2 F' L2 F U2 B2 D2 R2 D2 U' B2 R B2 R2 U B' R2 U2 y'",
                    "B' D' F U' R' U' F' B2 D L U L D2 B D2 F B2 L2 F' L2 U2 L2",
                    "B' U' B D2 B2 F D2 B L2 B L2 F' U' F L2 F2 L U' L U' F"
                ],
                "solutions": [
                    "U' R U R' U' R U R2 F R F'"
                ]
            },
            {
                "scrambles": [
                    "B U' R' L2 R2 U2 B' L2 U2 B L2 U2 B R' B' L2 B L2 U L' B' L",
                    "F U' L' U2 F' L2 F' L2 F U2 B2 F2 D' R D B2 R' F' L R U' F'",
                    "F' R U B' U' L2 U2 R' F2 R2 D' L F B' L2 B D2 B' L2 F2 R2"
                ],
                "solutions": [
                    "U2 r U2 r' U2 r U' r' U2 r U2 r'",
                    "U2 R' F R F' U2 r U' r' U2 r U r'",
                    "y U2 R' F2 R U2 R' F R U2 R' F2 R",
                    "r U M U2 r R2 U2 R U r'"
                ]
            }
        ],
        "33": [
            {
                "scrambles": [
                    "R F' D' L2 U' L2 D2 R2 D R D2 L' F2 L F U R' U'",
                    "R' U R' B2 L2 D R2 B2 U L2 R2 B2 U' L' D U L' D' L F2 R2",
                    "B D' L D B2 R2 F2 U R2 U' R2 U' B R' F R2 U' R' U' F"
                ],
                "solutions": [
                    "U' R U' R' U2 R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' U F' U2 F' U2 B' R2 D2 L2 F' U R B' R' D2 U' R2 F2 L U",
                    "B' R' D U2 B2 R2 U2 R B2 U2 R U2 R B' L U B U2 L' D' B' R'",
                    "B U' F U L F' D' L2 D L2 F' L' B2 R2 B' R2 B U2 B L2 F2 L2"
                ],
                "solutions": [
                    "U r U' r' U r U r' R U' R'",
                    "M' U' R U r' U2 r U' r'",
                    ""
                ]
            },
            {
                "scrambles": [
                    "R B U R2 B2 U2 B2 R2 B2 U R2 B2 L U2 L' B2 U B R' U' R2 U2",
                    "L D' F' L2 B2 F2 U' L2 U2 F2 U' R2 F D' L2 B2 F' D U' B2 L",
                    "F L F R' D2 B2 R2 F2 L U2 R' D2 L2 U' B2 U' R' U2 B2 F L' F'"
                ],
                "solutions": [
                    "R U M U' R' U r U' R'"
                ]
            },
            {
                "scrambles": [
                    "L U B U B2 D' B2 F2 D L2 R2 U' L' F L2 B R' D' U2 B' D' R'",
                    "L B R L F2 R' D2 L B2 R' B2 F D2 B' L2 U2 F L' U R U' R'",
                    "R' F' R2 U F2 R2 U' F2 U2 R2 U' B' R F' R' B R2 U2 R' U2"
                ],
                "solutions": [
                    "U' R U' R' U M' U R U' r'"
                ]
            },
            {
                "scrambles": [
                    "F' R' U F2 D2 L2 F2 D R2 U F2 L2 D2 R' B2 U2 L' D' F2 R U2 F",
                    "R U' F' B2 U2 B2 D' R2 U' B2 U' B2 R2 B U B2 D B U2 F R' U'",
                    "L' F U2 R B2 R B2 R' U2 R2 F' L2 R U' R U L' R' U"
                ],
                "solutions": [
                    "U' R U' R' U2 R U R' U2 R' F R F'",
                    "R' F R F' R2 U R' U' R' F R F' R'",
                    "r2 D r2 U' R2 r' U r2 D' R2 r'"
                ]
            },
            {
                "scrambles": [
                    "R U F' U2 F2 R F2 U2 L2 D2 L' D2 L' F R' F' U' F R U' R' y'",
                    "F2 R D B R' U' B' R2 F2 L2 D' L2 F2 D' R2 F2 U' y'",
                    "R U' L F U R' U L' U2 R' L2 F R F2 D2 R' F2 L' U2 L' B2 U2 y2"
                ],
                "solutions": [
                    "y U2 F R U2 R' U2 F'",
                    "R U R' U' F' U' F U' R U2 R'",
                    "U' F' U2 L' U2 L F"
                ]
            },
            {
                "scrambles": [
                    "F R B' F2 D2 F2 R2 D R2 D2 R2 B2 U B' R F' R F' U2 F U' R' y",
                    "B D U2 F2 D R' B2 R2 B2 R' U R2 F D2 L2 F' R2 F R2 F",
                    "L B U' B' U D2 R' B' R2 B' L U2 L B2 U2 B2 R L D2 R"
                ],
                "solutions": [
                    "U R U' R2 F R F' R U R'"
                ]
            },
            {
                "scrambles": [
                    "R' F' R' U' L2 D' B2 D L2 D U2 R2 U R' D' U' F' U F2 R F U",
                    "F' D' L' B2 D2 F' R2 F D2 R D R' F' D R D' B2 D F2 U' y",
                    "L' F U F2 L2 F2 L2 D' L2 F2 D2 R2 U' R F' R' D L B' R D2 R"
                ],
                "solutions": [
                    "U' F R' F' R2 U2 R2 F R F'",
                    "D' r U' r' F2 U R' F R F2 D"
                ]
            }
        ],
        "34": [
            {
                "scrambles": [
                    "R D B' R B2 R U2 B2 U2 R2 U2 L U L' B U' B2 U2 B' D' U2",
                    "F' U B' F' U2 L2 D2 F L2 U2 R2 B2 L' U2 F' U2 F L U' F U",
                    "B U B2 U F2 U' B U F' U2 F' B2 L2 B' L2 U2 B' y'"
                ],
                "solutions": [
                    "U R' D' R U' R' D R",
                    "U' R' D' R U R' D R"
                ]
            },
            {
                "scrambles": [
                    "F U' B U' R2 D' L2 D B2 L2 D L2 F' D' F' L2 D R' B R' F U y'",
                    "B' R' F' D' F2 D' U2 L2 F2 U F2 D2 R' U B2 D2 B' U L2 D2 B y2",
                    "F' U R' U' F2 U' R2 U R2 U L2 R2 U2 R' F' U L F U L2 F' U' y'"
                ],
                "solutions": [
                    "y U L' U L U' L F' L' F",
                    "r' D' r U2 r' U' F2 U F2 D r"
                ]
            },
            {
                "scrambles": [
                    "L' F R D' U' R2 U' F2 D' B2 L2 U L B U B2 F' D2 B F2 L U2",
                    "B L U' R' F2 R F2 R U2 L' U2 R' D2 U' B' U' B D2 U' B' U'",
                    "R' F L' D2 F2 R U2 R B2 R' F2 R U R' U' L2 F L F L' F"
                ],
                "solutions": [
                    "r U r' U' R U M' U' r'",
                    "U' R U R' U' r U' R' U' R U r'"
                ]
            },
            {
                "scrambles": [
                    "R D' L' D' B2 L2 D F2 U' F2 L2 U2 L D U2 B U' B' U R' U2",
                    "R F L F2 L2 U2 B R2 U2 B' U2 R2 U' B L' B2 L2 U F' U2 F2 R' y",
                    "L D R' D F2 L2 U2 R2 U R2 U2 B2 L' B' D L U' L R D' F' D"
                ],
                "solutions": [
                    "U R U M' U' r' U' r U r'",
                    "F U' R2 D2 R' U' R D2 R2 U F'"
                ]
            },
            {
                "scrambles": [
                    "F' D' B U2 B D L F' D' B2 D L2 D2 R U2 B2 U2 D2 L U2 L",
                    "B' L U F2 U2 B2 D' L2 D B2 U' F2 U' F R2 F' R2 F U' L' B y",
                    "L B' L' B D L U F L B2 U' F' R2 F2 U B2 D' L2 F2 U' L2 U'"
                ],
                "solutions": [
                    "U R U' R' F R' F' R2 U R'",
                    "U' R U2 R' U' r U' r' U' r U r'",
                    "R U' R' U' R' F R F' U R U R'",
                    "r U r' U R U2 R' U r U' r'"
                ]
            },
            {
                "scrambles": [
                    "F' L B' U2 B2 U' B2 U2 L2 D F2 U F' U F' L2 D2 B D L' F U y",
                    "B F2 D2 F' L' B' L U' B' U' F B2 D2 F L2 F L2 B' y'",
                    "R' F L' U2 L2 R2 B2 R2 U' B2 U R F' R D' B2 L' U R U' F"
                ],
                "solutions": [
                    "R U R' U2 R' F R F' R U R'",
                    "U2 R U' R' U r U' R' U' R U r'"
                ]
            },
            {
                "scrambles": [
                    "R' D' B R2 B2 R2 B' L' U L' D R U' R2 F2 R2 L' F2 R F2 U2 L2",
                    "R B R' F2 L2 D' F2 U' R2 U' R2 U2 F D2 R' F' R' U2 B2 R2",
                    "L' D' L2 B' D2 R2 B' D2 L2 B' L' B L F' U' B2 D L' U2"
                ],
                "solutions": [
                    "U r U' R' U R U r' U' R U R'",
                    "U R U' R' U' F' U F R U R'",
                    "F U R2 D2 R' U' R D2 R2 F'"
                ]
            },
            {
                "scrambles": [
                    "R' F' D' R D2 L R2 F2 R' B2 D' U' F L F' L2 R B2 U L' F'",
                    "L F D L2 F' L2 D2 B' D2 F R2 F' R' F2 D' L' U' B F U' B'",
                    "B U' R' D L2 U' R2 D F2 L' D2 U2 R U' F' R F' U B'"
                ],
                "solutions": [
                    "U r U2 r' U2 r U r' U2 r U2 r'",
                    "R U R D r' U r D' R' U' R'"
                ]
            }
        ],
        "35": [
            {
                "scrambles": [
                    "R U' L' B2 L2 R' U2 R D2 B2 L U2 R B D F' D B F' R2 U",
                    "R' F R' F2 U2 R2 B2 D' F2 D B2 R2 U2 F R2 U2 R U R2 U' R U'",
                    "L' U B L2 R2 D R2 F2 R2 F2 D2 F2 D2 L D' R D2 R B' L2 U' F'"
                ],
                "solutions": [
                    "R' D' r U' r' D F R F'"
                ]
            },
            {
                "scrambles": [
                    "L' U L' B2 U2 L2 F' D2 F' R2 B D2 F L D2 R' B2 R D2 F U2 y'",
                    "L' B L R2 B D2 B L2 D2 L2 B2 L2 R B2 F' R D2 L' D2 U' B' y",
                    "R D R2 B U2 F' U2 F R U2 B' D' U R' F' R2 U F"
                ],
                "solutions": [
                    "R2 D r' U' r D' R2 U R U' R'",
                    "U2 r U' r' U R' F R F' r U2 r'"
                ]
            },
            {
                "scrambles": [
                    "L D F' L2 U2 B R2 F' L2 B' D2 B' R2 U' R' D' R' U F2 L' U2 y",
                    "F' D' F' D' R' U R D F D F U F2 L2 D2 B D2 R2 L2 F R2 F2 y",
                    "F L U F' U2 L B2 U L2 F U B L B' R2 B' U2 L2 D2 B2 U2 F y"
                ],
                "solutions": [
                    "U' R U R' d R' U' R",
                    "U M' U R U' M U' R'",
                    "R U R2 F R F' R' F R F'",
                    "R U R' l' U R U' R' U R U' x'"
                ]
            },
            {
                "scrambles": [
                    "U B2 L' B' U L U2 B' D2 B U2 L2 B L2 B2 D2 y'",
                    "F' U' B R B2 L2 D2 R B L' F' L B2 D' R2 L2 F2 U F2 R2 B2 R2",
                    "F R' D L D L' F' R' U2 D' F R' F' U2 B2 U' F2 L2 B2 D' F2 U2"
                ],
                "solutions": [
                    "U2 R U' R D r' U' r D' R2"
                ]
            },
            {
                "scrambles": [
                    "F' U B L2 F2 D2 F D2 B' L2 F L F U F' U' L' F U",
                    "B' D' F' D F2 U' R2 U R2 U' R2 U2 F U' R2 B U F L' U L F2",
                    "R' U B' L2 B U2 B F2 R2 B' U2 F R B U' L F2 L B' F' U'"
                ],
                "solutions": [
                    "U2 R U' R' U' F' U' F",
                    "R U R2 F R F' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L F' D U' R2 U R2 F2 D' F2 L2 U' L F U2 F' L F' L' F2 U2 y'",
                    "R U R2 F2 D2 L2 F' D2 R2 F L F U F' L' B' F' R' F'",
                    "F' L U R2 U2 L2 B2 D B2 D2 F2 D B2 R F R' B R' D2 U2 B'"
                ],
                "solutions": [
                    "R' D' r U' r' D R U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L D' F' D' F2 D2 L2 R2 U' R2 U B2 R F D B2 R' D' B' F' L R",
                    "B D L U B2 D' R2 D B2 D L2 D' L' D' B2 R F' U' B F U2",
                    "F D R2 F' L2 F2 D2 F' R2 F' L2 R' U R F D' U R' U' F' y"
                ],
                "solutions": [
                    "U2 R U R' F R' F' R",
                    "R2 D R' U2 R D' R2 F' U' F"
                ]
            },
            {
                "scrambles": [
                    "B' L B' R2 F2 D2 B R2 B' D' R D2 L' D' B F2 L' F U2 F' y",
                    "B' L' D U B2 L2 D F2 U F2 L2 D2 B2 L R2 B R U' B U2 B' R'",
                    "L D B' D2 F2 L2 U' L2 F2 D F2 D' L2 F' L U' L' B' L' D L2 F"
                ],
                "solutions": [
                    "U R' D' r U r' D R2 U2 R'",
                    "R' F R F' U2 R' F R F' R U R'"
                ]
            }
        ],
        "36": [
            {
                "scrambles": [
                    "F D B R2 D B2 D' R2 U' B' D' U R' F' R F' U F",
                    "F L D B F L2 B D2 F' D2 F' U F L2 B2 L' F' U2 R' U2 R2 U",
                    "F' L D L2 U2 B2 R U2 R U2 L' B2 D R B' R2 D2 U' B U L2 U y"
                ],
                "solutions": [
                    "U F' U' F U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "B' L' F R2 F2 U2 B2 U2 F2 L2 F2 L2 D' F2 D F L U' R U B R2 y",
                    "F' D' F L2 B2 D R2 B2 L2 U' F2 R2 F' R' F' U2 F2 R2 F' D U' F",
                    "F' L' D U2 R2 B2 D' B2 D' R2 U' L2 D' F' L' F2 U R B2 R2 B2 R"
                ],
                "solutions": [
                    "R2 D r' U r D' R' U R'"
                ]
            },
            {
                "scrambles": [
                    "F' L' B R2 B2 R' U2 R B2 R2 B' U' B' U' B L F2 R' F' R",
                    "F D F D2 F2 U' B2 U B2 F2 L D L2 F L F U'",
                    "R' B' R D B2 D2 F2 L2 F U2 F' D2 B' L2 U B L2 D' B2 F2 R' B"
                ],
                "solutions": [
                    "U2 F' U' F U R U' R'",
                    "R U R' U R U' R' d' r' F r",
                    "R U R' F U2 r U r' U2 F'"
                ]
            },
            {
                "scrambles": [
                    "F D' R B2 F2 U2 B2 F2 R2 U R2 U' R' F D2 L2 B L' D2 L' D' F2",
                    "R B D L2 F2 U F2 D' L2 U B2 U B U2 B L' B R B2 L R2 U'",
                    "B R D L2 U' L2 D F2 L2 B2 U2 L' D2 F2 R B' U' F' U F"
                ],
                "solutions": [
                    "U2 R' F R F' r U' r' U' r U r'"
                ]
            },
            {
                "scrambles": [
                    "B' R B R2 U L2 B2 R2 B2 R2 D B2 D' L B' R2 F R B F' L",
                    "F U' B' R2 F2 D' B2 F2 R2 F2 U' B2 L2 B U2 F' L F L' F U",
                    "F' R B F U2 B2 F' R2 U2 B' D2 L2 F' L D2 R' B2 U F U2"
                ],
                "solutions": [
                    "U2 R' F R F' U2 R U R'",
                    "R U R2 U' R F' R' U R F"
                ]
            },
            {
                "scrambles": [
                    "L U F' D' R L B' R' L2 U L2 D R2 F' U2 F2 U2 F2 L2 F' R2 F y'",
                    "F L' F' D L2 D' B2 D L2 D' L' D' L U B U2 L D2 R' D' F'",
                    "R' B D' B2 L2 D2 F2 U' R2 U L2 B2 D B R U B' R2 B' R2 B2 U"
                ],
                "solutions": [
                    "U2 R2 D r' U' r D' R2 U' R U R'",
                    "R' F' r U2 r' F2 R2 U2 R' U' F",
                    "F' U2 r' F2 r2 U' r' F U' F",
                    "R2 D R' U2 R r' U' r D' R' U R'",
                    ""
                ]
            },
            {
                "scrambles": [
                    "R' F' L' D F2 D R2 B2 U R2 D2 F2 L' U' R' F' R F U R y'",
                    "B R L2 B' D2 F2 D2 L2 B2 D2 U' L2 B' L' B' L' D2 B2 U2 F'",
                    "B' L D R2 F2 D' F2 D' R2 D' B2 U' L U B2 F2 L' F2 R2 B U2 R' y"
                ],
                "solutions": [
                    "F' U' F R U R' U' R U R'",
                    "R U R U R' U' R' F R F' R'"
                ]
            },
            {
                "scrambles": [
                    "L' B U' B2 R2 B' L2 D2 F L2 B2 R B' U2 R2 B L U F2 R U F'",
                    "F U' B U R2 D2 B2 D2 R2 U' B' D U B' R' B D' F2 U F U'",
                    "B R' B F' L2 F' D2 F' D2 B D2 B2 D F L2 D L2 D' F' R B' F'"
                ],
                "solutions": [
                    "R U M' U2 f R f' U2 r'",
                    "U F' U' F2 U R U' R2 F' R",
                    "R U R2 D' r U r' D R U' R U R'",
                    "R U R2 D' r U' r' D R U R U R'",
                    "R' F2 D' F' D R U R U' R2 F' R"
                ]
            }
        ],
        "37": [
            {
                "scrambles": [
                    "R U B' U2 B' U2 B2 U2 B' L' B' L U' R' U R U' R'",
                    "B' L' B L2 D2 F U2 F' D2 U2 L2 B2 R' U R U' L U2 B2 U' B' y",
                    "L' B' D B' R2 B R2 F' R2 F D2 B D2 R B D' B' R D2 B2 D L"
                ],
                "solutions": [
                    "U' R' F R F' R U' R' U R U' R' U2 R U' R'",
                    "U' R' F R F' R' U2 R2 U R2 U R",
                    "U R2 U R' U' R' U2 r U R U' r' R'",
                    "R U' R' B' R' U' R2 U R' B"
                ]
            },
            {
                "scrambles": [
                    "L' U B L2 D2 R' F2 R' U2 R F2 R2 D' F2 U F D' L' U2 B U2",
                    "F R' B' R2 F2 D2 U' R2 U B2 U L' U' L' B' U2 F R2 F2 R' U'",
                    "B' U B U2 R B' U' R F2 L2 D' B' D' B L2 F' D2 B' D2 F' R2 B2"
                ],
                "solutions": [
                    "U' r U' r' R U R' U r U' r' R U R'",
                    "R' F R F' U F' U2 F U' R U R'",
                    "R' F R F2 U' F U' R U R' U' R U R'",
                    "R U' R' U R' F R F2 U2 F R U R'"
                ]
            }
        ],
        "38": [
            {
                "scrambles": [
                    "L F' U B L2 B' U2 F2 L2 D2 F' L2 F2 D' F2 L2 B R2 D2 B' L'",
                    "R' B U' B R2 U2 B2 R2 U2 F R2 B' D B' F2 U L2 F U' R'",
                    "R' F D' F U' F2 R2 U2 B' D' B U' R U R2 F2 D F2 U2 D' R2 D"
                ],
                "solutions": [
                    "R2 U2 R' U' R U' R' U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R' D L' U2 L2 D U2 F2 D' L2 U' L2 R F' U' F L' R' D' F R",
                    "F L F R' D2 F2 L' R2 B2 D2 U2 L R' B' F' L' B' F' U2 L' F",
                    "R B L R2 D2 R2 U2 B2 L2 B' U2 R2 B' L F L2 B R U2 R B' R'"
                ],
                "solutions": [
                    "F R' F' R2 U2 R' U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "F U' F U' F2 U2 F2 U' F2 U' F2 U2 R U2 R' F' U2 F' L' U' L U2",
                    "L F' U F2 L2 D' L2 D F2 U' L2 U2 L U R' F2 R F' R' F2 R",
                    "L' B R2 B2 R2 B2 U R2 U' R2 U2 R' B R U2 L F' U F R2"
                ],
                "solutions": [
                    "U R U' R' U' R U R' U R' F R F'",
                    "R' F R U R U' R2 F' R U' R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "L' B' L R2 D' F2 U' R2 F2 U' F2 R2 F U' B' R' B U' F D R2",
                    "R B' L' B U2 B' L2 F R2 F D2 R2 F2 U L' U' L' B' L B2 R' U'",
                    "F L' U' B2 D2 B' D2 B' F' U2 F' U2 L F' U' L' U F' U L F' U2"
                ],
                "solutions": [
                    "M' U R U' R' U' R U' r' U2 r U' r'",
                    "R U' R' U' r U' r' U2 r U r' R U2 R'",
                    "R U2 B2 r' U' r B' R2 F R F'",
                    "R U' R' U2 R2 D r' U' r D' R' U' R'"
                ]
            }
        ],
        "39": [
            {
                "scrambles": [
                    "F U' R B F' L2 U2 L2 B' U2 B L2 U' B' U' F R2 F R F' U F' y'",
                    "F' U L R2 D' R2 D2 L2 R2 D' R2 D L' D L2 U' R F2 R' F",
                    "R B' L' U' F2 U R2 U' R2 D' F2 U L' F2 D L B' L B2 F2 R"
                ],
                "solutions": [
                    "R U2 R' U R U' R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "R' U F' L2 F L2 F U2 L2 F2 L2 U2 F' U R2 F U' R2 F' U R' U2",
                    "L B L' D U' L2 U' F2 D2 B2 F2 D B2 L' B' L' U2 R2 U R2 y",
                    "B' R' F R F2 R D2 B2 U2 F2 L' B D' B D F D2 B U2 R2 U2"
                ],
                "solutions": [
                    "R U' R' U R U2 R2 F R F'"
                ]
            },
            {
                "scrambles": [
                    "F' L' D' U2 B L2 D2 F U2 R2 F U2 R2 D F2 L' D2 L F2 D2 U F'",
                    "R B D' R2 D R2 U2 B2 R2 U2 R' U B2 U' B' R' U' R' U2",
                    "B U' B F L2 B' U2 L2 F2 U2 F L2 U' B' U2 F L' U' L U2 F U'"
                ],
                "solutions": [
                    "R U2 R' U R' F R2 U R' U' R' F' R"
                ]
            },
            {
                "scrambles": [
                    "L' D B D F2 D' B2 D R2 D2 F2 D' B R' D2 B L' D F2 U L2",
                    "R' U L B2 L2 F2 R2 F2 U' L2 D' F' L2 R U' L F' U' F'",
                    "R F R B2 D2 L2 D' L2 D' B2 U2 R2 U' R U2 B U F' U B' R'"
                ],
                "solutions": [
                    "R U2 R' r U' r' U M' U2 R U r'",
                    "r' U' R2 U' R2 U2 r F' r' F2 r F",
                    "R U R D r' U r D' R2 U2 R U R'"
                ]
            }
        ],
        "40": [
            {
                "scrambles": [
                    "B' U' B D2 L2 F L2 U2 F' U2 F D2 F' R B2 D L2 D' B' R' U F",
                    "F D' B D2 L D2 F2 L R2 U2 F2 L' F U B' U2 L B2 L' F2 U2 R2",
                    "R' F' D' L' U2 L' F2 R B2 R F2 L2 B2 D F U B' U2 B U2 R B y"
                ],
                "solutions": [
                    "U R U' R' F R U R' U' F' R U' R'",
                    "F2 r U r' F U2 R U R'"
                ]
            },
            {
                "scrambles": [
                    "L' U' B' U2 F R2 F' L2 F D2 R2 F' L2 U' R B L F R2 F' U' R'",
                    "F U' L U' F2 U' L2 D R2 B2 D' L2 U B' R' B U L' U2 R' U2 F' y'",
                    "B' L' F' B U L' U' L F' B' L D2 R' F' U2 B' L2 B U2 D2 B R2"
                ],
                "solutions": [
                    "r U' r' U2 r U r' R U R'",
                    "R' F R D R U R U' R2 D' F'"
                ]
            }
        ],
        "41": [
            {
                "scrambles": [
                    "B' D' L D2 U2 R2 U2 F2 L' U2 F2 R' U' F D' F' D2 L2 B' U2 R2",
                    "B' D B2 R2 B' D2 B D2 R2 B2 D2 R F R B' F' U R2 D U' y",
                    "R D' R' F2 L2 D2 F' L2 F L2 D2 R D R2 F U' R F U F"
                ],
                "solutions": [
                    "U' R U R' F U R U' R' F' R U R'",
                    "R U R' U' R U' R' U2 F' U' F"
                ]
            },
            {
                "scrambles": [
                    "B' L U F2 U' L' B U2 F' R2 F2 U' R' U F2 R2 F2 U' F2 U2 y'",
                    "B' U R' L' B2 D2 L' D2 L2 R U2 B2 R B R' B U B R' B U B'",
                    "F U' B L2 F2 L2 U' F2 U B2 U F' D U2 R U R2 D' B U"
                ],
                "solutions": [
                    "R U' M' U' r' U2 r U r'"
                ]
            }
        ]
    },
    "ZBLL": {
        "T1": [
            {
                "scrambles": [
                    "B' R' B R2 U' B2 D B2 U' B2 F' L F D' B2 U R2 U'",
                    "L' B L2 D' F2 L2 B2 R2 U R2 U2 B L B' R F2 R B U2",
                    "F D' R D' B2 D F2 D' B2 D F2 U R' D R U' R' F' U2"
                ],
                "solutions": [
                    "U R' D R D' R' D R U R' D' R D R' D' R",
                    "U' R U R' U R U2 R' L' U' L U' L' U2 L",
                    "U' R U R' U R U2 R' U2 R' U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L U R' B2 R2 U' B2 D F2 R2 D' L2 F2 R U' R D' L' R' U2 R2",
                    "B' R D' F L2 U2 B L2 B' L2 U2 F' L' D R2 D' L' D R B U2",
                    "B D F U' L2 U2 L2 F2 D2 U L2 D' U' F' U F' D2 B' L2 F'"
                ],
                "solutions": [
                    "R' U R U2 R' U' R U' R U R' U' R' U' R U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L F' L' F' D2 F' R2 F R2 F D2 L F' D2 R' D2 F2 L' U'",
                    "L' F R' D2 B' U2 F' U2 F L' B D2 F2 L F' R U'",
                    "R D' F L2 U' L2 D F2 U R2 D L2 R' U' R D' R D B' U L2 D'"
                ],
                "solutions": [
                    "U2 R' U2 R U R' U R2 U2 R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R F L' B2 D2 F' U2 L2 F2 R2 B D2 B' R' U2 B R U2 F2 L' F' U",
                    "F L D' B2 D' U2 B2 U L2 R2 D2 L2 U' R B2 L B2 L' F2 R F' U'",
                    "L B D B R2 D2 F2 R2 D2 B R2 U2 F' U' R2 B' D B U' B L' U"
                ],
                "solutions": [
                    "R U2 R' U' R U' R2 U2 R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "B' L U' L2 B' U2 F' L2 F' R2 D2 R2 F2 U' L' B F' L2 F U2",
                    "B L' B' U B2 U' B2 D' R2 U2 R2 U' B' L U' L' U' B D L U2",
                    "R D B U L2 D F2 D' L2 R2 D U2 B D' R U2 R2 U B' D'"
                ],
                "solutions": [
                    "R' U R U2 R' U' R U2 R' U' R U' R' U R"
                ]
            },
            {
                "scrambles": [
                    "L B D B2 D2 F2 R2 B2 U2 R2 F2 D F' D L2 B' D L2 F U L",
                    "R F D' F2 L2 B2 U' L' D L' F2 R2 U F' R' U'",
                    "R' U' B D L2 R2 D F2 L2 D U2 L2 F R D' L' F2 L' D2 R2"
                ],
                "solutions": [
                    "U2 R U' R' U2 R U R' U2 R U R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' R F D2 F D2 F' U2 F' D2 F D2 U2 R' B2 U F U' B' F' U'",
                    "R F U F2 U2 F2 U2 F' D2 B' L2 B D2 U R2 U R2 F' R'",
                    "F L D' U L2 D' B2 D B2 U' B2 U B2 L U L D L' F' U2"
                ],
                "solutions": [
                    "R' U R2 U R' U R' U' R U' R' U' R U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F' R U' D2 F2 L2 D2 L2 D' L2 U' F2 U2 R' F R B2 U R2 B2 U' R'",
                    "B R B' R2 U2 R2 B2 U R2 U R2 U' B' R' B' U R U2 R' U",
                    "L' U F U2 F2 U' F2 U L2 U2 B2 R2 B R2 U2 B L' F2 U2 F2 U'"
                ],
                "solutions": [
                    "U' R U R' U R U' R' U R' U' R2 U' R2 U2 R"
                ]
            },
            {
                "scrambles": [
                    "L' B' L U2 L2 F2 U R2 F2 D' F2 R2 U' R D2 R' F2 L B' L",
                    "F R' B D2 U F2 L2 U' R2 D' R2 D2 U' B' U' F U2 R2 F R F'",
                    "L' U' L' B2 F2 R2 D R2 U F2 U' B2 F2 L U L' D F2 D' L2"
                ],
                "solutions": [
                    "U2 R' U2 R U R' U R U' R' U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L B' D' U' R2 D' U' F2 U F2 L2 U' L D2 R' B2 R U' R2 B L' U'",
                    "B R' U F2 U R2 U R2 F2 U2 F2 U F2 R F2 U2 B' R' F2 R F2 U'",
                    "F U R U2 R2 F2 D' L2 U L2 U' F2 R U2 R' D R U2 F' U2"
                ],
                "solutions": [
                    "R U2 R' U' R U' R' U R U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "L D' B D' F2 L2 D B2 U' F2 R2 U B D L' R' U2 R U R' U R",
                    "L B U' B2 R' F2 L2 R' F2 R' B2 R' D' B' D L2 B' U L2 B2 L U'",
                    "R' B U B2 L2 D2 F2 D R2 D L2 D2 F2 L F2 D2 R' B2 R B' R"
                ],
                "solutions": [
                    "U' R' U' R2 U R2 U R2 U2 R' U R' U R"
                ]
            },
            {
                "scrambles": [
                    "F' R' U' D2 L2 U B2 U' B2 U' F2 R2 U2 B D B' D' L2 B2 R' F",
                    "B' L F' U2 R2 D' F2 U F2 L2 U B2 U2 B' U' L2 D' R2 D2 L' B U'",
                    "L F D' F2 D F2 R2 D' F2 D F2 R2 F' D' F D L' U' B' R2 B"
                ],
                "solutions": [
                    "U' R U R2 U' R2 U' R2 U2 R U' R U' R'"
                ]
            }
        ],
        "T2": [
            {
                "scrambles": [
                    "L' F L' F L2 U2 B U2 B' U2 L2 F' L F' U B U' B' U' L U'",
                    "L D' L' D F2 U' L2 U2 L2 F2 U' F2 D R U R' D' F2 U'",
                    "B U' F' U' L2 F2 D2 R2 U' B2 D' R2 F' U' F' D' F U B' U"
                ],
                "solutions": [
                    "U2 R U R' F' R U R' U' R' F R U' R' F R U R U' R' F'",
                    "U R U R' U R U R2 D' r U2 r' D R2 U R'"
                ]
            },
            {
                "scrambles": [
                    "F' U R U2 R2 U' R2 U' R' F' R' F U2 F' R F2",
                    "B' U' B' U B2 U' R2 U' F2 L2 U R2 D2 B D B L2 D U B'",
                    "L B L F2 U' F2 U F2 U L2 U' L2 F2 L' B' R' F2 L' R U"
                ],
                "solutions": [
                    "U R' U' R U' R' U' R2 D r' U2 r D' R2 U' R"
                ]
            },
            {
                "scrambles": [
                    "B' R' U' D2 F U2 F' U2 F' L2 F2 R2 U2 L D' L' D' L2 B' R' U2",
                    "F L' B D2 L2 F L2 D2 B L2 R2 F2 L D B2 L' R2 F L' U2",
                    "R B' R' D2 L2 F' L2 F U2 L2 F' L' F2 L' U2 F' D2 U"
                ],
                "solutions": [
                    "U2 R U' R2 D' r U2 r' D R2 U R'"
                ]
            },
            {
                "scrambles": [
                    "L' F D R2 D' F2 D' U2 B2 U' L' B2 D F L' D' U2 B2 D",
                    "F L' F L2 U B2 L2 U2 L2 U' L2 D L' U' F2 R2 D' F L B2 F'",
                    "L D F D R2 U L2 D' L2 U' L2 U' B' U' F2 L' D' L' R2 B2 L'"
                ],
                "solutions": [
                    "R' U R2 D r' U2 r D' R2 U' R"
                ]
            },
            {
                "scrambles": [
                    "F' L' U B2 L2 D' L2 U B2 D2 U' F2 R' D F2 L F' D B2 F2 R",
                    "L U R D' L2 F2 D' B2 D F2 L2 D U R' D' U2 R U R' D L' U'",
                    "F D' F' R' D R2 D' F2 D2 U B2 L' D2 F' D F' U B2"
                ],
                "solutions": [
                    "R' U2 R U2 R2 D' R U2 R' D R2 U' R' U R",
                    "R' U' R U2 R D R' U' R D' R2 U R U' R' U R"
                ]
            },
            {
                "scrambles": [
                    "B' R B L2 D' R2 D2 R2 B2 U R2 D' U' F' R B2 F L U' L F2",
                    "F U B' U2 B' L2 F R2 F L2 B2 R2 U' F U F2 U F U2 F2",
                    "R U' R L2 D' F2 U2 R2 B2 R2 U2 F2 D R' U L2 R' U' L2"
                ],
                "solutions": [
                    "U2 R U R' U2 R' D' R U R' D R2 U' R' U R U' R'",
                    "U' R U2 R' U' R U r' F r U2 R' r' F r"
                ]
            },
            {
                "scrambles": [
                    "F' L' U F2 U2 F2 U' F2 U' F2 U2 L2 U' L' U2 F D2 L U' L' D2 U'",
                    "B R' B' F2 L2 F2 U' L2 B2 F2 R' D2 R' D F2 R2 B' R B'",
                    "F' L2 F L2 U2 F U2 F U L2 U L2 U' F2 L2 U'"
                ],
                "solutions": [
                    "R' U' R U R2 D' R U2 R' D R2 U2 R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R' D B' R2 D2 L2 F2 D' L2 D' R2 U2 B' D B' U2 B D2 U' R U",
                    "R U' L' U L2 R2 D F2 D R2 U' R2 D2 R U L2 U' L U'",
                    "B' U' F' B D2 U2 B U2 B' F2 U2 F2 D2 U' B2 U' B U' F U' B2"
                ],
                "solutions": [
                    "U R U R' U' R U R2 D' R U' R' D R U2 R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' L F' D2 F2 D' R2 D F2 D' R D' R' F' R F2 L' B U",
                    "R D R' U' R2 F2 U' L2 U' R2 U B2 U' L' B2 L' U' R2 D U2 R2",
                    "B L' D R2 U2 R2 F2 U F2 D' L2 D U' L' U' L D2 L2 D L B' U'"
                ],
                "solutions": [
                    "U R' D' R U' R' D R U' R U' R' U R U' R' U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "B L' B U R2 U' L2 U' L2 U R2 U' B' L2 U L' U B' F R2 F'",
                    "L B' L U L2 F2 D B2 D' F2 U' F2 L2 F' D2 L B L' D2 B D2 F'",
                    "F' L U D' L2 F2 U' L2 U F2 U' L2 D' R U R' D2 U' F2 L' F U"
                ],
                "solutions": [
                    "R U' R' U R U R' U' R U R' U R' D' R U R' D R"
                ]
            },
            {
                "scrambles": [
                    "B' R B R2 U F2 L2 D B2 D' L2 F2 U R' U2 R' F' U2 F R",
                    "L U L' F2 D' L2 U' R2 U L2 D F2 L U2 R D2 R' U L'",
                    "R D' B F2 R' B2 L D2 L D2 L2 B2 R B' L F2 L' D R'"
                ],
                "solutions": [
                    "U R U R D R' U R D' R' U L' U R' U' L"
                ]
            },
            {
                "scrambles": [
                    "R B' U' L2 D F2 D B2 U2 R2 B2 D2 F' U' F' U2 B R' F U' F'",
                    "B U' L F2 U' L2 R2 D' L2 D R2 U F2 L' U B' U2 L' U2 L U'",
                    "B' L F2 L2 D2 B' U2 F2 U2 L2 F U F R2 U2 L' F2 D B L2 F2"
                ],
                "solutions": [
                    "U r U r' R U R' U' R U R' U' r U' r' F R U R' U' F'",
                    "U2 R2 F R U R' U' R' F' R' U' R2 U2 R U2 R"
                ]
            }
        ],
        "T3": [
            {
                "scrambles": [
                    "R D R' U' R2 U' R2 D B2 D' B2 R D' R' U2 R' U' R",
                    "L' D' L B2 D L2 D' B2 L2 B2 L2 U' L' D U L' U' L' U L2",
                    "B' R B R2 U' R2 U R2 U R2 U B2 R2 F D' R' D F' R2 B2 U'"
                ],
                "solutions": [
                    "R' U' R' U' R U R' F' R U R' U' R' F R'",
                    "R' U R U2 L' R' U R U' L"
                ]
            },
            {
                "scrambles": [
                    "F R U' B2 D L2 D' L2 U L2 U' L2 B' L U L' B' R' F' U",
                    "F L D' F2 U F2 U' F2 D' B2 U2 R2 U R' B2 R U' R' D2 F U'",
                    "F U' F' U' B2 D L2 D' L2 U B2 R2 F' D F R2 U'"
                ],
                "solutions": [
                    "R' U2 R U R2 F R U R U' R' F' R"
                ]
            },
            {
                "scrambles": [
                    "L' D F L2 D B2 L2 D' U' F2 U' B2 U2 B' U' L R2 D L' F L' U",
                    "R' U F' R2 D2 F2 R2 U' L2 B2 R2 D2 B D2 L U2 L D R' F2",
                    "B U' B U' L2 B2 U B2 L2 U B2 U2 B U F' L2 U B' U' F"
                ],
                "solutions": [
                    "U2 R' U' R2 U R' F' R U R' U' R' F R2 U' R' U' R' U R"
                ]
            },
            {
                "scrambles": [
                    "B' U F' U2 B2 L2 U' L2 B2 U B2 L2 U2 B' R2 D' F' D R2 U' F",
                    "L' D F U' B2 U2 F2 L2 U F2 D' B' U L2 B' U L2 U2 L' R2 U2",
                    "F R B' R2 U' R2 D' L2 D R2 D' L2 D R' U B R' U' R2 U F' U2"
                ],
                "solutions": [
                    "U2 r U' r U2 R' F R U2 r2 F"
                ]
            },
            {
                "scrambles": [
                    "R' B D R2 B U2 B' D2 B U2 B' D2 R2 D' B' U' R U' R' U2 R U",
                    "F U R D L2 U L2 U B2 U' B2 U B U B D' B2 R' F' U'",
                    "R U' L' U R2 D2 U' R2 U' L2 D2 U2 R' U L' U L' U L"
                ],
                "solutions": [
                    "U' R' U' R' D' R U R' D R U2 R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "L D' R U B2 D' B2 U' R2 U F2 L' D' U' L D L R D L' U' y'",
                    "L' U L' D U F2 D2 F2 R2 D2 R2 F2 U L D F2 U2 L2 U' R U2 R' y'",
                    "R' B D B2 D2 B U2 F U2 L2 F' L2 F U' B' R2 U' F' D B U' R y'"
                ],
                "solutions": [
                    "R' U' R y R U R' U' R l U' R' U l'"
                ]
            },
            {
                "scrambles": [
                    "F' R F' L U2 L B2 R' B2 L2 F2 L2 R2 B' R F' D F D' B2 L2 B'",
                    "L' D' R B2 U R2 U' R2 D2 L2 U R2 D R' U F2 D' F2 R' D' L' U2",
                    "R' B' L D' F2 D' R2 F2 U2 L2 F2 D2 R' U' R2 U B' D F2 D' U' R"
                ],
                "solutions": [
                    "R D R' U' R D' R' U' R' U R U' R' U R U R' U' R",
                    "U L' U2 R U2 R' U2 L U R U R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R U' F D2 B2 U2 B2 U' F2 U F2 U' F' U2 F' D2 F R' U'",
                    "R U' F D2 B2 U2 B2 U' F2 U F2 U' F' U2 F' D2 F R' U'",
                    "R F L B2 U2 L U2 L' B2 L' D2 B2 D2 U' F2 R' U' R F2 U F' R'"
                ],
                "solutions": [
                    "F U' R' U2 R U F' R' U' R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "L' D L' U2 L2 B2 U F2 U B2 D2 F2 D2 L' U L' U' L D'",
                    "B' L B' U2 R2 D B2 L2 U L2 D' R2 U' B' F2 U2 R' U2 F2 L' B' R2",
                    "B D' R B2 R F2 L' D2 L' D2 F2 U' F2 U' R2 U B2 L2 B' U'"
                ],
                "solutions": [
                    "U2 R' U' R U' R' U R F U' R' U2 R U F'"
                ]
            },
            {
                "scrambles": [
                    "F' R' D' L2 U F2 U R2 U' B2 U' B2 D2 B D2 B' D' L2 B2 R' F",
                    "B' L' B D2 L2 U F2 D R2 D' F2 U' L2 F' R F' U2 R' F2 D2 B2 U",
                    "F' U L U' L2 F2 D L2 B2 U R2 B2 F2 R U' R' F2 U2 L' F U"
                ],
                "solutions": [
                    "R U R' U R U' R' U' L' U2 R U2 R' U2 L"
                ]
            },
            {
                "scrambles": [
                    "L D' F' R2 D' B2 D L2 R2 U' F2 L2 U F D L2 B L B2 U B",
                    "L' F' L U2 R2 D2 F' D2 R2 U2 L2 B' D' L2 D L F L U L2",
                    "R U' B' D F2 R2 B2 F2 D R2 D2 L2 D' R' U B2 R' D2 U' B' R2 U2"
                ],
                "solutions": [
                    "R' U2 R U R' U R F U R U2 R' U R U R' F'"
                ]
            },
            {
                "scrambles": [
                    "B R B L2 U' R2 U L2 U' R2 U B' L' R' B' R B L B' R' U'",
                    "B L' B' D R2 D' L2 D R2 D' L2 B2 L' F2 L B' L' F2 L2 B' U'",
                    "L' D' F R2 D' L2 D R2 D' L2 F' U F D F' D U' L U'"
                ],
                "solutions": [
                    "r' U' l' U2 R U' R' U2 l R U' R' U2 r"
                ]
            }
        ],
        "T4": [
            {
                "scrambles": [
                    "L B' U' L2 B2 D' B2 D L2 B2 U B' L2 D L U2 L' D' L U'",
                    "F' U' F D R2 D L2 D' R2 D L2 D2 F' U F U",
                    "R U' R' U R2 F2 U' F2 D R2 D' R2 U R D' L F2 L' D R U"
                ],
                "solutions": [
                    "U' l' U2 R' D2 R U2 R' D2 R2 x'"
                ]
            },
            {
                "scrambles": [
                    "L' F' L' D F2 U' F2 D2 B2 D' B2 U R B R' D2 U' L2 F U2",
                    "L' B' D B2 D' R2 B2 U' B2 U R2 U' B' D' B U B' D L",
                    "L B' D B2 U' L2 F2 U F2 L2 U B2 L D' L' B L' B U' B'"
                ],
                "solutions": [
                    "R' U2 R U' R' F R U R' U' R' F' R U' R"
                ]
            },
            {
                "scrambles": [
                    "B U' F' D2 F2 U' R2 D' U2 F2 D' L2 U' F U' B R2 F R2 F'",
                    "F L' D' B2 U2 L2 D L2 D F2 D' F2 U2 L F' D' U R' U R D U2",
                    "L F L U' R2 D2 U R2 U L2 U' R2 U' B U' R' B' R' D2 U'"
                ],
                "solutions": [
                    "R' U2 R' D' R U2 R' D R' U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R' F R' U R2 D' F2 L2 U2 L2 D R' F' R F2 U' F2 U F U2",
                    "B' D' B' R2 F R2 F2 D2 F U2 B U2 R2 D L2 F L2 B2 F' U F2",
                    "F U R U' B2 R2 U2 B2 U' B2 U' R2 U' R' F' R U B2 U' R' U"
                ],
                "solutions": [
                    "U2 R U2 R D R' U2 R D' R U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L' B' L B2 D R2 D' F2 U F2 U' B2 L' B' L R2 B2 R U2 R U'",
                    "L' U B D B2 R2 D2 F2 U F2 R2 U' B U' L2 B U' B' L' U'",
                    "B U R' D L2 D F2 L2 D2 R2 U' B2 U R' D2 R U2 R' D2 U' B' U"
                ],
                "solutions": [
                    "R' D' R U R' D R U2 R U2 R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "B' L' B D2 B' D2 F L2 U2 B2 U2 F' U' B' U L' B U2",
                    "R F D R2 D' R2 D' F2 D F2 R2 U R' U R2 U' R' F' U2 R'",
                    "B' R U R2 D' R2 D B2 U' B2 R2 F' U' F R B U2"
                ],
                "solutions": [
                    "U R' U' R' D' R U R' D R U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R U B' D' F2 R2 D F2 U F2 U' F2 D2 F D2 B R U' F U' F' U2",
                    "F' U L D' R2 D' R2 D2 L2 B2 U B2 U L B U' F U B' U",
                    "B' R' B' D' L2 B2 U' B2 D L2 U' F2 U B F2 U' R U B U'"
                ],
                "solutions": [
                    "R' U R2 D R' U R D' R' U R' U' R U' R' U' R"
                ]
            },
            {
                "scrambles": [
                    "L B' L D2 L2 B2 D' B2 L2 U R2 F2 D R B R B2 D F U2 F'",
                    "B' D' L' B2 R2 D2 B' R2 F L2 D2 F R B' F D' U F U' B D F",
                    "R' F D U' R2 U' F2 D' L2 U L2 U2 F' R2 U' F' U R2 F2 R U2"
                ],
                "solutions": [
                    "U2 R U' R2 D' R U' R' D R U' R U R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "B L' D L2 D2 B2 U' B2 U B2 D B2 U' L' B2 U2 B U' F U' F'",
                    "F' R B' U B2 R2 D' R2 B2 L2 U2 L2 U B R' B2 F D' R2 D B2 L2",
                    "F' U' L F' L2 F' L2 U2 B2 D2 R2 D2 B U' B F L F U2 F' U"
                ],
                "solutions": [
                    "U R' U' R U' F U' R' U R U F' R' U R"
                ]
            },
            {
                "scrambles": [
                    "R' B' D2 F2 D2 B2 U2 F2 L2 F2 L2 B' U L' F' U F R U' L",
                    "R' B U D' R2 B2 D' L2 F2 D2 U' L2 B2 R U2 R' U' B' R2 U2 R'",
                    "L D F' R2 D2 L2 B2 L2 D' R2 D2 L2 F' U' F L F2 U' F' U'"
                ],
                "solutions": [
                    "R' D' R U R' D R2 U R' U2 R U' R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R' D L D2 F' R2 B' L2 U2 R2 F2 L2 F L D' L R B L2 B' L' U2",
                    "F L' F U' F2 L2 U' F2 U' L2 U' L2 U' F' L F' L2 U L U' L2 U",
                    "R' B' L R2 D R2 U F2 U L2 U L B2 L' U L' B2 L2 B' R U2"
                ],
                "solutions": [
                    "U2 F R U R' U' R U' R' U' R U R' F'"
                ]
            },
            {
                "scrambles": [
                    "R' B R' D' F2 R2 D2 F2 D B2 U2 F2 U' L' U2 L' B R U R U' R'",
                    "R' F U L2 F2 R2 D R2 U' R2 U F2 L2 F' U B2 U' R F' U F U",
                    "R D R U2 R2 B2 U R2 U R2 U B2 U2 R D' R' U2 R' U' R"
                ],
                "solutions": [
                    "U' R U R' U2 R U' R' U2 R U' R2 F' R U R U' R' F"
                ]
            }
        ],
        "T5": [
            {
                "scrambles": [
                    "L U F' U' L2 U F2 D2 F2 U' L2 U F U' L2 F D2 F' L",
                    "R' U F U' R2 U R2 D' U F' U' F D F' R2 U' R'",
                    "R' F L' U L2 U' R2 F2 U' F2 D2 R2 U' B' D B D U2 L' F' R'"
                ],
                "solutions": [
                    "R U R D R' U' R D' R2"
                ]
            },
            {
                "scrambles": [
                    "R B U' B2 U' R2 U2 R2 B2 D L2 U L2 B' U B2 D' B2 U' R'",
                    "L F' L' D2 R2 D L2 D' R2 U2 R2 U2 R' B R' D2 L2 F U2",
                    "L' B' U' D2 L2 D F2 D' U2 L2 F2 U2 F U2 F D' B' D' B' L R2 U'"
                ],
                "solutions": [
                    "U' R U2 R' U2 R' F R U R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "B D B R2 D' R2 U2 L2 B2 L2 U2 R2 U F U' F R2 B2",
                    "R U F U2 F2 U B2 U' F2 U B2 U F' R' U R U2 R' U2",
                    "L U R U B2 U2 B2 U' B2 U' L2 B2 U2 L' D L' U2 L D' R' U2"
                ],
                "solutions": [
                    "U2 R2 B2 R' U2 R' U2 R B2 R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R F' R2 U L2 F2 L2 U2 R2 B2 F' R U' L2 R2 B' D' L2 U",
                    "R F' R' F2 L2 B2 L2 F2 U' F2 U' F2 U L D' R2 D' L' R F' R' U2",
                    "R' U' R' U F2 L2 D2 L2 F2 R2 D' R' U' R U R D R' U'"
                ],
                "solutions": [
                    "U' R' D' R U R' D R2 U' R' U R U R' U' R U R'"
                ]
            },
            {
                "scrambles": [
                    "F' L D U' F2 U F2 D' U L' U L' U2 L U F U",
                    "B' R F2 D' F2 R2 B2 U' B2 F' R B2 L2 B' R' F R",
                    "R' D B R2 U B2 U' F2 U B2 U' F2 R2 B' D' U2 R U R' U R U2"
                ],
                "solutions": [
                    "U' F' U' r' F2 r U' r' F' r F"
                ]
            },
            {
                "scrambles": [
                    "B L U' F2 R2 F2 U F2 D F2 L2 B2 U L B U B2 U' B2 U2",
                    "F' L' U2 L2 B2 R2 D R2 B2 L' U R' F2 R U F U",
                    "F' R' L2 B2 U' B2 D F2 D' L2 U R F' R D2 B2 D R' F2 U'"
                ],
                "solutions": [
                    "U' R U R' U' R U' R' L U' R U R' L'"
                ]
            },
            {
                "scrambles": [
                    "F' D' L' D R2 D' L2 D R2 D' F2 U R U' R' F2 L' D F U2",
                    "R' F' D' L2 U L2 F2 D2 L2 D F2 L2 U2 B' D2 R2 U' B2 U F' R'",
                    "B' R' F L2 F2 U' F2 L2 U R2 D' R2 U' F' R B' U B2 U' B2 U2"
                ],
                "solutions": [
                    "U R U R' U R U R' U2 L R U' R' U L'"
                ]
            },
            {
                "scrambles": [
                    "R B R' B L2 B' U2 L2 F' L2 F U2 F R F' L2 B' F R' F'",
                    "L D B' R2 B' L2 B R2 B' L2 B2 D' F R F' L' F R' F'",
                    "R' B R' U B2 D2 B2 D' B2 D' B2 U' R B' R' D B D B' D2 R2"
                ],
                "solutions": [
                    "R' U' R U' R2 F' R U R U' R' F U R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "B' D' L U2 L2 F2 D' F2 D R2 U' R2 U L D2 U' R B2 R' D' B U",
                    "F' D L2 D2 R U2 R2 D2 U2 R' D L' B2 L D L2 D F U2",
                    "F L' U B2 L2 D L2 U R2 D U' L2 U' B U' B' F2 R2 U L' F'"
                ],
                "solutions": [
                    "U R' U' R U R' U' R2 D R' U2 R D' R' U R' U R"
                ]
            },
            {
                "scrambles": [
                    "B' R B U2 F2 U L2 B2 D' R2 D2 B R' B L2 U2",
                    "R U' L F2 U' R2 U' F2 D2 B2 U B2 L2 R' U' R2 D2 L F2 R2 U'",
                    "R' D L' D' B2 D R2 D' B2 R' D L R D' R D R D' U'"
                ],
                "solutions": [
                    "U2 R U R D R' U2 R D' R' U' R' U R U' R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B R' B' R2 F2 L2 U R2 D R2 U2 F2 R2 B' U B' D' B U' R B' U'",
                    "R' F' L U B2 U2 B2 U B2 U B2 U L' U2 F L' U R U' L",
                    "F' L U' F' L2 B U2 F' R2 B R2 D2 B' R' B D L B L D B2 F'"
                ],
                "solutions": [
                    "U2 F R U R' U' R' F' U2 R U R U' R2 U2 R"
                ]
            },
            {
                "scrambles": [
                    "B D F R2 B2 F2 U B2 U' B2 F2 R2 F' D' U B' U2",
                    "F' D R U2 L2 U R2 F2 D' B2 F2 D R' U' R2 D' L U' F2 L F",
                    "L B' U D2 L2 F2 D F2 D' L2 U' F2 D2 B L U' R U L2 U2 R' U'"
                ],
                "solutions": [
                    "U' R U' R' U' R U R D R' U2 R D' R' U' R'"
                ]
            }
        ],
        "T6": [
            {
                "scrambles": [
                    "B' U' R U F2 D2 B2 L2 D' B2 R2 U' R2 D' R F2 D R' D' B F2",
                    "R' B' L' U' L2 F2 U L2 U' F2 L2 U L B2 R' D2 R B' R",
                    "F R' D' R D R2 D' F2 U' L2 B2 U' L2 B F R' U' R U B' U"
                ],
                "solutions": [
                    "x' U' R' D R U R' D' R x"
                ]
            },
            {
                "scrambles": [
                    "F' D L R2 D2 R2 F2 L2 U R2 U B2 L U R2 D' F D U' F' D'",
                    "R B D U2 F2 R2 D B2 U R2 D2 F2 L' B' R' B L' B' F' U F U'",
                    "R' B L R2 B D2 F' U2 F' D2 B2 U2 B L' B' R' U R2 U' R2 U'"
                ],
                "solutions": [
                    "U R U R' U' R' F' R U2 R U2 R' F"
                ]
            },
            {
                "scrambles": [
                    "B L' B U R2 U' R2 B2 D' B2 L2 U' L2 B' L B' L R' F2 L' R",
                    "R U' F' D2 U2 B' D2 B2 F' L2 B F2 L2 U' F U2 B2 U F' R' U",
                    "B L F' D F2 R2 B2 U B2 R2 U L' U' B' F' D' L D U"
                ],
                "solutions": [
                    "R2 F2 R U2 R U2 R' F2 R U' R' U R"
                ]
            },
            {
                "scrambles": [
                    "B R B' D' R2 D B2 D' R2 D2 U' L2 B' L' B D2 F2 D' L2 D2",
                    "R B U' L2 D' R2 D L2 D' R2 D U B' U2 R' U' R U' R' U'",
                    "L' F' L' U2 F2 D R2 D' F2 U L2 U' L' F L F D2 B2 D2 F' U'"
                ],
                "solutions": [
                    "U' R D R' U' R D' R2 U R U' R' U' R U R' U' R"
                ]
            },
            {
                "scrambles": [
                    "L' F' L U' L2 U2 F2 R2 B2 D B2 R2 F2 L U2 F U2 L R U R' U'",
                    "B' U F D2 F2 R2 U' R2 D2 R2 B2 D L2 B L2 B2 F' R2 U F U'",
                    "R B' D L2 D' F2 L2 D' U' F2 U L2 D' B F2 R' U2 B U B' U'"
                ],
                "solutions": [
                    "U F U R U2 R' U R U R' F'"
                ]
            },
            {
                "scrambles": [
                    "R B L2 D' B2 D B2 U' L2 F2 D2 L' D F2 U2 B' R' U' R' U'",
                    "B' L' F' B2 R2 D2 B' U2 L2 D2 F' U2 F U' B2 U B L U' B U2",
                    "F U R' D2 F2 R2 B2 U' L2 D L2 U' L2 B' U B' R' F' R' U R"
                ],
                "solutions": [
                    "R U R' U' R U' R' U' F R U R' U' R' F' R"
                ]
            },
            {
                "scrambles": [
                    "L B' D2 B2 D2 U' F2 U' F2 U' B U L' U' R B2 R' U",
                    "L' B' D L2 U2 L2 D' B2 U' L2 D L2 B' U2 B L' D' B' L2 U'",
                    "B R D' F2 D2 F L2 B' L2 U2 F2 D2 F' D R' B' R U R U R'"
                ],
                "solutions": [
                    "U R' U' R U' R' U R' U' R U R' F' R U R' U' R' F R'",
                    "U R' U' R U' R' U' R U2 L' R' U R U' L"
                ]
            },
            {
                "scrambles": [
                    "L B' D' F2 L2 F2 D B2 D' F2 U' F D F R2 F U B' F' L' U'",
                    "F' D B' D' F2 D' F2 D' B2 U2 L2 B' D L2 D' L2 D2 F U",
                    "L' D' L U2 F2 U2 F2 R2 U2 F2 R2 U2 L' D L' U' B2 U L2 U"
                ],
                "solutions": [
                    "U F R U R' U' R U R' U' F' R U R' U' R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "F' L U D2 U' L2 B2 U R2 B2 U2 L2 F2 L' U L2 D' L2 F U",
                    "R' D' R F2 D' B2 D B2 L2 B2 U L2 U' R F2 D R' U2 F2 U' R'",
                    "F' R F2 R2 F2 R2 U2 F2 R2 U2 R2 U2 R F2 U2 F U' F2 U F2"
                ],
                "solutions": [
                    "U R U R' U' R U R2 D' R U2 R' D R U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L F' U' D2 R2 F2 L2 U2 L2 F2 U R2 D F L' U F2 D' F' D U2 F'",
                    "F' L F U' F2 D B2 D' B2 D B2 L2 F' R' F' U2 R2 F2 L2 F2",
                    "F' R F2 R2 B2 R2 U' B2 U B2 F' U F' R' B' F U B"
                ],
                "solutions": [
                    "R' U2 R F U' R' U R U F' R' U R"
                ]
            },
            {
                "scrambles": [
                    "R' D' F' D2 L2 U2 B' U2 F D2 F' L2 U2 R' U R' D' U R U'",
                    "R' D' L D' L2 D' R2 U2 R2 U2 R' D L' D L2 F2 D R2 U'",
                    "R' F' U' F2 D R2 U R2 D2 U' F2 U2 F' D F2 U' R2 U2 R' U"
                ],
                "solutions": [
                    "U R' U2 R2 U R' U' R' U2 F' R U2 R U2 R' F"
                ]
            },
            {
                "scrambles": [
                    "R F D U L2 D L2 D2 R2 D' R2 U F' U F' U F2 D F' R' U'",
                    "R' D L' F' L2 F U2 B R2 F D2 F' R2 U2 L U' B U' B' D' U R U'",
                    "R' D R' U2 L2 D' R2 D' B2 R2 D' R2 B2 R U2 L2 R2 D R U2"
                ],
                "solutions": [
                    "U' R' U R U R' U' R' D' R U2 R' D R U R"
                ]
            }
        ],
        "U1": [
            {
                "scrambles": [
                    "L D' F' L2 U L2 U' F2 D F' D' L2 D' L2 D2 L' U",
                    "B D L F2 R2 U L2 U' R2 U L2 U' F2 L' D B' U B D2 B'",
                    "R U' B L2 B2 U R2 D' R2 U' B2 R2 D' F D F2 D2 F' D' L2 R U"
                ],
                "solutions": [
                    "U R U2 R' U' R U' R' U2 R' U2 R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "F' U R U R2 D R2 U' B2 U' B2 U R' U R' D' R U2 F U",
                    "B R D' U F2 R2 U F2 R2 U' F2 D R' F2 D B D' F' R2 B2 F'",
                    "R' F R L' U2 L U2 F2 U2 R' B2 F2 R F' R' B2 R2 U R2 F R F'"
                ],
                "solutions": [
                    "R U R' U' R U' R U2 R2 U' R U R' U' R2 U' R2"
                ]
            },
            {
                "scrambles": [
                    "F D' L U L2 U L2 U' L2 U' L' D F' U' F2 U2 F U2 F2",
                    "B D B D F2 U' L2 U' L2 U F2 L2 D B U' B' D' L2 D2 B2",
                    "R' D' L' F2 D2 F' L2 F2 D2 F L2 F2 D2 L' D R U L F L' U2"
                ],
                "solutions": [
                    "R' U' R U' R' U2 R2 U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F D' L B' R2 B R2 F' U2 F2 L2 R2 F' L' R2 D' B' U2 L' D2 F2 U'",
                    "R D F' D2 F2 L F2 R2 D2 B2 R B2 L' F D' R' F' U' F2 R' F' R",
                    "F R F' U2 L2 B2 D R2 B2 L2 U F' R2 U F' U F U2 R' F'"
                ],
                "solutions": [
                    "U2 R U R' U R U2 R2 U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L U' L' F2 D F2 U F2 D2 L2 U' L' D L D' U L' D F2 U'",
                    "L' U' L R2 B2 U' L2 R2 U' L2 F2 D' B2 R' D R B2 L2 D' F2 U2",
                    "F' R U D2 L2 F2 U F2 U2 R2 U' R2 U' L D2 L U' R' F U B2 U2"
                ],
                "solutions": [
                    "U' R U R' U' R U' R' U2 R U' R' U2 R U R'"
                ]
            },
            {
                "scrambles": [
                    "F' D F' U2 L2 F2 L2 U R2 U' B2 R2 F R2 D' F R2 U F' R2",
                    "L B L' U L2 D F2 D' F2 U F2 U' F2 L' B' L' B U2 B' U'",
                    "L' B' R' D' L2 D R2 D' L2 D B2 D B D' B2 L B' R' B"
                ],
                "solutions": [
                    "U' R' U' R U R' U R U2 R' U R U2 R' U' R"
                ]
            },
            {
                "scrambles": [
                    "B' D F L2 U2 B2 U L2 D' F2 L2 U' R2 F U' B U2 L2 U' B2 D'",
                    "R' D F' U2 F' D2 F L2 B' L2 F D2 F' D L2 D2 L2 U R' F U2 F'",
                    "B' L D' U' B2 F2 U L2 B2 D' L2 F2 D' R' D U F2 D U R B' U"
                ],
                "solutions": [
                    "U R U2 R2 U' R2 U' R' U R' U' R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "B' D R' D F2 U F2 U' R2 D B2 U' B2 R' U' R' D2 R D' U B",
                    "F' D F' U2 F2 L2 U' F2 U' F2 U L2 F' D' F U2",
                    "F D' B R2 U' R2 U R2 B2 L2 U F2 D2 B' U F' R2 D L2 D2 U"
                ],
                "solutions": [
                    "U R' U2 R2 U R2 U R U' R U R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' B L' B' R2 B D2 B' D2 B D2 R2 U R U' L2 R' U' F' U2 F",
                    "B L' B L2 U B2 U' L2 U L2 B2 U' L2 B' U L F U' B' F'",
                    "L D B L F2 D2 L' B2 R F2 U2 R' B D' L' R2 U' R2 U' R2 U2 R2"
                ],
                "solutions": [
                    "U R' U2 R U R' U R U R' U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "B R' D' L2 D' B2 D' U F2 D R2 U2 L' D B2 D F2 U2 B' U",
                    "B D B' D R2 D' R2 U R2 U' R2 U' B D' F' L2 B' F U'",
                    "L U L U L2 D' B2 R2 B2 U2 R2 U R' U' R U2 B2 R2 D U2"
                ],
                "solutions": [
                    "U R U2 R' U' R U' R' U' R U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R F' U' D2 R2 F2 D' F2 R2 U B2 D' B2 R' U R' U2 R2 D' F R' U'",
                    "L' U F' D' F2 U F2 D' L2 D2 F U2 L B' R' U2 R U2 B U'",
                    "R' U F L2 F' U2 R2 B L2 F' D2 B D B' D F D2 B' R' U2"
                ],
                "solutions": [
                    "R' U' R U' R U2 R2 U' R2 U' R2 U R"
                ]
            },
            {
                "scrambles": [
                    "L' F L F2 U2 F' U2 F' U2 F' U2 L' F' L2 U' L' U2 L U' L'",
                    "L D' L' U' L2 D' F2 L2 U' L2 F2 L' R2 D' R2 D2 L' U2",
                    "F' U' R U2 R2 F2 U' R2 U' R2 U F2 R U F U2 R' U2 R"
                ],
                "solutions": [
                    "U2 R U R' U R' U2 R2 U R2 U R2 U' R'"
                ]
            }
        ],
        "U2": [
            {
                "scrambles": [
                    "L' F' D B2 D' B2 R2 B2 D B2 R2 D' F2 L U L' F' L",
                    "F' L B' U B2 L2 D B2 R2 U F2 D2 L2 F' D2 R2 F U' F' L U F",
                    "B L D' B2 U2 B2 D2 F2 U' F2 D' L2 U L U L U L' B' U'"
                ],
                "solutions": [
                    "U2 R' U' R U' F U' R' U R U R' U R U' F'"
                ]
            },
            {
                "scrambles": [
                    "B R U B2 U R2 F2 L2 D2 L2 F2 R2 U B U' B R' B'",
                    "R F' L' B2 D L2 F2 U F2 D' F2 R2 D B' D B F2 L' F R U'",
                    "L B' D U' L2 D R2 U' R2 D2 U' L2 U2 F U' F' U' B' L2 B2 L U'"
                ],
                "solutions": [
                    "R U R' U L' U R U' M' x' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' D' F' D2 F' D2 B F D2 R2 B' R2 F D' F' D' B D L2 F L' U",
                    "B D R U2 R2 D R2 B2 R2 D' F2 R2 U2 R' D' U' L U' L U B' U'",
                    "R F' L' B L2 D2 F' R2 B R2 D2 B' D2 R' B' D2 F2 L' U2 R' U"
                ],
                "solutions": [
                    "U' R U2 R2 F R F' M' U' R U' R' U M"
                ]
            },
            {
                "scrambles": [
                    "B L' U' F2 R2 D R2 F2 U B2 U B2 D' B D R2 B' L B R2 B2",
                    "R' U F U2 B2 R2 F2 D' F2 R2 B2 F' U' R B L2 B' U",
                    "F' D' F' U2 F2 L2 F2 U2 L2 U L2 F2 L2 F' D U' F U F U2"
                ],
                "solutions": [
                    "U' R' U2 R F U' R' U R U R' U R U' F'"
                ]
            },
            {
                "scrambles": [
                    "B U R' F2 U' F2 D R2 D' R2 U R U' B' U2 R U2 R' U2",
                    "L D' R U' F2 D' B2 L2 F2 U2 B2 U R' D U' L' R2 F2 R' B2 R'",
                    "L' F R D' F2 D2 F2 U B2 F2 D B D2 L' U2 F' R F2 U R U2"
                ],
                "solutions": [
                    "U2 R2 D R' U' R D' R' U' R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "B D' R' D' R2 D' B2 U' B2 U B2 F2 U L' U F2 D' B2 U B' U'",
                    "L F D L2 U' B2 R2 U L2 D' F2 R2 F D R D' F2 L' R' U' R",
                    "B D F' L' D2 B2 L' D2 F2 U2 L R' F' D' L B' F U' F' U L'"
                ],
                "solutions": [
                    "R2 D' R U R' D R U R U' R' U' R"
                ]
            },
            {
                "scrambles": [
                    "B' R' D U' B2 D U2 F2 U L2 U' L2 U L' F2 D2 B' R U' R' U",
                    "L D R F2 U R2 D' U' L2 F2 U2 F2 L D U' R' D' F2 U",
                    "R' F L' U2 B L2 B2 U2 F U2 B L2 U2 R U F2 U' F' L F'"
                ],
                "solutions": [
                    "R U' R' U' R U R D R' U R D' R2"
                ]
            },
            {
                "scrambles": [
                    "L D' B' U' R2 U2 R2 U R2 U R2 U2 B' D F' D' B2 D F L' U'",
                    "R' D R' U B2 L2 U F2 L2 R2 U F2 L U' B2 L U' F2 R U'",
                    "F' U' L' U2 R2 U' B2 U B2 U R2 U2 F R B2 R' F' L F U2"
                ],
                "solutions": [
                    "U2 R' U R U R' U' R' D' R U' R' D R2"
                ]
            },
            {
                "scrambles": [
                    "R' D' L U2 B2 R2 D U2 B2 D L2 D2 U L' D' B2 R U' B2 D2 R",
                    "R F' D B2 U F2 L2 D2 F2 R2 D B2 U B' U2 F D2 B' U2 R U",
                    "F L U' B2 R2 F2 D F2 D2 U2 L2 F2 U2 R' B2 U' R' D2 U' L F U'"
                ],
                "solutions": [
                    "M' U R' U' F' U F R2 U R' U R U2 r'",
                    "U F R U R' U' F' R' F R2 B' R2 F' R2 B R'",
                    "M U' M' F R U R' U' F' M U M'"
                ]
            },
            {
                "scrambles": [
                    "F R' D U2 B' R2 D2 L2 D2 R2 B D2 F D U2 F' U2 F R F' U",
                    "L' F' U L2 D' U' B2 D' R2 U R2 F2 U2 R F2 D2 B2 L' U' F L",
                    "R' B' U F2 D2 B' D2 R2 U2 F2 U2 R2 F2 U' R2 B U2 R D' U2 R' D"
                ],
                "solutions": [
                    "U' F R U R' U' R U R' U' F' U' R' F' U' F U R"
                ]
            },
            {
                "scrambles": [
                    "F' D' R L2 U' B2 F2 D2 B2 F2 U' L2 R' D' R' U2 R D2 F",
                    "L D' F' D' B2 U' L2 U B2 D2 F2 R2 F R2 U' R2 U F2 L'",
                    "R D B L2 R2 D' F2 D2 F2 D' L2 R2 U2 B' D' R2 U' F' U F R"
                ],
                "solutions": [
                    "F R U' R' U' R U2 R' U' R U' R' U' R U2 R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "R' F' R' U2 L2 D' B2 U' F2 U2 L2 B2 U R B R U' L2 D' B2 R2",
                    "B D B U' L2 U' R2 B2 R2 U L2 F2 U B' D' F' L2 B' F U'",
                    "R' D L' F2 R2 U' B2 R2 U' F2 R2 D' B2 L' D' R' U' R2 B2 L' R2"
                ],
                "solutions": [
                    "U r' U' R' F R U r F R U' R' F'"
                ]
            }
        ],
        "U3": [
            {
                "scrambles": [
                    "B' R U' D B2 D' B2 U2 R2 U' R2 U' R' B R' U R2 U R'",
                    "R F R U' R2 U' R2 D B2 D' B2 U2 R' U' B2 U' B2 U F' R'",
                    "L' F L' U L2 D' L2 D2 F2 U' F' D' F' L2 U L' F' L U2"
                ],
                "solutions": [
                    "R' F R U' R' U' R U R' F' R U R' U' R' F R F' R"
                ]
            },
            {
                "scrambles": [
                    "R' F R' D' F2 D F2 U' F2 U F2 D2 L' B' L D2 R2 U F' U2",
                    "L' D R' D' F2 D F2 U' R2 D2 B2 U L' D' R' D' F2 D' F2 L2",
                    "B U L U' F2 D F2 L2 B2 U B2 F D2 F' L B R2 B2"
                ],
                "solutions": [
                    "U' F2 R U' R' U' R U R' F' R U R' U' R' F R F2"
                ]
            },
            {
                "scrambles": [
                    "F U F U2 F2 U2 F' U2 F' L2 U2 L2 D F' U F2 D'",
                    "L' B' U' R2 U2 L F2 R' F2 R U2 R2 F U2 R U F2 L2 B L2 F",
                    "F' D' B' U' L2 D2 L2 U B2 D L2 B2 L2 F' D B D2 F2 U2"
                ],
                "solutions": [
                    "R U' R' U R U' L U r' F U2 R U2 R2 x"
                ]
            },
            {
                "scrambles": [
                    "B' U B U2 B2 U' B2 L2 D' L2 U L' B D' B D2 B2 L",
                    "R U' L' R2 U2 B' L2 B F R2 D2 L2 U2 L' F U2 L' F' L2 B U R'",
                    "F' U F R2 U2 R2 U F2 U' F2 U' F2 U2 F' D' F D F2 U'"
                ],
                "solutions": [
                    "U R' U R U R' F' R U R' U' R' F R2 U' R' U2 R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "F' L' F B2 D' B2 U R2 U' B2 U B2 D2 R' F L F' R D2 R2 D",
                    "F' U F D F2 R2 U R2 U2 R2 U' R2 U' F' D' F' L2 U' L2",
                    "B U' R D2 F2 U' F2 R2 U B2 D2 B2 R D' B' F2 D F' D F' D"
                ],
                "solutions": [
                    "U R U' L U L' U R' U' l U2 R U2 R2 x"
                ]
            },
            {
                "scrambles": [
                    "B D B D B2 L2 B2 U' R2 F2 R2 D2 U' B D B U2 B D' U B",
                    "F D' B' F2 D' B2 U2 F2 U L2 U R2 B' U F D' U2 R2 U' F2",
                    "L D F R2 F D2 F R2 F' D2 F' R2 F' D' L2 U L' R2 D2 L2 R2"
                ],
                "solutions": [
                    "U R' U L' U' L U' R U l' U2 R' U2 R2 x'"
                ]
            },
            {
                "scrambles": [
                    "B' D B' U2 F' U2 F U2 B2 U' F' U B' F D' B U'",
                    "F' R' U B2 L2 U F2 D2 L2 U F2 R2 U' L B2 D2 F' U B' U B U",
                    "F L U' D' B2 D2 U F2 U' B2 F2 U' L' U2 L D L2 D2 L U' F'"
                ],
                "solutions": [
                    "F R U R U2 R' U' R U' R' U2 R' U2 R U' R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "R D L D' L2 R2 F2 U' F2 L2 U F2 R D U' L' D' L2 U2 L2 U'",
                    "F' L' B2 U2 F' D2 B2 F' D2 F' U2 F' L F2 U F' U F U2 F' U2",
                    "B D' R U' B2 U B2 R2 F2 U' L2 F2 D2 L U L F2 R D L2 U2 B'"
                ],
                "solutions": [
                    "U' r U R' U' r' F R2 U' R' U' R U2 R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "F' R' D R2 B2 U R2 D2 U L2 U' F L2 F L2 D R U' F",
                    "B L' U B2 F' D2 B2 F L2 U2 L2 F' L F2 U2 B' U R' U R2 F'",
                    "R B' D F L2 F' D2 B R2 U2 R2 B' F2 D' R D R' B F2 D R'"
                ],
                "solutions": [
                    "U F U R U2 R' U R U R2 F' r U R U' r'"
                ]
            },
            {
                "scrambles": [
                    "F R' D' R2 U2 B' R2 B R2 U2 F L' U' L U R2 F' D R F'",
                    "R F' L2 D R2 D' L2 D R2 D' F R2 U2 R U R' U R U2",
                    "B R' B' D' L2 D B2 L2 U' F2 L2 B' R' D2 L2 R U2 F R D"
                ],
                "solutions": [
                    "U' R U2 R' U2 R' F R U R U2 R' U' R U2 R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "B' D' F' D2 B2 L2 F2 L F2 U2 B2 R2 D2 F D B U F' R F' U'",
                    "B' U' R U' B2 U R2 U R2 U' B2 U R2 B L B' U' R U B L' U2",
                    "F' D' R' L2 U' F2 U' B2 D R2 D' B2 U2 R D F' R' F' R U' F' U'"
                ],
                "solutions": [
                    "U' R' U' R F R2 D' R U R' D R2 U' F'"
                ]
            },
            {
                "scrambles": [
                    "F R' F B2 U' F2 U B2 U' F2 D' U B D F D' B' D F2 R F'",
                    "R B D' F R2 F' L2 B R2 D2 B2 U2 F2 D F' R2 D' B2 R2 U2 R'",
                    "R' U' R F' D2 F U2 F' D2 F U2 F' L' F R' F' L F U R"
                ],
                "solutions": [
                    "U' r U R' U' r' F R U R' U' R F' R' U R"
                ]
            }
        ],
        "U4": [
            {
                "scrambles": [
                    "F' L U F2 L2 D R2 D' L2 D R2 D' F2 L' D' L U' L' D F",
                    "F L' R2 F2 D' L2 D L2 F2 U L D L U' L' D' R2 F'",
                    "F' D' F' U2 L2 F2 D2 R2 B2 U R2 D' R2 F U2 F' U R2 F2 U2 F2"
                ],
                "solutions": [
                    "x R2 U2 R' D2 R U2 R' D2 R' x'"
                ]
            },
            {
                "scrambles": [
                    "B' U' L F2 D R2 D' F2 L2 U' B2 U' B2 R' U R B2 U2 L B U2",
                    "R U L' B2 U' F2 U' B2 U B2 F2 U L R U B2 U' B2 R2 U'",
                    "R' F U' B2 D2 R2 D' F2 D' B2 U L2 B D F2 D' B' F' R U2"
                ],
                "solutions": [
                    "U2 x R2 D2 R U2 R' D2 R U2 l"
                ]
            },
            {
                "scrambles": [
                    "B R' B' U2 L2 R2 D L2 D F2 D R2 B2 R' D R U L2 B' R B' U'",
                    "R' D' B' F2 U F2 D' L2 D' R2 U2 R2 F' R2 D' F D' L2 D R U2",
                    "B R U2 L2 U' L2 U L2 U R' B' L2 D' B D L2 U2"
                ],
                "solutions": [
                    "R U R' U R U' R' U2 R' D' R U2 R' D R2 U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' R' U D B2 U' L2 U L2 D2 F2 D' L' D F2 D B2 U' R2 B U",
                    "B' L U2 L2 B2 U F2 U' B2 U F2 U' L U' L U' L' B U",
                    "R' U B U R2 U B2 L2 D U' F2 L' U2 L' B2 D' R B' U2 R"
                ],
                "solutions": [
                    "U' R' U2 R U R' U R' D R' U2 R D' R' U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R B U2 B2 D B2 D' R2 U L2 D F D' L2 R2 U B2 R' U",
                    "L B U' L2 D' B2 U R2 U' R2 B2 L2 U B' U F2 U' F R2 F L'",
                    "B U' F' L2 U' L2 U R2 F2 D2 B2 L2 R2 F' U F' U2 B U' F"
                ],
                "solutions": [
                    "U' R U' R' U' R U' R' U R' D' R U R' D R2 U R'"
                ]
            },
            {
                "scrambles": [
                    "B D' R L2 B2 L2 F2 U R2 D' L2 F2 D' R F2 U2 L' D' B' U' F2",
                    "L B L' U2 B2 D' B2 L2 F2 U' F2 L' B' L' F R2 F' U'",
                    "F' R B' U2 L2 D' B2 D B2 L2 B2 U' F U' B L' B2 L U' F' R' F"
                ],
                "solutions": [
                    "U' R' U R U R' U R U' R D R' U' R D' R2 U' R"
                ]
            },
            {
                "scrambles": [
                    "B L' F U' F2 U' R2 F2 U' B2 L2 D2 B U' B2 D B' F' L' B' U",
                    "B' U B' U2 L' F2 R B2 R' F2 L U2 R' U B' U' B R B2 U B' U",
                    "B' L' D R2 B U2 B R2 F U2 F L2 D B2 D' F U R' B' D F2"
                ],
                "solutions": [
                    "R' U2 R U R' U R' D' R U' R' D R U R"
                ]
            },
            {
                "scrambles": [
                    "R B L B2 D2 F L2 D2 F2 R2 U2 F' D' L' D U2 B F2 L' R B2 U2",
                    "F' U L U' L2 F2 D R2 D B2 F2 U B U' F2 R2 D2 F L F2",
                    "B' D' B F2 U R2 U R2 D' F2 D F2 U2 B' F2 D B U'"
                ],
                "solutions": [
                    "R U' R' U' R U2 R' U2 R' D' R U' R' D R"
                ]
            },
            {
                "scrambles": [
                    "F' U B D F2 D' B2 D' R2 D2 B2 U' B' U B2 F2 D' B2 U' F",
                    "F' U' B' D R2 U' R2 U R2 B2 U B2 D2 F' D R2 B U' F",
                    "B' D' F D' R2 U L2 U' R2 B2 D' R2 D2 F D U' B L2 R2 D L2 R2"
                ],
                "solutions": [
                    "R' U' R U2 R' F' R U R' U' R' F R2 U2 R' U R"
                ]
            },
            {
                "scrambles": [
                    "F' L' U' F2 D' B2 D2 L2 D B2 R2 U' F2 R D L D2 R D' U F",
                    "B D L2 D2 R2 F R2 F' R2 D2 F' D' L2 D' B2 R2 B' D B2",
                    "R' B U' B2 L2 R2 F2 U L2 D' U R2 D2 B' U B' U B U2 R2 U' R'"
                ],
                "solutions": [
                    "U2 R U R' U R U R' U2 R U' R2 D' R U' R' D R"
                ]
            },
            {
                "scrambles": [
                    "R' B' L' R2 B R2 D2 R2 B' L2 U2 R2 F' L' B L F' L F L2 R",
                    "R' U' F' U F2 U' F2 R2 B2 D2 B2 U B' D R2 F R' D B R2 U'",
                    "F L B' D' F2 D B2 U L2 D2 B2 F2 D' B' U L' R2 B2 U2 B' L' D"
                ],
                "solutions": [
                    "F R U' R' U R U R' U R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "F' R' F2 D' L2 U' F2 U L' U' F2 U L2 D R F' U'",
                    "B D F2 U2 F L2 B' R2 F U B2 F2 D B' F2 D' B'",
                    "F' L' U L2 U L2 B2 U' B2 D L2 D2 B' L B D F2 U' F' L' U'"
                ],
                "solutions": [
                    "U F' R U R' U' R' F R2 U R' U2 R U R' U2 R U' R'"
                ]
            }
        ],
        "U5": [
            {
                "scrambles": [
                    "L' B D2 R2 F2 D2 B2 U' L2 D F2 D' F U2 B U' F' U2 L'",
                    "L U R' U' L2 B2 D' R2 U R2 U' B2 R B2 R' D L U2 R",
                    "B L U2 L2 F2 U F2 D' L2 D L2 U2 L B' L' U L"
                ],
                "solutions": [
                    "R2 D' r U2 r' D R U2 R"
                ]
            },
            {
                "scrambles": [
                    "B L' F D' F2 D L2 U' R2 U L2 F L B' R' D2 R",
                    "B' D' R' L2 U L2 U' R2 D F2 U' F2 U B L' B' D' R' D B L",
                    "B' U' L' U' L2 D F2 D2 U B2 U R' D2 U F2 D' R' U' R B'"
                ],
                "solutions": [
                    "R2 D' R U2 R' D R U2 R"
                ]
            },
            {
                "scrambles": [
                    "B' L' D U2 L2 U L2 D' B2 U B2 U B U B U2 B2 U' L B U2",
                    "L B D' U' L2 U L2 D F2 U' F2 L' U' L U F2 U2 B' F2 L'",
                    "F R F' D R2 D' R2 B2 D' F2 D2 L2 D2 F' D B2 F' R2 F R' F' U"
                ],
                "solutions": [
                    "R U' R' D R' U' R D' R2 U R' U' R' U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B U F' B2 R2 F D2 B' L2 B D2 R2 B2 U B' F U F' U F U2",
                    "R' B R' B2 D' L2 B2 R2 U' F2 U' F2 R2 B D' B' R2 F2 U R' B' R",
                    "F U R U L2 U B2 U B2 U' L2 B2 U R' F' L U2 L' U"
                ],
                "solutions": [
                    "U2 R U R' U R U2 R2 U z U R' D R U' z'"
                ]
            },
            {
                "scrambles": [
                    "R F' R2 F2 U2 R2 D' L2 D' B2 R' U' L2 R D2 F R' U2",
                    "R' F' D' L2 U L2 D F2 U2 F' U R U B U2 B'",
                    "R' U F' D F2 D' F2 U L2 U' L2 F2 U2 F' U' R B L2 B' U"
                ],
                "solutions": [
                    "U R2 D' R U' R' D R2 U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R B R D R2 U' F2 U2 B2 L2 F2 U B2 R F' U' L2 U' B' U2 F R y'",
                    "F R B' D2 R2 F2 D2 U F2 D' U2 R2 U F D' F' R2 D F' R B R2 y'",
                    "R' F D' R2 U' F2 R2 B2 U B2 R2 D F' L2 U L2 R2 F' D U2 R' y'"
                ],
                "solutions": [
                    "U' R' U R U R' U2 R U2 y R U' R' U2 R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F' R F D2 L2 D' L2 D' R2 U' R2 F D2 F D F' D F2 R' F U'",
                    "B L D' U B2 R2 D' F2 U' R2 D2 B2 L U' B' R' U R",
                    "R' F R' D B2 D' L2 R2 U F2 R2 D' F D R F' U' L2 F' R"
                ],
                "solutions": [
                    "U' R2 D R' U R D' R2 U' R U' R' U2 R U' R' U2 R U R'"
                ]
            },
            {
                "scrambles": [
                    "F R F R2 B' R2 B R2 F2 U2 F' D2 B L' B' U B U' B' D2 F",
                    "B' L' B D F2 U' F2 D L2 R2 U2 L F D2 L2 D2 L F' D2 R2 U2",
                    "L U L U B2 U2 L2 U B2 U' B2 L2 U2 R D2 L' D2 B2 R' U'"
                ],
                "solutions": [
                    "U' R2 F' R U2 R U2 R' F U' R U R' U' R",
                    "U R U L' U R' U' L U' R U R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' U' R D R2 D2 L2 U' R2 U' L2 D R' U F D' R2 D B F'",
                    "B' R' F U2 F' U2 B' L2 F2 D2 F L2 U2 L B' U2 B2 F' L R2 F2",
                    "F L B' R2 B' L2 B R2 B' L2 B2 L2 D2 L F' U2 F L' D2 L F'"
                ],
                "solutions": [
                    "U' R' U2 R2 D R' U2 R D' R2 U R U2 R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "B' U F' B2 L2 D L2 F2 U' R2 B2 U R2 B' D' F' U' F D F' U2",
                    "L F D' F2 R2 D2 B2 U' L2 B2 D' R' B U R B' R2 F' L' U'",
                    "B D R' U R2 U' F2 D R2 D' R2 U F2 R' D2 U L' B2 L D B' U'"
                ],
                "solutions": [
                    "U' R U R' U2 F2 R U2 R' U2 R' F2 R2 U R'"
                ]
            },
            {
                "scrambles": [
                    "L D L U F2 R2 D R2 U2 F2 R2 D R B2 R U2 L' D L' U2",
                    "R U F' B2 L2 B2 U' B2 U L2 U' B2 F U' F' R' U2 R F R'",
                    "B L' U' B2 R' D2 R D2 R U2 F2 R2 D B2 D F2 L' B' U"
                ],
                "solutions": [
                    "U' R' U2 R' D' R U2 R' D R U2 R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "F L D R2 U2 B2 L2 F L2 B R2 B U F' R2 D' F2 U2 L' F' U' F2",
                    "R' U L' D2 L2 U L2 F2 U2 F2 D R' D' F2 R' D2 B2 R' U'",
                    "L' B' D' U' R2 D' L2 D R2 D' L2 D2 B L2 F' L' F2 U' F'"
                ],
                "solutions": [
                    "U' R' U R U' R' U' R U2 R D R' U' R D' R2 U' R"
                ]
            }
        ],
        "U6": [
            {
                "scrambles": [
                    "F' R D' U R2 D B2 U' B2 U R2 U' R2 F U F' R F U2",
                    "B' D R' D' F2 D2 B2 U' B2 D B2 U2 L' U' L2 U' B2 D B F2 U2",
                    "L' U' B' U2 R2 D R2 D' F2 U F2 U2 L F R2 F' L' B L U"
                ],
                "solutions": [
                    "R' U2 R U R2 F' R U R U' R' F R"
                ]
            },
            {
                "scrambles": [
                    "R' B' D L2 D L2 D2 B2 U R2 U' B' L2 F D2 F' L2 R U2",
                    "F D' L D' B2 L2 U' F2 U L2 B2 D L' D R2 D' R2 D R2 F' U2",
                    "L U B D2 R2 D L2 D' R2 D L2 D B' U' L' U2"
                ],
                "solutions": [
                    "U2 R2 D R' U2 R D' R' U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F' L U' F' D2 F L2 F' L2 F' D2 F2 U2 R D' B D R' U' L F U2",
                    "F' L F U F2 L2 U' F2 U' F2 U L2 U F U' L' B' U B F",
                    "B' D' F' R2 U2 F2 U F2 U' F2 U2 R2 U F D B U F' U2 F U'"
                ],
                "solutions": [
                    "R' U' R U R U R' U' R' U F R U R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "B' U' F' B' U2 F R2 B U2 B U2 B R2 U' B D' B U B' D",
                    "L U L D2 B L2 D2 B' R2 F L2 U2 F' L' U' L R2 D2 L2 U",
                    "B' R D L2 D L2 D' B2 D' B2 R2 U2 F2 R U B U' R' F2 R U'"
                ],
                "solutions": [
                    "R U' R' U' R U2 R' U' R' D' R U2 R' D R"
                ]
            },
            {
                "scrambles": [
                    "L' F R' D' R2 D B2 D' R2 D R F' R' U R2 U' L U R' U2",
                    "F' U L U2 L2 B2 D' B2 U' L2 F2 U' R2 F L' B F2 U2 B' R U' R'",
                    "F L F L2 F2 U' F2 U' L2 F2 U2 L2 U2 F' L' F' L' F2 L U' F2 U2"
                ],
                "solutions": [
                    "U R U R2 D' R U R' D R2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "L' D' L B' U2 F' D2 F' R2 D2 F2 U2 L' D L F L2 U2 F' y",
                    "R' B' R' D2 B L2 B' F2 U2 F' U2 R' F R F' D2 R2 B y",
                    "R' D' F' D2 B2 R2 U B2 U' R2 B2 R2 U' R' D2 U F' U F' D F' y"
                ],
                "solutions": [
                    "U' R U' R' U' R U2 R' U2 y' R' U R U2 R' U R"
                ]
            },
            {
                "scrambles": [
                    "B U R' U2 L2 B2 U L2 D' R2 B2 F2 D2 B U' R' U' R D' B' R' U",
                    "L B' L' R2 F2 U L2 B2 D B2 L2 U' F2 L R F2 R B L' U'",
                    "B' U L U2 B2 D' B2 R2 U R2 B' U' B D2 L' D2 B D U'"
                ],
                "solutions": [
                    "U R' U R' U' D' R U' R' U2 R U' R' D R U' R"
                ]
            },
            {
                "scrambles": [
                    "F R D L2 F2 U F2 U B2 R2 U2 L2 U2 F' D U R U2 F U F2",
                    "R D' F D' F2 U' L2 D' U2 L2 U' L' B2 L D2 F' D R2 U' R",
                    "F R' B' L2 F2 D' L2 D' U R2 F2 L' D F2 U2 F' U' B' U R' U2"
                ],
                "solutions": [
                    "U' R U R' U R U' R' U F' R U2 R' U2 R' F R",
                    "U R' U' L U' R U L' U R' U' R U' R' U R"
                ]
            },
            {
                "scrambles": [
                    "L D R' D' L2 D2 R2 U' B2 D U L' D' R D' R2 D' L2",
                    "L U F U2 R2 U R2 F2 D U R2 B2 D B L2 D' B D' L' R2",
                    "R' B' U D' B2 U F2 U' R2 F2 D B2 U' F' U' B2 U' B2 F L2 B R'"
                ],
                "solutions": [
                    "U' R' U' R U R' U R U2 F R' U R U' F' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L F' U' R2 B2 D B2 R2 D' U2 L2 D L2 F D L' U L D' U2 L' U2",
                    "B' U F D R2 D' R2 B2 D B2 U R2 U2 B' D' B U R2 B F' U2",
                    "L' U' R' U2 L2 F2 L F2 L U2 R2 D2 R2 U' R' F2 L' F2 D2 L R2"
                ],
                "solutions": [
                    "U R U R' U R U' R' U R U' R' U' L' U R U' R' L"
                ]
            },
            {
                "scrambles": [
                    "L' U' B' D' L2 R2 D' R2 B2 R2 U' B2 F' R2 U2 B D2 F' L' U'",
                    "F L' F' U2 L2 D2 R2 B' R2 D2 L' D' U L' U L D F' U",
                    "R U' R' U' F2 D R2 D' L2 D R2 D2 L' D L' F2 U"
                ],
                "solutions": [
                    "U' R U2 R D R' U2 R D' R' U2 R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' U' F' D' U B2 D' R2 D R2 D U' B' L2 D L' D' F L' B' L2",
                    "R B' R' L2 D F2 R2 D2 B2 U B2 R2 D' F' R B R' F2 D2 F U'",
                    "B' D B R2 U' B2 F2 U' F2 D L2 U2 L2 F' U B' U2 B' R2 F U'"
                ],
                "solutions": [
                    "U' R U' R' U R U R' U2 R' D' R U R' D R2 U R'"
                ]
            }
        ],
        "L1": [
            {
                "scrambles": [
                    "B R' B R2 D' F2 D' B2 U L2 U B' L' B F' D2 F' U",
                    "L D' R U' B2 U R2 U' R2 B2 D' U R' D' F2 D F2 D2 L' U'",
                    "L' B R D B2 D L2 D2 B2 U B2 U' L' B' R' B F U2 B F' U'"
                ],
                "solutions": [
                    "R U2 R' U2 R' U' R U R U' R' U2 R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L' F' L' B2 D2 B2 F2 R B2 R D2 L2 B2 F' U2 F L' U2 R2 F L R2",
                    "R' F' L' D' F2 U L2 B2 D' B2 U' L2 R' D F L F' D R2 F'",
                    "L D' L' F2 U2 F2 L2 U2 F2 U2 B2 D' R' U R' D B2 D F2 U'"
                ],
                "solutions": [
                    "R U R' U R U' R' U R U' R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R B' U L2 B2 R2 D2 L2 F' R2 B R2 F2 D R' D' R' B' U B R' F'",
                    "R' U' R U2 B2 D' F2 D' F2 U' F2 U L2 R' D2 L' D2 R D2 B2 U2",
                    "R' D R U R2 U' R2 B2 U2 B2 R2 U R D' R U' R U' R' U"
                ],
                "solutions": [
                    "U2 R U2 R' U' R U' R' U2 R U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B L' U' L2 U2 B L2 F' L2 D2 F L2 F' D' L' B2 F2 R' F R2 F2 U'",
                    "F' U' R' D2 U2 B2 U2 L U2 R B2 R' B2 D U2 L F L' D F2 R",
                    "B L B R2 U2 B L2 B' L2 F U2 R2 F' L' F' L B' L F' L2 F2 U'"
                ],
                "solutions": [
                    "U2 R U R' U R U2 R' U2 R U2 R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F L B2 D2 B R2 F' R2 F D2 B L' U F2 R2 F R2 F2 U' F'",
                    "R U F' U' R2 D L2 D L2 D2 R2 B2 L U L' U' F U' B2 R'",
                    "B' R F' B2 F2 R2 F2 U' B2 U2 B2 U B' U F R B' U2 B' U' B' U2"
                ],
                "solutions": [
                    "R2 U R' U R' U' R U' R' U' R U R U' R2"
                ]
            },
            {
                "scrambles": [
                    "R D R U' F2 U' R2 U R2 U F2 U' R' D2 R U R' D R' U2",
                    "B L D' U' B2 U L2 F2 U' B2 D R F' R F' U L' B'",
                    "R' U' F U' B2 U R2 U R2 U' B2 F' R' U' R2 U R2 U'"
                ],
                "solutions": [
                    "U' R2 U' R U' R U R' U R U R' U' R' U R2"
                ]
            },
            {
                "scrambles": [
                    "R' F R F2 U2 F2 U' R2 D B2 D B2 D2 L R F2 L' F' R U'",
                    "B' D F' D2 B' D2 L2 F2 U2 F' U2 B' U B2 L2 B' D' B2 U'",
                    "R B U2 L2 U2 B2 U L2 F2 D' F2 U2 B L2 F' D B F L2 R'"
                ],
                "solutions": [
                    "U R' U2 R U R' U R U' R U2 R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F L' U' F2 D2 B2 D' R2 U2 R2 D' F2 U' L' D2 R2 B D' R D' L2",
                    "B' U' B' U B2 U' B2 U' B2 R2 B2 R2 B' U F' U F U' B",
                    "L' F' U F2 U' L2 F2 U L2 U' F2 L2 F D F U F' D' L U2"
                ],
                "solutions": [
                    "U2 R U2 R' U' R U' R' U R' U2 R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "B L' F D B2 L2 D L2 B2 D2 F2 R2 U' R' B2 R' U' F L U' B' U'",
                    "F' R F B2 L2 U B2 U B2 U' L2 U' B2 F' R' F",
                    "R U' L U2 R2 U' R2 U R2 U R2 U' R' U L' U' R' U R"
                ],
                "solutions": [
                    "U R2 U R' U' R' U R U R' U R U' R U' R2"
                ]
            },
            {
                "scrambles": [
                    "F' D F' L2 U R2 U' B2 D F2 L2 R2 B2 F' D' F2 U' F' U2",
                    "B' L' D F L2 U' L2 F2 U' F2 U2 L2 U R2 B' D' B L' R2 D2 B D U",
                    "L' U' R B2 U B2 U B2 U' L2 D2 F2 R' F2 D' L D' L2 U' R'"
                ],
                "solutions": [
                    "r U r' U R U' R' U R U' R' M' U R U2 r'",
                    "U2 R2 U' R U R U' R' U' R U' R' U R' U R2"
                ]
            },
            {
                "scrambles": [
                    "R' B R' D' U2 F2 D R2 D R2 D' U B' U B U' F2 U2 R B' R",
                    "L' U F' B2 U2 B2 U L2 U L2 U B2 U2 F' L' D2 R' D2 F2 R U2 R'",
                    "F R' D2 B2 F2 D' B2 D F2 D F D' B L B' D2 F2 R"
                ],
                "solutions": [
                    "U2 R U R' U R U2 R' U R' U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R F' R2 D' R2 B2 U' B2 U F2 U' B F' L2 B' R' F U' F' U'",
                    "L' F' D U' B2 F2 L2 D2 F2 U B2 D R2 F' R B2 R D R D2 R F2",
                    "R' U L' U B2 D2 R2 D2 U' B2 D U' L' F2 U' F2 U L2 D' R"
                ],
                "solutions": [
                    "U R' U' R U' R' U2 R U' R U R' U R U2 R'"
                ]
            }
        ],
        "L2": [
            {
                "scrambles": [
                    "L D R' D' L2 R2 D B2 D' R2 D U F2 R D' U2 L' U' L2 U2 L",
                    "B' U' L' R2 D' B2 D L2 U R2 U2 R2 U2 L' U' R' U' R' B U'",
                    "L' F' L U2 L2 B2 U' B2 D L2 D' L2 U2 L' U' F L' F' L' U L' F"
                ],
                "solutions": [
                    "F R U' R' U' R U R D R' U' R D' R' U2 R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "F' L' U' L2 U' B2 D L2 D' L2 U L2 U L U2 F2 L B2 L' F'",
                    "B' D' L' R2 D' U2 F2 D' L2 U' R2 U F' R2 F D2 B' U L' D B U2",
                    "F' R F' U R2 D R2 U' L2 U' F2 L2 U' R D2 R' U2 F R' F L2 U"
                ],
                "solutions": [
                    "U2 F R U R2 F R F' R U' R' F'",
                    "U F R U R' U' R U' R' U2 R U2 R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "L' D B D2 R2 F D2 F' L2 F L2 D2 R2 D L U' B U B' U2",
                    "B L U2 R2 F2 L2 D' L2 F2 D' F' D R2 U2 L' B' U' B' U2",
                    "B L U2 R2 F2 L2 D' L2 F2 D' F' D R2 U2 L' B' U' B' U2"
                ],
                "solutions": [
                    "L' U2 R U' R' U2 L R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' D F L R2 U2 B2 R2 D R2 U' B2 L2 R2 F D2 L F' L U' R2 D' R2",
                    "L' D L U2 L2 U' F2 D U F2 R2 U2 R' F2 R D R2 D L2",
                    "R U' B U B2 D' R2 U F2 U' F2 U' R' D R U R' B R2"
                ],
                "solutions": [
                    "R' U' R U R' F' R U R' U' R' F R2"
                ]
            },
            {
                "scrambles": [
                    "L D F' D2 L2 F2 L2 U' L2 F2 R2 U2 L' D L' R2 U2 F D' L'",
                    "F' L' D' L2 R2 U B2 R2 B2 U' R2 D L F L B2 L2 B2 U L U'",
                    "R' D F L2 F' L2 F U2 L2 D2 B2 D F' U B2 U F R U'"
                ],
                "solutions": [
                    "U R' U F' R U R' U' R' F R2 U' R' U' R U R' U' R",
                    "F R U R' U' R' F R2 U' R' U' R U R' F2"
                ]
            },
            {
                "scrambles": [
                    "F R D R2 D' R2 D B2 U' B2 D L' B' L D2 U R2 F' R U2",
                    "R B' R' D' R2 D R2 B2 F2 D' L2 D B2 R' B R F2 R2 U'",
                    "F D' F' L2 B2 D' R2 U R2 B2 D L2 F D F' U2 F' U F U'"
                ],
                "solutions": [
                    "U R U' R' U R U R' U R U' R2 D' R U R' D R",
                    "R' U' R U R' U' R' F R2 U' R' U' R U R' F' U R"
                ]
            },
            {
                "scrambles": [
                    "F' L F U' R2 U2 L2 U L2 B2 D B2 U2 F' L' F' R2 U R2 F2 R2 U'",
                    "R D R' U2 F2 L2 F2 D L2 B2 U R2 U F' U' B2 U F' R D' R'",
                    "L F L' U F2 U' R2 U' F2 U R2 U' R' F' R' U2 F' U2 R2 U F2"
                ],
                "solutions": [
                    "U r U2 R r2 F R' F' r2 U2 r'"
                ]
            },
            {
                "scrambles": [
                    "L' F' D F2 R2 U2 F2 L2 B R2 B D2 B2 U F' R2 B U' R2 B F L'",
                    "L' B L D' F2 D B2 D' F2 D U' R' U2 R B U L U' L' U'",
                    "F' D' F' B' L2 U2 B' F' R2 U2 F2 R2 U R2 B U' B U F2 L2 F"
                ],
                "solutions": [
                    "U2 r U2 r2 F R F' r2 R' U2 r'"
                ]
            },
            {
                "scrambles": [
                    "F' R' B' D' F2 D F2 R2 U F2 U' F2 R' U2 R' B R B' U2 B F U2",
                    "B' U L' F2 L2 D' U2 R2 B2 L2 F2 D U F' D' F' D2 U2 L R2 B U",
                    "R U' R' D' L2 F2 U' L2 U F2 U' L2 U' L' U' L D L' U2 L F2"
                ],
                "solutions": [
                    "U2 F R U R' U' F' r U r' U R U' R' r U' r'"
                ]
            },
            {
                "scrambles": [
                    "L' F U' L2 D' F2 D' R2 U L2 B2 D L2 B' L' U' L2 D' R2 D2 L2",
                    "L B U B' U2 F' L2 R2 B' R2 B L2 F' U' B U2 B' F2 U2 L' U'",
                    "F' U' R F2 D' L2 D R2 D' L2 D R2 F2 R' F' D' F U F' D F2 U'"
                ],
                "solutions": [
                    "U r U r' R U R' U' r U' r' F U R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "F' D B U2 B2 D F2 R2 D R2 F2 L2 B' F U F' L2 B2 D2 F U'",
                    "B' U' F2 D2 L2 B L2 D2 F2 U2 F U F2 U F2 U2 B F' U",
                    "B' L' U' F' D2 F' D2 F2 U2 B' L2 B D' B D L' U' B U F U' F'"
                ],
                "solutions": [
                    "U' R U R' U R U' R' F2 R U2 R' U2 R' F2 R2 U' R'",
                    "U R U2 R' U' L' U2 R U R' L U L' U L"
                ]
            },
            {
                "scrambles": [
                    "F U' F' D L2 F2 D2 R2 F2 U2 R2 D F D2 U F' R2 U B' U2",
                    "F R' F B' D2 B' L2 F L2 F' D2 F2 U2 R U R' U B2 R F' U2 F",
                    "B R D U R2 U' B2 D2 B2 F2 D' F2 R U' F2 L2 F U' B U2 F"
                ],
                "solutions": [
                    "R U R2 F2 R U2 R U2 R' F2 R U R' U' R U' R'",
                    "U R U R' U' R' U2 R' U D R' U' R U2 D' R"
                ]
            }
        ],
        "L3": [
            {
                "scrambles": [
                    "B' L F' R2 F2 D L2 D' F2 R2 U B2 U' F L' D B U B' D' B",
                    "B' R U R2 U' B2 U2 R2 F2 L2 D F2 U' R' B' L B' L U L2 B'",
                    "L' F L' F2 L2 D U2 F2 R2 U R2 D' L F' L U F U' F' U2"
                ],
                "solutions": [
                    "U' F' r U R' U' r' F R"
                ]
            },
            {
                "scrambles": [
                    "R' B U L2 U F2 D2 F2 U' L2 U' B L' R2 B2 L U' R' U",
                    "F U' F U F2 R2 B2 D' L2 D L2 U' F' D' F U B' L2 B' R2 U'",
                    "L' D' L' U2 L2 B2 D' B2 D2 U' L F2 U L U2 L' F2 L'"
                ],
                "solutions": [
                    "R' U' R U R' F2 R U2 R' U2 R' F2 R2"
                ]
            },
            {
                "scrambles": [
                    "L U' F B2 F2 D2 L2 B2 U' R2 U' R2 U2 B U' F U2 L2 B' U2 L' U'",
                    "B U' L' U2 B2 D' F2 L2 B2 U' F2 R2 U2 L U L2 U L U' L2 B'",
                    "L F' L' B2 U2 B2 U' L2 U L2 B2 U2 B2 L F L' U L2 U2 L2"
                ],
                "solutions": [
                    "U' F' R U2 R' U2 R' F R U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' D' L B' D2 F2 L2 F' L2 B F' D' R2 D' L' D B' F D B2 F'",
                    "F' R' B' U2 B2 U' L2 U B2 U2 B2 U B' U' B' D' B' D B2 R F U'",
                    "F D' R U R2 F2 R2 F2 D R D L D L' D2 U' R' F'"
                ],
                "solutions": [
                    "U R' U R U' R' U R U R' U' R2 D R' U R D' R'"
                ]
            },
            {
                "scrambles": [
                    "R B' R' D' R2 D R2 U' R2 U R2 U' R B R' B' U B U",
                    "R' F' R D' U' B2 D' R2 B2 D L2 U2 L D F L F U2 L2 U' F U'",
                    "B D L D F2 D' U' L2 D B2 D2 F2 R' U2 F2 U' R2 U' R' B U'"
                ],
                "solutions": [
                    "F R U' R' U' R U2 R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "L' B L' D' R2 U' F2 L2 B2 L2 F2 R2 U R D L D' R D B' L U2",
                    "B' D L B2 L2 D2 F D2 L2 B L2 D' R2 D L2 B L' D' U' B",
                    "L U' R B2 D2 L2 D' B2 D L2 D' L2 D R' U R D2 L' R'"
                ],
                "solutions": [
                    "U2 R' U' R U2 R' F' R U R' U' R' F R2 U R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "B' L' U D' R2 D' L2 U2 F2 L2 D2 R2 B' U B U2 B2 U' L B U",
                    "L B D U B2 D F2 R2 F2 U F2 D2 R2 B' D' U2 B D' F2 D2 L' U",
                    "L U' L' R2 B2 D' L2 B2 R2 U2 L2 U L2 F U' L U' L' U2 F U'"
                ],
                "solutions": [
                    "R' F R U R U' R' F' U R U R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R B D' U2 R2 D R2 U2 B2 R2 U2 R2 B R' B' U B U",
                    "L' B' D' U F2 D F2 U F2 R2 U' R F2 R U2 B F2 L F2 U",
                    "B L' D L2 D' B2 R2 D' R2 B2 D U' L' B D B' D' B2 U2 B U'"
                ],
                "solutions": [
                    "R2 D' R U' R' D R U R' U' R' U' R U R U R U' R",
                    "R' U R U2 R' L' U R U L U r' F r"
                ]
            },
            {
                "scrambles": [
                    "F' R' U' D2 U L2 B2 L2 R2 F2 U2 L' B' U2 B' R' F' U2 L U",
                    "B L' F' D2 F L2 B' U2 B L2 F2 D2 F L B2 F2 R2 B U2 F' U",
                    "R' U R' U' R2 B2 D2 F2 D L2 D B2 U' F' R F' R B U2 B'"
                ],
                "solutions": [
                    "U F R' F' R U R U' R' F U R U' R' U R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "B D' B' L2 U' B2 U' B2 U' B2 U2 B2 U' B R2 B' L2 B R2 D B' U'",
                    "B' R' U' R2 U2 F2 U B2 U' F2 U B2 U R' B L F U2 F' U' L' U",
                    "F' D B' L2 D2 F' D2 F L2 F L2 U F' D' B F U' B U2"
                ],
                "solutions": [
                    "U' F' R U2 R' U2 R' F U2 R U R U' R2 U2 R"
                ]
            },
            {
                "scrambles": [
                    "R B D' B2 R2 U' R2 D B2 U' L2 U L2 B' R2 U' R U' R' U2 R",
                    "F' L' B' L2 U2 F2 D F2 D R2 D L2 D B L2 F' L' U F U F2",
                    "R' F' U' L2 R2 D B2 D' B2 U R2 U' L' D L' D' U F2 D F' R"
                ],
                "solutions": [
                    "U2 R U R' U R' D' R U2 R' D R2 U' R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L D' U2 L2 B D2 R2 F' U2 F R2 D' U' B L B2 U B",
                    "R F' U' F2 U F2 U' R2 U R U' R F R F2 R' F2 U'",
                    "L F U F2 L2 B2 R2 D R2 B2 D2 B' U' B D2 U L2 F L' U"
                ],
                "solutions": [
                    "U R' U' R' D' R U2 R' D R U R U' R' U' R"
                ]
            }
        ],
        "L4": [
            {
                "scrambles": [
                    "R' B' L D R2 B2 D' L2 U R2 F2 U' L' B R2 B' L2 B R' U2",
                    "F' D L' B R2 D' L2 F2 R2 U' L2 D' B R D L' F2 L2 D' R' F U2",
                    "F' U F' R2 B L2 F' D2 F D2 B D B' D2 B' L2 R2 F2 U2"
                ],
                "solutions": [
                    "U2 F R' F' r U R U' r'"
                ]
            },
            {
                "scrambles": [
                    "F' U B U' L2 U' F2 U2 L2 U' F2 U F' L2 U2 F2 U F U2 B'",
                    "L D' R' U2 L2 D' F2 U B2 F2 U R2 U R U R2 D' L' D' L2 U'",
                    "R' B' L' D' L2 B2 R2 U' R2 B2 F2 U L' U B2 R B2 U2 B R U2"
                ],
                "solutions": [
                    "U' R U R' U' R B2 R' U2 R U2 R B2 R2"
                ]
            },
            {
                "scrambles": [
                    "L' F' B2 U B2 U' B2 U R' U R U2 F L R' U2 R",
                    "F' R F U2 R2 D L2 D' R2 D L2 D' R' U' R U' F' R' F U2",
                    "F' R B' L2 U B2 L2 B2 U' F2 L2 F2 R' U' F U R' B2 R2 B' R'"
                ],
                "solutions": [
                    "U2 F R U R' U' R' F' R U2 R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B D' F' L2 B2 R2 B2 U' L2 D F2 R2 D2 F D' B F U F' D' R2",
                    "B' R' U' L2 U2 R2 D2 R2 F2 R2 D B2 R2 F' R' D' F' R' D2 R' B U'",
                    "F U' L' U' B2 U R2 U R2 U' B2 U2 L F2 R' F U2 R' U2 R"
                ],
                "solutions": [
                    "U2 R U' R' U R U' R' U' R U R2 D' R U' R' D R"
                ]
            },
            {
                "scrambles": [
                    "L B' U2 L2 B2 U B2 U' B2 U' L2 U' B U2 L F' L' F U2 L' U'",
                    "R D' B' U' B2 R2 D2 U' L2 B2 D F' U' L2 R2 U' F2 D2 U R'",
                    "F' U' L F2 D F2 U' R2 U R2 D2 L2 U2 L U L2 D L2 F2 U' F'"
                ],
                "solutions": [
                    "R' F' R U R' U' R' F R U' R U R' U R",
                    "U F' r' F r U r' F2 r U F"
                ]
            },
            {
                "scrambles": [
                    "B' R' D' F' L2 B' U2 B U2 F' L2 D2 R B' R' D2 F2 D R B U2",
                    "L U L D2 F2 D2 F' D2 B D2 B2 L2 F U F' R' U' R B F U2",
                    "L' F R2 B2 D2 B2 R2 F2 U2 L' B L' B' L' F U2 L"
                ],
                "solutions": [
                    "U R U R' U R U R' U' R U R D R' U2 R D' R' U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' R' D2 U L2 U' B2 F2 D' R2 U2 L' D' L' D' L B' F2 U'",
                    "R' U' R L2 B' U2 B2 U2 L2 B' L2 B2 L2 U R' F' U' F R B'",
                    "F' D L U2 L2 B' R2 D2 B2 L2 F' L2 B' L' B' D2 B L2 R2 D' F U'"
                ],
                "solutions": [
                    "U L R U' R' U R L' U R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' D' R' F2 U2 R2 F2 R2 D B2 D2 B2 U R' D' U L B2 R' D' R2 U'",
                    "B D' R L2 D2 R2 F' R2 D2 F R2 F' L2 R D B2 U B F' L2 F",
                    "B' U' R' U' F2 D' F2 D R2 U' R2 F2 U2 F' R B R' F' R U'"
                ],
                "solutions": [
                    "U L U' R U R' L' U2 R U' R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F U' F U' F2 R2 D U2 F2 D' L2 U B' R2 B L2 U F2 U R2",
                    "F U L' B2 D B2 L2 U' R2 F2 U2 F2 R2 F' D U' F D2 L D L2",
                    "F' R U' F U2 F' L2 F2 D2 L2 U2 L' R B' R2 B D2 U' L F2"
                ],
                "solutions": [
                    "U R' U2 R U R' U' F' R U R' U' R' F R2 U R' U R"
                ]
            },
            {
                "scrambles": [
                    "L' D' B U2 R2 B2 R2 U2 B' R2 B' R2 D L2 U2 F U2 F' U' L' U'",
                    "F' U F R2 D B2 D' B2 U B2 U' F2 D B D' B F2 R2 U2",
                    "B' D' F' R2 F2 R2 D2 L2 U' B2 U L2 D F D F' R2 F' D B R2 U'"
                ],
                "solutions": [
                    "U R' U2 R2 U R' U' R' U2 F R U R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "L' F' D' L2 D2 F2 R2 U2 R2 D' F2 U' L' U' L' U' F2 U' F' L U'",
                    "F L U R L2 D' L2 D F2 U' R2 B2 L2 B2 R U' L' D' U L2 D F U'",
                    "B D' B L2 U' R2 U L2 B2 U B2 R2 U' B' D B U B U B U'"
                ],
                "solutions": [
                    "U R U R' U R U' R' U' L' U R U' M' x'"
                ]
            },
            {
                "scrambles": [
                    "R B' U' B2 U' B2 D' B2 R2 B2 U2 B2 R2 B' U B' D B U2 R' U'",
                    "B' L' B L2 F2 D R2 D R2 D2 F2 L2 U B' L B L' U L",
                    "B' R B' R2 B U2 F' U2 F R2 F R2 D B R2 B' R' D' R2 B F'"
                ],
                "solutions": [
                    "U2 R U R D R' U2 R D' R' U' R' U R U R'"
                ]
            }
        ],
        "L5": [
            {
                "scrambles": [
                    "B D' F L2 D2 B U2 F' R2 F U2 F' D' F2 D' B' D B' F2 U'",
                    "F' U' F D R2 U' B2 U B2 R2 F' U F R2 D' R2 U'",
                    "R D' F' L2 U2 R2 D' R2 U2 F2 U R2 U' F' D L2 B2 R2 F R U'"
                ],
                "solutions": [
                    "U R' U2 R' D' R U2 R' D R2"
                ]
            },
            {
                "scrambles": [
                    "F' U R B2 L2 U' F2 L2 B2 U R2 D' R' D R2 D' U2 F2 U F' U2",
                    "L B' R2 U' R2 D B2 D' B2 U B L' U B U2 B' U2",
                    "F' L U' B2 R2 U' R2 D B2 D' B2 U B2 L' F L U' L' U'"
                ],
                "solutions": [
                    "U R' U2 R' D' r U2 r' D R2"
                ]
            },
            {
                "scrambles": [
                    "B D' F' U2 F2 U2 F U2 B' R2 F R2 U F U' B U2 F' D B'",
                    "B R F' R2 U' B2 D R2 U' L2 R2 D L2 B R2 D' U2 F' D' L2 R' B'",
                    "L' D R B2 D2 B2 D2 L2 U F2 U F2 U' R' U L2 D2 R2 D L R2 U'"
                ],
                "solutions": [
                    "U2 R D R' U2 R D' R' U' R' U2 R U' R' U' R"
                ]
            },
            {
                "scrambles": [
                    "B' L' B D2 R2 F2 U F2 U' R2 U F2 D' F' L F U' F2 D' L U2",
                    "F' L U L2 U L2 B2 D2 U' B2 D' L2 D' L F2 U2 F' L U' L' U'",
                    "R' U B' F2 R2 F2 U' B2 L2 F2 D2 B2 U2 B' D B2 U2 F' L2 F' R"
                ],
                "solutions": [
                    "U2 R U2 R U R U' R2 D R' U R D' R U R'"
                ]
            },
            {
                "scrambles": [
                    "R U' R L2 D L2 R2 U L2 F2 L2 R2 D L' D L D2 B2 R2 y",
                    "R D F D R2 D R2 D2 L2 F2 U' F2 L2 F' D' F L' B2 L F' R' U2 y",
                    "L' B' L U2 B2 D2 R2 F2 D R2 U' R2 U R B R U B2 D L2 U2 y"
                ],
                "solutions": [
                    "U R U R' U2 R U R' U2 y' R' U2 R U' R' U' R"
                ]
            },
            {
                "scrambles": [
                    "R D' L' D' B2 D2 F2 U R2 F2 R2 F2 U R' D' L2 U L' F2 D U'",
                    "B' D' R' U B2 D2 B2 D' R2 D' B2 U' B2 R' D F' U F R2 U' B U2",
                    "R B' L' D L2 R2 D2 R2 D' R2 D' R2 D' L' D2 B' R' U L U B2 L'"
                ],
                "solutions": [
                    "R' U2 R U R2 D' R U R' D R2"
                ]
            },
            {
                "scrambles": [
                    "R D' L F D2 F2 R2 B' D2 U2 L2 U2 B' L D R' U2 L2 B2 D B2",
                    "B' D F D2 F' R2 D2 F D2 F2 D2 B' L2 D' B2 U B2 F' L2 B2 F",
                    "R U B' D B2 D' R2 U R2 U' R2 D2 L' D' L D' R2 U' B' R'"
                ],
                "solutions": [
                    "U R U R' U' R U' R' U L' U R U' L U' R'"
                ]
            },
            {
                "scrambles": [
                    "R D' L U2 R2 D' U2 F2 U' R2 U F2 L2 R' D L' B2 D2 F2 U' F2",
                    "L F L' U' L2 U F2 U2 L2 U L2 U F2 L F' L U' L2 U L2",
                    "F' U R U' R2 U F2 R2 D L2 U' B2 U R F2 R2 U L2 B2 U' F"
                ],
                "solutions": [
                    "U R U' R' U2 R U R' U2 R U R' U R2 D R' U' R D' R2"
                ]
            },
            {
                "scrambles": [
                    "F D' F D F2 U' L2 B2 U' L2 U' L2 U2 B' R2 D2 B' D' L2 U' F'",
                    "B' U L U L2 U B2 U' L2 U' L2 U B2 R' U' L U R U2 B U2",
                    "F D' B' U2 L2 U' R2 U L2 U' F2 U B D' F L2 U F D2 F' U'"
                ],
                "solutions": [
                    "U R' U2 R U2 R' U' R2 D R' U2 R D' R2 U2 R"
                ]
            },
            {
                "scrambles": [
                    "B' R' F2 D' B2 U' L2 U F2 U' B2 R' B R' U2 R U R' U2 R",
                    "B' R B U' F2 R2 F2 U F2 R2 F2 U2 B2 R' D' R2 F R' F' D B2",
                    "R F D B2 D2 F' R2 F' U2 F' D2 B D L B2 D' B L D L2 D2 F2"
                ],
                "solutions": [
                    "U2 F' R U R' U' R' F R2 U' R' U' R U' R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "L' B' R U' F2 U B2 U' F2 U B R' D' B' D B' L2 U' L' U'",
                    "F D' L' U2 F2 D' B2 U' B2 D' B2 U2 R U B2 D' F U F U F'",
                    "B' R D' R2 U2 F2 U F2 U2 R' D R2 B U' B U' B' U'"
                ],
                "solutions": [
                    "R U' R2 F2 R U2 R U2 R' F2 U2 R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L D' L' F2 D R2 D' F2 U F2 U' L2 D2 R D L' D2 L' R",
                    "L F' U' D R2 D B2 U' R2 D L2 D U' B' R2 F R2 F2 U B L U2",
                    "L' F R U2 B2 U' B2 U2 B2 U' B2 U R' F2 U' L U L' F L U"
                ],
                "solutions": [
                    "U R' U R2 D R' U R D' R' U2 R' U R U R' U' R"
                ]
            }
        ],
        "L6": [
            {
                "scrambles": [
                    "F' L' U L2 U L2 B2 D2 U' B2 D' L2 F' D' F L' F2 U2 F' U'",
                    "R D' B' D R2 F2 U2 F2 R2 F2 U2 F' R2 F' D' B D U2 R' U2",
                    "L' F U F2 D' B2 D F' D' B2 D F' U' F' L U2"
                ],
                "solutions": [
                    "U2 R U2 R D R' U2 R D' R2"
                ]
            },
            {
                "scrambles": [
                    "F R U' B2 F2 U' F2 U B2 F2 U F2 R' F U' F2 U F2",
                    "R D' B' F2 R' U2 L D2 L B2 L2 U2 B R' U2 F2 U' R' F D R2",
                    "R B R U L2 U B2 U B2 D2 F2 U' F2 L D2 R' B' L B2 R' U2"
                ],
                "solutions": [
                    "U R' F' R U R' U' R' F R2 U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L' B U L2 U' R2 U L2 U' R2 B' L2 U2 L' U' L U' L'",
                    "R U R' F2 U F2 U2 F2 U' F2 R2 F2 R' U2 R F2 R2 U",
                    "B U' B U R2 D' L2 U F2 R2 U' L2 R2 F' U' F D B' R2 B R2 U"
                ],
                "solutions": [
                    "U' L' U R U' L U R2 U2 R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "L' B R2 D' R2 B2 L2 U2 B2 R2 F' L2 F' D' R2 B' L2 U' L' U'",
                    "B' R D' U R2 U R2 D' F2 D F2 U' F' R F D B2 U' B' R' U",
                    "B R' F U' B2 F2 D R2 U F2 U' R2 B F2 D2 B U F' R' B' U'"
                ],
                "solutions": [
                    "U' F R U R' U' R' F' U' R U R U' R' U' R' U R"
                ]
            },
            {
                "scrambles": [
                    "R U L' D B2 U' F2 D F2 D2 F2 U' F2 R' D U L2 R' D' L' U' y'",
                    "L' U' R F D2 F D2 B2 D2 F' D2 F' R' U B' U' B L F U' F' y'",
                    "L' U B D L2 D' L2 U L2 U' L2 B' U2 L' B L B' U L y'"
                ],
                "solutions": [
                    "U2 R' U' R U2 R' U' R y U2 R U2 R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "F' U' R' B2 R2 D' B2 U' L2 B2 D' B2 U F U2 F L2 U2 F R U F",
                    "L' D' R B2 D B2 U' B2 U B2 L2 U L' D' R' D L U L' U'",
                    "R' B' L2 D' R2 D L2 D' R2 D B R2 U' R' U2 R U' R' U'"
                ],
                "solutions": [
                    "U' R U2 R' U' R2 D R' U' R D' R2"
                ]
            },
            {
                "scrambles": [
                    "B L' U L2 D' R2 D L2 D' R2 D U' L' F U F' U' L2 B' U'",
                    "F R' U D R2 D' R2 U' L2 B2 D' B2 U2 R F' R' F U2 L2 F' R U2",
                    "B' D R' B2 L2 B2 R2 U L2 D2 R2 D B' U' R' F' L2 D2 L2 R F"
                ],
                "solutions": [
                    "U2 R' U' R U R' U R U' L U' R' U L' U R"
                ]
            },
            {
                "scrambles": [
                    "F' R' B' D2 F2 D2 B R2 F R2 F2 U2 F' U' L U F2 U2 R U L' F",
                    "R' F' R F2 D B2 L2 D L2 D2 F2 R' F R' U R2 U2 B2",
                    "L' D' L' B L2 B' R2 D2 R2 F U2 F' D2 L D L B2 U B2 U2"
                ],
                "solutions": [
                    "U2 R' U R' D' R U R' U2 R U R' D U R U' R"
                ]
            },
            {
                "scrambles": [
                    "L D L' F2 L2 R2 D' L2 D' L2 B2 R2 U2 R' B2 R U L' D L' U2",
                    "B' R' U' R2 B2 D B2 D' R2 U R2 D' R D R2 B U' B U' B' U",
                    "B' D R' D2 B' U2 R2 B D2 F' U2 L F R F' L F D' B U'"
                ],
                "solutions": [
                    "U2 R U2 R' U2 R U R2 D' R U2 R' D R2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F' U' L D2 F2 D' F2 D' L2 U B2 D' B L B L D F U' L'",
                    "F' U F D' F2 U' L2 U2 F2 U' F2 U2 L2 B L2 B' D F U F U'",
                    "R B' R L2 D L2 D' F2 D2 L2 F2 R2 U L' B L2 U' B' U L' B2 U'"
                ],
                "solutions": [
                    "U' R U R' U R U2 R D R' U2 R D' R' U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R B' R U' B2 D' L2 R2 D U R2 U' B2 R' B R' B' U' F2 U2 B U",
                    "B' U' B' L2 U2 L2 B2 D' B2 U' L2 F2 U' F' R2 F' L2 B2 U'",
                    "B R F' D2 B2 U' F2 U' B2 F2 U F2 D2 F' U2 R' U B' R U2 R' U"
                ],
                "solutions": [
                    "U' R' U R2 B2 R' U2 R' U2 R B2 U2 R' U R"
                ]
            },
            {
                "scrambles": [
                    "F' L' F R2 B2 U B2 U' B2 F2 D B2 L2 F' D' F' R2 U B2 F' L' F",
                    "R F L R' L' B2 R F' L2 U L2 U L2 U2 F2 R' F2 L2 B2 U2 R' U2",
                    "F' D' L D F2 D' L2 U L2 U' B2 U L' D' R2 D' U2 R' D' F U"
                ],
                "solutions": [
                    "U2 R U' R2 D' R U' R' D R U2 R U' R' U' R U R'"
                ]
            }
        ],
        "Pi1": [
            {
                "scrambles": [
                    "F' U' L D' U B2 U B2 D U' L' B' F R' U' R U B U2",
                    "F' R B D L2 D2 B2 U R2 D2 R2 B2 U' B' U2 F' R2 F U2 R' F U'",
                    "L' F U' D B2 F2 D' F2 D' U2 B2 F2 L2 B D' R2 B' D2 L2 U' L U'"
                ],
                "solutions": [
                    "R' U' R U R U2 R' U' R U' R2 U2 R"
                ]
            },
            {
                "scrambles": [
                    "L' B' L B2 R' B2 R D2 L' D2 B2 D2 L F' L' F D2 L' B' L U",
                    "L F' L D B2 D' R2 B2 D B2 R2 D2 L' F L2 R' U2 R2 B L R'",
                    "R U' B D' B2 D L2 U' L2 B2 U2 B' U B' U B U' R' U"
                ],
                "solutions": [
                    "R U R' U' R' U2 R U R' U R2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "L' B' R' F2 U2 F2 U F2 U' F2 U F2 U F U F U2 R B L U2",
                    "B' U' L' R2 B2 R2 B' R2 B' R2 B' L U2 F U' B U F' U",
                    "R F' L' D' B2 L2 D' L2 D L2 U' F2 D2 R' D2 F D L2 U' L U F2"
                ],
                "solutions": [
                    "U' R' U2 R U R' U R2 U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R U' B' U R2 B2 R2 U2 L2 F2 R2 D' F' D F2 D F L2 R U'",
                    "F' D R D L2 R2 D' R2 U B2 D B2 U' R D2 L2 F U2 F U' F'",
                    "F' L' F' D2 R2 F2 U2 B' F2 R2 F D2 F L' U' L' B' U B L"
                ],
                "solutions": [
                    "U R U2 R' U' R U' R2 U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "F' R' F U2 R2 U2 R2 D' F2 L2 U' L2 D F' L F L' F2 R2 U2 R' U",
                    "L U B' F2 D' F2 R2 D B2 U' B2 R2 B U2 R' F2 U' F2 U L' R",
                    "R' D' F R F2 L D2 B2 U2 R2 D2 F2 R2 U' L F D U2 R' U' R2 U'"
                ],
                "solutions": [
                    "U' R U2 R' U2 R U' R' U2 R U' R' U2 R U R'"
                ]
            },
            {
                "scrambles": [
                    "R' U F L2 U' F2 L2 F2 U' L2 R2 B' D R2 F2 R' D R2 B",
                    "R F R' U2 R2 F2 R2 U F2 D2 U L2 B2 L' B' L U2 B L2 D2 R2 U'",
                    "F' R D B2 D U2 B2 U' L2 D L2 U' F' D F R2 U R U' F"
                ],
                "solutions": [
                    "U R' U2 R U2 R' U R U2 R' U R U2 R' U' R"
                ]
            },
            {
                "scrambles": [
                    "L' B' U B2 U' R2 B2 U R2 U' R2 U R2 B' U L U' B' R2 B U2",
                    "B U' L' B2 F2 D2 R2 D R2 D B2 F2 L F' L U' L' U B' F U2",
                    "L B' R F2 U' L2 D R2 D' L2 U F2 R2 F' U F2 U' F R B L' U'"
                ],
                "solutions": [
                    "U2 R U' R' U2 R U R' U2 R U R' U2 R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B U' R' D2 F2 D' F2 D' R2 U L2 B2 U' R' U2 R D2 L D2 R' B U",
                    "R D' R' F2 D2 R2 U2 R D2 R2 D2 R' D' R U R' U' R2 U' F2",
                    "F L' F' B2 U' B2 L2 D' L2 U' R2 F2 U' L F' L' F2 L R F R U'"
                ],
                "solutions": [
                    "U2 R' U R U2 R' U' R U2 R' U' R U2 R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R D R' F R2 B R2 U2 R2 B' R2 U2 F' D U' F U F' D' R D' R'",
                    "L' B' U' B2 U2 B2 U' B2 U' B2 R' B L B' R B U'",
                    "R' F' D U F2 D' F2 D' L2 D L2 R U2 R' F U2 F2 R' F R2"
                ],
                "solutions": [
                    "R' U2 R2 U R2 U R2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B' R B F2 D' R2 D B2 D2 R2 U' R2 U2 F L' F L' U B2 D' U' R'",
                    "F D' R' F2 D F2 U' F2 U F2 R2 U2 R' U R' D' R D U2 F' U",
                    "R' B' L' B2 R2 F2 R2 F2 D2 R2 F2 D2 R B L B U R2 U R2 B U2"
                ],
                "solutions": [
                    "R U2 R2 U' R2 U' R2 U2 R"
                ]
            },
            {
                "scrambles": [
                    "R' D' B L2 F2 D2 F2 U B2 U B2 U2 L2 B' D R' F2 R2 U L2 B2 L2",
                    "B' D B' L2 B' L2 U2 B2 R2 F' R2 D' B' F2 D B2 F2 U'",
                    "R' F' U' B2 L2 U L2 B2 R2 F' D F R2 F U R U"
                ],
                "solutions": [
                    "R U R' U' R' U' R U R U R' U' R' U R U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F D' F U' R2 U R2 U F2 R2 U2 R2 U2 F U F' U F D U2 F'",
                    "B' D B R2 U B2 L2 D L2 D' B2 U' R2 B' D' B U2 B U' B' U2",
                    "R D' R' B2 R F2 R' B2 R F2 D2 L' D' R D L D' R2 U'"
                ],
                "solutions": [
                    "R U2 R' U' R U' R' U' R U2 R' U' R U' R'"
                ]
            }
        ],
        "Pi2": [
            {
                "scrambles": [
                    "L U B' U' F2 L2 U' L2 F2 U R' F2 D F2 D' R B U' L' U",
                    "L U B' U' F2 L2 U' L2 F2 U R' F2 D F2 D' R B U' L' U",
                    "L F R' D2 L2 U L2 D U' F' U' F D U R F' L' U2"
                ],
                "solutions": [
                    "U2 R2 U R' U2 R' U' R U R D R' U R D' R' U R U' R2",
                    "U' R U R' U R U' R' U' R2 D R' U2 R D' R2 U R U' R'",
                    "F R2 U' R U' R U' R' U2 R' U R2 F'"
                ]
            },
            {
                "scrambles": [
                    "R' F' U' B2 D F2 D' R2 F2 D' F2 R2 B2 F' L' R U2 L",
                    "F R' B2 L2 B D2 B' D2 L2 B2 R F U2 F2 U F' U F",
                    "R' F D B U2 B D2 L2 B' U2 R2 F2 R2 U' B L F D2 U2 B2 D' F'"
                ],
                "solutions": [
                    "U2 F R2 U' R U2 R U R' U R' U R2 F'"
                ]
            },
            {
                "scrambles": [
                    "R F' R' U' R2 D' B2 U F2 D R2 U2 F' L' B L' F2 D2 U2 B'",
                    "F' L' F' D' B2 D' B2 D' R2 F2 U2 F2 R2 F U' F2 D' F2 U L F",
                    "R' D' R D2 B2 L2 D L2 D' B2 D F2 U2 R U' L' R' U' F2 L D2"
                ],
                "solutions": [
                    "F U R' U' R2 U' R2 U2 R U2 R U R' F'"
                ]
            },
            {
                "scrambles": [
                    "R' B L U2 L' R' F2 R U2 R B2 U2 R F L' R' D2 U' R2 U' L R2",
                    "B' U L' R2 F D2 B' D2 F2 U2 B U2 F R' B' R B' L R2 U B",
                    "B' L' B' L2 R2 D2 F D2 L2 R2 B' U2 B' U B' U L U2 B U'"
                ],
                "solutions": [
                    "r' U' R U' R' U R U' R' U R' F R F' U r"
                ]
            },
            {
                "scrambles": [
                    "R F' R' U' L2 U' L2 U' L2 U2 L2 U' R F U R' U R U2 R' U",
                    "L U' F' D2 R2 D B2 U' R2 D' F2 D2 L2 F' D2 U F2 D2 L2 U2 L U2",
                    "F D' B' D' R2 B2 U B2 D B2 U2 L2 B' U F U F' D F'"
                ],
                "solutions": [
                    "U R U2 R' U' F' R U2 R' U' R U' R' F R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F' D F' R2 F' R2 U2 B' R2 B U2 B' F2 D B D2 F2 U' R2 F'",
                    "F U' B' R2 U' R2 B2 D L2 U' L2 B2 U B' D' B2 U2 F R2 F2 U'",
                    "L' B D U' L2 U F2 D U2 F2 U R2 U' F R2 D2 U2 L' U'"
                ],
                "solutions": [
                    "U' R U R' U r' F R F' r U' R' U R U2 R'",
                    "U R' U' R' D' R U R' D R U2 R' D' R U2 R' D R2"
                ]
            },
            {
                "scrambles": [
                    "R U R' U2 B2 U R2 U R2 U' R2 B2 U L U R U2 L' U R' U2",
                    "F L' B U2 F2 D' F2 D F2 U' F2 U' B U' B2 L2 D' L2 U L F'",
                    "B L R2 F2 U B2 L2 F2 D2 F2 D R F2 D2 B' D L D' B2 U2"
                ],
                "solutions": [
                    "U' r U R' U R' F R F' R U' R' U R U2 r'",
                    "U' R' U' R U R' U' R2 D R' U R D' R' U R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R' D R' U2 R2 F2 R' D2 B2 L U2 L2 F2 U L' U' L2 B2 U' F2 D",
                    "B U' R L2 D U2 L2 D' B2 U B2 R' B2 D' B U2 B2 D B2",
                    "F' L F L2 D2 F2 U L2 D' U' L2 B2 D' B' D' F2 D L' B' L2"
                ],
                "solutions": [
                    "U R U R' U' R U R2 D' R U' R' D R U' R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B' R F U' B2 L2 U' F2 U L2 B2 U R2 F D' F' D' R B2 F' U' B' R2",
                    "B' L' R2 D L2 U2 L2 D F D F' R2 D L U2 B U",
                    "B' L' D L2 U2 L2 D' B2 U' B2 D' B U B' D L U2 B U"
                ],
                "solutions": [
                    "U2 R U2 R' U R' D' R U R' D R2 U' R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F D R U2 R2 D2 U2 F U2 F' D2 R2 U2 R' D' F U F' U F U' F2",
                    "F R' B U F2 U B2 D2 F2 D2 R2 B F2 U B' F R B U2 R U'",
                    "B' R' D' L2 D' B2 D B2 L2 D R2 U2 L2 R' B R U B' L2 U2 B R'"
                ],
                "solutions": [
                    "U2 R' U2 R U' R D R' U' R D' R2 U R U' R' U R"
                ]
            },
            {
                "scrambles": [
                    "R' U F' R' F2 L' F2 L D2 R' D2 R F R F' U' F U' F' U F R",
                    "B U' L2 B' U2 B' D2 R2 D2 B2 U' F L2 F' L2 B' U F'",
                    "F D R F2 D' B2 U2 B2 L2 D' L2 D2 L D' L2 U2 B2 U2 L F U"
                ],
                "solutions": [
                    "R2 D R' U' R D' R' U' R' U R U' R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F U R' D' F2 U F2 U2 F2 U' F2 R2 U R' U' R2 D R2 F' U'",
                    "R' B' U L2 U' F2 U B2 U2 B2 U L2 D' B' L' B L' F2 L2 B U' R'",
                    "B D B' L' R U2 R' F2 R2 D' L D R2 F2 U L B D' B'"
                ],
                "solutions": [
                    "R2 D' R U R' D R U R U' R' U R U R' U R"
                ]
            }
        ],
        "Pi3": [
            {
                "scrambles": [
                    "B' L B U F2 D' R2 D F2 U2 B2 U B L' B' L' B2 L U L U' L'",
                    "F' L' U L2 D' U2 B2 U R2 U' B' D2 F' D' B2 U2 B L' F",
                    "L' D B' D' L2 U' R2 U' L2 B2 R2 D B' D B' L2 F' U' L' R2 U'"
                ],
                "solutions": [
                    "U' F U R U2 R' U R U R' F' R U2 R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' B' D L2 U2 F2 D U' B2 L2 U B2 R2 B' U' B L2 D' B' U2 L' U2",
                    "R B' R D' B2 D L2 B2 U B2 U' L2 B' R2 U F' L' U L F",
                    "B' D' B D L2 U2 L2 U B2 U2 B' L2 U' L2 F U' B' U F'"
                ],
                "solutions": [
                    "r U' r' U' r U r' U' l R U' R' U l'"
                ]
            },
            {
                "scrambles": [
                    "L U B D2 F' D2 B D2 U2 B' F2 R2 B D U2 B2 D L U2",
                    "B U L' D' L2 F2 U F2 U' F2 L2 D L D2 R U2 R' D2 B' U'",
                    "B L' B F2 D' R2 B2 U L2 U' B2 R2 B D B2 L B' R' U R U'"
                ],
                "solutions": [
                    "r' U r U r' U' r U R2 F R F' R"
                ]
            },
            {
                "scrambles": [
                    "R U' L U L2 B2 U' B2 U B2 U R' U' L2 U2 L' U",
                    "B' L U F2 D2 B L2 U2 B' L2 B' L2 D2 U' L' U R U R B",
                    "B' L U2 B U2 B' L B' L2 B' U B2 D' L2 D F2 U' F2 B2 U2"
                ],
                "solutions": [
                    "r' U' R U' R' U2 r U' R U2 R' U2 R' F R F'"
                ]
            },
            {
                "scrambles": [
                    "R D' F L2 B' D2 B L2 F D2 B2 L2 B2 D' B2 D' F2 D B2 R' U'",
                    "R' B' U R2 U' B2 R2 U B2 U' R2 D B' U B2 D' B2 U' R U'",
                    "F R U2 F' U2 F R2 U2 B U2 B R F R' B2 R F2 U'"
                ],
                "solutions": [
                    "R' U' R U R2 F' R U R U' R' F U' R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "R D' B' L2 D L2 B2 D2 B2 D' B2 D' U' B' F2 U' F' R2 F' D U' R'",
                    "F' R' D F2 R' U2 F2 L' U2 L F2 R D2 U' F2 D R U' R' F U",
                    "R' D R' D' F2 U F2 R2 U2 R2 F2 U2 R' U' R U2 F2 R' U2 R'"
                ],
                "solutions": [
                    "R U2 R D' R U' R' D R' U' R2 U2 R"
                ]
            },
            {
                "scrambles": [
                    "B' R D B2 U' B2 D' R2 U R2 U' R2 U L' U R U' L U2 B",
                    "B' U R' B2 D' F2 D' L2 B2 F2 D R B2 U' B2 D' B F L2 F'",
                    "B D B U R2 F2 U R2 B2 U L2 B2 D2 B' D' U B' U B' U2 B' U'"
                ],
                "solutions": [
                    "R' U' R U' R2 D' R U R' D R2 U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "F' U L D F2 D' B2 D F2 D' B2 U2 L' U' L U' L' U F U",
                    "F' U' B U' L2 D' B2 D' F2 U2 R2 F2 D2 B U2 F U2 F' U F U2",
                    "R U L F2 D' F2 D R2 F2 D R2 D' L' U' R2 U R U2"
                ],
                "solutions": [
                    "U2 L' U R U' L U' R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' D F' L2 B2 U2 F2 D U2 B2 L2 D' U2 B' F2 U' R2 U' B U L' U2",
                    "F' U' R U2 R2 F' R2 U2 B L2 B2 L' D2 L' B2 R' U F U2 B'",
                    "R U' L' U B2 D' R2 D2 L2 D F2 R2 U2 R' U2 R D2 L' B2 R' U'"
                ],
                "solutions": [
                    "R U' L' U R' U L U L' U L"
                ]
            },
            {
                "scrambles": [
                    "L U' R' D' F2 D R2 U' L2 R2 U R2 U' L U L R2 U' R U' L'",
                    "R U' L' B R2 F2 D2 F' R2 B R2 D2 F' R' B' R' B L U R' U",
                    "F U' F' U2 B2 U' R2 F2 D L2 D2 F2 U' F' D' F U F' D2 F R2 U'"
                ],
                "solutions": [
                    "U R2 D' R U2 R' D R2 U R2 D' R U R' D R2"
                ]
            },
            {
                "scrambles": [
                    "F' R B L' U2 B2 L' F2 R D2 L D' R2 D' L R2 B R F' R U'",
                    "L F' U' R2 U2 R2 U F2 U R2 F2 D' B' L2 B L B D L2 F U'",
                    "R' U' B D' B2 U B2 R2 U' R2 U' B2 R D2 U B U B' D' R B U2"
                ],
                "solutions": [
                    "U' R2 D R' U2 R D' R2 U' R2 D R' U' R D' R2"
                ]
            },
            {
                "scrambles": [
                    "L D L' U2 R2 D B2 R2 U' R2 D B2 D2 L R2 D' U2 L' U' L U' L'",
                    "F U' F' D F2 D2 B2 D2 U' F2 U F2 U' F' U2 F' D2 U2 B2 D U'",
                    "L D B U2 F' L2 R2 B R2 B F2 L2 F' D' F2 D B2 D R B2 D2 F2"
                ],
                "solutions": [
                    "U' R U2 R2 F R U R U2 R' U' R U2 R' U' F' R U R'",
                    "U2 R U2 R' U' R U r' F2 r U2 R' U' r' F r"
                ]
            }
        ],
        "Pi4": [
            {
                "scrambles": [
                    "F R' U R2 U2 L2 B D2 B D2 B2 L2 U2 R' F2 R' U' R U2 F U2 F'",
                    "B L D' R B2 L B2 R' D2 U2 R2 U2 R2 D' L F' L' F L' B'",
                    "L' B' U B2 D F2 U2 F2 U2 L2 D' L2 U L' B' F' L' B L B' L' F"
                ],
                "solutions": [
                    "U R U2 R2 U' R U' R' U2 F R U R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "F L D' U L2 U' L2 D' B2 U2 B2 D' F' U2 F D' U L' U2 F'",
                    "F' D B U2 F' U2 B' U2 F R2 F R2 F' D' F U F' U F U'",
                    "L' B' U' B2 L2 D2 F2 U F2 U' R2 D2 L D' R2 D L B' L U2"
                ],
                "solutions": [
                    "U' R U R' U R U2 R2 F' r U R U' r' F"
                ]
            },
            {
                "scrambles": [
                    "L B' D' B2 R2 D B2 U' L2 D U F2 L D' B2 U' B2 L' B L'",
                    "B L F' L2 B L2 R2 F' U2 F R2 F U2 L' B2 U' R U R' U' R' B",
                    "F L F U2 R2 F2 R' F2 R2 U2 L B F2 D2 B' L2 U L' U' L"
                ],
                "solutions": [
                    "U' r' F' r U' r' F2 r2 U R' U' r' F R F'"
                ]
            },
            {
                "scrambles": [
                    "F D L' R' D2 B2 R2 F2 L B2 R' U2 L2 F' L' F L U2 F2 L2 D F'",
                    "L' F' L' U' L2 U2 L2 U' L2 U F2 U R U' R' F2 U L' F U2 L",
                    "L F D' B2 F2 R2 D' R2 U2 F2 U2 B2 D' F' L2 R2 B' L U R2 U"
                ],
                "solutions": [
                    "F R U R' U' R' F' R U2 R' U' R2 U' R2 U2 R"
                ]
            },
            {
                "scrambles": [
                    "R B R U2 F R2 F D2 L2 B2 D2 F R B2 R' F R2 B R2 U",
                    "R' F L2 U R2 U' L2 U R2 U F' R F R' U2 R F' U",
                    "B L D2 F2 D B2 U' R2 D' F2 D B' D B' L B2 U2 B"
                ],
                "solutions": [
                    "U R' U' R L U2 R' U2 R U2 L' U R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "B' R' F D2 B2 U' L2 D' U2 B2 D' R2 F R F U R' U B U F'",
                    "L' F D U2 F2 U F2 D' L2 R2 U2 R2 D2 L' U L' D2 F' L U'",
                    "F L' B' D2 B2 R2 B' R2 B R2 B' R2 D2 L B2 R2 D B D' R2 B2 F'"
                ],
                "solutions": [
                    "U' F U' R U' R' U R U R' U2 R U2 R' U F' U"
                ]
            },
            {
                "scrambles": [
                    "F' L' F L2 F2 U2 L2 F L2 U2 F L' F2 U F' U2 F U' F' U2",
                    "B' R D2 L2 B2 D U2 L2 U' L2 F2 U' F' R2 U2 L F' D B2 R' F'",
                    "B' U L R2 F D2 R2 F D2 F2 L2 U2 L' B R2 B' L2 U' B U'"
                ],
                "solutions": [
                    "U R2 D' R U' R' D R U R' D' R U R' D R U R U' R' U' R"
                ]
            },
            {
                "scrambles": [
                    "L' U' F U2 F2 L2 F2 U F2 L2 F2 U F' L U' L' U2 L2 U L'",
                    "B L' F B D2 L2 B2 U2 F R2 B U2 L' B' F U F U' F' U2",
                    "L F D' L2 U' L2 D F2 U' F2 U2 F2 U2 F U' L' U2"
                ],
                "solutions": [
                    "R' U' F' R U R' U' R' F R2 U2 R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "B D B L2 B2 U' B2 L2 D F2 D F2 D2 B' D' U2 B' U' B U' B' U2",
                    "B' D' B' D B2 U2 L2 U L2 U2 L2 U' L2 B L2 U' L2 F U' B' U F'",
                    "R' F R' D B2 U' B2 D L2 U R2 U2 F L2 U2 F' R B R U' R2"
                ],
                "solutions": [
                    "U' R U R' U R U' R' U' R' F' R U2 R U2 R' F"
                ]
            },
            {
                "scrambles": [
                    "B' U' R U B2 F2 U' F2 D2 U' B2 D2 R' B' U' B2 U B' U2 B'",
                    "L' B D L2 U L2 B2 D' R2 U R2 B2 U' B' U2 L U F U2 F' U2",
                    "L' D' B' U R2 B2 U B2 U' R2 U' B2 U B' D2 L U' L' D' L"
                ],
                "solutions": [
                    "U2 R' U' R' D' R U R' D R' U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F' U B U' B2 U2 B2 L2 F2 U' B' U F L2 F2 U2",
                    "F D B U2 F2 L2 D' U' L2 D U F2 U F' U' F' L2 B' F2 D' U2 F'",
                    "B R' D' U' R2 D R2 U' B2 D' R2 D R' U R' U' B2 U2 R B' U2"
                ],
                "solutions": [
                    "U2 R U R D R' U' R D' R U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R' D F' U2 B2 R2 D' L2 F2 L2 D R2 U2 F D' R F' U F U'",
                    "B' U' B L2 B2 U L2 U L2 U2 B2 U F' D' L2 D L2 F U' L2 U'",
                    "F L' U' F2 U' L2 D' B2 U B2 L2 D F2 L F' D F U2 F' D' U'"
                ],
                "solutions": [
                    "U F U R U' R' U R U2 R' U' R U R' F'"
                ]
            }
        ],
        "Pi5": [
            {
                "scrambles": [
                    "B' L F' R2 F L2 B' R2 B U2 B' R2 B L R2 B F' R' F' R F' U'",
                    "B' U L' B R2 B' L2 F U2 L2 B' D B2 R2 D R2 D L R2 B",
                    "F' R F R U2 F2 L' B2 L' D2 B2 L2 R' U R' U' R2 F2 U F' R' F"
                ],
                "solutions": [
                    "r' F' r U r U2 r' F2 U' R U R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R F R B2 D B2 D2 R2 U R2 D R2 U' R B2 F' R' U' L U' L'",
                    "B' R' U' R2 B D2 B' R2 U2 F L2 F' U' F R B R' F' R U2",
                    "F' R' U' R' D R U R' D' R2 F R2 F2 R' B2 R F2 R' B2 R' U2"
                ],
                "solutions": [
                    "U2 R U2 R' U2 R' F R2 U' R' U2 R U2 R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "F R' U' B2 D' L2 D L2 B2 U R F2 U' B L2 B' U' F U'",
                    "B D' R2 U2 R2 B' D2 F L2 F' U B2 D' R2 U R2 B' U2",
                    "B' D' F' R2 D R2 F2 D' U2 B2 D2 F2 U' F D L2 U L2 B' L2 F2 U'"
                ],
                "solutions": [
                    "R' F R U R' U' R' F' R2 U' R' U R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L' U' R D2 L2 D B2 D' L2 D B2 D L2 R' U L2 U' L' U",
                    "R F' L' F' D2 L2 F2 R2 B U2 B R2 F2 D' B' D B2 F L' F R' U'",
                    "B' U L' D2 B2 R2 D2 F2 U2 B2 L2 U2 L U' B2 U' L' F2 L B' U'"
                ],
                "solutions": [
                    "R' L U2 R2 U R2 U R U L' U' R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B U R' L2 U2 L2 U' F2 D F2 L2 U' F' D F' D2 F2 L2 R U' B'",
                    "F' D R' U2 B2 U B2 U B2 U2 B2 U' R D' F U'",
                    "B' L F' U2 B2 U B2 R2 D B2 L2 D' B' U B' D' F2 D F L' B"
                ],
                "solutions": [
                    "l U2 l' U2 R' U2 R B2 U R' U R"
                ]
            },
            {
                "scrambles": [
                    "B' D F U2 F2 L2 D2 L2 D2 F2 R2 U2 R2 F' D' B U2 B U' B' U2",
                    "B' L' F' D2 L2 B2 D2 F2 R2 U' R2 U' F' L2 F' L' F2 R2 U' B U2 F'",
                    "L' F' U R2 D L2 U' B2 U' R2 D L2 R F2 L F2 R' U F' L"
                ],
                "solutions": [
                    "U' R U R' U F2 R U2 R' U2 R' F2 R"
                ]
            },
            {
                "scrambles": [
                    "L D F D' B2 U' B2 D' B2 U B2 L2 U L' B' R2 B' D B2 L2 F U'",
                    "B D' L B' R2 D2 U2 F D2 U2 R2 F' U' B2 F' L' U' B' D R2 U B'",
                    "L F R F2 U F2 L2 U2 R2 U' L2 U2 F U F' U' R F L' F U'"
                ],
                "solutions": [
                    "U' R' U2 R U R' U R2 U' L' U R' U' L"
                ]
            },
            {
                "scrambles": [
                    "R B D F2 L2 U' B2 D B2 U B2 U' R2 B' L' B' F L F L D2 B'",
                    "L U' L D B2 L2 U' R2 F2 L2 D2 L2 U' L D U R2 D' L' U2",
                    "F L F D' L2 U2 B2 U' B2 D L2 F2 U2 F' U' F2 U F2 U' L' F' U"
                ],
                "solutions": [
                    "U R U R' U R U' R' U R U' R D R' U' R D' R2"
                ]
            },
            {
                "scrambles": [
                    "R' B' U R' F2 L F2 D2 R F2 R' F2 L' U' L D2 L' U R U' B R",
                    "F D L' B' U2 L2 B L2 B' L2 U2 B D R2 D R' F2 R' D L F'",
                    "R' U B' U2 F2 R2 U F2 U B2 L2 F' D F D B' L2 U' R"
                ],
                "solutions": [
                    "R U R' U' R' F R2 U R' U' R U R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "F' R' D' R2 B2 D L2 D2 U R2 F2 D2 U' R F D' U' B' U' B D",
                    "F L B R2 B U2 B2 L2 F R2 B D2 F' L B R U2 R' B' F' U'",
                    "L' U L' R2 D B2 D' B2 D B2 L2 R2 U2 R' U2 R2 U R2 U R F2"
                ],
                "solutions": [
                    "U R2 D R' U2 R D' R2 U' R U' R' U R U2 R' U' R U' R'",
                    "U2 R' U' R U' R' U' R U' x' U L' U L U2 R U' R' U x"
                ]
            },
            {
                "scrambles": [
                    "R' B' D B2 D' B2 U2 R2 U' B2 U2 F' U B2 F U' R2 U B R U2",
                    "F R U D U B2 U' F2 D B2 U' L2 U L' B2 D2 L U L2 U' F",
                    "R D' R2 U2 R U' R D R' B2 D B2 D' R2 B2 U2 B2 U R2"
                ],
                "solutions": [
                    "R U2 R' U' R U R' U2 L' U R U' M' x'"
                ]
            },
            {
                "scrambles": [
                    "F R' F2 D L2 F2 L2 F2 D L' D2 R U' L U L' F U2",
                    "F' L' U B2 L2 U L2 B2 U' L B2 F L R' U' L' U' R",
                    "B' R' F' D R2 U R2 D L2 U' R2 U' L' B' D2 L' R' F U B F' L"
                ],
                "solutions": [
                    "U' L R' U' R U L' U2 R' U R U' R' U2 R"
                ]
            }
        ],
        "Pi6": [
            {
                "scrambles": [
                    "L F R U' F2 L2 D' L2 F2 R2 U2 R2 U F' L' F R' B' F' U2 B' U",
                    "F R' B L2 D F2 R2 D R2 D2 L2 U F' U' B2 F' R' B U' R F",
                    "R B U' L2 U' B2 D' R2 U2 F2 U' R2 U2 R D' R D2 R2 U' B R'"
                ],
                "solutions": [
                    "U' R U R' U R U' R2 F R F' R U' R' F' U F",
                    "U' R U R' U R U' R' U F2 r U2 r' U' r' F r"
                ]
            },
            {
                "scrambles": [
                    "F L' U F2 L2 B2 D2 F2 D' F2 D' R2 B2 L' B' F2 U' F U R2 B U2",
                    "R F R D' L2 D R2 D' L2 F2 L' F' D R2 D' L D R2 F2 U'",
                    "F L B D2 F' L2 F L2 R2 U2 F R2 D2 L D F' U F D' F' U2"
                ],
                "solutions": [
                    "U F U R U2 R' U2 R U R2 F' R U2 R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R' U' R' B2 D2 B2 D B2 L2 D2 R2 U F2 L R' F2 R B2 L U'",
                    "R D B U' L2 U L2 U R2 F2 L2 F2 R2 B D' U' B2 R' U2",
                    "R' B' R D B2 U L2 U B2 U' B2 U' L B L D' R' B R U2 B"
                ],
                "solutions": [
                    "R U' R' U' R U' R' U R U R' U R' F' R U R U' R' F"
                ]
            },
            {
                "scrambles": [
                    "R D R' U' L2 D2 U R2 D2 L2 B2 U2 R' B2 D' R B2 U' R U'",
                    "B' U R U B2 U R2 U' R2 U' B2 U2 F R' F' U2 R' U B",
                    "B U' B' U' R2 U2 R2 U R2 U R2 U2 B U2 B' U B U2 B' U2"
                ],
                "solutions": [
                    "U2 R' U2 R U R' U' R U R2 F R U R U' R' F' R",
                    "R L' U2 R2 U' R2 U' R' U' L U R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "B L' F D L2 F2 D' L2 D L2 D' L2 B' F' L' B' U2 B L U L' U'",
                    "R' B R U' B2 L2 D2 B' L2 B R2 B' L2 B D R2 D L2 B2 R' B' R U",
                    "R F' D2 B2 L2 B2 L2 D' B2 D L2 D2 F R' D R' U R D' U"
                ],
                "solutions": [
                    "R' F2 R U2 R U2 R' F2 U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' U B U R2 U2 R2 B2 U R2 U' B R2 B' U2 R2 U B2 U2",
                    "L B L' F2 D F2 U F2 R2 B2 D' F2 L2 F D B2 D' F' U2 L B' L'",
                    "F U B' R2 F2 D2 F2 R2 U' R2 D2 U B U' B2 D B2 F' R2"
                ],
                "solutions": [
                    "U R' U' R U' B2 R' U2 R U2 l U2 l'"
                ]
            },
            {
                "scrambles": [
                    "L B R' U2 F L2 F' U2 L2 F D2 B2 L' R2 B' D' R D' B' F2 L' B'",
                    "B' U B D U F2 U2 F2 L2 D' B2 U B2 F U' F' L2",
                    "R U' R F2 D' L2 U L2 D' L2 U' B2 U2 L' U' L' D U L' D F2"
                ],
                "solutions": [
                    "U R U2 R' U' R U' R2 U L U' R U L'"
                ]
            },
            {
                "scrambles": [
                    "L' D L D B2 U' L2 U' R2 F2 U' F2 L2 R D F2 D U' B2 L' F2 U'",
                    "F D R L2 U F2 U' B2 U R2 B2 D F2 R D' F2 U F2 U2 F' U2",
                    "L' F' R' D2 F2 U2 L D2 R2 B2 R2 U2 R2 F U R2 U' L2 F L' U2 R2"
                ],
                "solutions": [
                    "U' R' U' R U' R' U R U' R' U R' D' R U R' D R2"
                ]
            },
            {
                "scrambles": [
                    "B' R B' D2 B2 D' U2 F2 D R2 U' R2 B2 F L' F D2 B2 U R'",
                    "R F' U' B2 U' R2 U B2 D' F2 U2 L2 D F D' F' U' F D F2 R' U'",
                    "B' L B' U L2 U' R2 U L2 U' R2 B D2 L' B U' B' L D2 L' B"
                ],
                "solutions": [
                    "U F U R U' R' U R U' R2 F' R U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R' U2 R U' B2 L U L' B2 U' B2 D B2 D' R2 U R2",
                    "R' U2 R U' B2 L U L' B2 U' B2 D B2 D' R2 U R2",
                    "F' D L' F2 L' F2 R2 B2 R D2 F2 R' U2 F' D F' R' F2 U' R2 F' U2"
                ],
                "solutions": [
                    "U R U R' U R U2 R' U' R U R' U R2 D R' U2 R D' R2",
                    "R U R' U R U2 R' U' R L' U R' U' L U2 R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R' F' R' D' B2 L2 D R2 U' L2 B2 R' D2 F' D2 R D R2 D' B2 U",
                    "R U' R' U R2 D B2 D' F2 D B2 D' F2 R' U' R' U' R U R' U",
                    "R U' L' B2 U2 B' R2 D2 B' U2 B D2 B U' R' U' L F2 R2 F' R' F'"
                ],
                "solutions": [
                    "R' U2 R U R' U' R U2 L U' R' U R L'"
                ]
            },
            {
                "scrambles": [
                    "L F L' F2 D' L2 B2 U' B2 D' R2 B' R2 D2 L U L F' U2 F2 U2",
                    "B' R B2 D' L2 B2 L2 B2 D' L D2 R' U L' U' L B' U2",
                    "F U' B F2 U' L2 F2 D F2 D' L2 U2 B' U' F2 U F' U'"
                ],
                "solutions": [
                    "U R L' U R' U' L U2 R U' R' U R U2 R'"
                ]
            }
        ],
        "H1": [
            {
                "scrambles": [
                    "L F U F2 U R2 F2 U' F2 R2 U' F2 L2 B D' L' F D' L2 B' U'",
                    "R' F' L' U L2 D2 F2 D' F2 D' L2 B2 R' U R B2 L U2 F R U",
                    "B' R U R2 U' R2 U' R2 U R2 U' R2 F' U' F R B U'"
                ],
                "solutions": [
                    "R U2 R' U' R U' R' U' R' U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L' B L U R2 F2 R2 D' B2 R2 F2 U' R' D L B' L' D' L2 R'",
                    "F' R F D' F2 D' F2 D2 R2 U' B2 U' B2 R' U2 R' U2 R' U2 F' R' F",
                    "L U R D2 R2 F2 U F2 U2 F2 D' L2 U L' U L2 D U R2 D2 R'"
                ],
                "solutions": [
                    "R' U2 R U R' U R U R U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R' F U' B2 U B2 D2 U R2 B2 U' B2 L2 R D' L2 D R D F' R",
                    "F L D' R2 D2 B2 L2 B L2 B D2 R2 D L' R F' U' F R' F'",
                    "B' U F U' R2 F2 U' R2 U R2 U F2 U2 B' U F' U' B U B U"
                ],
                "solutions": [
                    "U R' U' R U' R' U R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "B' R' U' D' R2 D R2 U R2 B2 U' B2 U R' D' R U' R' D B",
                    "R U' R B2 L2 D F2 U' R2 U' B2 R2 U2 L F2 D R' D R B2 R2",
                    "R U R' U B2 U' R2 D' R2 U B2 L2 U' L' F2 U2 L' U L U L' U'"
                ],
                "solutions": [
                    "U' R U R' U R U' R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R' U' B L2 U' F2 L2 D' L2 R2 F2 L2 U' B R U' R' U2 R2 U2 R' U'",
                    "R B' U' B2 U B2 L2 D L2 U B L R2 U F' U' F' L' R",
                    "L D F' L2 U' L2 F2 D R2 D R2 D2 F' D' L' U'"
                ],
                "solutions": [
                    "R' U2 R U R' U' R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "F' R2 L2 B' D2 R2 D2 L2 F' D L2 D2 L2 U2 F2 R2 D R2 U",
                    "R U' R B2 D' B2 D L2 U' L2 U R' U L' B2 U R' U' L",
                    "L D' L' U' R2 U' F2 U R2 F2 U' F2 U L D R' U F2 U' L' R U'"
                ],
                "solutions": [
                    "R U2 R' U' R U R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' B D' B2 U' F2 U2 R2 U' R2 U' F2 U B' D B2 L U' L U' L' U'",
                    "R' D F2 D B' U2 B' L B U2 B D2 R2 B2 L2 F2 R2 D' R2 F2 B2",
                    "L U B' L2 F2 U R2 F2 R2 D' L2 R2 U B D U2 B' L' D U L2 D'"
                ],
                "solutions": [
                    "U R U R' U R U' R' U R U' R' U R' U' R2 U' R' U R' U R"
                ]
            },
            {
                "scrambles": [
                    "R' D' R D B2 D R2 U L2 D' F2 D' R D' F' L2 D2 R2 U2 B' R' U'",
                    "L' D' L U2 L2 D2 R F2 L' R2 U2 R2 U R2 U L R F2 D' L2",
                    "R F' L' D L2 U R2 U R2 D' R2 U' F R2 B' L2 D' B L' F U R"
                ],
                "solutions": [
                    "U R U R' U R U2 R' U' R' U2 R U R' U R"
                ]
            }
        ],
        "H2": [
            {
                "scrambles": [
                    "L B' D B D2 B' U2 R2 B' R2 B2 D2 B' D' U2 B L' F' U2 F U",
                    "F' R U' F2 D R2 D' R2 U R2 U' R2 F2 R' F2 U F' U F U2 F'",
                    "F' U' R' F2 U' R2 F2 U B2 D' L2 F D B2 R F2 U F2 U'"
                ],
                "solutions": [
                    "U R U2 R D R' U' R D' R2 U' R' F R U R U' R' F'",
                    "U x' U' R U' R' U R' F2 R U' R U R' U x"
                ]
            },
            {
                "scrambles": [
                    "F' R' B F2 D2 B2 D B2 D F2 U' L2 U' B' R F R' U2 R",
                    "F L' B R2 U' F2 D B2 D' F2 U R2 B' L B' R2 B F'",
                    "L' F U' F R2 D2 F' R2 U2 F' L2 B2 U B L U L2 U' L2 U"
                ],
                "solutions": [
                    "F U R U' R' U R U' R' U R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "R' D F R F2 U2 F2 R2 F2 U2 R' F2 R F' U2 R U F2 U F2 D' R y",
                    "B' D' F' D' B2 L2 U' B2 U L2 B2 D F D2 U' B' U' B D' B y",
                    "F' R B U2 L2 U2 B' D2 F R2 U2 F' D2 U' R' F' R' F2 R U F2 y"
                ],
                "solutions": [
                    "R U R' y' U R' U R U' R2 F R F' R"
                ]
            },
            {
                "scrambles": [
                    "F D L' D L2 U F2 U F2 L' D' B2 D' B R2 B U F' U y'",
                    "B' U' B' U' B2 L2 U2 B2 L2 U B2 R2 U F' D2 F L2 U' R2 B y'",
                    "F R D B2 U L2 U' B2 U' B2 D2 R2 F2 L' F' L U L2 D F' R U' y'"
                ],
                "solutions": [
                    "R' U' R y U' R U' R' U R l U' R' U l'"
                ]
            },
            {
                "scrambles": [
                    "R' D F R2 U R2 U2 R2 U R2 U F2 U B U' F U B' D' U' R",
                    "L' D' F' U2 F R2 B' R2 F R2 B2 R2 F' D B' U2 B L B' U B U'",
                    "R' D F D' F2 L2 D2 R2 U2 B2 L2 U2 B' D L2 B D R2 F' U' R"
                ],
                "solutions": [
                    "F R U R' U' R U R' U' F' U R' F' U' F U R"
                ]
            },
            {
                "scrambles": [
                    "L' B' D2 L2 U R2 U F2 L2 D2 R2 B' L B' U B2 U B' U'",
                    "F' D' L U2 L2 D L2 U L2 R2 F2 U' F' L U L2 F' R2 U F L'",
                    "L' F' R D2 L2 U F2 U' B2 L2 F2 U L' U F' U B D2 U B L U'"
                ],
                "solutions": [
                    "R' U' R U' R' U2 R U R' U' R U R' F' R U R' U' R' F R2"
                ]
            },
            {
                "scrambles": [
                    "R D B R2 U2 B2 U' B2 U B2 U2 R2 B' D2 U F' U F D U' R'",
                    "R D F L2 R2 F R2 F' D2 B R2 D2 B' U B2 U' L2 B' D' B U2 R'",
                    "B D L' D R2 U' F2 D U2 R2 B2 D B2 R B2 R2 U L2 U2 R B U2"
                ],
                "solutions": [
                    "U L' U L U' L' U' L U R' U' R U L' U' L U2 R' U' R"
                ]
            },
            {
                "scrambles": [
                    "B' R D B2 D' L2 R2 D F2 D' L2 U' L2 R' F D2 F' L2 R' B R'",
                    "L' B' D' U' F2 U2 F2 R2 D R2 D B2 D' L U L' U' B' L F U2 F'",
                    "L' D B' D' R2 B2 D B2 U' L2 U2 F2 U F' L' U' R2 U R' F2 R U2"
                ],
                "solutions": [
                    "U R U' R' U R U R' U' L U L' U' R U R' U2 L U L'"
                ]
            }
        ],
        "H3": [
            {
                "scrambles": [
                    "F U' F' L2 U' L2 U2 L2 U L2 U L2 B' U' B U2 L2 U' F U' F'",
                    "L' F' R' L2 B' U2 L2 F' D2 F' L2 B2 L B2 R' F2 L U2 F L",
                    "F' U F R2 U R2 U2 R2 U' R2 U' R2 B U B' U2 R2 U F' U F"
                ],
                "solutions": [
                    "U2 R U R' U R U2 R' F R U' R' U' R U2 R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "B' D B U2 L2 D' R2 U2 B2 D' B2 U' F U' R2 D U L2 B' U'",
                    "R B L' U F2 U F2 U2 B2 R2 D B2 R B2 D2 L R2 B R2 U2 R",
                    "F' R F R2 U R2 D' F2 D F' U2 R' U2 F2 R' F2 R F' U'"
                ],
                "solutions": [
                    "R U R2 F R F' r U' r' U r U r' U2",
                    "l U' R U R' l' U r U' r' U r U r'"
                ]
            },
            {
                "scrambles": [
                    "F R U R2 U' F2 U2 F2 U F2 U' R2 U2 R' U2 F2 R U2 R' F U2",
                    "F' D' L' B2 U B2 D L2 U L2 U' F2 U' F' U L' U2 L2 U L U2 L'",
                    "L F D' F2 D' F2 D R2 D2 R2 F2 U F R2 B' L2 B R2 U' L' U'"
                ],
                "solutions": [
                    "U2 R' F R' F' R2 U' r' U r U' r' U' r"
                ]
            },
            {
                "scrambles": [
                    "F R U2 B2 D' F2 D B2 F2 U2 R' F2 U2 F R' U R U'",
                    "R' U' B U2 L2 U B2 U F2 U B2 F2 U' F L B' L U' L F L' R",
                    "R' B R' U' B2 R2 D' U2 R2 D' F2 L' F2 U' L U' L' D2 B R U"
                ],
                "solutions": [
                    "U R' U' R U' R' U' L U' R U L'"
                ]
            },
            {
                "scrambles": [
                    "B L D' F2 D F2 U' F2 R2 U' R2 U R' F' R F' U L' B'",
                    "L' B' D' L2 F2 U F2 U2 B2 R2 U' B2 L2 R' U' R B U F2 L U'",
                    "F' U' F D' F2 D R2 U' R2 U2 B2 D2 L' F2 D2 B' U B' R' U'"
                ],
                "solutions": [
                    "U R U R' U R U L' U R' U' L"
                ]
            },
            {
                "scrambles": [
                    "L' D' L B2 D2 L' F2 R F2 D2 R' B2 R2 U R' U' R' D B2 L U2",
                    "R D' R' D2 L' B2 U2 B2 U2 L D' L' D' R D2 B2 D' L R'",
                    "B' D B U R2 D' R2 D' R2 U2 F' U2 F' D F U F R2"
                ],
                "solutions": [
                    "U' R' U' R U' R' U F' R U R' U' R' F R2 U' R' U R",
                    "U' R' U' R U' R U R2 U R2 U L' U R' U' L"
                ]
            },
            {
                "scrambles": [
                    "R U' F D' R2 D R2 U' R2 U R2 B2 U F' U B2 U' R' U' R U' R'",
                    "B' D B' F2 D R2 B2 U L2 B2 F2 D R2 B U L2 D' U' L2 B L2 U'",
                    "L' D F D' L2 U F2 D' B2 U L2 B U' R2 D L2 U' B2 L U2"
                ],
                "solutions": [
                    "U' R U R' U R' U' R2 U' R2 U' L U' R U L'"
                ]
            },
            {
                "scrambles": [
                    "F L B U2 F2 U' F2 U' L2 D U2 F D' F U2 L2 U' B' L' U F'",
                    "L' U B L2 U R2 F2 D' F2 R2 U' L2 U R B' R' U2 B2 U B L U'",
                    "L' F' L B2 L2 B U2 B' L2 B U2 B L' F L2 U F U' F' L' U2"
                ],
                "solutions": [
                    "U2 R' U2 R U R2 D' R U' R' D R2 U R' U R",
                    "R U2 R2 U' R' D R' U' R D' R U2 R"
                ]
            },
            {
                "scrambles": [
                    "F L' B' U2 B2 F' L2 B' L2 U2 F L2 F2 L' B F U' F2 U B' F2 U2",
                    "R F' U F2 U F2 R2 F2 R2 F2 R2 U' F' R2 U2 B U' B' R U2",
                    "R' U F U L2 U' L2 U2 L2 U' L2 U2 F' L U' L' R U2 L U' L'"
                ],
                "solutions": [
                    "R U2 R' U' R2 D R' U R D' R2 U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B R' D' R2 D R2 F2 R2 U' F2 R2 F2 L' D' B2 L2 R' U' L' B' U'",
                    "B R U F2 L2 B' F2 D2 F' R2 B U2 L' R2 U' F' R B2 R' B D2 F2",
                    "F L B' L2 D2 F' D2 F' L2 F2 D2 U2 B' R B2 D2 F2 U' L' F L F'"
                ],
                "solutions": [
                    "F R U' R' U' R U2 R' U' F' U R U R' U R U2 R'",
                    "U2 R U R' U' L' U2 R U2 R' U L U' r' F2 r"
                ]
            },
            {
                "scrambles": [
                    "B L' D2 F2 D2 F' L2 U2 B' D2 F2 R' D U2 B D B F' L2 U'",
                    "F' R U D2 L2 F2 R2 D R2 F2 D L2 F' D F R' F U2 R' U R",
                    "R' U' B' R2 D' U2 F2 D' L2 D R2 D B' D2 U' L2 U2 F D2 B R' U'"
                ],
                "solutions": [
                    "U' R2 D' R U' R' D R2 U' R2 D' R U2 R' D R2"
                ]
            },
            {
                "scrambles": [
                    "F' L' F D' L2 B2 L2 D2 U' R2 B2 F2 U F' U R U' F U' B2 R2 D'",
                    "R U' F U R2 U F2 U' F2 U' R2 U2 L F L' U2 R' F2 U2 F U",
                    "B' D B D L2 D2 U F2 D U R2 B2 R2 B' D U' B D2 F2 U B"
                ],
                "solutions": [
                    "U' R2 D R' U R D' R2 U R2 D R' U2 R D' R2"
                ]
            }
        ],
        "H4": [
            {
                "scrambles": [
                    "B D B D' L2 D' R2 D L2 D' R2 D2 B' D' U B' U B U2 B'",
                    "L' D' B' U' L2 D B2 U F2 L2 F2 U' B2 F' U F2 U L' D R2 D' U'",
                    "B' L B U2 L2 F2 U' L2 U' L2 D2 B R' B F' R' F' D2 B2 U"
                ],
                "solutions": [
                    "U2 F R' F' r U R U' r2 F2 r U r' F r"
                ]
            },
            {
                "scrambles": [
                    "F' U R F2 D B2 R2 U R2 U2 B2 R D' R' U F2 U R' U2 F U'",
                    "B L' B2 R2 D' B2 L2 R2 F2 R' U' R' F2 L' R2 U' B'",
                    "R B R' U2 R' D2 R U2 R' D2 L R2 U' L' U2 B' U' R' U'"
                ],
                "solutions": [
                    "U R U R' U' R' F R U R U' R' F' R U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B' R B' U R2 B2 D B2 D' R2 B2 U' L' B' R' B L U2",
                    "B' R' B' D L2 U' B2 U L2 B2 U' L2 U B' U' B2 D' B2 U R B U2",
                    "L F D' F2 U F2 D F2 U' R2 U' R2 U F U' R' U L' U' R U'"
                ],
                "solutions": [
                    "R' U2 R U' L U2 R' U2 R U2 L' R' U R"
                ]
            },
            {
                "scrambles": [
                    "B L' B' R2 B R2 F U2 R2 D2 R2 U2 F' L U2 F L2 F L2 F'",
                    "L' D' R' D U L2 D' R2 U' R2 U R' D L2 U2 B2 U B2 L U2",
                    "B R F U L2 D' R2 D L2 U' B2 F' R' B' R' F2 L F L' F R"
                ],
                "solutions": [
                    "R U2 R' U L' U2 R U2 R' U2 L R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' U' B U2 B2 U2 R2 U' B2 U B2 U' R2 B R2 U2 L R2 F U' F' U'",
                    "L' D L' B2 F2 D F2 D' B2 L2 U' L' D' L U' L U2 L' U2",
                    "B U L F2 L2 U2 R2 B L2 D2 B' R2 U' B' U B F2 L F L2 B'"
                ],
                "solutions": [
                    "U' F U' R U2 R' U2 R U' R' U' R U R' U F'"
                ]
            },
            {
                "scrambles": [
                    "R D B' D2 R2 U F2 U' F2 R2 D B' R2 U R2 U B2 U' R' U",
                    "B R2 U' B2 U B2 U' R2 B R2 U2 L2 D F2 D' R2 L2 U B2",
                    "R' U F U' L2 U2 L2 U L2 U L2 F' U' F U' F' U R U"
                ],
                "solutions": [
                    "U' R' F R U R' U' F' R U' R' U R' F R F' U R"
                ]
            },
            {
                "scrambles": [
                    "L' F' L' D B2 D2 U' L2 D2 U R2 B2 D2 L D2 U' B2 F U R' F D'",
                    "L' F' U B2 U B2 L2 D L2 D' B2 L2 U2 R' U L2 R B2 U' F L U",
                    "R' B R U2 R2 U2 B2 L2 D' L2 U L U' F2 L2 D L B U2 R U2"
                ],
                "solutions": [
                    "U' R U2 R' U' R U' R D' R U' R' D R U R"
                ]
            },
            {
                "scrambles": [
                    "F' D' B D L2 U' L2 U L2 U B' U' B F' D' B' D F2",
                    "L U' B F2 D2 F2 D B2 U B2 L2 D L2 B' L' F L' F' L U2 L U'",
                    "L U R U2 R2 U' R2 U' R2 U R2 U2 F2 R' F2 U2 R2 U L' R U2"
                ],
                "solutions": [
                    "R U2 R2 F U' R2 U' R2 U F' U R"
                ]
            },
            {
                "scrambles": [
                    "F D' B' F2 R2 U F2 D R2 D' R2 F2 U2 B U F' U F' D F'",
                    "B' D' B' R2 B R2 F2 D2 B' D2 F2 U2 R2 D U' B U' B U2 B U2",
                    "B D' B' U B2 L2 U2 B2 U B2 U L2 B' U B' U B D U2 B'"
                ],
                "solutions": [
                    "U2 R' U2 R U2 R2 F' R U R U' R' F U R"
                ]
            },
            {
                "scrambles": [
                    "R U' B U2 L2 U L2 U L2 U2 L2 B' L' B U' B' U L R' U'",
                    "B' L' B L2 U L2 U B2 U B2 U' B2 L B2 L' B' R B R' B2 L",
                    "L B R U2 L' R U2 B2 L B2 R2 F2 L2 B R' D R' D' B2 F2 L U2"
                ],
                "solutions": [
                    "U' F B' R2 B R2 U' R2 U' R2 U R2 F'"
                ]
            },
            {
                "scrambles": [
                    "L' D R' F2 R2 U R2 D' R2 B2 U' L2 B2 R' F2 U' F2 D' L2 U L' U2",
                    "B' U' F D2 B2 D' B2 D' B2 D' B2 F' U' B F' L2 F",
                    "B R B' U R2 U' R2 U' B2 R2 U2 R2 B' R' B' R U' B U' B' R' U2"
                ],
                "solutions": [
                    "U R' U' R U' R' U R U R' F R U R' U' R' F' R2",
                    "U2 F R U R' U' R' F' U2 R U R' U R2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B L' D' L2 U' L2 U' L2 D L2 U L2 F2 L' U B2 D' R D B U'",
                    "R D L U' L2 D' B2 R2 D L2 U L' D L2 U' L2 D2 R U'",
                    "F U R' U R2 U2 R2 U R2 U R2 F2 L' U' L U F2 R U F' U'"
                ],
                "solutions": [
                    "U F R U' R' U R U2 R' U' R U R' U' F'"
                ]
            }
        ],
        "S1": [
            {
                "scrambles": [
                    "L U' R' D' F2 D R2 U' L2 B2 D' B2 D2 L' D' L2 B2 U B2 U' R'",
                    "R B' R' U' L2 D R2 B2 D' L2 U B L2 B' R' B L2 R' F2 U2",
                    "F' U L D2 F2 D' F2 D' L2 U' B2 U2 B2 L F U F' U2 F U'"
                ],
                "solutions": [
                    "U' R' U R2 U R' U R U2 R U2 R U R' U R2"
                ]
            },
            {
                "scrambles": [
                    "R' U F' U F2 D R2 D' U R2 U' F' U2 F' U F R2 U' R' U'",
                    "B' R U2 R2 U2 R2 U R2 U R2 F2 U2 R' U' R U' F2 U' R' B U2",
                    "L U B' L2 D' U2 B2 R2 D' U' B2 U' L2 B U B2 D' B2 U2 F2 L' U2"
                ],
                "solutions": [
                    "U' R' U2 R2 U R U' R' U R U R2 U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' D F' R2 B2 U' F2 D L2 B2 R2 D' U F' D' B F U' F' U'",
                    "L D F2 D2 B' D2 R2 D2 B' U2 R2 D U' B' F2 L B2 U B",
                    "R' F R' U' D2 U' L2 R2 D2 U2 L2 R' F' R2 U2 R' U' R U' R'"
                ],
                "solutions": [
                    "R U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F' U B' F2 U' B2 L2 D' L2 B2 R2 F2 D' F U F D F' U' B",
                    "B D' R D U L2 B2 F2 U F2 D' L2 R2 B' U' R D' R2 D2 U2 B' L'",
                    "L' U' L F2 L2 U F2 U F2 U2 L2 F2 L' U' L U2 L' U L"
                ],
                "solutions": [
                    "U' R' U2 R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "R B R' U' L2 R2 D L2 R2 U2 L2 R' F' L' F2 L2 R' D' L R2 U2",
                    "B' R B' D F2 R2 U2 B2 U B2 U R2 F' L' F' D2 B2 R' U",
                    "R' U' L' D' F2 D' B2 D' U2 B2 D' F2 U' R' U2 L U' L' U2 L R2"
                ],
                "solutions": [
                    "R U R2 U' R2 U' R2 U2 R2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F D R D' F2 U' F2 L2 R2 U R U' L2 R2 F2 U F",
                    "L B' L' D L2 D' R2 D L2 D' R2 U' R' U L U' R U B L'",
                    "F' U B D2 B2 U' F2 D L2 U L2 D U' F' U B' R2 B2 R2 U'"
                ],
                "solutions": [
                    "U2 R' U' R U' R U R2 U R2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "L F' L2 U2 F2 D2 F2 U2 R2 B' R2 F D2 F' L2 F L'",
                    "L' U R' U' L2 U F2 U R2 D2 L2 R2 U2 R' D L2 R2 U' L' B2 U'",
                    "L F' R' F2 D' R2 D F2 D' R2 D R F L2 B2 F R' B2 F' L U2"
                ],
                "solutions": [
                    "U' R U R' U' R' U2 R U R U' R' U R' U R"
                ]
            },
            {
                "scrambles": [
                    "L' F' R B2 U2 R' F2 R B2 L U2 B2 L' B R B L' B L D2 R2 U'",
                    "B L' B2 U2 L2 B' D2 F' R2 F D2 B2 L B' L B F' L' F L' U'",
                    "R F R' D' U' F2 R2 F2 U' R2 F2 D B2 L U' R' U2 L' F' U R'"
                ],
                "solutions": [
                    "U' R' U' R U R U R' U' R' U R U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B' U F R2 U' R2 U' R2 B2 U' F2 L2 B D F L2 B2 U'",
                    "B' L' F R2 B2 D2 B2 U' R2 U F2 D' F D B' D' R2 B L B U",
                    "F L' F' D L2 U' L2 U' F2 L2 U2 L2 D2 B' L B U' L' D F2 U2"
                ],
                "solutions": [
                    "R U R' U R U' R' U R' U' R2 U' R' U R' U R"
                ]
            },
            {
                "scrambles": [
                    "F U' B D B2 D' F2 D B2 L2 D2 B2 U B U' B2 D B2 F2 U F'",
                    "F U B F2 L2 F2 D' L2 R2 D' L2 F2 U' F' R2 F' U R2 D B' F'",
                    "F' R' B R2 F' R2 B U2 L2 U2 B2 R2 F' U' F' D2 U R' F U"
                ],
                "solutions": [
                    "R U R' U R U R U R U R U' R' U' R2"
                ]
            },
            {
                "scrambles": [
                    "R U F' U' R2 D L2 D L2 D2 R2 B2 U' B F U' B R' U' B' U2 B",
                    "R D B L2 B2 R2 D F2 R2 U B2 U B' D' B R2 F' L2 F R U'",
                    "B R' U' R2 U2 L2 B2 L2 U R2 D B2 D L' F' R2 U2 F' D2 B L2 U'"
                ],
                "solutions": [
                    "U R U R' U R' U' R2 U' R' U R' U' R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "R U F B2 F2 U B2 U B2 U2 B2 U' R' U R U2 F U' R' U2",
                    "B D' L' D L2 U L2 U L2 U2 L2 U' F U L2 U L' F' U' L2 B'",
                    "R' U' L D2 L2 R2 D' R2 B2 D' U B2 D R D2 L B2 F2 U' R U"
                ],
                "solutions": [
                    "R U R' U R U' R' U R' U' R' U R U' R' U' R2 U R"
                ]
            }
        ],
        "S2": [
            {
                "scrambles": [
                    "R B' D U R2 D' F2 D F2 U' R2 B2 D2 B' R' B U' B' U",
                    "R' D B D F2 D F2 U L2 D2 L2 D U' B' R2 U R2 F2 D' F2 R U'",
                    "F R' D' F2 U' F2 D R2 B2 D2 F2 U L' U F2 D' B2 D' F'"
                ],
                "solutions": [
                    "F U' R' U R U F' R U R2 U R2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "L F' D' U2 F2 D U R2 D' F2 D F' R' F' U2 R' U2 R' F' L'",
                    "F L B D' R2 D B2 U' B2 U R2 B' L' R2 B F' U' B' U'",
                    "B L' D' B2 U B2 U2 B2 U' B2 D L2 U2 L' U L F U F' L' B'"
                ],
                "solutions": [
                    "U R' D' R U' R' D R U2 R U R' U2 R U R'"
                ]
            },
            {
                "scrambles": [
                    "L D B' U B2 L2 U F2 L2 D2 F2 U' L2 B' R U' R' D' F2 U2 L' U",
                    "F' L B' D' L2 F2 D' F2 U L2 D' B2 D2 L' D L D' B2 U' B L' F",
                    "B R' F' D R2 D2 R2 D2 B2 D B2 U F' D2 F2 R2 U B' U2 R' B'"
                ],
                "solutions": [
                    "R' U2 R U R' U' R F U' R' U' R U F'"
                ]
            },
            {
                "scrambles": [
                    "F' U' L' U L2 D F2 D' F2 U F2 U' F2 L' U F R B U' B' R' U'",
                    "L D B' U2 F L2 F' R2 F L2 R2 U2 B2 D' L2 D B' D' U' L U",
                    "R' F U R2 B2 D' B2 R2 U' L2 D' L2 D R' B R F' R' B' R2"
                ],
                "solutions": [
                    "R' U R U2 R' U R U2 R D R' U' R D' R'"
                ]
            },
            {
                "scrambles": [
                    "L F R' U' B2 D' L2 D B2 R2 U' F2 U2 F' L' F R U R2 U' R2 F'",
                    "F R' F L2 U' F2 U' F2 U2 B2 D' B2 R2 F L F' L R' F2 U2 L",
                    "B U F' U L2 F2 D' B2 D' F2 L2 B F U' B2 U' R2 B2 U2"
                ],
                "solutions": [
                    "L' U2 R U' R' U2 L U R U' R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F L F D2 L2 D F2 U' F2 L2 D' R' F R2 F' R2 B2 R D2 F2",
                    "B' R' B F2 D2 L2 B2 D L2 D F2 U2 R' U B' R2 B R' U R2 U'",
                    "B' D' F' R2 D R2 D' F2 D B2 U F' U B2 F D' F' D B"
                ],
                "solutions": [
                    "U F R U R' U' R U R2 U' F' U R U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' U' F' L2 U B2 D' B2 U' B2 D' F2 R2 F D' F D' B2 F U' L",
                    "L F' L F2 D' F2 R2 U' L2 R2 U' F2 U' F' R U2 L2 B U L2 U2 R'",
                    "R' U R' B' L2 B R2 B' L2 B U2 L' R' U R2 U' L U R'"
                ],
                "solutions": [
                    "U2 R U R' F' R U R' U R U2 R' F R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L B L B R2 F' D2 F R2 B2 U2 F U F2 L' D' L' D F U2",
                    "B R' B F2 L2 D L2 F2 D B2 U B' D2 R2 D R2 B2 U' R B'",
                    "L B D' B2 U R2 F2 D L2 F2 R2 D R' F2 R U B' U2 L' U2"
                ],
                "solutions": [
                    "U R U2 L' R' U2 R U2 R' U2 L U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' U F U2 R2 U' B2 U B2 U F2 L2 B' L B2 D2 L2 F' R2 F2",
                    "B' R' U R2 B2 D2 L2 D' L2 D' B2 R2 U' R B R B' U B U' R' U'",
                    "B L D U B2 U2 F2 D L2 D2 F2 R2 B2 R D R D B2 L' B' F2 U2"
                ],
                "solutions": [
                    "U' R U' R2 U2 D' R U R' U D R2 U R'"
                ]
            },
            {
                "scrambles": [
                    "F L2 B' U2 R2 B2 D F D F D2 B R2 D2 B R2 B' D2 B2",
                    "F' L' F' B2 L2 U F2 D' B2 F2 U' F2 D R' B2 R' F' L F' U' F2 U2",
                    "F' D L F2 U2 F2 U' F2 D' F2 D R2 U' R F2 L' R D' U' F U2"
                ],
                "solutions": [
                    "U F U R' F R F' R U' R' U R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "B D' L' D L2 D L2 B2 U F2 R2 U' R' U R B U R U' R' F2",
                    "R D R' U' L2 B2 U' B2 D' L2 B2 U' R' B2 F2 R U2 L B2 D'",
                    "F' U' R' B' R2 B R2 F' R2 F R2 F R U F U R U' R'"
                ],
                "solutions": [
                    "R U R' U' L' U R U' L U' L' U R' U' L"
                ]
            },
            {
                "scrambles": [
                    "B' D' B F2 D F2 D' F2 U' F2 U L2 R' D' L2 D R B' D B",
                    "B L' U' B2 U2 B' D2 B U2 B' D2 B' U B' R B L B' R'",
                    "B U' R D L2 D F2 D U2 F2 U' R2 U' R D' F2 U' F' L2 D2 R2 U2"
                ],
                "solutions": [
                    "F R U' R U2 R' U2 R' U' R U2 R' U' R2 U' R2 F'",
                    "U2 r' F2 R F' r U' R' U r' F r U2 R U2 R'"
                ]
            }
        ],
        "S3": [
            {
                "scrambles": [
                    "L F R F2 R2 D' R2 D L2 U R2 U L2 R' D' L' F R U2 R2 F",
                    "B' U' B' L2 D F2 D' L2 D' F2 D2 L2 D' B D' F2 D U2 B",
                    "R B' L B' D2 B U2 B' D2 B U2 F L' B' L F' L' B2 R' U"
                ],
                "solutions": [
                    "R U' L' U R' U' L"
                ]
            },
            {
                "scrambles": [
                    "L' B' R2 B2 U R2 U' R2 U' B' U F' L U L' F L",
                    "L B' L' U2 B2 U B2 U B2 U2 B2 L B L U' R' U L2 U' R",
                    "L' F' U F2 D' B2 D' U2 B2 R2 U' R2 D2 F L F' U F R' F2 R"
                ],
                "solutions": [
                    "U R' U2 R U R' U' R' D' R U2 R' D R2"
                ]
            },
            {
                "scrambles": [
                    "F' L' F R2 F2 R2 B2 U' B2 U2 L2 B2 U2 B' U2 R2 D' L' D' F' D' R2",
                    "R' F L' D F2 U B2 D2 R2 F2 U L2 F2 R D2 R U2 L U L' F R U'",
                    "F' L F U L2 U R2 F2 D' F2 R2 B2 U' B' L' B' L2 U' L U' L'"
                ],
                "solutions": [
                    "U' R' D U' R' U R U2 D' R2 U R' U' R'"
                ]
            },
            {
                "scrambles": [
                    "L D F' L2 B2 D B2 D' B2 U B2 U' L' B R' D' L R B' L F",
                    "R F R' F2 D' L2 U L2 U2 F2 U2 F2 U2 L' F' L D F' U2 F' U",
                    "R' D R U2 R2 F2 U' L2 U B2 U L2 U F R2 U2 R' U R' F"
                ],
                "solutions": [
                    "U R' U' R' U R2 D' U2 R U R' U' D R'"
                ]
            },
            {
                "scrambles": [
                    "R U B' U' R2 D B2 D' B2 D' U R' D R2 B R' U' R",
                    "R' F' D' L2 B U2 L2 F U2 F D2 B2 D B2 U L2 B D2 R U' L2 U'",
                    "B R U R2 B' F2 L2 F' D2 B' D2 B2 D' B' R F2 L2 U2 B' U' F"
                ],
                "solutions": [
                    "R2 D R' U2 R D' R' U' R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R U L U2 L2 B2 D' U' L2 F2 U' R' D' R' F2 L' R' U2",
                    "R' U B U B2 D B2 U' L2 U' L2 U B' U2 B' D' B U R U'",
                    "L F' D' L2 B2 U' L2 U F2 U' R2 F' L B2 L2 U' L2 B2 L2"
                ],
                "solutions": [
                    "D' R U R' U R U' R' U' D R2 U' R U' R' U R' U R2"
                ]
            },
            {
                "scrambles": [
                    "B' L' F B2 L2 D' L2 F2 D L2 B2 F D2 L D2 B F D F' U'",
                    "L' D L' R2 D' R2 F2 U2 R2 D' L2 B2 D' L' R2 D' L2 U' L'",
                    "F U' B U R2 B2 R2 F2 U B2 U' B F D' B U' B' D U'"
                ],
                "solutions": [
                    "R U R' U R U R' U' R U R D R' U' R D' R' U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F' L' B' D2 B2 D L2 D2 L2 F2 U B2 U B' R2 B2 F' U F' L' F U",
                    "R' B' D U' R2 D2 F2 R2 D R2 F2 U' L2 F' D2 L2 F' U' F R'",
                    "R B L B2 D' L2 B2 U' L2 U B2 L2 D B L' B2 R' F U2 F' L U2"
                ],
                "solutions": [
                    "U' R' U2 R U R' U' R' D' R U' R' D R U R U' R' U' R"
                ]
            },
            {
                "scrambles": [
                    "B' D' F' R2 B R2 D2 F U2 B' L2 B2 U B' U B2 D' B2 U'",
                    "F' R U' B U2 L2 B L2 B D2 B2 U2 B' U F2 U B2 L F2 D2 B2 F",
                    "F L' D L2 D' L2 D R2 D R2 D R2 U2 B' D' B R2 D2 L U2 F' U"
                ],
                "solutions": [
                    "U' R' U2 F' R U R' U' R' F R U2 R"
                ]
            },
            {
                "scrambles": [
                    "L' U R' U' R2 D' R2 D2 B2 L2 F2 U L' U L2 D' L2 R' U'",
                    "L B' L F2 L2 F2 U' R2 F2 U' F2 U L U2 F U2 R2 B L F2 U",
                    "F' U L U' B2 U F2 U' B2 U F2 L' F U F' U2 F U"
                ],
                "solutions": [
                    "R2 U R U R' U' R' U' R' L' U R' U' L"
                ]
            },
            {
                "scrambles": [
                    "R U L' D2 B' R2 U2 F L2 U2 L2 D2 B' U L2 U' B2 D2 L2 B' L R",
                    "L D' R' D2 F2 D R2 U2 R2 F2 U' F2 U R U R2 D R' U2 R' D L'",
                    "F' L B D2 B D2 B2 L2 F U2 F2 U2 F L U' F U F' U2 F2"
                ],
                "solutions": [
                    "U R U2 R' U2 R' F R2 U R' U' R U R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "F R' B' D' B2 D' B2 U R2 U' B' D2 B R' D R' B R' F'",
                    "B' U L' B2 D2 R' D2 L' F2 R' D2 R F2 D' R' D' R D2 L2 B' U",
                    "L' D' B D2 L2 F2 U F2 D' L2 U B2 U2 B U B' L B2 U B U'"
                ],
                "solutions": [
                    "R U R' U R U' R' U' R' F R2 U' R' U' R U R' F'"
                ]
            }
        ],
        "S4": [
            {
                "scrambles": [
                    "F' L' B D' F2 D B2 D' F2 D U2 B U L F R U2 R'",
                    "L' B R D2 R2 D L2 U F2 U' L2 R2 D B' L B' R B' R2 U B2",
                    "B L' F' R2 B2 D U R2 F2 D U L2 F' D2 F' U2 F D2 L B' U"
                ],
                "solutions": [
                    "U' R2 U R' U R D R' U2 R D' R' U R U' R2",
                    "R' D R2 D' R2 U R2 D R2 D' R2 U' R'"
                ]
            },
            {
                "scrambles": [
                    "B U' B' R2 U2 R2 B' R2 B2 U' B2 U' R2 U B U",
                    "F U F' U' R2 U2 L2 D F2 U2 B2 U2 F' D2 B D2 F' D' L2",
                    "B' D F' L2 F D2 R2 F' R2 D2 B' U2 F U F' U' L2 D' U2 B2"
                ],
                "solutions": [
                    "U' R U R' U R U' R D R' U' R D' R2"
                ]
            },
            {
                "scrambles": [
                    "F' R' F' L2 D' F2 R2 U' B2 R2 D F2 D B' L B' U2 L' B2 D2 F2 U'",
                    "L' U B' U2 B2 U' B2 D L2 D' L2 U' B U' L2 U2 L'",
                    "B' U B' D B2 L2 U L2 D' B2 R2 U' B U' B U F' U2 F U'"
                ],
                "solutions": [
                    "U2 R U' R' U' R U' R' U2 R U R2 D' R U2 R' D R"
                ]
            },
            {
                "scrambles": [
                    "F' U' B' U2 F2 R2 U R2 U F2 D' F2 U2 F' U F2 D F U2 B F U'",
                    "L U L D' L2 D F2 U' F2 U' F2 U' L D' L2 D L' U F2 U2",
                    "B' D B U' B2 D' B2 R2 D' F2 U2 F2 U F D F' R2 F' R2 F U'"
                ],
                "solutions": [
                    "U F U R U' R' U R U' l U' R2 D' R U R' x"
                ]
            },
            {
                "scrambles": [
                    "F L' U D2 R2 U L2 U F2 D' U' F2 U' B' U' L2 D' L2 B' L' R2 F'",
                    "B' D R' F2 R2 D B2 D' R2 U F2 R' B2 D' L2 U R2 B F2 U2",
                    "L' B L D L2 D' L2 U L2 U' B' L2 U' L' B' U' B L"
                ],
                "solutions": [
                    "U2 R2 D' R U' R' D R U' R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "L F U D2 L2 U L2 B2 D B2 D2 U2 F' R2 F' D' F L' R2",
                    "L' U' R L2 R2 U L2 D' B2 U B2 L2 U' L' U L' U2 L' D L2 R U",
                    "B' D' R' B2 U' F2 U B2 F2 L2 D' L2 D R F2 L2 D' L2 D2 B F2"
                ],
                "solutions": [
                    "U R U2 R' L' U2 R U R' U2 L R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F R' U' B2 U B2 D B2 U' L2 U' L2 U2 B' R B' D' F' U R2 U2 R'",
                    "L F R U2 R2 U2 R2 B2 U B2 D' R2 D F' U' F U R F' L' U",
                    "B U R' D U' F2 R2 F2 R2 U F2 D' L2 R B' F R2 B U' F' L2 B'"
                ],
                "solutions": [
                    "R' D' R U R' D R2 U' R' U R U R' U' R U2 R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F' U' B D' B2 R2 D' L2 R2 B2 R2 U2 L2 F D F R2 F U2 B U2",
                    "L U' B F' L2 D2 B' L2 B R2 B U2 B' R D2 R B' U' L' U F2",
                    "B L' F B2 R2 U2 B L2 B' U2 F R2 F2 R' F R B' D2 B' L B' U'"
                ],
                "solutions": [
                    "R U' R' U' R U R D R' U2 R D' R2 U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B L F2 U' L2 D' L2 U2 L2 R' B2 R B R D B2 L U",
                    "F R D' R2 F2 U' F2 D R2 U' B2 U B' R' F' R B' R' U2",
                    "F' L D' B2 U' B2 R2 U R2 B2 D L' U2 L B2 L' U' F U2"
                ],
                "solutions": [
                    "U' R' U2 R' D' R U R' D R U' R U R' U R"
                ]
            },
            {
                "scrambles": [
                    "F' U' F R2 D B2 D' R2 F2 U' L2 U F U L2 U2 L2 U F",
                    "R' D' L U2 L2 U' L2 U' F2 U F2 D U' R' D R D2 F2 L' D R U'",
                    "F D' R' U2 R2 U F2 U F2 U' R2 F2 R' F2 R F2 U R D U' F'"
                ],
                "solutions": [
                    "U R' U' R U' R2 F' R U R U' R' F U2 R"
                ]
            },
            {
                "scrambles": [
                    "B D R U2 R2 D R2 U2 R' D' F D' F2 L2 B' U' F U",
                    "B' R' F2 D B2 L2 D F2 U L2 B2 R' U B2 L2 U L U' B' U'",
                    "B' R B' R2 U B2 U R2 D R2 F2 U B2 F L U' B' U' L B F R"
                ],
                "solutions": [
                    "U2 R U R' U R' D' R U R' D R U' R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "L' D' R D2 B2 D' B2 D' R2 D R2 B2 L U L' D' R' D L U",
                    "B' D R L2 F2 D2 B D2 F' R2 F' L2 F U F R2 F2 R' D' U B U",
                    "R U L' B2 U R2 U' R2 U' B2 U2 R2 U' L U R2 U2 R2 U2 R"
                ],
                "solutions": [
                    "U2 R U2 R' U' R U R' U' R U R D R' U2 R D' R2"
                ]
            }
        ],
        "S5": [
            {
                "scrambles": [
                    "F' U L D' B2 D' R2 D' R2 U2 F2 D R U' B2 F' U' F D2 F' U'",
                    "F D' R D2 B2 L2 U2 B2 D F2 D R2 B U B' F2 R' D F' U'",
                    "L B L B2 U' L2 U B2 L2 U' B2 U2 R B2 R' U L U B' L' U'"
                ],
                "solutions": [
                    "f R' F' R U2 R U2 R' U2 S'"
                ]
            },
            {
                "scrambles": [
                    "B' R F D U F2 D' L2 U L2 F U F U2 F2 U2 F R' B U'",
                    "L F' D' B' L2 D2 B2 D2 F U2 B R2 B' U' B2 D B' D' L R2 U2",
                    "F' U' R' D' F2 D B2 D' F2 D B2 R2 U2 R' D U' R U' R' D' U' F"
                ],
                "solutions": [
                    "U R' D' R U R' D R2 U R' U2 R U R'"
                ]
            },
            {
                "scrambles": [
                    "F' U' R U2 R D2 L2 D2 R' F2 R F2 R U' F D B' U2 B' D'",
                    "R U F R2 U2 B2 U R2 U R2 U' B2 F' U' R' F U' F2 U2 F U'",
                    "F' D B L2 B' L2 B' F2 U2 R2 F2 L2 F U B' U2 L2 B' F2 R2 F2"
                ],
                "solutions": [
                    "R' D R' U R D' U R U' R' U' R2 U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F L B' D2 L D2 R' U2 R' D2 L F' U' L2 D R F2 R D L' F'",
                    "L' F U D' F2 L2 D2 R2 D' B2 L2 D U' B R' B2 U B2 R' F' L' U2",
                    "R F U B2 L2 U2 B2 D B2 D R2 F2 U' B L2 D2 R' U R2 U' R2 U"
                ],
                "solutions": [
                    "U R' U2 R U R2 D' R U' R' D R U2 R"
                ]
            },
            {
                "scrambles": [
                    "R F L D L2 U B2 L2 D L2 U R B2 U2 L F R2 U2 R U",
                    "B' L B D F2 D' F2 U2 F2 L2 U L2 U B' F2 L' U2 B U' B' U' B",
                    "F L' B L2 D L2 F2 L2 D2 B2 U B2 D B' F2 U F2 U' F2 L F' U"
                ],
                "solutions": [
                    "U2 R2 D' r U2 r' D R2 U R' U R"
                ]
            },
            {
                "scrambles": [
                    "F' R U' F2 L2 U2 R2 D' R2 U' R2 D2 B2 R U' L' F2 L' U F U",
                    "F U F L2 U' L2 U' F2 U F2 U F D F' D' F' U' F'",
                    "F' U' F R2 B2 L2 D L2 B2 R2 U' B L2 D F D' F2 L2 B' U2"
                ],
                "solutions": [
                    "R' U2 R U R' U R' D' R U2 R' D R U2 R"
                ]
            },
            {
                "scrambles": [
                    "L' B' R U R2 U F2 U' R2 U' R2 U F2 R U2 B U' L U L' U L",
                    "L B' L' R2 U B2 U B2 U2 R2 U' B2 U2 B' U2 B' U L B L' U2",
                    "B R B D' B2 D2 L2 D L2 D B2 D' B L' B' L D2 B2 R2 U2 R U2"
                ],
                "solutions": [
                    "R L' U R' U' L U2 R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B R D' R2 U' R2 D R' B U2 B U' B U' B2 U'",
                    "F' D' L' D' B2 D' B2 U B2 U' F2 U R' B2 U' F2 D L D2 F U'",
                    "L' B' U' L2 F2 D2 U L2 U2 R2 B2 D2 U F' R2 U' B2 D2 B' U L'"
                ],
                "solutions": [
                    "U2 R2 D' R U2 R' D R2 U R' U R"
                ]
            },
            {
                "scrambles": [
                    "F' U R' U F2 L2 F2 R2 D2 L2 D2 R2 U' R U' L2 F L U' L' U'",
                    "B U' R U2 R2 F R2 B R2 F' R2 B2 U' L U' L' B2 R' U' B' U'",
                    "F U' F U L2 D2 R2 B2 D' R2 D' L2 U' F' U B U' F2 U B' F'"
                ],
                "solutions": [
                    "R2 F R U R U' R' F' R U' R' U R"
                ]
            },
            {
                "scrambles": [
                    "F' L' D R2 F2 R2 U' F2 R2 U F2 U2 F' D2 L2 R B' R' D L' F2",
                    "R' B D R2 B' L2 B R2 B' L2 B D' B' R2 U2 R' U' R U' R' U'",
                    "R D L U' B2 R2 D' F2 U L2 U' F2 U L' U2 R' D' R U2 F2 R"
                ],
                "solutions": [
                    "U R U R' U R' U' R' D' R U R' D R' U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B' L' D' B2 U' L2 U' R2 U L2 R2 U2 R B D' L' F2 D2 L2 B2 R'",
                    "R B L B2 D' B2 L2 U B2 U' B2 L2 D' L' B' L B' D2 B L' R' U'",
                    "F' D' L' D F2 L2 U L2 U L2 U2 L2 F' U' L U L2 U L2 U L'"
                ],
                "solutions": [
                    "U' R' U' F U' R2 U R2 U F' R U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F D' F' D R2 D L2 R2 F2 D' R2 U L2 B R2 D' R2 D B R2",
                    "R U L D F2 D' R2 D2 U R2 B2 U' L R2 U R' D L D U2",
                    "L F D F2 D2 F2 D F2 R2 D L2 B2 U2 L' D' L B' L' R2 D L2"
                ],
                "solutions": [
                    "U' R2 D' R U2 R D2 R' U' R D2 R' U R' D R U2 R",
                    "U' R' U' R' D' R U' R' D R' U R2 U R U' R U' R'"
                ]
            }
        ],
        "S6": [
            {
                "scrambles": [
                    "B L' F' D L2 D' L2 U L2 U' L2 B2 U' F R B2 D' B D R' B2 L",
                    "R' B' R2 B2 U2 R' U2 R' U2 R U2 B' R F' U2 F U R U' R'",
                    "R D' F R2 U' F2 U R2 F2 D R2 D' U' F D' F U2 F' D2 U R' U'"
                ],
                "solutions": [
                    "U2 R U R' U' R U R2 D' R U2 R' D R2 U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F R' B U2 B R2 B' U2 B R2 U2 B2 R' U R2 U' R2 B2 U2 B2 F'",
                    "B' D' L U' R2 D R2 U R2 B2 U' B2 R2 B U B' D' L' D B U2",
                    "B U' R U2 R2 U2 R2 U R2 U R2 U2 B' U B U R' U B'"
                ],
                "solutions": [
                    "R U R' U R U' R2 F' R U R U' R' F R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L F' R U2 L2 D R2 U' F2 U R2 D' L2 R' U2 F2 L' F' L2 U2 L U'",
                    "F L' D' F2 D R2 U' R2 U F2 U' F2 L U L' F2 U L F' U",
                    "B R D U' L2 D2 F2 U' F2 D' L2 D2 R2 B' U B2 R' B' R2 U' R'"
                ],
                "solutions": [
                    "U2 R U R' U R2 D r' U2 r D' R2"
                ]
            },
            {
                "scrambles": [
                    "R' B D R2 D' F2 U F2 U' R2 U R2 U' B' U B U' R2 U' B' R",
                    "R' U F' L2 D2 R2 D' R2 D' L2 U' F2 U2 F' U2 F' U F R",
                    "B R' D F2 D F2 D' L2 D F2 D2 L2 R B2 U' R' U R B U'"
                ],
                "solutions": [
                    "R' U R U2 R' U R2 D R' U R D' R'"
                ]
            },
            {
                "scrambles": [
                    "R F' U' R2 F D2 B' D2 R2 B U2 F' R B R' B' U' F R'",
                    "R' F L R2 B2 U2 L2 U L2 U B2 R2 D' F' D F D' L' F' R U",
                    "L' F D R2 F L2 R2 U2 F' U2 L2 R2 F' D' L2 U F2 U' L2 F' L U'"
                ],
                "solutions": [
                    "U' R' U' R U R2 U' R' U' R U D' R U R' D R'"
                ]
            },
            {
                "scrambles": [
                    "B U L' F2 U2 L2 U L2 U' L2 U L2 U R D' B2 D R' F2 L B' U'",
                    "F' U' F' D R2 B2 U' R2 F2 D L2 D2 U' F' U L2 U L2 F U'",
                    "R U L U2 R2 F2 D R2 U2 B2 L2 U R D' L' D' B2 R2 U"
                ],
                "solutions": [
                    "U2 R U R' U R2 D R' U2 R D' R2"
                ]
            },
            {
                "scrambles": [
                    "B R U2 B U2 B U2 B2 U2 B R B' U B' U' B2 R2 B' U'",
                    "F D B' U' B2 D L2 D' B2 U' R2 U B D' F2 U F'",
                    "F L' F' L' F2 L B2 R' D2 F2 R F2 R2 D' R D R B2 F' L F'"
                ],
                "solutions": [
                    "U2 R' U2 R U2 L U' R' U L' R"
                ]
            },
            {
                "scrambles": [
                    "R' U' B R2 B2 D' F2 D B2 D' F2 D R2 B' U R2 U2 R' U' R U' R'",
                    "B D' F B' L2 B2 L2 F D2 F' L2 B' F' D' B' U2 B' F U' B U F'",
                    "B D' B U B2 U' L2 U2 B2 L2 U' L2 U2 B' U L2 B' D U' L2 B' U2"
                ],
                "solutions": [
                    "R U2 R D R' U2 R D' R' U R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B' L' D U2 L2 U L2 U L2 U2 L' U' L' D' L B U",
                    "B L' D' L2 D U B2 D' R2 D B2 F2 L B' L' U L2 F2 L'",
                    "F U' R U2 B2 L2 B2 R2 U B2 D F2 D' F D B2 R F2 U R' U2 R"
                ],
                "solutions": [
                    "R U R2 F' R U2 R U2 R' F R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R B' R' U' R2 U' B2 U B2 U R2 B2 L2 F' L' F2 U2 F' U L' U' B'",
                    "F U' B R U2 L F2 D2 R B2 L B2 R' B R D2 F U' B L B2",
                    "B' U R' B2 F2 D' L2 D' B2 F2 U R' U' B D2 B' R B D2 U2"
                ],
                "solutions": [
                    "U R U R' U' R U R2 D' R U R' D R U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F' D' R L2 B L2 B' U2 F U2 F' D L2 F' L2 F D' R' D F U'",
                    "R' F' D' U' R2 U' R2 D B2 D' B2 D B' U' B U' F' L2 F2 R U'",
                    "R' B D L2 D R2 B2 R2 U' F2 U R2 B2 R' B' U' B R' D2 B' R"
                ],
                "solutions": [
                    "F' R U R' U R U2 R' F U R U' R' U2 R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R D F' U2 L2 B' U2 B' U2 B2 L2 U2 F D' R' F U' R' U2 R U F'",
                    "L B' R' F2 U2 L2 F' R2 B D2 L2 R2 F L F R' F2 R F L2 R",
                    "F R' B D' R2 D R2 U' B2 U2 R2 U' B' D B D' R2 B R' F' U2"
                ],
                "solutions": [
                    "U R' F R U R' U' R' F' D' R U R' D R2"
                ]
            }
        ],
        "AS1": [
            {
                "scrambles": [
                    "F' U' L' U B2 U' B2 U' L2 D2 F2 D2 L' D U' R U' R' D' F U2",
                    "B L D' U2 R2 D2 R2 U' B2 D B2 D U' L' B2 F2 U R' U' B F2 U2",
                    "L U' F U B2 U B2 R2 U R2 B2 U' B R2 B U' F' L' U2"
                ],
                "solutions": [
                    "U' R2 D' R U2 R' D R U R' F R U R U' R' F' R",
                    "U R U' R2 U' R U' R' U2 R' U2 R' U' R U' R2"
                ]
            },
            {
                "scrambles": [
                    "R U F D2 B2 U' B2 D' R2 U2 R2 U2 R' U' R D' F' U' R' U'",
                    "B R F2 U2 F' D2 B R2 F' R2 B U F' U' F' L F2 D2 B U'",
                    "L U' R' F2 L2 U2 L2 U F2 U R2 D R D' L' F2 R2 U2"
                ],
                "solutions": [
                    "U R U2 R2 U' R' U R U' R' U' R2 U R"
                ]
            },
            {
                "scrambles": [
                    "R' D B' F2 D2 U2 B2 F2 D2 U2 B' D' U2 R U R' U R",
                    "L B R' B2 R2 F2 L2 F2 D2 L2 R2 U2 R' F L' R' D2 R' U R' U R",
                    "L' F U D L2 R2 F2 L2 R2 D' U' F' L2 U2 L' U R' U R"
                ],
                "solutions": [
                    "R' U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R' U F U2 L2 R2 B2 U' B2 U R2 D' R2 B D' B2 D' B' L2 R' U2",
                    "R U' F' B2 D2 U2 B2 F2 D2 U2 F' U2 R' U R U2 R' U'",
                    "F' L' F U F2 L2 U' L2 U F2 U2 F2 L B' F2 U2 B F2 L' F2 U'"
                ],
                "solutions": [
                    "U R U2 R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' D' F U2 R2 B2 D L2 B2 D U2 L2 U B D' F' L2 F U L' R2 U",
                    "F U' F' L2 D2 B2 F2 L2 D F2 U' R2 U F' L2 U2 F D L2 D F",
                    "R' F L D2 F2 L2 U' F2 R2 B2 L2 U' L U' L2 U2 L' D' R2 D2 F' R"
                ],
                "solutions": [
                    "R' U' R2 U R2 U R2 U2 R2 U2 R"
                ]
            },
            {
                "scrambles": [
                    "F R D' U' R2 D2 B2 D2 F2 D' U' L' F R' F R D2 B2 F' U2",
                    "R F R D R2 D' R2 B2 L2 R2 D R2 D' R' F' R F L2 B2 F' R2",
                    "F' U' F' D2 L2 D L2 D F2 R2 U' R2 U' F' U2 F U'"
                ],
                "solutions": [
                    "U2 R U R' U R' U' R2 U' R2 U2 R"
                ]
            },
            {
                "scrambles": [
                    "B U F' B2 F2 R2 D2 B2 U F2 L2 U B D2 L2 D' L2 B2 F U'",
                    "R D B' F2 R2 D' B2 R2 F2 U' L2 B' D' R2 U R",
                    "F' L' U' L2 U' L2 U2 L2 U' B2 L2 B2 U2 B U' B L2 B2 L' F U"
                ],
                "solutions": [
                    "U R' U' R U R U2 R' U' R' U R U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L U' F' U' B2 F2 R2 D' F2 R2 B2 U' L' F L' F2 U F L'",
                    "R U' L U' R2 U' R2 F2 U2 F2 U' R2 U R U R D R D' L' R2",
                    "F L U R2 D2 L2 U B2 D2 U' R2 U' F2 L' F U2 L' F L U2 F2 U"
                ],
                "solutions": [
                    "U R U R' U' R' U' R U R U' R' U' R' U R"
                ]
            },
            {
                "scrambles": [
                    "B L D' L2 D L2 D F2 D B2 F2 U' F2 R B2 D2 F2 D L' D' B'",
                    "L U' B U L2 D' B2 D L2 U B2 U2 F' L F2 U2 R2 B2 F R2 F2",
                    "B D B' U2 R2 B2 R2 U' R2 B2 R2 U B L2 U' L2 D' U2 B U"
                ],
                "solutions": [
                    "U R U R' U R' U' R U R' U' R2 U' R2 U R U' R' U R"
                ]
            },
            {
                "scrambles": [
                    "R F' R' U' B2 U' L2 B2 U' B2 U L2 U R F' R' B2 R F2 R' U'",
                    "B L U' B2 U B2 U' B2 R2 B2 U2 R2 U F U B2 F' L' R2 B' U'",
                    "L' F' D' B2 L2 D' F2 U B2 R2 U' F2 D2 F L2 U2 L' U' L U' L' U2"
                ],
                "solutions": [
                    "R' U' R U' R' U' R' U' R' U' R' U R U R2"
                ]
            },
            {
                "scrambles": [
                    "B' U' B L2 F2 D R2 D B2 R2 D2 F L2 F U B' U2 B",
                    "L' B' L R2 U' R2 U' R2 U2 R2 U B D U' R D' B' D R' D' U'",
                    "F' U F B2 L2 D2 R2 F2 D' R2 B2 U R2 F D' B U2 B D U' F"
                ],
                "solutions": [
                    "U R U R' U' R U R2 U' R2 U' R' U R U' R' U R' U R"
                ]
            },
            {
                "scrambles": [
                    "F D' F' U' R2 D2 L2 B2 U R2 D F2 L2 F' L2 D U' R2 D B' R2 U'",
                    "R' D' B' L2 B' L2 B F2 L2 D2 B U2 R2 D' F' U2 F R F' U F U",
                    "B U L' D B2 U' L2 U L2 D2 B2 L2 U' L' B R F2 R' B2 U'"
                ],
                "solutions": [
                    "U2 R U R' U R' U' R' U R U' R' U' R' U' R' U2 R"
                ]
            }
        ],
        "AS2": [
            {
                "scrambles": [
                    "R' B' U B2 U R2 U R2 U2 B2 U B2 U2 B L' R2 B2 L U' R' U'",
                    "R' D F U2 R2 U R2 U R2 U2 R2 U F' D2 F U2 F' D U R",
                    "B R' U B2 F2 L2 F2 U2 B2 U F2 D' F2 R' B2 R U' R' U2 B U2"
                ],
                "solutions": [
                    "U' R U2 R2 U' R2 U' R' F U' R' U' R U F'"
                ]
            },
            {
                "scrambles": [
                    "B' U' F' B2 U' F2 R2 U' R2 D F2 U B2 F' D B R2 F2 L2",
                    "F D' B' F2 D L2 F2 D R2 F2 D B2 D B U F2 D' B' D2 F' U2",
                    "R D' F' D2 B2 D2 F2 D R2 D' R2 U2 F' D F' U B2 U2 F R' U"
                ],
                "solutions": [
                    "U' R D R' U R D' R' U2 R' U' R U2 R' U' R"
                ]
            },
            {
                "scrambles": [
                    "L' F' U' D U2 B2 L2 U B2 R2 D F2 R2 F U' F' D' F L2 U' L' U2",
                    "R' U R' F2 D' U2 F2 D2 U R2 U2 L' B2 L D' R2 U' R2 U2",
                    "F U F' U B2 R2 U' L2 B2 D' B2 D L2 F' D' B2 F2 U' F L2 F2"
                ],
                "solutions": [
                    "U' R U2 R' U' R U R' L' U R U' L U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B U R B2 U B2 R2 U' B2 U B2 F2 L D L' F2 U R U B'",
                    "B' R' F' U2 F2 U' F2 R2 U2 R2 F2 U F' U2 R2 U' B' R' B U2 B U2",
                    "B' R' D' F2 D2 B2 D' R2 B2 D' F2 D U' R' D L2 D' R2 B"
                ],
                "solutions": [
                    "R U' R' U2 R U' R' U2 R' D' R U R' D R"
                ]
            },
            {
                "scrambles": [
                    "R D' F L2 D L2 U F2 D F2 U2 F2 U' B R2 D2 L2 D2 B' D' R' U",
                    "L D' L D' B2 R2 D B2 U R2 U' B2 L' D2 F2 D F2 R2 D2 L'",
                    "R' B L B L2 F2 D2 F D2 R2 B' L B' L F' L F' L2 R' U'"
                ],
                "solutions": [
                    "U' F U' R' U R U F' R' U R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "B' R' F R2 D' R2 D' B2 L2 U F2 U2 L' U L' B2 D2 R2 F' R B U'",
                    "B' L U' R2 U' B2 D2 U' F2 U L2 B2 R F2 R' B2 R D2 B' U",
                    "F' L' F U2 L2 F D2 B' U2 R2 B D2 F2 L F2 U F' U F U2 F' U'"
                ],
                "solutions": [
                    "U R U R' U L' U2 R U2 R' U2 R L U2 R'"
                ]
            },
            {
                "scrambles": [
                    "B U' F' U L2 U' F2 D R2 U' R2 U2 F' U' F' D' F U B' U2",
                    "F' R' U F2 R2 U R2 F2 U' B2 F2 D' F D B2 R2 U' R' F' U F2",
                    "L B L2 U B2 L2 B2 D' B2 D B' L2 U' B' R B2 R' U L"
                ],
                "solutions": [
                    "R U R' F' R U2 R' U' R U' R' F R U' R'"
                ]
            },
            {
                "scrambles": [
                    "B U L U' L2 D L2 B2 R2 U2 L2 F2 R B2 R B D B2 L U'",
                    "B D R' F2 D F2 D L2 D' F2 D2 F D F D2 L2 D2 R D' B' U'",
                    "F' D R U2 R2 D' F2 D B2 D' F2 D B2 R U' R U' R' D' F U"
                ],
                "solutions": [
                    "R U R' U' R' U' F U R2 U' R' U R U' R' F'"
                ]
            },
            {
                "scrambles": [
                    "R' U' L B2 L2 F2 D F2 D' L2 U R2 D L D R D' U2 L2 F2 R2",
                    "B R D' U2 R2 D B2 R2 U F2 D2 L2 U' F L2 F D' R2 D' R U B'",
                    "F R' D' U2 B D2 F' R2 F R2 B D' R2 D B2 D' U2 R U' F'"
                ],
                "solutions": [
                    "U R' U R2 U2 D R' U' R U' D' R2 U' R"
                ]
            },
            {
                "scrambles": [
                    "R' D' R' D2 B2 L2 B2 L2 U' R2 U2 R2 B2 L' B2 L' U' R D' R U",
                    "B' D B' D' U' R2 D B2 U' B2 L2 D F' D' L2 D' U2 R2 B U",
                    "F R B' D2 R2 U F2 D F2 U' R' D' R D2 R2 B R' F' U"
                ],
                "solutions": [
                    "R' U R U R' U r U' R' U R U r' R' F R F' U R"
                ]
            },
            {
                "scrambles": [
                    "B U' B U R2 U2 F2 D' F2 R2 U' R2 U' F D2 R2 B' R2 D' F' R2",
                    "F L D R2 B2 D' L2 U R2 U F2 U2 L F U2 F U' F' U' F2 U'",
                    "B' U B' U L2 D' L2 U2 R2 U R2 B U2 F2 R2 U' R2 B F2"
                ],
                "solutions": [
                    "z D' R' D R U R' D' R U' R U R' D R U' z'"
                ]
            },
            {
                "scrambles": [
                    "B R D' B' L2 D2 R2 F L2 R2 D2 B2 L2 D' R' U L2 R' U2 R U' B'",
                    "F' U' L' D' R2 U B2 U R2 D2 L2 D' F2 L' U B D' L2 D B' F",
                    "L F D2 L2 U2 L2 U' L2 U' L2 D2 F2 L F L' F U' F' U' L'"
                ],
                "solutions": [
                    "R U2 R' U' R U r' F r U2 R' U' r' F2 r"
                ]
            }
        ],
        "AS3": [
            {
                "scrambles": [
                    "L' U' F' U' F2 U F2 D2 F2 U' F2 U F U F D2 F' L U'",
                    "F' L' D' L F2 U' L2 U F2 D F2 U' L2 U R U L U2 L' U R' F' U'",
                    "L U B' F2 D2 U2 B2 F2 D2 U2 B' U2 R' U L' U' R"
                ],
                "solutions": [
                    "R' U L U' R U L'"
                ]
            },
            {
                "scrambles": [
                    "B' R U R2 U2 B2 U R2 F2 L2 U' F2 D R' B2 F2 L' B' U' F2 U",
                    "L' B' L' B' F' D2 F U2 B U2 F' L D2 L' B2 D B' D L2 B F",
                    "L D' L F2 U' B2 U R2 D' R2 F2 L B2 L' B2 D L U L U'"
                ],
                "solutions": [
                    "U' R U2 R' U' R U R D R' U2 R D' R2"
                ]
            },
            {
                "scrambles": [
                    "B' D R D' B2 L2 F2 D' R2 D L2 D' L2 F U' R' F' U L2 R2 D B'",
                    "B' U B' U2 R2 F2 L2 D L2 F2 R2 U' B' U' F' U B2 U' B F",
                    "F' D F U' L2 U' R2 B2 U R2 F2 L2 D' B' D' F D B2 D B' F U2"
                ],
                "solutions": [
                    "U R D' U R U' R' U2 D R2 U' R U R"
                ]
            },
            {
                "scrambles": [
                    "L F' D R2 U F2 U' R2 D2 L2 B U B U' L' D L2 F",
                    "L' B' L B2 L2 D2 F2 D' F2 D' L2 B2 U2 F U' L' B L U F' U2",
                    "B' D' F R2 B2 L2 B2 D' R2 U' F2 D B L2 U F' U B D' B' U"
                ],
                "solutions": [
                    "U' R U R U' R2 D U2 R' U' R U D' R"
                ]
            },
            {
                "scrambles": [
                    "B R F' R2 D' B2 U F2 U' B2 D U' F' U L F L' R' B' R' F R",
                    "B' R' U F2 D' L2 D' L2 D2 F2 U' R B F' L' U' L F U'",
                    "L U F' L2 U L2 U' F2 L2 F2 U2 F2 U F L2 F' L' D F D' L2"
                ],
                "solutions": [
                    "R2 D' R U2 R' D R U R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R D' B D L2 D2 U R2 D' B2 U2 B2 F' D' B L2 B' U L2 R U",
                    "R' B' R2 D' R2 D R2 F2 D' F2 R' F2 D R' B R F2 U R2",
                    "F' R F' U' F2 D R2 D' F2 R2 F2 R2 F' U F2 U' F2 U R' F U"
                ],
                "solutions": [
                    "D R' U' R U' R' U R U D' R2 U R' U R U' R U' R2"
                ]
            },
            {
                "scrambles": [
                    "B R F' U' F2 R2 D B2 U R2 U' B2 R' B' R2 B' R' B D' F' U B'",
                    "L D L' F U2 R2 F' R2 U2 F2 U2 F L2 R' B2 L' F2 R D L' U R2",
                    "R' F' R U' F2 U R2 U2 F2 U F2 U R F' D' F' D R F'"
                ],
                "solutions": [
                    "R' U' R U' R' U' R U R' U' R' D' R U R' D R U2 R"
                ]
            },
            {
                "scrambles": [
                    "B U' F R2 D' U' B2 R2 U R2 U L2 U' B F2 U F' D' B' D' U",
                    "R B' L U' B2 L2 U F2 U' L2 U F2 L' D2 R D2 B2 U B' R' U",
                    "B' L' B' U D2 F2 D' F2 D' B2 U2 L2 B L B' D L2 D' L U'"
                ],
                "solutions": [
                    "U R U2 R' U' R U R D R' U R D' R' U' R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "F R B F D2 F' U2 F D2 F' U2 B' R' F2 U2 F U F' U F",
                    "B U' R D' U2 R2 F2 U' F2 D' L2 F L' U2 L F' L2 D2 R U'",
                    "R' D' B2 L2 R2 F' L2 F R2 B' U' F U2 B' U' F' D R"
                ],
                "solutions": [
                    "U2 F U R U' R' U R U' R2 F' R U2 R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R' B' D F2 R2 D2 U' L2 B2 L2 U' L2 U2 F' L2 R' D B D U R2",
                    "F R D B2 R2 B' L2 B R2 B' L2 B' D' R' U' F' U' F U2 F' U",
                    "R' B U' D' U' B2 L2 U L2 D' R2 D2 L' D2 B2 R' D2 L B' R U'"
                ],
                "solutions": [
                    "U2 F R U' R' U R U R2 F' R U R U R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F R F' B2 L2 D F2 U' F2 U2 F2 R2 U F' D' R' D F D F2 L2",
                    "F' R U' B2 U2 B' U2 B L2 F' L2 U2 F2 U F2 U B2 F U R' F",
                    "B R F' D F2 D' F2 U' L2 B2 D' B2 U' B' F2 U' F R2 B F2 R' B'"
                ],
                "solutions": [
                    "U2 R' U2 R' F' R U R U' R' F U2 R"
                ]
            },
            {
                "scrambles": [
                    "F' R B U' B2 U F2 U F2 U' B2 D2 U2 B' U' B' D2 B R' F U2",
                    "L' D' L' B2 L2 U' B2 D R2 B2 U2 F2 L' U2 L' U R2 D2 F2 U'",
                    "L F' L U L2 R2 D' L2 D L2 R2 U2 L D' U L' D F U' L' U'"
                ],
                "solutions": [
                    "U2 L' U R U' L R U R U R U' R' U' R2"
                ]
            }
        ],
        "AS4": [
            {
                "scrambles": [
                    "B' L U' F2 R2 B R2 U2 F' L2 F U2 F2 U L' B' L2 U L U' B2",
                    "F' R U D2 B2 L2 B2 L2 D2 F2 R2 F2 U' R' F R D B2 D' R'",
                    "F' U L' U' F2 U F2 U L2 U R2 U' L' U R2 U2 F2 U' F'"
                ],
                "solutions": [
                    "R D' R2 D R2 U' R2 D' R2 D R2 U R"
                ]
            },
            {
                "scrambles": [
                    "B U L B2 U2 L2 B2 D' B2 D L2 U B2 L' B2 R' U' R B2 U' B' U'",
                    "F R' F2 D' L2 F2 U' F2 U2 L2 U' F' L F L' F2 D F' R U'",
                    "F D' B' U2 F2 D2 L2 U R2 F2 L2 D2 R2 B D B2 L2 F' D B' F2 R2"
                ],
                "solutions": [
                    "U R' U' R U' R' U R' D' R U R' D R2"
                ]
            },
            {
                "scrambles": [
                    "F' D F U2 B2 U' R2 F2 D' F2 R2 F2 D F U B2 D' U' F2 U' F'",
                    "R' B' U' R2 U2 R2 U' R2 U' R2 B U L U' R U L'",
                    "B' U R B2 D2 B2 R2 B2 L2 D' L2 D' B2 R U' B2 F2 L' B' F2 U"
                ],
                "solutions": [
                    "l U' R' D R2 U l' U R' U' R U R' U' F'"
                ]
            },
            {
                "scrambles": [
                    "B U' L' U' L2 F2 U2 F2 D' L2 U L U2 L2 D L' U' L' B' U",
                    "B' D L' U' F2 U2 F2 U' F2 U' F2 L2 D' R B2 D L' B' D' B2 R'",
                    "R' F' D' R2 D B2 D2 R2 U F2 R2 U B' U L2 R2 D' R2 U2 R' U'"
                ],
                "solutions": [
                    "U' R' D' R U2 R' D R2 U' R' U2 R U R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "B' L' U L2 U2 R2 F2 D' F2 R2 D' B' U' B D U B U L' B",
                    "L D' L' F U2 R2 F R2 B2 F R2 U2 B' U R2 B2 F2 U R' U R' F2",
                    "F' U' B D2 B2 U' F2 U' F2 U B2 F2 D2 F' D2 B' U' B D2 B' U'"
                ],
                "solutions": [
                    "U2 R2 D R' U R D' R' U R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F L' D' L2 D F2 U' R2 D2 B2 U B2 U' R' B2 L2 U2 R B' L2 D2 R2",
                    "F' U' L U F2 U' B2 U F2 U' B2 U L' F' L F2 U' F2 L' F2 U'",
                    "L B R' D2 R' U2 L2 B2 R' F2 D2 L' D2 B D2 L2 B F' L"
                ],
                "solutions": [
                    "U R U2 R' L' U2 R U' R' U2 L R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "R' D' R' L2 F' R2 B2 R2 F U2 L2 R2 D2 U' R2 D F' R D R' F R2",
                    "B' L' D' L2 D F2 D' L2 U B2 R2 B2 D L B' U2 B2 U2 B' U' B'",
                    "L' B' D U2 L2 U2 L2 D' B2 D' R2 U' R B R D L2 U' L' B' U'"
                ],
                "solutions": [
                    "U' R U R' U' R' U' R U R U' R' U' R2 D' R U' R' D R U2 R"
                ]
            },
            {
                "scrambles": [
                    "R F L D2 R2 D' F2 D' B2 D L2 U R F' L F2 R D' R' D2",
                    "L' F' R' D L2 U' F2 U F2 U L2 F2 U2 F' U' F' D' U' R F L U2",
                    "L B U' L2 D' B2 D R2 B2 D' L2 B2 U' F' D B2 D' B' F' U2 L' U2"
                ],
                "solutions": [
                    "U' R U2 R' U' R2 D R' U2 R D' R' U' R' U R U R'"
                ]
            },
            {
                "scrambles": [
                    "F U F D2 R2 D2 R2 D' B2 D R2 F' U' F' D' B U' B D",
                    "L' F' L2 D' L2 D F2 U F2 U' L U F U L' F U' F' L'",
                    "F' R' B' U2 F U2 B L2 U2 L2 U2 F' U' L2 U2 R U' F' L2 F2 U'"
                ],
                "solutions": [
                    "U R U2 R' U R' D' R U' R' D R U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R U' F U2 R2 U2 F2 R2 F2 U2 R' F2 U' F2 U R' F2 U2 F' R'",
                    "F' U' L' B R2 F' L2 D2 B' F2 D2 R2 F' L' U B F U B'",
                    "L' F U R2 D' R2 F2 R2 D R2 F2 U' F' L U' F' U2 F"
                ],
                "solutions": [
                    "U' R2 D R' U2 R D' R' U' R' U R U' R' U R U2 R'"
                ]
            },
            {
                "scrambles": [
                    "F U R' U' R2 D' R2 U F2 D2 F2 R2 U' R' B2 R' D2 R B2 F' U",
                    "L' B L U B2 D L2 D R2 U2 F2 R2 D2 L B' L B U' B' U2",
                    "B U' F U F2 D' L2 D F2 U L2 U' R U L2 U' R' B' F'"
                ],
                "solutions": [
                    "U2 R' U' R U' R D R' U' R D' R' U R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R' F' U' F2 L2 D R2 U' B2 U R2 B2 R2 B R2 B R' D' L2 F' R2 U'",
                    "R F' U' F2 D R2 D' R2 U F2 L2 B2 D2 L' D' L B2 L2 F R' U",
                    "F' D L F2 D' F2 D R2 U' R2 U2 F2 U' L' U' R U' R' D' U' F U"
                ],
                "solutions": [
                    "U2 R' U2 F' R U R' U' R' F R2 U R' U R"
                ]
            }
        ],
        "AS5": [
            {
                "scrambles": [
                    "B' U' F U' F2 R2 F2 R2 U' F2 R2 U F' U B' D' F' R2 D B2 U2",
                    "B D' L' D B2 R2 D2 U F2 R2 U' B2 L D L' B2 R B' D' L B2 R'",
                    "F U' L D2 R2 D L2 D' R2 D B2 U' B2 L U L2 D L2 U' F'"
                ],
                "solutions": [
                    "U' R U2 R2 D' R U2 R' D R2 U' R' U R U' R'"
                ]
            },
            {
                "scrambles": [
                    "F' R D L2 F2 D R2 U L2 B2 U2 B2 L D2 L' B2 R F' U",
                    "F U' F R2 D B2 U' B2 U2 R2 D' U' R' F L F2 R F' L' U'",
                    "R F' L' B2 D F2 D' B2 D F2 D' L F R2 U R U2 R' U R U2"
                ],
                "solutions": [
                    "U' R D R' U' R D' R2 U' R U2 R' U' R"
                ]
            },
            {
                "scrambles": [
                    "B U' L' U2 R2 D L2 D B2 R2 U2 L2 U2 L U B2 L' U F2 L B",
                    "L D' B' U2 L2 B' D2 L2 F2 R2 U2 F' R2 U B D2 B D' U L' R2 U2",
                    "R U' F R2 D B2 D' R2 F2 D L2 D' F R2 U2 B2 U' B2 U' R U2"
                ],
                "solutions": [
                    "R D' R U' R' D U' R' U R U R2 U' R' U R"
                ]
            },
            {
                "scrambles": [
                    "B' U L U2 L2 U2 L2 U' B2 U B2 U' L B F' D' B2 D L2 F U2",
                    "L D F' U' F2 D' B2 D F2 R2 D' B2 U' F U2 F L D' L2 D F U2",
                    "F L' D U' L2 F2 D U R2 D F2 L2 R' B R2 U' R2 B L F U'"
                ],
                "solutions": [
                    "R U R' F' R U R' U' R' F R2 U R' U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R' D' B' L2 B2 U' B2 U' B2 U2 B2 U' L2 B D B' L F2 L' B R U",
                    "F U' F' U B2 F2 U F2 D' F2 U' R2 D' B' F D F' D B' F2",
                    "F U' L U2 F' R2 F' R2 F2 U2 F R2 F2 L' R2 F' U' F U2 F' U'"
                ],
                "solutions": [
                    "U2 R2 D r' U2 r D' R2 U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R U R' U R U2 R F2 D B2 D' F2 D B2 D' R2",
                    "B' U R U2 R2 U' R2 U' B2 R2 U' R2 B2 R' U L' B2 L U2 B U'",
                    "R B' L B2 D' B2 D L2 U' L2 U' L' U' R B2 R' B R' U'"
                ],
                "solutions": [
                    "R U2 R' U' R U' R D R' U2 R D' R' U2 R'"
                ]
            },
            {
                "scrambles": [
                    "L' U R B L2 B L2 B L2 B2 D2 F' D' U2 F U2 F D' L' R' U'",
                    "R B' L' R2 D F2 D' L2 U L2 U' F2 L2 R' D L' R F2 R2 B R' U'",
                    "B' U' L' D2 U' B2 U' L2 B2 U' B2 D B2 L' B2 F2 D' L' F2 U2 R' B'"
                ],
                "solutions": [
                    "L R' U' R U L' U2 R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L U F' D2 U' L2 U' R2 U' R2 U' L' F L2 U2 R B R' U2",
                    "B L' F' U' L2 U L2 F2 U2 B2 D' R D B2 U F' L U L2 B' U",
                    "R D R L2 R2 U2 L2 U' L2 U' L2 U R U R' U R D' U2 R' U"
                ],
                "solutions": [
                    "U2 R2 D R' U2 R D' R2 U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "L' U' B' U2 B2 U2 B2 U' B2 U' B2 U R B L B' R' B",
                    "R' F R' U' F2 D R2 U' B2 U B2 D' U L F' L' F R2 F R2 U2",
                    "F L' U F L2 U2 B' L2 D2 F' L2 U2 R D L' F D F R F'"
                ],
                "solutions": [
                    "R U R' F' R U2 R' U2 R' F R2 U' R'"
                ]
            },
            {
                "scrambles": [
                    "R F' U' B2 D2 B U2 B' D2 B U2 B U F U R' U R U2 R' U'",
                    "B' D' F U' R2 F2 U2 R2 D' L2 F2 U L2 B' L2 D' F2 U L2 B F",
                    "F' U' L' U2 L2 U2 L2 B2 U' B2 D L U2 L D' L' U2 F U'"
                ],
                "solutions": [
                    "R U2 R' U' R' D' R U' R' D R2 U' R' U R U' R'",
                    "U' R' U' R U' R U R D R' U' R D' R U2 R"
                ]
            },
            {
                "scrambles": [
                    "B' R' B F2 D B2 D L2 U L2 U L2 U' L B2 D2 F' R2 F' R U2",
                    "L' F' R' F' R2 D2 F L2 D2 F R2 U2 B R F L' F' U2 F L2",
                    "B' R' U' B2 U2 L' U2 F2 U2 R D2 L B2 U' F U' B' L' U' L' U2 F'"
                ],
                "solutions": [
                    "U R U R' U2 R U R' U' F' R U2 R' U' R U' R' F"
                ]
            },
            {
                "scrambles": [
                    "F' U L F U2 F D2 B R2 B' D2 U2 F' L' U2 F' L2 U F U' L2 U2",
                    "R U F' D2 L2 B U2 B' L2 D2 R2 U2 R' U L' U R U L U R' F",
                    "R' B L2 F2 D F2 L2 B2 U2 R2 U' R' U R' U' B U' R U2"
                ],
                "solutions": [
                    "R2 D' R U' R' D F R U R U' R' F' R"
                ]
            }
        ],
        "AS6": [
            {
                "scrambles": [
                    "F' R B' L2 B2 U2 R2 F2 D2 F2 R2 F U F' U2 B' U' B2 R' F U'",
                    "F' L' F' B2 L2 B2 L' B2 L' B2 L' F2 R' F' U L U' F R U2",
                    "L F' D U R2 B2 U B2 D' R2 U F2 U2 L U L' F' L U' L2 U2"
                ],
                "solutions": [
                    "U' R U2 R' U' F' R U R' U' R' F R2 U' R'"
                ]
            },
            {
                "scrambles": [
                    "B L' B' R2 U' R2 U F2 R2 U' F2 U R2 B F2 L B' L' R2 U L",
                    "L U' B' R2 F2 D' R2 D B2 U2 L2 B2 D' B L' U2 B2 D' B2 U' L2 U'",
                    "B' L B D2 F2 L2 U' L2 F2 D R2 D B' L B R' B' L2 B R'"
                ],
                "solutions": [
                    "U' R' U2 R' D' R U R' D R2 U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "R' B' U R2 D B2 D' R2 D' R2 D U' B' L' R2 D' B D L R' U'",
                    "B' L' B L2 D F2 L2 D L2 D2 F2 D B' L B' R D2 F2 R' B2 U",
                    "L F R L2 F D2 L2 D2 U2 R2 U2 F' U2 L U2 L F' L' F R' U'"
                ],
                "solutions": [
                    "U2 R' U' R U' R2 D' r U2 r' D R2"
                ]
            },
            {
                "scrambles": [
                    "F R' F' U' F2 U R2 F2 D' F2 D R2 U' F' R U' F' U' F U2 F'",
                    "F' L' U B2 D2 R2 B2 L2 U2 F2 U L2 U' L' F U B2 F2 D B2 F2",
                    "L' D' R' D' L2 U F2 D R2 F2 D2 B2 L B2 F2 D' R' U L' R2 U2"
                ],
                "solutions": [
                    "R U' R' U2 R U' R2 D' R U' R' D R"
                ]
            },
            {
                "scrambles": [
                    "B R B R2 U2 R2 B2 D' R2 D R2 U2 R2 B' R' B D' U R2 D R'",
                    "F' R D L2 F2 L2 F2 U2 L' D2 R' D' R2 D' L D' U2 L2 R' F U'",
                    "B R B' F2 L2 D2 L2 F2 D' R2 D R2 U' F R' F' R2 D' R2 D R'"
                ],
                "solutions": [
                    "U R U R' U' R2 U R U R' U' D R' U' R D' R"
                ]
            },
            {
                "scrambles": [
                    "B R' B R2 D' B2 L2 F2 D' L2 B2 D B' R U' B2 R' B2 R2 U B'",
                    "F' L' B' U L2 R2 D R2 B2 R2 D' L2 R2 B U' F U' F' L F U",
                    "R' U L U L2 U L2 U2 F2 U2 B2 R2 D2 R' D2 L' D2 B2 U' L U'"
                ],
                "solutions": [
                    "U2 R' U' R U' R2 D' R U2 R' D R2"
                ]
            },
            {
                "scrambles": [
                    "R F R' U2 F2 U' F2 U' F2 U2 F2 R F' U' L' U R' U' L U'",
                    "F L' F R2 D2 L2 B2 D L2 D' B2 L2 D2 R' F' L F U2 R' U2 F2 U2",
                    "L D F' B2 D F2 D' B2 F2 D' F2 R2 D' L' R2 U F2 U2 F U F2 U"
                ],
                "solutions": [
                    "U2 R U2 R' U2 L' U R U' R' L"
                ]
            },
            {
                "scrambles": [
                    "F' U' B' D B2 U' L2 D2 R2 D R2 U B' U2 B L2 B' L2 U' F",
                    "F' L B' D2 F2 R2 U B2 D L2 D' B2 U F U F2 R2 D2 B L U2 F",
                    "F U' R' U2 F' D2 F D2 L2 B R2 F2 L2 D R2 B' U2 R' B' D' R2 F"
                ],
                "solutions": [
                    "R' U2 R' D' R U2 R' D R U' R U' R' U2 R"
                ]
            },
            {
                "scrambles": [
                    "L F L' U2 F U2 B D2 R2 B F D2 F' U F2 D' B U L' B D L",
                    "L' B' D' U' B2 D L2 U' L2 U B' U L2 F2 D R2 D' F2 L'",
                    "L U' F2 L2 F' L2 R2 B D2 B L2 B2 L' R2 U B L' B' U L U2"
                ],
                "solutions": [
                    "R' U' R U R' F R U R' U' R' F' R2"
                ]
            },
            {
                "scrambles": [
                    "R U F L2 B2 D B2 L2 D2 B2 D' B2 R D' R' F2 U2 F U' R'",
                    "R D L2 F' D2 B D2 L2 F L2 F U F' L2 D' B2 R' F' U F",
                    "R' D' F' L2 U2 L2 F2 D R2 U R2 F2 U' R U F2 U' F U2 F2 U'"
                ],
                "solutions": [
                    "U R U2 R D' R U' R' D R U R U' R U' R'"
                ]
            },
            {
                "scrambles": [
                    "R D' L D2 R2 D R2 D L2 U' B2 U' B' R2 B L B' R2 B D R' U'",
                    "B R' B U2 B2 R B2 R' B2 R U2 L2 B R' B' L2 B' R2 B2 R' B U'",
                    "B U R L2 D2 R' D2 L' B2 L D2 R D' L' D L2 D' L' B' D' B2 R'"
                ],
                "solutions": [
                    "U R U R' U R' F U' R2 U' R2 U F' U R"
                ]
            },
            {
                "scrambles": [
                    "L' D' F B2 L2 D2 F2 D' F2 D' L2 B2 U2 F' D L D' U2 L' U L D",
                    "L' F' L' B' F' L2 B' R2 F' R2 F2 D2 L D2 L' B2 F2 D2 F' U'",
                    "B' D' B F2 D L2 D' B2 F2 R2 U' B2 U' B' D F U' B U B F'"
                ],
                "solutions": [
                    "U' R U R' U R' U' R2 U' R D' R U R' D R U R"
                ]
            }
        ]
    }
};

export default algsets;