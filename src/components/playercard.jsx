import React from "react";
import { Text } from "./Text";
import { useNavigate } from "react-router-dom";
import playerImages from "../assets/playerImages";
const PlayerCard = ({ player }) => {
    
    const playerImage = playerImages.find(p => p.name === player.Name)?.image || "/players/default.jpg";
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/players/${player.Name}`, {
            state: { player }
        });
    };
    return (
        <div
            onClick={handleClick}
            className="relative flex flex-col bg-no-repeat items-center text-black p-6"
            style={{
                backgroundImage: `url(/Card.png)`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                width: "250px",
                height: "350px",

            }}
        >
            <div className="h-full w-full flex flex-col">
                <div className="grid grid-cols-3 ">
                    <div className="col-span-1 flex flex-col justify-start items-center p-4 mt-2">
                        <Text variant="para" className="font-bold text-2xl text-yellow-900">{player.Overall}</Text>
                        <Text variant="para" className="font-semibold text-yellow-900">{player.Position}</Text>
                        <Text variant="para" className="font-semibold text-yellow-900">{player.Value}</Text>
                    </div>
                    <div className="w-30 h-38 col-span-2 mt-8 p-2 flex flex-col justify-end items-end">
                        <img  src={`/player_photos/${player.ID}.png`} alt={player.Name} className="w-full h-30" />
                    </div>
                </div>
                <div>
                    <div className="text-center mt-2">
                        <Text variant="para" className="font-bold text-xl text-yellow-900">{player.Name}</Text>
                    </div>
                    <div className="flex gap-2 justify-center items-center">
                        <div className="flex flex-col justify-center items-center">
                            <Text className="text-yellow-900 text-sm">PAC</Text>
                            <Text className="text-yellow-900 font-semibold">{player.Acceleration}</Text>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Text className="text-yellow-900 text-sm">SHO</Text>
                            <Text className="text-yellow-900 font-semibold">{player.ShotPower}</Text>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Text className="text-yellow-900 text-sm">PAS</Text>
                            <Text className="text-yellow-900 font-semibold">{player.ShortPassing}</Text>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Text className="text-yellow-900 text-sm">DRI</Text>
                            <Text className="text-yellow-900 font-semibold">{player.Dribbling}</Text>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Text className="text-yellow-900 text-sm">DEF</Text>
                            <Text className="text-yellow-900 font-semibold">{player.StandingTackle}</Text>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <Text className="text-yellow-900 text-sm">PHY</Text>
                            <Text className="text-yellow-900 font-semibold">{player.Strength}</Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PlayerCard;
