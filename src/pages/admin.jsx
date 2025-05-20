import React from "react";
import { Text } from '../components/Text';
import { Button } from "../components/Button";
import { Anchor } from "../components/Anchor";
import { Outlet } from "react-router-dom";
const Admin = () => {

  return (
    <div className="mt-10 md:h-full text-center flex justify-center items-center">
      <div className="z-10 flex flex-col gap-6 justify-center items-center">
        <Text variant="heading" className="text-white">
          Welcome To Admin Panel
        </Text>
        <Text variant="subheading" className="text-white">
          What would you like to do today?
        </Text>
        <div className="flex gap-4">
          <Button size="md">
            View Dashboard
          </Button>
          <Button size="md" onClick={() => console.log("Launch Auction")}>
           <Anchor to="/auctionform">Launch Auction</Anchor> 
          </Button>
        </div>
        <Outlet></Outlet>
      </div>
    </div>
    
  );
};

export default Admin;
