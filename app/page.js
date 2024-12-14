import Image from "next/image";
import "./globals.css"
import { Board } from "./board";
import { PlayerRack } from "./playerRack";
import { PlayButton } from "./playButton";


export default function Home() {
  return (
   <>
   <Board/>
   <PlayerRack/>
   <PlayButton/>
   </>
  );
}
