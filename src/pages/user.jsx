import { motion } from "framer-motion";
import { Text } from "../components/Text";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { div } from "framer-motion/client";
import { Anchor } from "../components/Anchor";

const User = () => {
   const email = localStorage.getItem("userEmail");
   const username = localStorage.getItem("username");
   const navigate = useNavigate();


   return (
      <div className="md:h-full flex items-center justify-center px-4 lg:px-6 text-center">
         <motion.div
            className="z-10 flex flex-col gap-6 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
         >
            <Text variant="heading">Welcome {username}</Text>
            <Text variant="subheading" className="text-white">
               Here you can build your team and create your desired squad based on the market value of the auction. Click on the
               <span className="italic text-[#41FFEE]"> Create Squad </span>
               to pick from the list of top FIFA 19 players.
            </Text>
            <div className="flex gap-4">
               <Button> <Anchor to="/CreateSquad"> Create Squad</Anchor> </Button>
               <Button
                  className="w-24 bg-transparent border border-[#41FFEE] text-white"
                  onClick={() => navigate("/login")}
               >
                  Logout
               </Button>
            </div>
         </motion.div>
      </div>
   );
};

export default User;

