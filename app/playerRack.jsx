import React from "react";
import { LetterTile } from "./letterTile"



export const PlayerRack = ({ letter })=>{
    const letter_array = ["a","b","c","h"]
    
const Rstyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "black",
    borderRadius: "10px",
    height: "50px"

}
return(
    <div style={Rstyle}>
       {letter_array.map(l =>(
        <LetterTile key={l} letter={l}/>
       ))}




    </div>
)

}