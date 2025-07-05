
import React, { useEffect, useContext, useState } from "react";
import { ContextApi } from "../components/ContextApi";
import { Text } from "../components/Text";
import { Outlet } from "react-router-dom";
import Players from "../pages/players";
import { Button } from "../components/Button";
import PlayerFetch from "../components/PlayerFetch";
import PlayerCard from "../components/playercard";

const Auctionpage = () => {
  const { date, number, bidding, maxrating, } = useContext(ContextApi);

  const [randomPosition, setRandomPosition] = useState("");  const [randomPlayer, setRandomPlayer] = useState(null);

  const { data, loading, error } = PlayerFetch({ SearchedPosition: randomPosition, SearchedRating: maxrating });

  const auctiondetails = [
    { label: "Date", value: date },
    { label: "Bidding Limit", value: number },
    { label: "Max Rating", value: maxrating },
    { label: "Bidding Per Call", value: bidding }
  ];



  const generateRandomPosition = () => {
    const positions = ["ST", "CF", "RF", "LF", "RS", "LS", "RW", "LW",
      "CAM", "CM", "LCM", "RCM", "CDM", "LDM", "RM", "LM",
      "CB", "LB", "RB", "LCB", "RCB", "SW", "WB",
      "GK"];
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    setRandomPosition(randomPosition);
    setRandomPlayer(null);
  }


  const generateRandomPlayer = () => {
    if (data.length === 0) {
      console.error("No players available for the selected position.");
      return;
    }
    const randomPlayer = data[Math.floor(Math.random() * data.length)];
    setRandomPlayer(randomPlayer);
  }



  return (
    <div className="mt-10 w-full min-h-screen flex justify-center items-start">
      <div className="z-10 w-full flex flex-col gap-5 justify-center items-center">
        <div className="grid grid-cols-2 justify-center items-center gap-4">
          {auctiondetails.map((details, index) => {
            return <Text key={index} className="text-white italic">{details.label} : <span className="font-semibold">{details.value}</span></Text>
          })}
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <Button variant="filled" onClick={generateRandomPosition}>Generate a Random Position</Button>
          <Text variant="heading">{randomPosition}</Text>
        </div>
        <div className="flex flex-col gap-4 justify-center items-center w-full">
          <Button variant="filled" onClick={generateRandomPlayer}>Generate a Random Position</Button>
          {randomPlayer && <PlayerCard player={randomPlayer} />}
        </div>
      </div>

    </div>
  )
}
export default Auctionpage;