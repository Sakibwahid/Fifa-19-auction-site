import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Text } from "../components/Text";
import playerImages from "../assets/playerImages";
import { Stats } from "../components/Stats";
import { Stars } from "../components/Stars";


const PlayerDetails = () => {
    const location = useLocation();
    const [player, setPlayer] = useState(() => { return JSON.parse(localStorage.getItem("player")) || location.state?.player || null });
    const playerimage = playerImages.find(p => p.name === player.Name)?.image || "/players/default.jpg"
    useEffect(() => {
        if (location.state?.player) {
            localStorage.setItem("player", JSON.stringify(location.state.player));
            setPlayer(location.state.player);
        }
    }, [location.state]);

    if (!player) {
        return <div>Player not found</div>;
    }
    const numericStats = [
        "Potential",
        "Crossing", "Finishing", "HeadingAccuracy", "ShortPassing",
        "Dribbling", "BallControl",
        "SprintSpeed", "ShotPower", "Stamina", "Strength", "LongShots",
        "Marking", "StandingTackle", "SlidingTackle",
        "GKDiving", "GKHandling", "GKKicking", "GKPositioning", "GKReflexes"
    ];
    const positions = {
        GK: { x: "50%", y: "85%" },
        LB: { x: "15%", y: "70%" },
        LCB: { x: "40%", y: "72%" },
        RCB: { x: "60%", y: "72%" },
        RB: { x: "85%", y: "70%" },
        CDM: { x: "50%", y: "59%" },
        LCM: { x: "34%", y: "51%" },
        RCM: { x: "68%", y: "51%" },
        CAM: { x: "50%", y: "38%" },
        LW: { x: "15%", y: "28%" },
        ST: { x: "50%", y: "22%" },
        RW: { x: "85%", y: "28%" }
    };


    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-full backdrop-blur-sm sm:backdrop-blur-md bg-white/5 rounded-xl relative p-2 gap-2 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
                <div className="w-full p-2 lg:col-span-1 flex flex-col gap-4 border-0 border-gray-500 md:border-r-1">
                    <div className=" flex items-center justify-between  mt-4">
                        <div className="flex flex-col">
                            <Text variant="subheading" className="text-4xl">{player.Name}</Text>
                            <Text variant="para" className="text-[#41FFEE]">{player.Speciality}</Text>
                        </div>
                        <div className="flex flex-col">
                            <Text variant="subheading" className="text-2xl font-semibold text-[#41FFEE]">{player.Overall}</Text>
                            <Text variant="subheading" className="text-2xl">{player.Position}</Text>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src={playerimage} className="w-[250px] h-[350px]" />
                    </div>
                    <div className="flex gap-2 justify-between">
                        <div className="flex flex-col gap-2">
                            <Text variant="para">Nationality : <span className="text-white">{player.Nationality}</span></Text>
                            <Text variant="para">Club : <span className="text-white">{player.Club}</span></Text>
                            <Text variant="para">Age : <span className="text-white">{player.Age}</span></Text>
                            <Text variant="para">Height : <span className="text-white">{player.Height}</span></Text>
                        </div>
                        <div className="flex flex-col justify-center items-center px-2">
                            <Text variant="subheading" className="text-4xl text-[#41FFEE] font-semibold">{player.Value} </Text>
                            <Stars count={player.SkillMoves}></Stars>
                        </div>
                    </div>

                </div>
                <div className="flext p-2 flex-col text-center">
                    <Text variant="subheading" className="text-4xl my-4">Player stats</Text>
                    <div className="mt-4">
                        {numericStats.map((stat,index) => (
                            player[stat] !== undefined && !isNaN(player[stat]) && (
                                <Stats key={index} width={player[stat]} label={stat} />
                            )
                        ))}
                    </div>
                </div>
                <div className="p-4 flex justify-center">
                    <div className="mt-10 md:mt-20 relative w-[300px] md:w-[400px] h-[400px] md:h-[450px] lg:h-[550px] bg-green-900 rounded-lg overflow-hidden border-4 border-white">
                        {/* Center Line (Horizontal) */}
                        <div className="absolute w-full h-[2px] bg-white top-1/2 transform -translate-y-1/2"></div>

                        {/* Center Circle */}
                        <div className="absolute w-24 h-24 border-2 border-white rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

                        {/* Bottom Penalty Area */}
                        <div className="absolute bottom-0 left-[25%] w-[50%] h-[18%] border-2 border-white"></div>
                        <div className="absolute bottom-0 left-[40%] w-[20%] h-[9%] border-2 border-white"></div>

                        {/* Top Penalty Area */}
                        <div className="absolute top-0 left-[25%] w-[50%] h-[18%] border-2 border-white"></div>
                        <div className="absolute top-0 left-[40%] w-[20%] h-[9%] border-2 border-white"></div>

                        {/* Goalposts (Accurate Now) */}
                        <div className="absolute bottom-0 w-[20%] h-[4%] left-[40%] border-2 border-white"></div>
                        <div className="absolute top-0 w-[20%] h-[4%] left-[40%] border-2 border-white"></div>

                        {/* Players */}
                        {Object.keys(positions).map((pos, index) => (
                            <div
                                key={index}
                                className={`absolute w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white 
                                ${pos === player.Position ? "bg-[#39ff14] shadow-[0_0_10px_#39ff14]" : "bg-white/50"}`}
                                style={{
                                    left: positions[pos].x,
                                    top: positions[pos].y,
                                    transform: "translate(-50%, -50%)"
                                }}
                            >
                                {pos}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );

}
export default PlayerDetails;
