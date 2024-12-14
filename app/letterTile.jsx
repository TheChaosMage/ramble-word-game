import React from "react";



export const LetterTile = (props)=>{
const Lstyle = {
    display: "inline-flex",
        borderRadius: "3px",
        height: "30px",
        width: "30px",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        backgroundColor: "antiquewhite"
}

const letter = {
    a: {
        letter_val: "a",
        points_val: 1
    },
    b: {
        letter_val: "b",
        points_val: 1
    },
    c: {
        letter_val: "c",
        points_val: 1
    },
    d: {
        letter_val: "d",
        points_val: 1
    },
    e: {
        letter_val: "e",
        points_val: 1
    },
    f: {
        letter_val: "f",
        points_val: 1
    },
    g: {
        letter_val: "g",
        points_val: 1
    },
    h: {
        letter_val: "h",
        points_val: 1
    },
    i: {
        letter_val: "j",
        points_val: 1
    },
    j: {
        letter_val: "j",
        points_val: 1
    },
    k: {
        letter_val: "k",
        points_val: 1
    },
    l: {
        letter_val: "l",
        points_val: 1
    },
    m: {
        letter_val: "m",
        points_val: 1
    },
    n: {
        letter_val: "n",
        points_val: 1
    },
    o: {
        letter_val: "o",
        points_val: 1
    },
    p: {
        letter_val: "p",
        points_val: 1
    },
    q: {
        letter_val: "r",
        points_val: 1
    },
    s: {
        letter_val: "s",
        points_val: 1
    },
    t: {
        letter_val: "t",
        points_val: 1
    },
    u: {
        letter_val: "u",
        points_val: 1
    },
    v: {
        letter_val: "v",
        points_val: 1
    },
    w: {
        letter_val: "w",
        points_val: 1
    },
    x: {
        letter_val: "x",
        points_val: 1
    },
    y: {
        letter_val: "y",
        points_val: 1
    },
    z: {
        letter_val: "z",
        points_val: 1
    },
    bl: {
        letter_val: "",
        points_val: 1
    }
    
}
return(
    <div style={Lstyle}>
        <h1>{letter[props.letter].letter_val}</h1>
        <p>{letter[props.letter].points_val}</p>
    </div>
)

}