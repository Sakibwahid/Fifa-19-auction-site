import React, { useState, useContext } from "react";
import { Text } from "./Text";
import { Input } from "./Input";
import PlayerFetch from "./PlayerFetch";
import { Button } from "./Button";
import { ContextApi } from "./ContextApi";
import { Anchor } from "../components/Anchor";

const PlayerList = () => {
    const [SearchedPosition, setPosition] = useState("All players");
    const [SearchedRating, setRating] = useState(85);
    const { selectedplayerarray, setSelectedPlayerArray } = useContext(ContextApi);

    const { data, loading, error } = PlayerFetch({ SearchedPosition, SearchedRating });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="z-10 min-h-screen flex flex-col justify-center items-center">
            <div className="mt-10 gap-4 flex justify-center flex-col items-center">
                <div className="flex gap-4">
                    <Input
                        type="text"
                        className="text-sm text-gray-300"
                        label="Select Player's Position"
                        options={["All players", "ST", "CB", "RB", "LB", "CAM", "GK", "CDM", "CM", "LCM", "LM", "RM", "RCM", "LB", "RB", "LW", "RW"]}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                    <Input
                        type="text"
                        label="Minimum Rating"
                        className="text-sm text-white"
                        placeholder="85"
                        options={["85", "80", "90"]}
                        onChange={(e) => setRating(Number(e.target.value))}
                    />
                </div>
            </div>
            <div className="w-full md:w-[80%] lg:w-[60%] overflow-x-auto my-8">
                <table className="min-w-full backdrop-blur-xl bg-white/5 shadow-lg text-white border">
                    <thead>
                        <tr>
                            {["Name", "Overall", "Market Value"].map((header, index) => (
                                <th key={index} className="py-2 px-4 border bg-gray-500">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((player, index) => (
                            <tr key={index} className="border-b">
                                <td className="flex items-center justify-start gap-2 py-2 px-4 border">
                                    <input
                                        type="checkbox"
                                        value={player.Name}
                                        className="h-4 w-4 text-indigo-500 border-gray-400 rounded-full focus:ring-indigo-400"
                                        onChange={(e) => {
                                            console.log(e.target.checked);
                                            if (e.target.checked) {
                                                setSelectedPlayerArray([...selectedplayerarray, player.Name]);
                                            }
                                            else {
                                                setSelectedPlayerArray(selectedplayerarray.filter((name) => name !== player.Name));
                                            }
                                        }}
                                    />
                                    <div>
                                        {player.Name}
                                    </div>
                                </td>
                                <td className="py-2 px-4 border text-center">{player.Overall}</td>
                                <td className="py-2 px-4 border text-center">{player.Value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="my-4">
                <Button onClick={() =>{
                    const selectedPlayers = data.filter(player => selectedplayerarray.includes(player.Name));
                    localStorage.setItem("selectedplayers", JSON.stringify(selectedPlayers))
                }}>
                    <Anchor to="Squad">Done</Anchor>
                </Button>
            </div>
        </div>
    )

}
export default PlayerList;