import React from 'react';
import { Text } from '../components/Text';
import { Button } from '../components/Button';

export const Squad = () => {
    const selectedplayerarray = JSON.parse(localStorage.getItem('selectedplayers')) || [];

    const groupedPlayers = {
        ST: [], CF: [], SS: [], RW: [], LW: [],
        CAM: [], CM: [], LCM: [], RCM: [], CDM: [], RM: [], LM: [],
        CB: [], LB: [], RB: [], SW: [], WB: [],
        GK: []
    };

    let totalvalue = 0;

    selectedplayerarray.forEach(player => {
        const value= Number(player.Value.replace('€', '').replace('M', '').replace('K', ''));
        totalvalue += value;
    });


    selectedplayerarray.forEach(player => {
        if (groupedPlayers[player.Position]) {
            groupedPlayers[player.Position].push(player);
        }
    });

    return (
        <div className='mt-10 w-full p-2 flex flex-col justify-center items-center '>

            <div className='z-50 w-full md:w-[80%] lg:w-[60%] flex flex-col gap-6 justify-center items-center'>


                <div className='w-full flex flex-col justify-center gap-6 items-center'>
                    <Text variant='heading'>Selected Player</Text>
                    <Text variant='para' className='text-white font-normal'>You have selected Number{selectedplayerarray.length} players. These players are arranged in the order to forward, Midfield and Defense then GK €{totalvalue}M </Text>
                </div>


                {selectedplayerarray.length === 0 ? (
                    <div className="text-white text-center py-4">
                        No Players Selected
                    </div>
                ) : (
                    <div className="w-full backdrop-blur-xl bg-white/5 rounded-xl shadow-md overflow-auto">

                        <table className="w-full border-collapse text-left text-white z-50">
                            <thead>
                                <tr className="bg-white/10 border-b border-gray-500">
                                    <th className="px-3 py-2 border-r border-gray-500">Position</th>
                                    <th className="px-3 py-2 border-r border-gray-500">Player Name</th>
                                    <th className="px-3 py-2 border-r border-gray-500 text-center">Rating</th>
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
                                                <td className="px-3 py-2 italic text-gray-400 border-r border-gray-500 "></td>
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
                                            <td className="px-3 py-2 border-r border-gray-500">{player.Name}</td>
                                            <td className="px-3 py-2 border-r border-gray-500 text-center">{player.Overall}</td>
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
