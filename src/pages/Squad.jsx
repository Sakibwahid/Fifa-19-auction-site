import React from 'react'
import { Text } from '../components/Text';
import { Button } from "../components/Button";
export const Squad = () => {
    const selectedplayerarray = JSON.parse(localStorage.getItem("selectedplayers")) || [];

    const groupedPlayers = {
        ST: [],
        CF: [],
        SS: [],
        RW: [],
        LW: [],

        CAM: [],
        CM: [],
        LCM: [],
        RCM: [],
        CDM: [],
        RM: [],
        LM: [],

        CB: [],
        LB: [],
        RB: [],
        SW: [],
        WB: [],

        GK: []
    };

    selectedplayerarray.forEach(element => {
        if (groupedPlayers[element.Position]) {
            groupedPlayers[element.Position].push(element);

        }
    });
 
    return (
        <div>
            {selectedplayerarray.length === 0 ? (
                <div className="">
                    No Players Selected
                </div>
            ) : (
                <div className="flex flex-col justify-start items-start gap-2">
                    {Object.entries(groupedPlayers).map(([position, players]) => (
                        <div key={position} className="z-50">
                         <Text variant="subheading" className="text-2xl">{position}</Text>
                            {players.map((player, index) => (
                                <div key={player.Name}>
                                    {player.Name}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}