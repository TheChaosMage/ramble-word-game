import React from "react";
import {Tile} from "./tile"
import "./board.css"
import "./tile.css"


export const Board = ()=>{
    return(
        <>
        <div className="Board">
        <div className="row a">
        <Tile tile_type="TW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TW"/>
        </div>
        <div className="row b">
        <Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/>
        </div>
        <div className="row d">
        <Tile  tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/>
        </div>
        <div className="row e">
        <Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/>
        </div>
        <div className="row f">
        <Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/>
        </div>
        <div className="row g">
        <Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/>
        </div>
        <div className="row h">
        <Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/>
        </div>
        <div className="row i">
        <Tile tile_type="TW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="STR"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/>
        </div>
        <div className="row j">
        <Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/>

        </div>
        <div className="row k">
        <Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/>
        </div>
        <div className="row l">
        <Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/>
        </div>
        <div className="row m">
        <Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/>
        </div>
        <div className="row n">
        <Tile  tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/>
        </div>
        <div className="row o">
        <Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DW"/><Tile tile_type="BL"/>
        </div>
        <div className="row o">
        <Tile tile_type="TW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TW"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="DL"/><Tile tile_type="BL"/><Tile tile_type="BL"/><Tile tile_type="TW"/>
        </div>
        </div>
        </>
    )
    
}