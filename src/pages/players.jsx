import React, { useState } from "react";
import { Text } from "../components/Text";
import { Input } from "../components/Input";
import PlayerCard from "../components/playercard";
import PlayerFetch from "../components/PlayerFetch";

const Players = () => {
    const [SearchedPosition, setPosition] = useState("All players");
    const [SearchedRating, setRating] = useState(85);

    const { data, loading, error } = PlayerFetch({ SearchedPosition, SearchedRating });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex justify-center items-center">
            <div className="z-10 mt-10 gap-4 flex justify-center flex-col items-center">
                <Text variant="heading">Players</Text>
                <div className="flex gap-4">
                    <Input
                        type="text"
                        className="text-sm text-gray-300"
                        label="Select Player's Position"
                        options={["All players", "ST", "CB", "RB", "LB", "CAM", "GK", "CDM", "CM", "LCM", "LM" ,"RM", "RCM", "LB", "RB", "LW", "RW"]}
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
                <div className="grid justify-center items-center grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {data.map((player, index) => (
                        <PlayerCard key={index} player={player} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Players;
