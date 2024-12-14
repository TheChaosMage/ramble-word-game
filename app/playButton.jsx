import React from "react";



export const PlayButton = ()=>{
const Bstyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    borderRadius: "10px",
    height: "50px",
    color: "black"

}
return(
    <button style={Bstyle}>PLAY</button>
)

}