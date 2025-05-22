import React, { useState } from 'react';
import { Text } from '../components/Text';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export const Squad = () => {
    const [selectedPlayers, setSelectedPlayers] = useState(() => {
        return JSON.parse(localStorage.getItem('selectedplayers')) || [];
    });

    const groupedPlayers = {
        ST: [], CF: [], RF: [], LF: [], RS: [], LS: [], RW: [], LW: [],
        CAM: [], CM: [], LCM: [], RCM: [], CDM: [], LDM: [], RM: [], LM: [],
        CB: [], LB: [], RB: [], LCB: [], RCB: [], SW: [], WB: [],
        GK: []
    };

    selectedPlayers.forEach(player => {
        if (groupedPlayers[player.Position]) {
            groupedPlayers[player.Position].push(player);
        }
    });

    let totalvalue = 0;
    selectedPlayers.forEach(player => {
        const value = Number(player.Value.replace('€', '').replace('M', '').replace('K', ''));
        totalvalue += value;
    });

    const increasedValue = (totalvalue * 1.2).toFixed(2);

    const delPlayer = (playerName) => {
        const updatedPlayers = selectedPlayers.filter(player => player.Name !== playerName);
        setSelectedPlayers(updatedPlayers);
        localStorage.setItem('selectedplayers', JSON.stringify(updatedPlayers));
    };

    const navigate = useNavigate();
    const handleClick = (player) => {
        navigate(`/players/${player.Name}`, {
            state: { player }
        });
    };

    return (
        <div className='mt-4 w-full p-2 flex flex-col justify-center items-center'>
            <div className='z-10 w-full md:w-[80%] lg:w-[60%] flex flex-col gap-6 justify-center items-center'>
                <div className='w-full flex flex-col justify-center gap-6 items-center'>
                    <Text variant='heading'>Selected Player</Text>
                    <Text variant='para' className='text-white font-normal'>
                        You have selected {selectedPlayers.length} players. These players are arranged in the order to forward, Midfield and Defense then GK <br /><br />
                        Estimated market value : <span className='text-2xl font-semibold text-[#41FFEE]'>€{totalvalue}M</span> <br />
                        Estimated auction value : <span className='text-[#41FFEE] text-2xl font-semibold'>€{increasedValue}M</span>
                    </Text>
                </div>

                {selectedPlayers.length === 0 ? (
                    <div className="text-white text-center py-4">
                        No Players Selected
                    </div>
                ) : (
                    <div className="mt-10 w-full backdrop-blur-xl bg-white/5 rounded-xl shadow-md overflow-auto">
                        <table className="w-full border-collapse text-left text-white z-50">
                            <thead>
                                <tr className="bg-white/10 border-b border-gray-500">
                                    <th className="px-3 py-2 border-r border-gray-500">Position</th>
                                    <th className="px-3 py-2 border-r border-gray-500">Player Name - Rating</th>
                                    <th className="px-3 py-2 text-center">Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(groupedPlayers).map(([position, players]) => {
                                    if (players.length === 0) {
                                        return (
                                            <tr key={position} className="border-b border-gray-500">
                                                <td className="px-3 py-2 border-r border-gray-500">{position}</td>
                                                <td className="px-3 py-2 italic text-gray-400 border-r border-gray-500">No players</td>
                                                <td className="px-3 py-2 italic text-gray-400"></td>
                                            </tr>
                                        );
                                    }

                                    return players.map((player, index) => (
                                        <tr key={`${position}-${player.Name}`} className="border-b border-gray-500">
                                            {index === 0 && (
                                                <td
                                                    className="px-3 py-2 border-r border-gray-500 align-center"
                                                    rowSpan={players.length}
                                                >
                                                    {position}
                                                </td>
                                            )}
                                            <td className="px-3 py-2 border-r border-gray-500 flex justify-between items-center">
                                                <span onClick={() => handleClick(player)}>{player.Name} - {player.Overall}</span>
                                                <button
                                                    onClick={() => delPlayer(player.Name)}
                                                    title={`Delete player ${player.Name}`}
                                                    aria-label={`Delete player ${player.Name}`}
                                            
                                                >
                                                   <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                                                </button>
                                            </td>
                                            <td className="px-3 py-2 text-center">{player.Value}</td>
                                        </tr>
                                    ));
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};


