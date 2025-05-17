
import React, { useEffect, useContext } from "react";
import { ContextApi } from "../components/ContextApi";
import { Text } from "../components/Text";
import { Outlet } from "react-router-dom";
import Players from "../pages/players";
const Auctionpage = () => {
  const { date, number, bidding, maxrating, } = useContext(ContextApi);
  const auctiondetails = [
    { label: "Date", value: date },
    { label: "Bidding Limit", value: number },
    { label: "Max Rating", value: maxrating },
    { label: "Bidding Per Call", value: bidding }
  ];
  return (
    <div className="mt-10 min-h-screen flex justify-center items-start">
      <div className="z-10 flex flex-col gap-5 justify-center items-center">
       
        <div className="flex gap-4 items-center justify-center">
        {auctiondetails.map((details, index) => {
         return <Text key={index} className="text-white italic">{details.label} : <span className="font-semibold">{details.value}</span></Text>
        })}
        </div>
        <div className="bg-white-1/3 w-full ">
         <Players></Players>
        </div>
      </div>

    </div>
  )
}
export default Auctionpage;