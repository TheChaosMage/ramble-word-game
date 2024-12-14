'use client'

import React from "react";
import { useState } from "react";

import "./tile.css"

export const Tile = (props)=>{ 
   const tile_style = { 
    BL:{
        display: "inline-flex",
        borderRadius: "3px",
        height: "30px",
        width: "30px",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        backgroundColor: "antiquewhite"
    },
    DL:{
        display: "inline-flex",
        borderRadius: "3px",
        height: "30px",
        width: "30px",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        backgroundColor: "blue"
    },
    DW:{
        display: "inline-flex",
        borderRadius: "3px",
        height: "30px",
        width: "30px",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        backgroundColor: "red"
    },
    TL:{
        display: "inline-flex",
        borderRadius: "3px",
        height: "30px",
        width: "30px",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        backgroundColor: "green"
    },
    STR:{
        display: "inline-flex",
        borderRadius: "3px",
        height: "30px",
        width: "30px",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        backgroundColor: "Red"
    },
    TW:{
        display: "inline-flex",
        borderRadius: "3px",
        height: "30px",
        width: "30px",
        justifyContent: "center",
        alignItems: "center",
        color: "black",
        backgroundColor: "orange"
    }
    
   }
   
  
    return(
        //<div className={`blank-tile ${tile_type}`}></div>
        <div style={tile_style[props.tile_type]}></div>
    )
}