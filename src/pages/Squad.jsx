import { useState, useContext } from "react";
import { ContextApi } from "../components/ContextApi";
import { div } from "framer-motion/client";
import { Key } from "lucide-react";


export const Squad = () => {
    const { selectedplayerarray } = useContext(ContextApi);
    return (
        <div>
            {selectedplayerarray.length === 0 ? (
                <div className="">
                    No Players Selected
                </div>
            ) : (
                <div className="">
                    {selectedplayerarray.map((player, index) => (
                        <div key={index} >
                            {player}
                        </div>
                    ))}

                </div>
            )}
        </div>
    )
}